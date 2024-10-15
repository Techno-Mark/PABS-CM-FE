import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// MUI imports
import {
  AppBar as MuiAppBar,
  styled,
  Toolbar,
  Tooltip
} from "@mui/material";
// Static data import
import { drawerWidth } from "@/static/commonVariables";
// Types imports
import { AppBarProps, Option } from "@/models/adminHeader";
// Icons import
import { callAPIwithHeaders } from "@/api/commonFunction";
import UserIcon from "@/assets/Icons/admin/header/UserIcon";
import { signoutAPIUrl } from "@/static/apiUrl";
// Toast import
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
// Cookie import
import CommentIcon from "@/assets/Icons/admin/CommentIcon";
import DropDownArrow from "@/assets/Icons/dropdownarrow";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import CommentDrawer from "@/components/admin/drawer/CommentDrawer";
import { removeCookies } from "@/utils/authFunctions";
import { useStyles } from "@/utils/useStyles";
import Cookies from "js-cookie";
import LogoutIcon from "@/assets/Icons/logouticon";

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

interface HeaderModuleTypes {
  formSubmittedStatus: boolean;
  formSubmit?: number;
}

const ClientHeader = ({
  formSubmittedStatus,
  formSubmit,
}: HeaderModuleTypes) => {
  const router = useRouter();
  const userId = Cookies.get("userId");
  const clientId = Cookies.get("clientId");
  const clientLogo =
    typeof window !== "undefined" ? localStorage.getItem("clientLogo") : null;
  const userName = Cookies.get("userName");
  const businessTypeName = Cookies.get("businessTypeName");
  const clientSFId = Cookies.get("clientSFId");

  const [isOpen, setOpen] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const selectRefNavbar = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

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
      icon: <LogoutIcon/>
    },
  ];

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  const classes = useStyles();

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
        zIndex: 1,
        backgroundColor: "white !important",
        borderBottom: "0.5px solid lightgrey !important",
        boxShadow: "none !important",
        height: "50.5px !important",
        width: {
          sm: `calc(100% - 281px)`,
        },
        ml: { sm: `65px` },
      }}
    >
      <Toolbar>
        <div className="flex flex-row w-full justify-end items-center mb-3">
          {/* <div
            className={`!text-[#000000] ${
              !!clientLogo && "flex gap-4 justify-center items-center"
            }`}
          >
            {!!clientLogo && (
              <span>
                <img
                  className="w-15 h-10"
                  src={`data:image;base64,${clientLogo}`}
                  alt="client logo"
                />
              </span>
            )}
            <span className="!font-semibold text-[15px]">
              {clientSFId} &nbsp;|&nbsp; {userName} &nbsp;|&nbsp;{" "}
              {businessTypeName} &nbsp; &nbsp;
              {formSubmittedStatus && (
                <Chip
                  size="small"
                  label="Form Submitted"
                  color="success"
                  style={{ backgroundColor: "#38a169" }}
                />
              )}
            </span>
          </div> */}
          <div className="relative flex gap-4">
            {(formSubmit === 12 || formSubmit === 21 || formSubmit === 32) && (
              <Tooltip title="Comment" placement="bottom" arrow classes={{
                tooltip: classes.tooltipStyle,
                arrow: classes.arrowStyle,
              }}>
                <span
                  className="flex items-center cursor-pointer"
                  onClick={() => setOpenCommentModal(true)}
                >
                  <CommentIcon />
                </span>
              </Tooltip>
            )}
            <div
              className="cursor-pointer text-black !text-[14px] relative flex gap-2.5 items-center"
              onClick={handleToggle}
              ref={selectRefNavbar}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <UserIcon />
              {userName}
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <DropDownArrow fillColor={isHovered ? "#0078C8" : "#333333"} />
              </div>
              <div
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                  width: dropDownRef.current?.clientWidth,
                  top: 32,
                  right: -5,
                }}
                className={`absolute mt-[5px] bg-[#FFFFFF] ${isOpen ? "block" : "hidden"
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
      {openCommentModal && (
        <CommentDrawer
          isOpen={openCommentModal}
          setIsOpen={(value: boolean) => setOpenCommentModal(value)}
          clientId={Number(clientId)}
        />
      )}
      <DrawerOverlay isOpen={openCommentModal} />
    </AppBar>
  );
};

export default ClientHeader;
