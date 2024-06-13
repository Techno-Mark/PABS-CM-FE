/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
import ClientWrapper from "@/components/ClientWapper";
import BasicDetailsWhitelabel from "@/components/client/common/whitelabel/BasicDetailsWhitelabel";
import ChecklistWhitelabel from "@/components/client/common/whitelabel/ChecklistWhitelabel";

const page = () => {
  const router = useRouter();
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(1);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
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
        />
      ) : formSubmit === 2 ? (
        <ChecklistWhitelabel
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
        />
      ) : (
        ""
      )}
    </ClientWrapper>
  );
};

export default page;
