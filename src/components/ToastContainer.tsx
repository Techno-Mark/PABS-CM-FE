// toastify imports
import {
  ToastContainer as OriginalToastContainer,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Static imports
import { ToastType } from "@/static/toastType";

export const ToastContainer = () => {
  return (
    <OriginalToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      toastStyle={{ width: "300px"}}
    />
  );
};

export const showToast = (
  message: string,
  type: ToastType = ToastType.Success
) => {
  switch (type) {
    case ToastType.Success:
      toast.success(message);
      break;
    case ToastType.Error:
      toast.error(message);
      break;
    case ToastType.Warning:
      toast.warning(message);
      break;
    case ToastType.Info:
      toast.info(message);
      break;
    case ToastType.Default:
      toast(message);
      break;
  }
};
