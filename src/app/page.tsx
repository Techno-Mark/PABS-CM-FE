"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
// MUI imports
import { CircularProgress } from "@mui/material";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  
  return (
    <div className="flex min-h-screen items-center justify-center">
      <CircularProgress className="mainLoader" size={50} />
    </div>
  );
}
