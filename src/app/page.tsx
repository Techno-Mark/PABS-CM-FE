"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/admin/common/Loader";
import { hasToken } from "@/utils/commonFunction";
import { checkPermission } from "@/utils/permissionCheckFunction";
import Cookies from "js-cookie";
import { removeCookies } from "@/utils/authFunctions";
// import { removeCookies } from "@/utils/authFunctions";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    hasToken(router);
    const roleId = Cookies.get("roleId");
    const businessTypeId = Cookies.get("businessTypeId");

    if (roleId == "4") {
      if(businessTypeId === '3'){
        router.push("/client/onboarding/autocare");
      }else if (businessTypeId === '2'){
        router.push("/client/onboarding/SMB");
      }else{
        router.push("/client/onboarding/whitelabel")
      }
    } else {
      if (
        checkPermission("Client Management", "view") ||
        checkPermission("Client Management", "create")
        ) {
        router.push("/admin/clientmanagement");
      } else if (
        checkPermission("User Management", "view") ||
        checkPermission("User Management", "create")
      ) {
        router.push("/admin/usermanagement");
      } else if (
        checkPermission("Settings", "view") ||
        checkPermission("Settings", "create")
      ) {
        router.push("/admin/settings");
      } else {
        removeCookies();
        router.push("/auth/login");
      }
    }
  }, [router]);

  return <Loader />;
}
