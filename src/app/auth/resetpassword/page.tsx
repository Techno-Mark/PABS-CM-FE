/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
// Component import
import SetNewPassword from "@/components/auth/SetNewPassword";
import { CircularProgress } from "@mui/material";

const page = () => {
  return (
    <React.Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <CircularProgress className="mainLoader" size={50} />
        </div>
      }
    >
      <SetNewPassword passwordType="Reset" isReset={true} />
    </React.Suspense>
  );
};

export default page;
