"use client";
import ClientWrapper from "@/components/ClientWapper";
import { useEffect, useState } from "react";
// Cookie import
import ChecklistSmb from "@/components/client/common/ChecklistSmb";
import SystemAccessForSmb from "@/components/client/common/SystemAccessForSmb";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";

function Page() {
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
        <ChecklistSmb
          clientInfo={{}}
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
          formDetails={formDetails !== null ? formDetails?.checkList : false}
          getFormDetials={getFormDetials}
        />
      ) : formSubmit === 2 ? (
        <SystemAccessForSmb
          clientInfo={{}}
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
          formDetails={
            formDetails !== null ? formDetails?.systemAccessDetails : false
          }
          getFormDetials={getFormDetials}
        />
      ) : (
        ""
      )}
    </ClientWrapper>
  );
}

export default Page;
