import React, { useEffect } from "react";
//assest icon
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
// type imports
import { childPropsType } from "@/models/common";
// Cookie import
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function AuthWapper({ children }: childPropsType) {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.push("/admin/usermanagement");
    }
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-gradient-to-br from-[#045794] via-[#02243b] to-[#011B2E]">
      <div className="relative flex w-[100%] h-[100%]">
        <div className="w-[50%] hidden lg:flex justify-center items-center bg-[#023963]">
          <span className="flex absolute">
            <PABSIcon />
          </span>
          <span className="absolute bottom-[2px] left-[2px]">
            <PABSHalfIcon />
          </span>
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col justify-center bg-white px-14 h-[100%]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthWapper;
