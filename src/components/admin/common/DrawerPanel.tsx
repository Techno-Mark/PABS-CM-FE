// MUI Imports
import {
  Drawer,
  styled,
  CssBaseline,
  Button,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { Theme } from "@material-ui/core/styles";
// Static import
import { formDrawerWidth } from "@/static/commonVariables";
// Types import
import { DrawerPropsType } from "@/models/common";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Icons import
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import { useEffect, useState } from "react";

const openedMixin = (theme: Theme) => ({
  width: formDrawerWidth,
  transition: theme.transitions.create("all", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowY: "hidden",
  overflowX: "hidden",
  left: 'auto',
});

const closedMixin = (theme: Theme) => ({
  left: "100%",
  transition: theme.transitions.create("all", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowY: "hidden",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MyDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }: any) => ({
  width: formDrawerWidth,
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

const DrawerPanel = ({
  children,
  openDrawer,
  isLoading,
  canEdit,
  isSaveEnabled,
  type,
  setOpenDrawer,
  handleSubmit,
  setId,
  submitButtonText = "Save",
  closeButtonText = "Cancel",
}: DrawerPropsType) => {
  const classes = useStyles();
  const [closeDrawer, setCloseDrawer] = useState<Boolean>(false);

  const closeDrawerPanel = () => {
    setCloseDrawer(true);
    setTimeout(() => {
      setCloseDrawer(false);
      setOpenDrawer(false);
      setId();
    }, 100);
  };

  useEffect(() => {
    openDrawer === false && closeDrawerPanel();
  }, [openDrawer]);

  return (
    <>
      <CssBaseline />
      <MyDrawer
        anchor={"right"}
        classes={{ paper: classes.drawer }}
        className={`z-0 h-screen overflow-none ${closeDrawer ? "openDrawer" : ""
          }`}
        variant="permanent"
        open={openDrawer}
      >
        <div className="p-5 top-0 !h-[9%] flex items-center justify-between border-b border-[#D8D8D8] bg-[#F6F6F6]">
          <span className="font-bold text-[18px]">
            {canEdit ? "Edit" : "Add"} {type}
          </span>
          <Tooltip title="Close" placement="bottom"
            classes={{
              tooltip: classes.tooltipStyle,
              arrow: classes.arrowStyle,
            }}
            arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => closeDrawerPanel()}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <div className="p-5 top-0 flex flex-col justify-start overflow-y-auto !h-[82%]">
          {children}
        </div>
        <div className="!h-[9%] !bg-[#FFFFFF] flex items-center justify-end border-t pr-6 gap-5 w-[100%] border-[#D8D8D8]">
          <Button
            onClick={() => {
              setOpenDrawer(false);
              setId();
            }}
            className={`py-1.5 px-5 border-[#0078C8] hover:border-[#023963] !bg-[#FFFFFF] hover:!bg-[#FFFFFF] text-[#0078C8] hover:text-[#023963] rounded h-[36px] font-normal text-[16px] capitalize`}
            variant="outlined"
          >
            {closeButtonText}
          </Button>
          <Button
            onClick={handleSubmit}
            className={`${isSaveEnabled ? '!bg-[#0078C8] hover:!bg-[#023963] !text-[#FFFFFF]' : '!bg-[#D8D8D8] text-[#6C6C6C]'} !rounded h-[36px] py-1.5 px-5 `}
            variant="contained"
            disabled={!isSaveEnabled}
          >
            {isLoading ? (
              <CircularProgress size={20} sx={{ color: "white !important" }} />
            ) : (
              <span className="font-normal text-[14px] capitalize">{submitButtonText}</span>
            )}
          </Button>
        </div>
      </MyDrawer>
    </>
  );
};

export default DrawerPanel;
