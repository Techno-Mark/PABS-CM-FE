import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// MUI imports
import {
  List,
  Drawer,
  styled,
  Divider,
  ListItem,
  IconButton,
  CssBaseline,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Theme } from "@material-ui/core/styles";
// Types import
import { SidebarProps } from "@/models/adminSidebar";
// Static import
import { drawerWidth } from "@/static/commonVariables";
// Icons imports
import MenuIconOpen from "@/assets/Icons/admin/sidebar/MenuIconOpen";
import MenuIconClose from "@/assets/Icons/admin/sidebar/MenuIconClose";
import AccountCircleIcon from "@/assets/Icons/admin/sidebar/AccountCircleIcon";
import UserManageIcon from "@/assets/Icons/admin/sidebar/UserManageIcon";
import SettingsIcon from "@/assets/Icons/admin/sidebar/SettingsIcon";
// Utlis import
import { useStyles } from "@/utils/useStyles";

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MyDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),

  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: "absolute",
  bottom: 0,
}));

const Sidebar = ({
  openSidebar,
  setOpenSidebar,
  onRouteChange,
}: SidebarProps) => {
  const classes = useStyles();

  const pathname = usePathname();

  const getIcon = (
    pathname: string,
    activePath: string,
    IconComponent: React.ComponentType<{ fill: string }>
  ) => {
    const isActive = pathname === activePath;
    const fillColor = isActive ? "#FFFFFF" : "#D8D8D8";
    return <IconComponent fill={fillColor} />;
  };

  const sidebarItems = [
    {
      module: "Client Management",
      link: "/admin/clientmanagement",
      icon: getIcon(pathname, "/admin/clientmanagement", AccountCircleIcon),
    },
    {
      module: "User Management",
      link: "/admin/usermanagement",
      icon: getIcon(pathname, "/admin/usermanagement", UserManageIcon),
    },
    {
      module: "Settings",
      link: "/admin/settings",
      icon: getIcon(pathname, "/admin/settings", SettingsIcon),
    },
  ];

  const [isOpen, setIsopen] = useState<boolean>(
    pathname === "/admin/setting" || pathname === "/admin/audit" ? true : false
  );

  return (
    <>
      <CssBaseline />
      <MyDrawer
        classes={{ paper: classes.sidebarDrawer }}
        className="z-0"
        variant="permanent"
        open={openSidebar}
      >
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                alt="PABS_Logo"
                src={"/PABS.png"}
                width={openSidebar ? 100 : 80}
                height={openSidebar ? 100 : 80}
              />
            </ListItemButton>
          </ListItem>
        </List>

        {sidebarItems.map((item, index) => (
          <div key={index}>
            <List className="flex items-center w-[100%] my-1 p-0">
              <Link
                href={item.link}
                passHref
                key={item.module}
                className={`flex items-center w-[90%] mx-2 p-0  ${
                  pathname === item.link
                    ? "!bg-[#212121] !rounded-full !bg-opacity-10"
                    : "transparent"
                }`}
              >
                <ListItemButton
                  disableRipple
                  onClick={() => {
                    item.link === "#" ? setIsopen(!isOpen) : onRouteChange();
                  }}
                  className={`sidebar-custom ${
                    pathname === item.link ? "activeLabel" : "transparent"
                  }`}
                  sx={{
                    height: 40,
                    justifyContent: openSidebar ? "initial" : "center",
                    px: 1.5,
                    py: 2,
                    "&:hover": {
                      textDecoration: "none",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: openSidebar ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    classes={{ primary: classes.textSize }}
                    primary={item.module}
                    sx={{
                      opacity: openSidebar ? 1 : 0,
                      color: pathname === item.link ? "#FFFFFF" : "#D8D8D8",
                    }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </div>
        ))}
        <DrawerFooter>
          <Divider sx={{ mb: 1 }} />
          <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
            {openSidebar ? <MenuIconOpen /> : <MenuIconClose />}
          </IconButton>
        </DrawerFooter>
      </MyDrawer>
    </>
  );
};

export default Sidebar;
