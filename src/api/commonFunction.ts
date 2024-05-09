import axios from "axios";
// react toastify
import { toast } from "react-toastify";
// cookies function imports
import { getToken, removeCookies } from "@/utils/authFunctions";
 
export const callAPIwithoutHeaders = async (
  pathName: string,
  method: "get" | "post",
  successCallback: (
    status: number,
    message: string,
    data: any,
    headers: any
  ) => void,
  params: Object
) => {
  let response;
  const url = new URL(process.env.apidev_url!);
  url.pathname = pathName;
 
  try {
    if (method === "get") {
      response = await axios.get(url.toString());
    } else if (method === "post") {
      response = await axios.post(url.toString(), params);
    } else {
      throw new Error(
        "Unsupported HTTP method. Only GET and POST are supported."
      );
    }
 
    const { status, data, message } = response.data;
    successCallback(status, message, data, response.headers);
  } catch (error: any) {
    successCallback(
      400,
      `Something went wrong, please refer console for more details.`,
      undefined,
      undefined
    );
    console.error(error.message);
  }
};
 
export const callAPIwithHeaders = async (
  pathName: string,
  method: "get" | "post",
  successCallback: (
    status: number,
    message: string,
    data: any,
    headers: any
  ) => void,
  params: Object,
  headerIfAny?: any
) => {
  let response;
  const url = new URL(process.env.apidev_url!);
  url.pathname = pathName;
 
  try {
    if (method === "get") {
      response = await axios.get(url.toString(), {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          ...headerIfAny,
        },
      });
    } else if (method === "post") {
      response = await axios.post(url.toString(), params, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          ...headerIfAny,
        },
      });
    } else {
      throw new Error(
        "Unsupported HTTP method. Only GET and POST are supported."
      );
    }
 
    const { status, data, message } = response.data;
    successCallback(status, message, data, response.headers);
  } catch (error: any) {
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Bad Request, please check your payload.");
          return;
        case 401:
          toast.error("Invalid or Expired Token.");
          removeCookies();
          window.location.href = "/auth/login";
          return;
      }
    }
 
    successCallback(
      400,
      `Something went wrong, please refer console for more details.`,
      undefined,
      undefined
    );
    console.error(error.message);
  }
};
