import Image from "next/image";
import { usePathname } from "next/navigation";
// MUI imports
import {
  List,
  Drawer,
  styled,
  Divider,
  ListItem,
  CssBaseline,
  ListItemButton,
} from "@mui/material";
import { Theme } from "@material-ui/core/styles";
// Static import
import { clientDrawerWidth } from "@/static/commonVariables";
// Utlis import
import CallIcon from "@/assets/Icons/client/sidebar/CallIcon";
import { useEffect, useState } from "react";
import { ClientSidebarItemsType, SidebarItemsType } from "@/models/adminSidebar";

const openedMixin = (theme: Theme) => ({
  width: clientDrawerWidth,
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
  width: clientDrawerWidth,
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
  width: "100%",
}));

const ClientSidebar = () => {
  const pathname = usePathname();

  const items: ClientSidebarItemsType[] = [
    {
      module: "Basic Details",
      link: "/client/onboarding/basicdetails",
      value: 27,
    },
    {
      module: "Checklist",
      link: "/client/onboarding/checklist",
      value: 45,
    },
    {
      module: "Account Details",
      link: "/client/onboarding/accountdetails",
      value: 15,
    }
  ];

  return (
    <>
      <CssBaseline />
      <MyDrawer className="z-0 h-screen" variant="permanent" open={true}>
        <List className="m-0 p-0 min-h-[80px] !bg-[#091D36]">
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                height: 108,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#023963",
              }}
            >
              <Image
                alt="PABS_Logo"
                src={"/PABS.png"}
                width={160}
                height={160}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <div className="mt-8">
          {items.map(
            (
              data: { module: string; link: string; value: number },
              index: number
            ) => (
              <div
                key={index}
                className="flex items-center justify-between mb-5 mx-2"
              >
                <span
                  className={` ${
                    pathname === data.link && "font-semibold"
                  } mr-2 text-[#333333] text-[16px] cursor-default`}
                >
                  {data.module}
                </span>
                <div className="relative flex items-center w-[100px] h-4 rounded-full bg-[#F6F6F6]">
                  <div
                    className={`absolute left-0 top-0 h-full ${
                      data.value < 93
                        ? "rounded-l-full"
                        : "rounded-l-full rounded-r-full"
                    }`}
                    style={{
                      width: `${Math.max(
                        (data.value / 100) * 100,
                        data.value > 0 && data.value < 7 ? 6 : 0
                      )}px`,
                      backgroundColor: "#022946",
                    }}
                  ></div>
                  <span
                    className={`relative z-10 ml-auto mr-1 text-[8px] ${
                      data.value > 85 ? "text-white" : "text-[#023963]"
                    }`}
                  >
                    {data.value}%
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </MyDrawer>
    </>
  );
};

export default ClientSidebar;
