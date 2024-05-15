import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// MUI imports
import { styled, Toolbar, AppBar as MuiAppBar } from "@mui/material";
// Static data import
import { drawerWidth } from "@/static/commonVariables";
// Types imports
import { AppBarProps, HeaderPropsType, Option } from "@/models/adminHeader";
// Icons import
import UserIcon from "@/assets/Icons/admin/header/UserIcon";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { signoutAPIUrl } from "@/static/apiUrl";
// Toast import
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
// Cookie import
import Cookies from "js-cookie";
import { removeCookies } from "@/utils/authFunctions";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
}));

const Header = ({ openSidebar }: HeaderPropsType) => {
  const router = useRouter();
  const query = usePathname();
  const url = query.split("/");
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);
  const userId = Cookies.get("userId");
  const token = Cookies.get("token");
  const userName = Cookies.get("userName");
  const selectRefNavbar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (
        selectRefNavbar.current &&
        !selectRefNavbar.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const options: Option[] = [
    {
      id: 1,
      label: "Logout",
    },
  ];

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleSubmit = async () => {
    const callback = (ResponseStatus: string, Message: string) => {
      if (ResponseStatus === "failure" && Message === "Token not found") {
        removeCookies();
        router.push("/auth/login");
        return;
      }
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          removeCookies();
          router.push("/auth/login");
          return;
      }
    };
    await callAPIwithHeaders(signoutAPIUrl, "post", callback, {
      userId: Number(userId),
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 0,
        backgroundColor: "white !important",
        borderBottom: "0.5px solid lightgrey !important",
        boxShadow: "none !important",
        height: "50.5px !important",
        width: {
          sm: openSidebar ? `calc(100% - 224px)` : `calc(100% - 65px)`,
        },
        ml: { sm: openSidebar ? drawerWidth : `65px` },
      }}
    >
      <Toolbar>
        <div className="flex flex-row w-full justify-between items-center mb-3">
          <div className="!text-[#000000]">
            <span className="!font-bold text-[15px]">
              {url.includes("usermanagement")
                ? "User Management"
                : url.includes("clientmanagement")
                ? "Client Management"
                : "Setting"}
            </span>
          </div>
          <div className="relative flex">
            <div
              className="cursor-pointer text-black !text-[14px] relative flex gap-2.5 items-center"
              onClick={handleToggle}
              ref={selectRefNavbar}
            >
              {userName}
              <UserIcon />
              <div
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                  width: dropDownRef.current?.clientWidth,
                  top: 32,
                  right: -5,
                }}
                className={`absolute mt-[5px] bg-[#FFFFFF] ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul className="m-0 p-0 list-none border-b border-b-[#d8d8d8]">
                  {options.map((option) => (
                    <li
                      key={option.id}
                      className="px-2 py-3 cursor-pointer flex items-center justify-between text-[14px] font-normal"
                      id={option.id.toString()}
                      value={option.label}
                      onClick={handleSubmit}
                    >
                      <span className="flex items-center gap-[10px]">
                        <span>{option.icon}</span>
                        <span className="truncate w-40 text-black text-sm">
                          {option.label}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
