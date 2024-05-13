/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";

const page = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <SetNewPassword passwordType="Reset" />
    </React.Suspense>
  );
};

export default page;
