import Cookies from "js-cookie";
 
export const getToken = () => {
  return Cookies.get("token");
};
 
export const removeCookies = () => {
  Cookies.remove("token")
  Cookies.remove("userId")
  Cookies.remove("userName")
};