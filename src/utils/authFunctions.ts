import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("token");
};

export const removeCookies = () => {
  Cookies.remove("token");
  Cookies.remove("userId");
  Cookies.remove("userName");
  Cookies.remove("roleName");
  Cookies.remove("roleId");
  Cookies.remove("businessTypeId");
  Cookies.remove("businessTypeName");
  Cookies.remove("clientSFId");
  localStorage.removeItem('clientLogo');
  Cookies.remove("permission");
};
