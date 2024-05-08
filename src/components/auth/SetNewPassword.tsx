import React, { useState } from "react";
import { useRouter } from "next/navigation";
// MUI imports
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// Icons imports
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
import { StringFieldType } from "@/models/common";
// utlis imports
import { useStyles } from "@/utils/useStyles";
import { passwordChange } from "@/api/auth/auth";
import { showToast } from "../ToastContainer";
import { ToastType } from "@/static/toastType";

function SetNewPassword() {
  const classes = useStyles();
  const router = useRouter();
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };

  const [newPassword, setNewPassword] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [confirmPassword, setConfirmPassword] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;?/>,.<]).{8,}$/;

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownNewPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleNewPasswordChange = (e: { target: { value: string } }) => {
    const newPassword = e.target.value.trim();
    let error = false;
    let errorText = "";

    if (newPassword.length === 0) {
      error = true;
      errorText = "Confirm Password is required";
    } else if (!passwordRegex.test(newPassword)) {
      error = true;
      errorText =
        "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    setNewPassword({
      ...initialFieldStringValues,
      value: newPassword,
      error: error,
      errorText: errorText,
    });
  };

  const handleConfirmPasswordChange = (e: { target: { value: string } }) => {
    const confirmPassword = e.target.value.trim();
    let error = false;
    let errorText = "";

    if (confirmPassword.length === 0) {
      error = true;
      errorText = "Confirm Password is required";
    } else if (!passwordRegex.test(confirmPassword)) {
      error = true;
      errorText =
        "Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
    }

    setConfirmPassword({
      ...initialFieldStringValues,
      value: confirmPassword,
      error: error,
      errorText: errorText,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    let hasError = false;

    if (newPassword.value.trim().length === 0) {
      setNewPassword({
        ...initialFieldStringValues,
        error: true,
        errorText: "This field is required",
      });
      hasError = true;
    }

    if (confirmPassword.value.trim().length === 0) {
      setConfirmPassword({
        ...initialFieldStringValues,
        error: true,
        errorText: "This field is required",
      });
      hasError = true;
    } else if (newPassword.value !== confirmPassword.value) {
      setConfirmPassword({
        value:confirmPassword.value,
        error: true,
        errorText: "Password not match",
      });
      hasError = true;
    }

    if (hasError || newPassword.error || confirmPassword.error) {
      setLoading(false);
      return;
    } else {
      // const result = await passwordChange(newPassword.value, confirmPassword.value);
      // if (result.message == "success") {
      //   showToast("Password Changed successfuly", ToastType.Success);
      //   console.log("Login successful. Received data:", result);
      // } else {
      //   showToast("Please try again", ToastType.Error);
      //   console.log("Please try again. Received data:", result);
      // }
      router.push("/auth/login");
      setLoading(false);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-[#045794] via-[#02243b] to-[#011B2E]">
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
          <span className="text-[32px] !font-light font-sans pt-24">
            Create Password
          </span>
          <div className="text-[12px] flex flex-col pt-14">
            <label className="text-[#6E6D7A] text-[14px]">
              New Password<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Input
                classes={{ underline: classes.underline }}
                id="outlined-adornment-password"
                placeholder="New Password"
                type={showNewPassword ? "text" : "password"}
                onChange={handleNewPasswordChange}
                error={newPassword.error}
                value={newPassword.value}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowNewPassword}
                      onMouseDown={handleMouseDownNewPassword}
                      edge="end"
                    >
                      {showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <span className="text-[#d32f2f]">{newPassword.errorText}</span>
            </FormControl>
          </div>

          <div className="text-[12px] flex flex-col pt-8">
            <label className="text-[#6E6D7A] text-[14px]">
              Confirm Password<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Input
                classes={{ underline: classes.underline }}
                id="outlined-adornment-password"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleConfirmPasswordChange}
                error={newPassword.error}
                value={confirmPassword.value}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <span className="text-[#d32f2f]">
                {confirmPassword.errorText}
              </span>
            </FormControl>
          </div>

          <Button
            onClick={handleSubmit}
            className={`!bg-[#023963] ${
              newPassword.error || confirmPassword.error ? "mt-12" : "mt-14"
            } text-white !h-[38px] !rounded-md w-full`}
            variant="contained"
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="normal-case font-semibold text-[16px]">
                Create Password
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
