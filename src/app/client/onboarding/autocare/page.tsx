"use client";
import React, { useEffect, useState } from "react";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ClientWrapper from "@/components/ClientWapper";
// Cookie import
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import LoginInfoAutoCare from "@/components/client/common/LoginInfoAutoCare";

function Page() {
  const router = useRouter();
  const [perCount, setPerCount] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(1);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <ClientWrapper
      perCount={perCount}
      basicDetailsFormSubmit={formSubmit}
    >
      {formSubmit === 1 ? (
        <BasicDetailsAutoCare
          setBasicDetailsFormSubmit={(value: number) => setFormSubmit(value)}
          setBasicDetailCount={(value: number) => setPerCount(value)}
        />
      ) : formSubmit === 2 ? (
        <ChecklistAutoCare
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setPerCount(value)}
        />
      ) : (
        <LoginInfoAutoCare
          setLoginInfoFormSubmit={(value: number) => setFormSubmit(value)}
          setLoginInfoCount={(value: number) => setPerCount(value)}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;
