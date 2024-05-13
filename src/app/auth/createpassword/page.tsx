"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";

function Page() {
  const getToken  = useSearchParams();
  const tokenData = getToken.get('token')
  return <SetNewPassword token={tokenData} passwordType="Create"/>
}

export default Page;
