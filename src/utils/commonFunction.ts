import { Option } from "@/models/userManage";
import { getToken, removeCookies } from "./authFunctions";

export const hasToken = (router: any) => {
  const token = getToken();
  if (token) {
    router.push("/");
  } else {
    removeCookies();
    router.push("/auth/login");
  }
};

export const hasNoToken = (router: any) => {
  const token = getToken();
  if (!token) {
    removeCookies();
    router.push("/auth/login");
  }
};

export const hasMatchingValue = (arr1: number[], arr2: Option[]): any => {
  return arr2.map((item: any) => arr1.includes(item.value)).includes(false);
};
