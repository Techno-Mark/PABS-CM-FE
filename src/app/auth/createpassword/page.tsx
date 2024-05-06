"use client";
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
import { makeStyles } from "@mui/styles";
// Icons imports
import PABSHalfIcon from "@/assets/Icons/PABSHalfIcon";
import PABSIcon from "@/assets/Icons/PABSIcon";
import { StringFieldType } from "@/models/common";

const useStyles = makeStyles((theme) => ({
  underline: {
    "&:after": {
      borderBottom: "0.5px solid #023963",
    },
    "& .MuiInputBase-input": {
      borderColor: "#023963",
    },
  },
}));

function Page() {
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

  const handleNewPasswordChange = (e: any) => {
    if (e.target.value.trim().length === 0) {
      setNewPassword({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is Required",
      });
    } else {
      setNewPassword({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleConfirmPasswordChange = (e: any) => {
    if (e.target.value.trim().length === 0) {
      setConfirmPassword({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is Required",
      });
    } else if (newPassword.value !== confirmPassword.value) {
      setConfirmPassword({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "Password not match",
      });
    } else {
      setConfirmPassword({
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
        ...initialFieldStringValues,
        error: true,
        errorText: "Password not match",
      });
      hasError = true;
    }

    if (hasError || newPassword.error || confirmPassword.error) {
      setLoading(false);
      return;
    } else {
      router.push("/admin/createpassword");
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

export default Page;
