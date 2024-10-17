import { ClientSidebarItemsType } from "@/models/adminSidebar";
import { useEffect, useState } from "react";
// Cookie import
import { ClientInfoType } from "@/models/autoCareBasicDetails";
import Cookies from "js-cookie";
// import { CircularProgress } from "@material-ui/core";
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';

// const openedMixin = (theme: Theme) => ({
//   width: clientDrawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),

//   overflowX: "hidden",
// });

// const MyDrawer = styled(Drawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }: any) => ({
//   width: clientDrawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
// }));

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
        // {
        //   id: 13,
        //   module: "Account Details",
        //   value: 0,
        // },
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
      {/* <CssBaseline />
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
        </List>*/}
      <div className="pt-4 w-full flex items-center border-t border-b border-[#D8D8D8]">
        {items.map((data: ClientSidebarItemsType, index: number) => (
          <div
            key={index}
            className="flex flex-row-reverse items-center justify-between mb-5 px-5 w-auto border-r border-[#D8D8D8] last:border-r-0 font-medium"
          >
            <span
              className={`mx-2 text-[#6C6C6C] text-[16px] text-wrap cursor-default uppercase font-medium ${sidebarModule === data.id && "!text-[#0078C8]"}`}
            >
              {data.module}
            </span>
            {data.id !== 13 && (
              <div className="flex justify-start gap-2">
                <div className={`relative border border-[3px] rounded-full w-[46px] h-[46px] ${sidebarModule === data.id && "border-[rgba(10,136,227,0.3)]"}`}>
                  <CircularProgress
                    variant="determinate"
                    className="w-[46px] relative top-[-3px] left-[-3px] !text-[#0A88E3]"
                    size={46}
                    thickness={3}
                    value={Math.max(
                      (data.value / 100) * 100,
                    )}
                    color={sidebarModule === data.id ? "primary" : "inherit"}
                  />
                  <span
                    className={`absolute top-0 left-0 z-10 text-[12px] flex justify-center items-center text-[#333333] w-full h-full font-medium`}
                  >{data.value}%
                  </span>
                </div>
                {/* <div className={`relative flex items-start w-[46px] h-[46px] rounded-full bg-white border border-[3px] ${(sidebarModule === data.id) ? 'border-[rgba(10,136,227,0.3)]' : 'border-[rgba(108,108,108,0.3)]'}`}> */}
                {/* <div
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
                  ></div> */}
                {/* <span
                    className={`pt-[2px] z-10 text-[12px] flex justify-center items-center text-[#023963] w-full h-full font-medium`}
                  >{data.value}%
                  </span>
                </div> */}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* </MyDrawer>  */}
    </>
  );
};

export default ClientSidebar;
