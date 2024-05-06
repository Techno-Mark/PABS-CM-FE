"use client";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/auth/login')
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <CircularProgress className="mainLoader" size={50}/>
    </div>
  );
}
