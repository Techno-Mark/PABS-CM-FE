"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/admin/common/Loader";
import { hasToken } from "@/utils/commonFunction";
import { checkPermission } from "@/utils/permissionCheckFunction";
import Cookies from "js-cookie";
import { removeCookies } from "@/utils/authFunctions";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    hasToken(router);
    const roleId = Cookies.get("roleId");
    if (roleId == "1" || roleId == "2" || roleId == "3") {
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
        showToast("You dont have required permission.", ToastType.Warning);
        removeCookies();
        router.push("/auth/login");
      }
    } else if (roleId == "4") {
      showToast("Currently client has no permission.", ToastType.Warning);
      removeCookies();
      router.push("/auth/login");
    }
  }, [router]);

  return <Loader />;
}
