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
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Common import
import AuthWapper from "@/components/auth/AuthWapper";
// Api import
import { loginAPI } from "@/api/auth";

function Page() {
  const classes = useStyles();
  const router = useRouter();
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };

  const [email, setEmail] = useState<StringFieldType>(
    initialFieldStringValues
  );
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
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (e.target.value.trim().length === 0) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "This field is required",
      });
    } else if (
      !emailRegex.test(e.target.value.trim())
    ) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is not valid!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value
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
      errorText =
        "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    setPassword({
      value: password,
      error: error,
      errorText: errorText,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const validateAndSetField = (
      field: React.Dispatch<React.SetStateAction<StringFieldType>>,
      value: string
    ) => {
      if (value.trim().length === 0) {
        field({
          ...initialFieldStringValues,
          error: true,
          errorText: "This field is required",
        });
        return true;
      }
      return false;
    };

    const usernameError = validateAndSetField(setEmail, email.value);
    const passwordError = validateAndSetField(setPassword, password.value);

    if (usernameError || passwordError || password.error || email.error) {
      setLoading(false);
      return;
    } else {
    //  const response = loginAPI(email.value,password.value)
      setTimeout(() => {
        router.push("/admin/usermanagement");
        setLoading(false);
      }, 2000);
      return;
    }
  };

  return (
    <AuthWapper>
      <span className="text-[32px] !font-light font-sans pt-24">Welcome</span>
      <div className="text-[12px] flex flex-col pt-14">
        <label className="text-[#6E6D7A] text-[14px]">
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
              underline: classes.underline,
            },
          }}
        />
      </div>
      <div className="text-[12px] flex flex-col pt-8">
        <label className="text-[#6E6D7A] text-[14px]">
          Password<span className="text-[#DC3545]">*</span>
        </label>
        <FormControl variant="standard">
          <Input
            classes={{ underline: classes.underline }}
            id="outlined-adornment-password"
            placeholder="Please Enter Password"
            type={showPassword ? "text" : "password"}
            onChange={handlePasswordChange}
            error={password.error}
            value={password.value}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <span className="text-[#d32f2f]">{password.errorText}</span>
        </FormControl>
      </div>
      <Button
        onClick={handleSubmit}
        className={`!bg-[#023963] ${
          password.error || email.error ? "mt-8" : "mt-14"
        } text-white !h-[38px] !rounded-md w-full`}
        variant="contained"
        disabled={isLoading ? true : false}
      >
        {isLoading ? (
          <CircularProgress size={20} />
        ) : (
          <span className="normal-case font-semibold text-[16px]">Log In</span>
        )}
      </Button>

      <span
        className="pt-4 text-[#023963] text-[14px] font-sans flex justify-end items-end cursor-pointer"
        onClick={() => router.push("/auth/resetpassword")}
      >
        Forget Password?
      </span>
    </AuthWapper>
  );
}
export default Page;
