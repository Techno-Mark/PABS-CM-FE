"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Cookie import
import Cookies from "js-cookie";
//Component import
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import LoginInfoAutoCare from "@/components/client/common/LoginInfoAutoCare";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ClientWrapper from "@/components/ClientWapper";

function Page() {
  const router = useRouter();
  const [perCountBasicDetails, setPerCountBasicDetails] = useState<number>(0);
  const [perCountChecklist, setPerCountChecklist] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(1);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <ClientWrapper
      perCountBasicDetails={perCountBasicDetails}
      perCountChecklist={perCountChecklist}
      formSubmit={formSubmit}
    >
      {formSubmit === 1 ? (
        <BasicDetailsAutoCare
          setBasicDetailsFormSubmit={(value: number) => setFormSubmit(value)}
          setBasicDetailCount={(value: number) =>
            setPerCountBasicDetails(value)
          }
        />
      ) : formSubmit === 2 ? (
        <ChecklistAutoCare
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setPerCountChecklist(value)}
          formDetails={[]}
          getFormDetials={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      ) : (
        <LoginInfoAutoCare
          setLoginInfoFormSubmit={(value: number) => setFormSubmit(value)}
          setLoginInfoCount={(value: number) => {}}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;
