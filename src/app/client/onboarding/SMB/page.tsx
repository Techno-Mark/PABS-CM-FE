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
import { autoCarFormListUrl } from "@/static/apiUrl";

function Page() {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const [formSubmit, setFormSubmit] = useState<number>(21);
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

    callAPIwithHeaders(autoCarFormListUrl, "post", callBack, {
      userId: Number(userId),
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
      {formSubmit === 21 ? (
        <ChecklistSmb
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => {}}
          formDetails={formDetails !== null ? formDetails?.checkList : false}
          responseData={formDetails !== null ? formDetails : false}
          getFormDetials={getFormDetials}
        />
      ) : formSubmit === 22 && (
        <SystemAccessForSmb
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => {}}
          formDetails={
            formDetails !== null ? formDetails?.systemAccessDetails : false
          }
          responseData={formDetails !== null ? formDetails : false}
          getFormDetials={getFormDetials}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;
