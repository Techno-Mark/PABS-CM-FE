"use client";
import React, { useEffect, useState } from "react";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ClientWrapper from "@/components/ClientWapper";
// Cookie import
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";

function Page() {
  const router = useRouter();
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [basicDetailsFormSubmit, setBasicDetailsFormSubmit] =
    useState<number>(1);

  console.log("basicDetailsFormSubmit : ", basicDetailsFormSubmit);
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <ClientWrapper
      basicDetailCount={basicDetailsCount}
      basicDetailsFormSubmit={basicDetailsFormSubmit}
    >
      {basicDetailsFormSubmit === 1 ? (
        <BasicDetailsAutoCare
          setBasicDetailsFormSubmit={(value: number) =>
            setBasicDetailsFormSubmit(value)
          }
          setBasicDetailCount={(value: number) => setBasicDetailCount(value)}
        />
      ) : basicDetailsFormSubmit === 2 ? (
        <ChecklistAutoCare
          setChecklistFormSubmit={(value: number) => {}}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
        />
      ) : (
        <BasicDetailsAutoCare
          setBasicDetailsFormSubmit={(value: number) =>
            setBasicDetailsFormSubmit(value)
          }
          setBasicDetailCount={(value: number) => setBasicDetailCount(value)}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;
