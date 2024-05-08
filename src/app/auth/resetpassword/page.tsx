"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// MUI imports
import { Button, CircularProgress, TextField } from "@mui/material";
// Icons imports
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
import BackIcon from "@/assets/Icons/BackIcon";
import { StringFieldType } from "@/models/common";
import { ToastContainer, showToast } from "@/components/ToastContainer";
// utlis imports
import { useStyles } from "@/utils/useStyles";

function Page() {
  const classes = useStyles();
  const router = useRouter();
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0) {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is required",
      });
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.trim())
    ) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is not valid!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    let hasError = false;

    if (email.value.trim().length === 0) {
      setEmail({
        ...initialFieldStringValues,
        error: true,
        errorText: "This field is required",
      });
      hasError = true;
    }

    if (hasError || email.error) {
      setLoading(false);
      return;
    } else {
      // const result = await resetPassword(email.value);
      // if (result.message == "success") {
      // showToast("Email sent successfuly", ToastType.Success);
      //   console.log("Email sent successful. Received data:", result);
      // } else {
      //   showToast("Please try again")
      //    console.log("Please try again. Received data:", result);
      // }
      router.push("/auth/login");
      setLoading(false);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-[#045794] via-[#02243b] to-[#011B2E]">
      <ToastContainer />
      <div className="relative flex h-[80%] w-[70%]">
        <div className="w-[50%] flex justify-center items-center borderClass bg-[#002641]">
          <span className="flex absolute">
            <PABSIcon />
          </span>
          <span className="absolute bottom-[6px] left-[9px] z-0 blur-[5px]">
            <PABSHalfIcon />
          </span>
        </div>
        <div className="w-[50%] flex flex-col bg-white px-14">
          <span
            className="flex items-center gap-2 text-[14px] font-medium font-sans pt-14 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <BackIcon /> Back
          </span>
          <span className="text-[32px] !font-light font-sans pt-14">
            Reset your password
          </span>
          <div className="text-[12px] flex flex-col pt-14">
            <label className="text-[#6E6D7A] text-[14px]">
              Email Address<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Email Address"
              value={email.value}
              error={email.error}
              helperText={email.errorText}
              onChange={handleEmailChange}
              InputProps={{
                classes: {
                  underline: classes.underline,
                },
              }}
            />
          </div>

          <Button
            onClick={handleSubmit}
            className={`!bg-[#023963] ${
              email.error ? "mt-12" : "mt-14"
            } text-white !h-[38px] !rounded-md w-full`}
            variant="contained"
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="normal-case font-semibold text-[16px]">
                Reset Password
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
