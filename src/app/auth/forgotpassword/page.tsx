"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// MUI imports
import { Button, CircularProgress, TextField } from "@mui/material";
// Icons imports
import BackIcon from "@/assets/Icons/BackIcon";
// Types imports
import { StringFieldType } from "@/models/common";
// Toast imports
import { ToastType } from "@/static/toastType";
// utlis imports
import { useStyles } from "@/utils/useStyles";
// common components
import AuthWapper from "@/components/auth/AuthWapper";
import { showToast } from "@/components/ToastContainer";
// API imports
import { callAPIwithoutHeaders } from "@/api/commonFunction";
// Static import
import { forgotPasswordAPIUrl } from "@/static/apiUrl";

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
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (e.target.value.trim().length === 0) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email Address is required",
      });
    } else if (!emailRegex.test(e.target.value.trim())) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Please provide a valid email address!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    let hasError = false;

    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setLoading(false);
          router.push("/auth/login");
          return;
      }
    };

    if (email.value.trim().length === 0) {
      setEmail({
        ...initialFieldStringValues,
        error: true,
        errorText: "Email Address is required",
      });
      hasError = true;
    }

    if (hasError || email.error) {
      setLoading(false);
      return;
    } else {
      await callAPIwithoutHeaders(forgotPasswordAPIUrl, "post", callback, {
        email: email.value,
      });
    }
  };

  return (
    <AuthWapper>
      <span
        className="flex items-center w-fit gap-2 text-[14px] font-medium  pt-14 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <BackIcon /> Back
      </span>
      <span className="text-[32px] !font-light  pt-14">
        Reset your password
      </span>
      <form onSubmit={handleSubmit}>
        <div className="text-[12px] flex flex-col pt-14">
          <label className="text-[#6E6D7A] text-[14px]">
            Email Address<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter Email Address"
            value={email.value}
            error={email.error}
            helperText={email.errorText}
            onChange={handleEmailChange}
            InputProps={{
              classes: {
                underline: classes.underlineWithPlaceholderColor,
              },
            }}
          />
        </div>

        <Button
          type="submit"
          className={`!bg-[#023963] !mt-16 mb-24 text-white !h-[38px] !rounded-md w-full`}
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
      </form>
    </AuthWapper>
  );
}

export default Page;
