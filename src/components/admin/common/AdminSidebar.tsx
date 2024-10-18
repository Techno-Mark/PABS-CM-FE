import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// MUI imports
import { Theme } from "@material-ui/core/styles";
import {
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip,
} from "@mui/material";
// Types import
import { SidebarItemsType, SidebarProps } from "@/models/adminSidebar";
// Static import
import { drawerWidth } from "@/static/commonVariables";
// Icons imports
import AccountCircleIcon from "@/assets/Icons/admin/sidebar/AccountCircleIcon";
import AuditLogIcon from "@/assets/Icons/admin/sidebar/AuditLogIcon";
import MenuIconClose from "@/assets/Icons/admin/sidebar/MenuIconClose";
import MenuIconOpen from "@/assets/Icons/admin/sidebar/MenuIconOpen";
import SettingsIcon from "@/assets/Icons/admin/sidebar/SettingsIcon";
import UserManageIcon from "@/assets/Icons/admin/sidebar/UserManageIcon";

// Utlis import
import { checkPermission } from "@/utils/permissionCheckFunction";
import { useStyles } from "@/utils/useStyles";
// Cookie import
import PABSLogo from "@/assets/Icons/client/PABSLogo";
import PabsCollaps from "@/assets/Icons/client/PabsCollaps";
import Cookies from "js-cookie";

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
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  // position: "absolute",
  // bottom: 0,
}));

const Sidebar = ({
  openSidebar,
  setOpenSidebar,
  onRouteChange,
}: SidebarProps) => {
  const classes = useStyles();
  const pathname = usePathname();
  const permissions: any = Cookies.get("permission");
  const [sidebarItems, setSidebarItems] = useState<SidebarItemsType[]>([]);

  const getIcon = (
    pathname: string,
    activePath: string,
    IconComponent: React.ComponentType<{ fill: string }>
  ) => {
    const isActive = pathname === activePath;
    const fillColor = isActive ? "#333333" : "#333333";
    return <IconComponent fill={fillColor} />;
  };

  useEffect(() => {
    if (permissions?.length > 0) {
      const items = [
        (checkPermission("Client Management", "view") ||
          checkPermission("Client Management", "create")) && {
          module: "Client Management",
          link: "/admin/clientmanagement",
          icon: getIcon(pathname, "/admin/clientmanagement", AccountCircleIcon),
        },
        (checkPermission("User Management", "view") ||
          checkPermission("User Management", "create")) && {
          module: "User Management",
          link: "/admin/usermanagement",
          icon: getIcon(pathname, "/admin/usermanagement", UserManageIcon),
        },
        (checkPermission("Settings", "view") ||
          checkPermission("Settings", "create")) && {
          module: "Settings",
          link: "/admin/settings",
          icon: getIcon(pathname, "/admin/settings", SettingsIcon),
        },
        {
          module: "Audit Logs",
          link: "/admin/auditlog",
          icon: getIcon(pathname, "/admin/auditlog", AuditLogIcon),
        },
      ].filter(Boolean);
      setSidebarItems(items as { module: string; link: string; icon: any }[]);
    }
  }, [permissions, pathname]);

  const [isOpen, setIsopen] = useState<boolean>(
    pathname === "/admin/setting" || pathname === "/admin/audit" ? true : false
  );

  return (
    <>
      <CssBaseline />
      <MyDrawer
        classes={{ paper: classes.sidebarDrawer }}
        className="z-0 >div:justify-between"
        variant="permanent"
        open={openSidebar}
      >
        <div className="">
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                className="pt-1 border-b border-[#D8D8D8] border-solid h-[57px]"
                sx={{
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                {openSidebar ? (
                  <PABSLogo />
                  // width="100" height="60" 
                ) : (
                  <PabsCollaps width="50" height="35" />
                )}
              </ListItemButton>
            </ListItem>
          </List>

          {sidebarItems.map((item, index) => (
            <div key={index}>
              <List className="flex items-center w-full my-2 p-0">
                <Tooltip title={item.module} placement="right" arrow
                classes={{
                tooltip: classes.tooltipStyle,
                arrow: classes.arrowStyle,
                }}>  
                    <Link
                      href={item.link}
                      passHref
                      key={item.module}
                      className={`flex w-full items-center p-0 border-l-[4px] border-l-[transparent] hover:!border-l-[#0078C8] hover:!bg-[#F6F6F6] ${pathname === item.link
                        ? "!bg-[#212121] !bg-opacity-10 !border-l-[#0078C8] "
                        : "transparent"
                        }`}
                    >
                      {/* mx-2 w-[90%] */}
                      <ListItemButton
                        disableRipple
                        onClick={() => {
                          item.link === "#" ? setIsopen(!isOpen) : onRouteChange();
                        }}
                        className={`sidebar-custom ${pathname === item.link ? "activeLabel" : "transparent"
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
                            mr: openSidebar ? 3 : 0,
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
                            display: openSidebar ? "flex" : "none",
                            color: pathname === item.link ? "#333333" : "#333333",
                          }}
                        />
                      </ListItemButton>
                    </Link>
                </Tooltip>
              </List>
            </div>
          ))}
        </div>
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
