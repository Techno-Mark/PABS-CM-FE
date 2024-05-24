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
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowY: "hidden",
  overflowX: "hidden",
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create("width", {
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
        className={`z-0 h-screen overflow-none ${
          closeDrawer ? "openDrawer" : ""
        }`}
        variant="permanent"
        open={openDrawer}
      >
        <div className="p-5 top-0 !h-[9%] flex items-center justify-between border-b">
          <span className="font-bold text-[18px]">
            {canEdit ? "Edit" : "Add"} {type}
          </span>
          <Tooltip title="Close" placement="bottom" arrow>
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
        <div className="!h-[9%] !bg-[#FFFFFF] flex items-center justify-end border-t pr-6 gap-5 w-[100%]">
          <Button
            onClick={() => {
              setOpenDrawer(false);
              setId();
            }}
            className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !rounded-full !w-[90px] font-semibold text-[16px]`}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className={`${isSaveEnabled && '!bg-[#023963]'} text-white !rounded-full !w-[71px]`}
            variant="contained"
            disabled={!isSaveEnabled}
          >
            {isLoading ? (
              <CircularProgress size={20} />
            ) : (
              <span className="uppercase font-semibold text-[16px]">Save</span>
            )}
          </Button>
        </div>
      </MyDrawer>
    </>
  );
};

export default DrawerPanel;
