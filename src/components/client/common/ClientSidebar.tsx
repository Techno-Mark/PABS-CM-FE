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
import { ClientInfoType } from "@/models/autoCareBasicDetails";
import PABSLogo from "@/assets/Icons/client/PABSLogo";

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
  clientInfo?: ClientInfoType;
  perCountBasicDetails?: number;
  sidebarModule?: number;
  perCountChecklist?: number;
  perCountSmbChecklist?: number;
  perCountWhiteLabelBasicDetails?: number;
  perCountWhiteLabelChecklist?: number;
  setAutoCareProgressPercentage: any;
  setWhiteLabelProgressPercentage: any
}

const ClientSidebar = ({
  clientInfo,
  perCountBasicDetails,
  perCountChecklist,
  perCountSmbChecklist,
  perCountWhiteLabelBasicDetails,
  perCountWhiteLabelChecklist,
  sidebarModule,
  setAutoCareProgressPercentage,
  setWhiteLabelProgressPercentage
}: SidebarModuleTypes) => {
  const [items, setItems] = useState<ClientSidebarItemsType[]>([]);
  const businessTypeId = Cookies.get("businessTypeId");

  useEffect(() => {
    if (businessTypeId === "3" || clientInfo?.DepartmentId.toString() === "3") {
      setItems([
        {
          id: 31,
          module: "Basic Details",
          value: perCountBasicDetails || 0,
        },
        {
          id: 32,
          module: "Checklist",
          value: perCountChecklist || 0,
        },
      ]);
    } else if (
      businessTypeId === "2" ||
      clientInfo?.DepartmentId.toString() === "2"
    ) {
      setItems([
        {
          id: 21,
          module: "Checklist",
          value: perCountSmbChecklist || 0,
        },
      ]);
    } else {
      setItems([
        {
          id: 11,
          module: "Basic Details",
          value: perCountWhiteLabelBasicDetails || 0,
        },
        {
          id: 12,
          module: "Checklist",
          value: perCountWhiteLabelChecklist || 0,
        },
        {
          id: 13,
          module: "Account Details",
          value: 0,
        },
      ]);
    }
    if (perCountBasicDetails || perCountChecklist) {
      const progressPer = (perCountBasicDetails! + perCountChecklist!) / 2;
      setAutoCareProgressPercentage(Number(progressPer.toFixed(2)));
    }
    if (perCountWhiteLabelBasicDetails || perCountWhiteLabelChecklist) {
      const progressPer = (perCountWhiteLabelBasicDetails! + perCountWhiteLabelChecklist!) / 2;
      setWhiteLabelProgressPercentage(Number(progressPer.toFixed(2)));
    }
  }, [
    businessTypeId,
    clientInfo,
    perCountBasicDetails,
    perCountChecklist,
    perCountSmbChecklist,
    perCountWhiteLabelBasicDetails,
    perCountWhiteLabelChecklist
  ]);

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
              <PABSLogo width="186" height="64"/>
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
                className={` ${sidebarModule === data.id && "font-semibold"
                  } mx-2 text-[#333333] text-[14px] text-wrap w-[50%] cursor-default`}
              >
                {data.module}
              </span>
              {data.id !== 13 && (
                <div className="flex justify-start gap-2 w-[50%]">
                  <div className="relative flex items-start w-[100px] h-4 rounded-full bg-[#F6F6F6]">
                    <div
                      className={`absolute left-0 top-0 h-full ${data.value < 93
                          ? "rounded-full"
                          : "rounded-l-full rounded-r-full"
                        }`}
                      style={{
                        width: `${Math.max(
                          (data.value / 100) * 100,
                        )}px`,
                        backgroundColor: "#022946",
                      }}
                    ></div>
                  </div>
                  <span
                    className={`relative mr-1 pt-[2px] w-[40px] z-10 text-[8px] !justify-center items-center text-[#023963]`}
                  >
                    {data.value}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </MyDrawer>
    </>
  );
};

export default ClientSidebar;
