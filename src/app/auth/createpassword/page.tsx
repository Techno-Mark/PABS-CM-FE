"use client";
import React from "react";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";
import { CircularProgress } from "@mui/material";

function Page() {
  return (
    <React.Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <CircularProgress className="mainLoader" size={50} />
        </div>
      }
    >
      <SetNewPassword passwordType="Create" checkForToken={false} />
    </React.Suspense>
  );
}

export default Page;
