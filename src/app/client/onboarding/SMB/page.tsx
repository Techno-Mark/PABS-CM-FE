"use client";
import ClientWrapper from "@/components/ClientWapper";
import { useEffect, useState } from "react";
// Cookie import
import ChecklistSmb from "@/components/client/common/ChecklistSmb";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { onboardingListFormUrl } from "@/static/apiUrl";

function Page() {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const [formDetails, setFormDetails] = useState<any>(null);
  const [perCountSmbChecklist, setPerCountSmbChecklist] = useState<number>(0);

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

    callAPIwithHeaders(onboardingListFormUrl, "post", callBack, {
      userId: Number(userId),
    });
  };

  useEffect(() => {
    getFormDetials();
  }, []);

  return (
    <ClientWrapper
      setWhiteLabelProgressPercentage={() => {}}
      setAutoCareProgressPercentage={() => {}}
      formSubmit={21}
      perCountSmbChecklist={perCountSmbChecklist}
    >
      <ChecklistSmb
        setSMBChecklistCount={(value: number) => setPerCountSmbChecklist(value)}
        formDetails={formDetails !== null ? formDetails?.checkList : false}
        responseData={formDetails !== null ? formDetails : false}
        getFormDetials={getFormDetials}
      />
    </ClientWrapper>
  );
}

export default Page;
