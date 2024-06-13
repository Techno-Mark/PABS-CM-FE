"use client";
import ClientWrapper from "@/components/ClientWapper";
import { useEffect, useState } from "react";
// Cookie import
import ChecklistSmb from "@/components/client/common/ChecklistSmb";
import SystemAccessForSmb from "@/components/client/common/SystemAccessForSmb";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [basicDetailsCount, setBasicDetailCount] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(2);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <ClientWrapper
      basicDetailCount={basicDetailsCount}
      basicDetailsFormSubmit={formSubmit}
    >
      {formSubmit === 2 ? (
        <ChecklistSmb
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
        />
      ) : (
        <SystemAccessForSmb
          setChecklistFormSubmit={(value: number) => setFormSubmit(value)}
          setChecklistCount={(value: number) => setBasicDetailCount(value)}
        />
      )}
    </ClientWrapper>
  );
}

export default Page;
