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
// Cookie import
import Cookies from "js-cookie";

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
  clientInfo?: any;
  perCountBasicDetails: number;
  sidebarModule?: number;
  perCountChecklist: number;
}

const ClientSidebar = ({
  clientInfo,
  perCountBasicDetails,
  perCountChecklist,
  sidebarModule,
}: SidebarModuleTypes) => {
  const [items, setItems] = useState<ClientSidebarItemsType[]>([]);
  const businessTypeId = Cookies.get("businessTypeId");

  useEffect(() => {
    if (businessTypeId === "3" || clientInfo?.DepartmentId === 3) {
      setItems([
        {
          id: 31,
          module: "Basic Details",
          value: perCountBasicDetails,
        },
        {
          id: 32,
          module: "Checklist",
          value: perCountChecklist,
        }
      ]);
    } else if (businessTypeId === "2" || clientInfo?.DepartmentId === 2) {
      setItems([
        {
          id: 21,
          module: "Checklist",
          value: 0,
        }
      ]);
    } else {
      setItems([
        {
          id: 11,
          module: "Basic Details",
          value: 0,
        },
        {
          id: 12,
          module: "Checklist",
          value: 0,
        },
        {
          id: 13,
          module: "Account Details",
          value: 0,
        },
      ]);
    }
  }, [businessTypeId, clientInfo, perCountBasicDetails, perCountChecklist]);

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
              className="flex items-center justify-between w-full mb-5"
            >
              <span
                className={` ${
                  sidebarModule === data.id && "font-semibold"
                } mx-2 text-[#333333] text-[14px] text-wrap w-[40%] cursor-default`}
              >
                {data.module}
              </span>
              <div className="flex items-center justify-end w-[60%]">
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
                </div>
                  <span
                    className={`relative mx-2 z-10 text-[8px] items-center text-[#023963]`}
                  >
                    {data.value}%
                  </span>
              </div>
            </div>
          ))}
        </div>
      </MyDrawer>
    </>
  );
};

export default ClientSidebar;
