"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Cookie import
import ClientWrapper from "@/components/ClientWapper";
import AccountDetailsWhitelabel from "@/components/client/common/AccountDetailsWhitelabel";
import BasicDetailsWhitelabel from "@/components/client/common/BasicDetailsWhitelabel";
import ChecklistWhitelabel from "@/components/client/common/ChecklistWhitelabel";
import Cookies from "js-cookie";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";

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
  const [whiteLabelFormSubmittedStatus, setWhiteLabelFormSubmittedStatus] =
    useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

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
      formSubmittedStatus={whiteLabelFormSubmittedStatus}
    >
      {formSubmit === 11 && (
        <BasicDetailsWhitelabel
          setWhiteLabelFormSubmittedStatus={(value: boolean) =>
            setWhiteLabelFormSubmittedStatus(value)
          }
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
        setWhiteLabelFormSubmittedStatus={(value: boolean) =>
          setWhiteLabelFormSubmittedStatus(value)
        }
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
        setIsChecked ={(value: boolean) =>
          setIsChecked(value)
        }
      />
      {formSubmit === 13 && (
        <AccountDetailsWhitelabel
          setWhiteLabelFormSubmittedStatus={(value: boolean) =>
            setWhiteLabelFormSubmittedStatus(value)
          }
          isFormSubmmitWhitelabel={isFormSubmmitWhitelabel}
          whiteLabelProgressPercentage={whiteLabelProgressPercentage}
          checkAllWhitelabelBasicDetails={checkAllWhitelabelBasicDetails}
          checkAllWhitelabelChecklist={checkAllWhitelabelChecklist}
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          isFormLocked={isChecked}
        />
      )}
    </ClientWrapper>
  );
};

export default Page;
