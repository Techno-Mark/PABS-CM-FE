/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
import ClientWrapper from "@/components/ClientWapper";
import BasicDetailsWhitelabel from "@/components/client/common/whitelabel/BasicDetailsWhitelabel";
import ChecklistWhitelabel from "@/components/client/common/whitelabel/ChecklistWhitelabel";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";

const page = () => {
  const router = useRouter();
  const userID = Cookies.get("userId");
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(1);
  const [formDetails, setFormDetails] = useState<any>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  const getFormDetials = async () => {
    const callBack = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setFormDetails(ResponseData !== null ? ResponseData : null);
          return;
      }
    };

    const saveClientIndo = "/api/clients/getbyid-client-info";

    callAPIwithHeaders(saveClientIndo, "post", callBack, {
      userId: Number(userID),
    });
  };

  useEffect(() => {
    getFormDetials();
  }, []);
  return (
    <ClientWrapper
      perCountChecklist={50}
      perCountBasicDetails={12}
      formSubmit={formSubmit}
    >
      {formSubmit === 1 ? (
        <BasicDetailsWhitelabel
          setBasicDetailsFormSubmit={(value: number) => setFormSubmit(value)}
          setBasicDetailCount={(value: number) => setBasicDetailCount(value)}
          getFormDetials={getFormDetials}
        />
      ) : formSubmit === 2 ? (
        <ChecklistWhitelabel
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
          formDetails={
            formDetails !== null ? formDetails?.checkList : false
          }
          getFormDetials={getFormDetials}
        />
      ) : (
        ""
      )}
    </ClientWrapper>
  );
};

export default page;
