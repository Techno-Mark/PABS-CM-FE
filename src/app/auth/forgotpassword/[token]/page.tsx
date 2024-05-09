"use client";
import React from 'react'
import { useParams } from 'next/navigation';
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";

function Page() {
  const { token } = useParams();
  return <SetNewPassword token={token}/>
}

export default Page