"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// Cookie import
import Cookies from "js-cookie";
import ClientWrapper from "@/components/ClientWapper";
import BasicDetailsWhitelabel from "@/components/client/common/BasicDetailsWhitelabel";
import ChecklistWhitelabel from "@/components/client/common/ChecklistWhitelabel";
import AccountDetailsWhitelabel from "@/components/client/common/AccountDetailsWhitelabel";

const Page = () => {
  const router = useRouter();
  const userID = Cookies.get("userId");
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(13);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  
  return (
    <ClientWrapper
      setAutoCareProgressPercentage={() => {}}
      perCountChecklist={50}
      perCountBasicDetails={12}
      formSubmit={formSubmit}
    >
      {formSubmit === 11 && (
        <BasicDetailsWhitelabel
          setWhitelabelBasicDetailsFormSubmit={(value: number) =>
            setFormSubmit(value)
          }
          setWhitelabelBasicDetailCount={(value: number) =>
            setBasicDetailCount(value)
          }
        />
      )}
        <ChecklistWhitelabel
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
        />
    </ClientWrapper>
  );
};

export default Page;
