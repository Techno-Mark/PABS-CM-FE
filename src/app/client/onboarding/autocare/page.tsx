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
  const [autoCareProgressPercentage, setAutoCareProgressPercentage] =
    useState<number>(0);
  const [checkAllBasicDetails, setCheckAllBasicDetails] =
    useState<boolean>(false);
  const [autoCareFormSubmittedStatus, setAutoCareFormSubmittedStatus] =
    useState<boolean>(false);
  const [formSubmit, setFormSubmit] = useState<number>(31);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <ClientWrapper
      formSubmittedStatus={autoCareFormSubmittedStatus}
      setWhiteLabelProgressPercentage={() => {}}
      perCountBasicDetails={perCountBasicDetails}
      perCountChecklist={perCountChecklist}
      formSubmit={formSubmit}
      setAutoCareProgressPercentage={(value: number) =>
        setAutoCareProgressPercentage(value)
      }
    >
      {formSubmit === 31 && (
        <BasicDetailsAutoCare
          setAutoCareFormSubmittedStatus={(value: boolean) =>
            setAutoCareFormSubmittedStatus(value)
          }
          setIsOpenModal={() => {}}
          setCheckAllFields={(value: boolean) => setCheckAllBasicDetails(value)}
          autoCareProgressPercentage={autoCareProgressPercentage}
          setBasicDetailsFormSubmit={(value: number) => setFormSubmit(value)}
          setBasicDetailCount={(value: number) =>
            setPerCountBasicDetails(value)
          }
        />
      )}
      <ChecklistAutoCare
        setAutoCareFormSubmittedStatus={(value: boolean) =>
          setAutoCareFormSubmittedStatus(value)
        }
        setIsOpenModal={() => {}}
        formSubmitId={formSubmit}
        checkAllBasicDetails={checkAllBasicDetails}
        autoCareProgressPercentage={autoCareProgressPercentage}
        setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
        setChecklistCount={(value: number) => setPerCountChecklist(value)}
      />
    </ClientWrapper>
  );
}

export default Page;
