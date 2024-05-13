import axios from "axios";
// cookies function imports
import { getToken, removeCookies } from "@/utils/authFunctions";
import { signoutAPIUrl } from "@/static/apiUrl";
// Cookie import
import Cookies from "js-cookie";

export const callAPIwithoutHeaders = async (
  pathName: string,
  method: "get" | "post",
  successCallback: (
    ResponseStatus: string,
    Message: string,
    ResponseData: any
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
    const { ResponseStatus, ResponseData, Message } = response.data;
    successCallback(ResponseStatus, Message, ResponseData);
  } catch (error: any) {
    if (response?.status === 401) {
      const token = Cookies.get("token");
      const userId = Cookies.get("userId");
      response = await axios.post(`${url}${signoutAPIUrl}`, {
        userId: Number(userId),
      });
      if (response.data.ResponseStatus === "success") {
        removeCookies();
        window.location.href = "/auth/login";
      }
    }
    successCallback(
      "failure",
      "Something went wrong, please refer console for more details.",
      undefined
    );
    console.error(error.message);
  }
};

export const callAPIwithHeaders = async (
  pathName: string,
  method: "get" | "post",
  successCallback: (
    ResponseStatus: string,
    Message: string,
    ResponseData: any,
  ) => void,
  params: Object,
  // headerIfAny?: any
) => {
  let response;
  const url = new URL(process.env.apidev_url!);
  url.pathname = pathName;
  console.log({
    Authorization: `Bearer ${getToken()}`,
  })
 
  try {
    if (method === "get") {
      response = await axios.get(url.toString(), {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          // ...headerIfAny,
        },
      });
    } else if (method === "post") {
      response = await axios.post(url.toString(), params, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          // ...headerIfAny,
        },
      });
    } else {
      throw new Error(
        "Unsupported HTTP method. Only GET and POST are supported."
      );
    }
 
    const { ResponseStatus, ResponseData, Message } = response.data;
    successCallback(ResponseStatus, ResponseData, Message);
  } catch (error: any) {
    if (!!error.response) {
      switch (error.response.status) {
        case 400:
          return;
        case 401:
          removeCookies();
          window.location.href = "/auth/login";
          return;
      }
    }
 
    successCallback(
      "failure",
      `Something went wrong, please refer console for more details.`,
      undefined
    );
    console.error(error.message);
  }
};
