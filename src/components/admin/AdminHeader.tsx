import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
// MUI imports
import {
  styled,
  Toolbar,
  IconButton,
  AppBar as MuiAppBar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from "@mui/icons-material";
// Static data imports
import { drawerWidth } from "@/static/commonVariables";
// Types imports
import { AppBarProps, HeaderPropsType, Option } from "@/models/AdminHeader";
// Icons
import UserIcon from "@/assets/Icons/admin/header/UserIcon";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = ({ openSidebar }: HeaderPropsType) => {
  const router = useRouter();
  const query = usePathname();
  const url = query.split("/");
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const options: Option[] = [
    {
      id: 1,
      label: "Logout",
    },
  ];

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  const handleSubmit = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 0,
        backgroundColor: "white !important",
        borderBottom: "0.5px solid lightgrey !important",
        boxShadow: "none !important",
        height: "50px !important",
        width: {
          sm: openSidebar ? `calc(100% - 200px)` : `calc(100% - 65px)`,
        },
        ml: { sm: openSidebar ? `200px` : `65px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
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
              className="cursor-pointer relative flex gap-2.5 items-center"
              onClick={handleToggle}
            >
              <UserIcon />
              <div
                style={{
                  boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
                  width: dropDownRef.current?.clientWidth,
                  position: "absolute",
                  top: 32,
                  right: -5,
                }}
                className={`absolute mt-[5px] bg-[#f9f9f9] z-10 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <ul className="m-0 p-0 list-none border-b border-b-[#d8d8d8] overflow-auto">
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
