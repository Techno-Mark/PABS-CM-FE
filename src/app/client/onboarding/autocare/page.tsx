"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ClientWrapper from "@/components/ClientWapper";

function Page() {
  const router = useRouter();
  const [perCountBasicDetails, setPerCountBasicDetails] = useState<number>(0);
  const [perCountChecklist, setPerCountChecklist] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(31);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <ClientWrapper
      perCountBasicDetails={perCountBasicDetails}
      perCountChecklist={perCountChecklist}
      formSubmit={formSubmit}
    >
      {(formSubmit === 31 || perCountBasicDetails === 0) && (
        <BasicDetailsAutoCare
          setIsOpenModal={() => {}}
          setBasicDetailsFormSubmit={(value: number) => setFormSubmit(value)}
          setBasicDetailCount={(value: number) => setPerCountBasicDetails(value)}
        />
      )}
      {(formSubmit === 32 || perCountChecklist === 0) && (
        <ChecklistAutoCare
          setIsOpenModal={() => {}}
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setPerCountChecklist(value)}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;