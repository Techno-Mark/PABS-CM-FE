import Image from "next/image";
// MUI imports
import {
  List,
  Drawer,
  styled,
  ListItem,
  CssBaseline,
  ListItemButton,
} from "@mui/material";
import { Theme } from "@material-ui/core/styles";
// Static import
import { clientDrawerWidth } from "@/static/commonVariables";
// Model import
import { ClientSidebarItemsType } from "@/models/adminSidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const openedMixin = (theme: Theme) => ({
  width: clientDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  overflowX: "hidden",
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
}));

interface SidebarModuleTypes {
  perCountBasicDetails: number;
  sidebarModule: number;
  perCountChecklist: number;
}

const ClientSidebar = ({
  perCountBasicDetails,
  perCountChecklist,
  sidebarModule,
}: SidebarModuleTypes) => {
  const pathname = usePathname();
  const [items, setItems] = useState<ClientSidebarItemsType[]>([]);
  useEffect(() => {
    pathname === "/client/onboarding/autocare"
      ? setItems([
          {
            id: 1,
            module: "Basic Details",
            value: perCountBasicDetails,
          },
          {
            id: 2,
            module: "Checklist",
            value: perCountChecklist,
          },
          {
            id: 3,
            module: "Login Info",
            value: 0,
          },
        ])
      : pathname === "/client/onboarding/whitelabel"
      ? setItems([
          {
            id: 1,
            module: "Basic Details",
            value: 0,
          },
          {
            id: 2,
            module: "Checklist",
            value: 45,
          },
          {
            id: 3,
            module: "Account Details",
            value: 15,
          },
        ])
      : pathname === "/client/onboarding/SMB" &&
        setItems([
          {
            id: 1,
            module: "Checklist",
            link: "/client/onboarding/checklist",
            value: basicDetailCount,
          },
          {
            id: 2,
            module: "System Access Status",
            link: "/client/onboarding/systemaccessstatus",
            value: 45,
          },
        ]);
  }, [pathname]);

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
          {items.map((data: ClientSidebarItemsType, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between mb-5 mx-2"
            >
              <span
                className={` ${
                  sidebarModule === data.id && "font-semibold"
                } mr-2 text-[#333333] text-[16px] cursor-default`}
              >
                {data.module}
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="relative flex items-center w-[100px] h-4 rounded-full bg-[#F6F6F6]">
                  <div
                    className={`absolute left-0 top-0 h-full ${
                      data.value < 93
                        ? "rounded-full"
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
                    className={`relative z-10 ml-auto mr-1 text-[8px] items-center ${
                      data.value > 85 ? "text-white" : "text-[#023963]"
                    }`}
                  >
                    {data.value}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyDrawer>
    </>
  );
};

export default ClientSidebar;
