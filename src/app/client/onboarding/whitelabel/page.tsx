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
  const [whiteLabelPerCountBasicDetails, setWhiteLabelPerCountBasicDetails] =
    useState<number>(0);
  const [whiteLabelPerCountChecklist, setWhitelabelPerCountChecklist] =
    useState<number>(0);
    const [whiteLabelProgressPercentage, setWhiteLabelProgressPercentage] =
    useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(11);
  const [checkAllWhitelabelBasicDetails, setCheckAllWhiteLabelBasicDetails] =
    useState<boolean>(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <ClientWrapper
      setAutoCareProgressPercentage={() => {}}
      setWhiteLabelProgressPercentage={(value: number) =>
        setWhiteLabelProgressPercentage(value)
      }
      perCountWhiteLabelChecklist={whiteLabelPerCountChecklist}
      perCountWhiteLabelBasicDetails={whiteLabelPerCountBasicDetails}
      formSubmit={formSubmit}
    >
      {formSubmit === 11 && (
        <BasicDetailsWhitelabel
          setCheckAllWhiteLabelFields={(value: boolean) =>
            setCheckAllWhiteLabelBasicDetails(value)
          }
          whiteLabelProgressPercentage={whiteLabelProgressPercentage}
          setWhitelabelBasicDetailsFormSubmit={(value: number) =>
            setFormSubmit(value)
          }
          setWhitelabelBasicDetailCount={(value: number) =>
            setWhiteLabelPerCountBasicDetails(value)
          }
        />
      )}
      <ChecklistWhitelabel
        setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
        setChecklistCount={(value: number) => {}}
      />
      {formSubmit === 13 && (
        <AccountDetailsWhitelabel
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => {}}
        />
      )}
    </ClientWrapper>
  );
};

export default Page;
