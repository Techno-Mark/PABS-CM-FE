// MUI Imports
import {
  Drawer,
  styled,
  Divider,
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

const openedMixin = (theme: Theme) => ({
  width: formDrawerWidth,
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

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  position: "absolute",
  bottom: 0,
  right: 0,
}));

const DrawerPanel = ({
  children,
  openDrawer,
  isLoading,
  canEdit,
  type,
  setOpenDrawer,
  handleSubmit
}: DrawerPropsType) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <MyDrawer
        anchor={"right"}
        classes={{ paper: classes.drawer }}
        className="z-0"
        variant="permanent"
        open={openDrawer}
      >
        <div className="p-5 top-0 flex justify-between">
          <span className="font-bold text-[18px]">
            {canEdit ? "Edit" : "Add"} {type}
          </span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => setOpenDrawer(false)}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <Divider />
        <div className="p-5 h-[calc(100%-143px)]">{children}</div>
        <Divider />
        <DrawerFooter>
          <div className="flex py-5 px-4 gap-5 w-full">
            <Button
              onClick={() => setOpenDrawer(false)}
              className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !h-[36px] !rounded-full !w-[90px] font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-[71px]`}
              variant="contained"
            >
              {isLoading ? (
                <CircularProgress size={20} />
              ) : (
                <span className="uppercase font-semibold text-[16px]">
                  Save
                </span>
              )}
            </Button>
          </div>
        </DrawerFooter>
      </MyDrawer>
    </>
  );
};

export default DrawerPanel;
