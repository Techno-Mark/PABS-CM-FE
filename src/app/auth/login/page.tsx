"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// MUI imports
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
// Icons imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// Types import
import { StringFieldType } from "@/models/common";
import { userLoginData } from "@/models/userAuth";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Component import
import AuthWapper from "@/components/auth/AuthWapper";
import { showToast } from "@/components/ToastContainer";
// API import
import { callAPIwithoutHeaders } from "@/api/commonFunction";
// Static import
import { ToastType } from "@/static/toastType";
import { loginAPIUrl } from "@/static/apiUrl";
// Cookie import
import Cookies from "js-cookie";
import PasswordIcon from "@/assets/Icons/PasswordIcon";
import PasswordhideIcon from "@/assets/Icons/PasswordhideIcon";

function Page() {
  const classes = useStyles();
  const router = useRouter();
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [password, setPassword] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    const emailRegex = /^[\w+.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (e.target.value.trim().length === 0) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is required",
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

  const handlePasswordChange = (e: { target: { value: string } }) => {
    let password = e.target.value.trim();
    let error = false;
    let errorText = "";

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;?/>,.<]).{8,}$/;

    if (password.length === 0) {
      error = true;
      errorText = "Password is required";
    } else if (!passwordRegex.test(password)) {
      error = true;
      errorText = "Entered password does not match the required conditions.";
    }

    setPassword({
      value: password,
      error: error,
      errorText: errorText,
    });
  };

  const validateAndSetField = (
    field: React.Dispatch<React.SetStateAction<StringFieldType>>,
    value: string,
    message: string
  ) => {
    if (value.trim().length === 0) {
      field({
        ...initialFieldStringValues,
        error: true,
        errorText: `${message} is required`,
      });
      return true;
    }
    return false;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const usernameError = validateAndSetField(setEmail, email.value, "Email");
    const passwordError = validateAndSetField(
      setPassword,
      password.value,
      "Password"
    );

    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: userLoginData
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          router.push("/");
          setLoading(false);
          Cookies.set("token", ResponseData?.Token);
          Cookies.set("userId", ResponseData?.UserId.toString());
          Cookies.set("userName", ResponseData?.Username);
          Cookies.set("roleName", ResponseData?.RoleName);
          Cookies.set("roleId", ResponseData?.RoleId.toString());
          Cookies.set(
            "businessTypeId",
            ResponseData?.BusinessTypeId.toString()
          );
          Cookies.set("businessTypeName", ResponseData?.BusinessTypeName);
          Cookies.set("clientId", ResponseData?.ClientId);
          Cookies.set("clientSFId", ResponseData?.ClientSfId);
          localStorage.setItem("clientLogo", ResponseData?.ClientLogo);
          Cookies.set("permission", JSON.stringify(ResponseData?.Permissions));
          return;
      }
    };

    if (usernameError || passwordError || password.error || email.error) {
      setLoading(false);
      return;
    } else {
      await callAPIwithoutHeaders(loginAPIUrl, "post", callback, {
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <AuthWapper>
      <div className="mx-auto w-[62%]">
        <span className="text-[40px] !font-medium tracking-[0.8px]">Log In</span>
        <form onSubmit={handleSubmit}>
          <div
            className={`text-[12px] flex flex-col ${
              email.error ? "pt-8" : "pt-12"
            }`}
          >
            <label className="text-[#6C6C6C] font-normal text-[12px] tracking-[0.24px]">
              Email<span className="text-[#DC3545]">*</span>
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
                  // underline: classes.underlineWithPlaceholderColor,
                  input: 'text-[14px] font-normal tracking-[0.28px]',
                },
              }}
            />
          </div>
          <div
            className={`text-[12px] flex flex-col ${
              email.error ? "pt-4" : "pt-8"
            }`}
          >
            <label className="text-[#6C6C6C] font-normal text-[12px] tracking-[0.24px]">
              Password<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Input
                classes={{ underline: classes.underlineWithPlaceholderColor }}
                id="outlined-adornment-password"
                placeholder="Please Enter Password"
                type={showPassword ? "text" : "password"}
                onChange={handlePasswordChange}
                error={password.error}
                value={password.value}
                inputProps={{
                  className: 'text-[14px] font-normal tracking-[0.28px]', 
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      tabIndex={-1}
                    >
                      {showPassword ? <PasswordIcon/> : <PasswordhideIcon />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <span className="text-[#d32f2f]">{password.errorText}</span>
            </FormControl>
          </div>
          <div className="flex items-center justify-end">
          <span
            className="pt-4 text-[#0078C8] w-fit text-[14px] font-semibold underline flex justify-end items-end cursor-pointer"
            onClick={() => router.push("/auth/forgotpassword")}
          >
            Forgot Password?
          </span>
        </div>
          <Button
            type="submit"
            className="!bg-[#0078C8] hover:!bg-[#023963] !mt-12 text-white !h-[36px] !rounded-md w-full !shadow-none"
            variant="contained"
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{ color: "white !important" }} />
            ) : (
              <span className="normal-case font-normal text-[16px]">
                Log In
              </span>
            )}
          </Button>
        </form>
      </div>
    </AuthWapper>
  );
}
export default Page;
