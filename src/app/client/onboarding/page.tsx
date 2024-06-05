"use client";
import React, { useEffect, useState } from "react";
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ClientWrapper from "@/components/ClientWapper";
// Cookie import
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [basicDetailsFormSubmit, setBasicDetailsFormSubmit] =
    useState<number>(1);
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
      {/* <div className="h-[95vh]"> */}
        <BasicDetailsAutoCare
          setBasicDetailsFormSubmit={(value: number) =>
            setBasicDetailsFormSubmit(value)
          }
          setBasicDetailCount={(value: number) => setBasicDetailCount(value)}
        />
      {/* </div> */}
    </ClientWrapper>
  );
}

export default Page;
