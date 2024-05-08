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
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
// common imports
import { StringFieldType } from "@/models/common";
import { ToastContainer, showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
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

  const [username, setUserName] = useState<StringFieldType>(
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

  const handleUserNameChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0) {
      setUserName({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is Required",
      });
    } else {
      setUserName({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    const password = e.target.value.trim();
    let error = false;
    let errorText = "";

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;?/>,.<]).{8,}$/;

    if (password.length === 0) {
        error = true;
        errorText = "Password is required";
    } else if (!passwordRegex.test(password)) {
        error = true;
        errorText = "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    setPassword({
      ...initialFieldStringValues,
      value: password,
      error: error,
      errorText: errorText,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const validateAndSetField = (field: React.Dispatch<React.SetStateAction<StringFieldType>>, value: string) => {
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

    const usernameError = validateAndSetField(setUserName, username.value);
    const passwordError = validateAndSetField(setPassword, password.value);

    if (usernameError || passwordError) {
      setLoading(false);
      return;
    } else {
      // const result = await login(username.value, password.value);
      // if (result.message == "success") {
      // showToast("Login successfuly", ToastType.Success)
      //   console.log("Login successful. Received data:", result);
      // } else {
      //  showToast("Please try again", ToastType.Error)
      //    console.log("Please try again. Received data:", result);
      // }
      setTimeout(() => {
        router.push("/admin/usermanagement");
        setLoading(false);
      }, 2000);
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
          <span className="absolute bottom-[6px] left-[9px] z-1 blur-[5px]">
            <PABSHalfIcon />
          </span>
        </div>
        <div className="w-[50%] flex flex-col bg-white px-14">
          <span className="text-[32px] !font-light font-sans pt-24">
            Welcome
          </span>
          <div className="text-[12px] flex flex-col pt-14">
            <label className="text-[#6E6D7A] text-[14px]">
              Username<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Username"
              value={username.value}
              error={username.error}
              helperText={username.errorText}
              onChange={handleUserNameChange}
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
                placeholder="Password"
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
              password.error || username.error ? "mt-10" : "mt-14"
            } text-white !h-[38px] !rounded-md w-full`}
            variant="contained"
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="normal-case font-semibold text-[16px]">
                Log In
              </span>
            )}
          </Button>

          <span
            className="pt-4 text-[#023963] text-[14px] font-sans flex justify-end items-end cursor-pointer"
            onClick={() => router.push("/auth/resetpassword")}
          >
            Forget Password ?
          </span>
        </div>
      </div>
    </div>
  );
}
export default Page;
