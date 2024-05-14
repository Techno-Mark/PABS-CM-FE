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
// Icons import
import { StringFieldType, AuthType } from "@/models/common";
// utlis import
import { useStyles } from "@/utils/useStyles";
// component import
import AuthWapper from "@/components/auth/AuthWapper";
import { callAPIwithoutHeaders } from "@/api/commonFunction";
import { resetPasswordAPIUrl } from "@/static/apiUrl";
import { showToast } from "../ToastContainer";
import { ToastType } from "@/static/toastType";
import { useSearchParams } from "next/navigation";

const SetNewPassword = ({ passwordType }: AuthType) => {
  const getToken = useSearchParams();
  const token = getToken.get("token");
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

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleNewPasswordChange = (e: { target: { value: string } }) => {
    let newPassword = e.target.value.trim();
    let error = false;
    let errorText = "";

    if (newPassword.length === 0) {
      error = true;
      errorText = "Password is required";
    } else if (!passwordRegex.test(newPassword)) {
      error = true;
      errorText = "Entered password does not match the required conditions.";
    }

    setNewPassword({
      value: newPassword,
      error: error,
      errorText: errorText,
    });
  };

  const handleConfirmPasswordChange = (e: { target: { value: string } }) => {
    let confirmPassword = e.target.value.trim();
    let error = false;
    let errorText = "";

    if (confirmPassword.length === 0) {
      error = true;
      errorText = "Confirm Password is required";
    } else if (!passwordRegex.test(confirmPassword)) {
      error = true;
      errorText = "Entered password does not match the required conditions.";
    }

    setConfirmPassword({
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
        errorText: "Password is required",
      });
      hasError = true;
    }

    if (confirmPassword.value.trim().length === 0) {
      setConfirmPassword({
        ...initialFieldStringValues,
        error: true,
        errorText: "Confirm Password is required",
      });
      hasError = true;
    } else if (newPassword.value !== confirmPassword.value) {
      setConfirmPassword({
        value: confirmPassword.value,
        error: true,
        errorText: "New Password and Confirm Password values are different.",
      });
      hasError = true;
    }

    const callback = (
      ResponseStatus: string,
      Message: string
      // ResponseData: userResetPasswordData
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          router.push("/auth/login");
          setLoading(false);
          return;
      }
    };

    if (hasError || newPassword.error || confirmPassword.error) {
      setLoading(false);
      return;
    } else {
      await callAPIwithoutHeaders(resetPasswordAPIUrl, "post", callback, {
        token: token,
        requestType: passwordType === "Reset" ? "forgotpassword" : "signup",
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value,
      });
    }
  };

  return (
    <AuthWapper>
      <span className="text-[32px] !font-light font-sans pt-24">
        {passwordType} Password
      </span>
      <form onSubmit={handleSubmit}>
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
                    onMouseDown={handleMouseDownPassword}
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
              error={confirmPassword.error}
              value={confirmPassword.value}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span className="text-[#d32f2f]">{confirmPassword.errorText}</span>
          </FormControl>
        </div>

        <Button
          type="submit"
          className={`!bg-[#023963] !my-14 text-white !h-[38px] !rounded-md w-full`}
          variant="contained"
          disabled={isLoading ? true : false}
        >
          {isLoading ? (
            <CircularProgress size={20} />
          ) : (
            <span className="normal-case font-semibold text-[16px]">
              {passwordType} Password
            </span>
          )}
        </Button>
      </form>
    </AuthWapper>
  );
};

export default SetNewPassword;
