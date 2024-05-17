import { getToken, removeCookies } from "./authFunctions";

export const hasToken = (router: any) => {
  const token = getToken();
  if (token) {
    router.push("/");
  } else {
    removeCookies();
    router.push("/login");
  }
};

export const hasNoToken = (router: any) => {
  const token = getToken();
  if (!token) {
    removeCookies();
    router.push("/login");
  }
};
