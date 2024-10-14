import React, { useEffect, useState } from "react";
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
import { resetPasswordAPIUrl, tokenVerificationAPIUrl } from "@/static/apiUrl";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { useSearchParams } from "next/navigation";
import InfoIcon from "@/assets/Icons/InfoIcon";
import PasswordIcon from "@/assets/Icons/PasswordIcon";
import PasswordhideIcon from "@/assets/Icons/PasswordhideIcon";

const SetNewPassword = ({ passwordType, isReset }: AuthType) => {
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

  const verifyToken = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: undefined | null
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          router.push("/auth/login");
          setLoading(false);
          return;
        case "success":
          setLoading(false);
          return;
      }
    };

    await callAPIwithoutHeaders(tokenVerificationAPIUrl, "post", callback, {
      token: token,
      requestType: isReset ? "forgotpassword" : "signup",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      verifyToken();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
      errorText = isReset ? "New Password is required" : "Password is required";
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
        errorText: isReset
          ? "New Password is required"
          : "Password is required",
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
        errorText: `${
          isReset ? "New Password" : "Password"
        } and Confirm Password values are different.`,
      });
      hasError = true;
    }

    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: undefined | null
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
    <div className="mx-auto w-[62%]">
      <span className="text-[40px] !font-medium">
        {passwordType} Password
      </span>
      <form onSubmit={handleSubmit}>
        <div className="text-[12px] flex flex-col pt-14">
          <label className="text-[#6E6D7A] font-normal text-[12px] flex items-center tracking-[0.24px]">
            {isReset ? "New Password" : "Password"}
            <span className="text-[#DC3545]">*</span>&nbsp;
            <InfoIcon />
          </label>
          <FormControl variant="standard">
            <Input
              classes={{ underline: classes.underlineWithPlaceholderColor }}
              id="outlined-adornment-password"
              placeholder={isReset ? "New Password" : "Password"}
              type={showNewPassword ? "text" : "password"}
              onChange={handleNewPasswordChange}
              error={newPassword.error}
              value={newPassword.value}
              inputProps={{
                className: 'text-[14px] font-normal', 
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    tabIndex={-1}
                  >
                    {showNewPassword ? <PasswordIcon/> : <PasswordhideIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span className="text-[#d32f2f]">{newPassword.errorText}</span>
          </FormControl>
        </div>

        <div className="text-[12px] flex flex-col pt-8">
          <label className="text-[#6E6D7A] font-normal text-[12px] flex items-center tracking-[0.24px]">
            Confirm Password<span className="text-[#DC3545]">*</span>&nbsp;
            <InfoIcon />
          </label>
          <FormControl variant="standard">
            <Input
              classes={{ underline: classes.underlineWithPlaceholderColor }}
              id="outlined-adornment-password"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              onChange={handleConfirmPasswordChange}
              error={confirmPassword.error}
              value={confirmPassword.value}
              inputProps={{
                className: 'text-[14px] font-normal', 
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <PasswordIcon/> : <PasswordhideIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <span className="text-[#d32f2f]">{confirmPassword.errorText}</span>
          </FormControl>
        </div>

        <Button
          type="submit"
          className={`!bg-[#0078C8] hover:!bg-[#023963] !mt-14 !mb-5 text-white !h-[38px] !rounded-md w-full !shadow-none`}
          variant="contained"
          disabled={isLoading ? true : false}
        >
          {isLoading ? (
            <CircularProgress size={20} sx={{color: "white !important"}}/>
          ) : (
            <span className="normal-case font-normal text-[16px]">
              {passwordType} Password
            </span>
          )}
        </Button>
      </form>
      </div>    
    </AuthWapper>
  );
};

export default SetNewPassword;
