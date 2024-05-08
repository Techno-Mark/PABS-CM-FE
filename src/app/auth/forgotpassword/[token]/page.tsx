"use client";
import React from 'react'
// component imports
import SetNewPassword from "@/components/auth/SetNewPassword";
import { useParams } from 'next/navigation';

function Page() {
  const { token } = useParams();
  // console.log("token : ",token)
  return <SetNewPassword />
}

export default Page