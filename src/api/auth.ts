import { callAPIwithoutHeaders } from "@/api/commonFunction";
// component import
import { showToast } from "@/components/ToastContainer";
// type import
import { userLoginData } from "@/models/userAuth";
// Static import
import { ToastType } from "@/static/toastType";

export const loginAPI = (email: string, password: string) => {
  const callback = (status: number, message: string, data: userLoginData) => {
    if (status === 200) {
      if (message === "success") {
        showToast("Login successfuly", ToastType.Success);
        return data;
      } else {
        showToast(
          "Incorrect email and/or password. Please enter valid details.",
          ToastType.Error
        );
        return data;
      }
    } else {
      showToast("Please try again", ToastType.Error);
      return data;
    }
  };
  callAPIwithoutHeaders("/auth/login", "post", callback, {
    email: email,
    password: password,
  });
};

export const resetPasswordAPI = (email: string) => {
    const callback = (status: number, message: string, data: userLoginData) => {
      if (status === 200) {
        if (message === "success") {
          showToast("Email sent for reset password successfuly", ToastType.Success);
          return data;
        } else {
          showToast(
            "Incorrect email. Please enter valid details.",
            ToastType.Error
          );
          return data;
        }
      } else {
        showToast("There is an internal issue. Please try after sometime", ToastType.Error);
        return data;
      }
    };
    callAPIwithoutHeaders("/auth/resetpassword", "post", callback, {
      email: email,
    });
  };
