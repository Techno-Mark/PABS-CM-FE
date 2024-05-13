"use client";
import React from "react";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";

function Page() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <SetNewPassword passwordType="Create" />
    </React.Suspense>
  );
}

export default Page;
