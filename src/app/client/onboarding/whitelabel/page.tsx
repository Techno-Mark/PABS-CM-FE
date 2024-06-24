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
  const [whiteLabelPerCountBasicDetails, setWhiteLabelPerCountBasicDetails] =
    useState<number>(0);
  const [whiteLabelPerCountChecklist, setWhitelabelPerCountChecklist] =
    useState<number>(0);
  const [whiteLabelProgressPercentage, setWhiteLabelProgressPercentage] =
    useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(11);
  const [checkAllWhitelabelBasicDetails, setCheckAllWhiteLabelBasicDetails] =
    useState<boolean>(false);
  const [checkAllWhitelabelChecklist, setCheckAllWhiteLabelCheckist] =
    useState<boolean>(false);
  const [isFormSubmmitWhitelabel, setIsFormSubmitWhitelabel] =
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
          setIsOpenModal={() => {}}
          setCheckAllWhiteLabelBasicFields={(value: boolean) =>
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
        setCheckAllWhiteLabelCheckist={(value: boolean) => {
          setCheckAllWhiteLabelCheckist(value);
        }}
        setWhiteLabelFormIsSubmit={(value: boolean) =>
          setIsFormSubmitWhitelabel(value)
        }
        whiteLabelProgressPercentage={whiteLabelProgressPercentage}
        formSubmitId={formSubmit}
        setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
        setWhiteLabelChecklistCount={(value: number) =>
          setWhitelabelPerCountChecklist(value)
        }
      />
      {formSubmit === 13 && (
        <AccountDetailsWhitelabel
          isFormSubmmitWhitelabel={isFormSubmmitWhitelabel}
          whiteLabelProgressPercentage={whiteLabelProgressPercentage}
          checkAllWhitelabelBasicDetails={checkAllWhitelabelBasicDetails}
          checkAllWhitelabelChecklist={checkAllWhitelabelChecklist}
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
        />
      )}
    </ClientWrapper>
  );
};

export default Page;
