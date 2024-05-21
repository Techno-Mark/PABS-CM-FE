"use client";
import React from "react";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";
import Loader from "@/components/admin/common/Loader";

function Page() {
  return (
    <React.Suspense fallback={<Loader />}>
      <SetNewPassword passwordType="Create" isReset={false} />
    </React.Suspense>
  );
}

export default Page;
