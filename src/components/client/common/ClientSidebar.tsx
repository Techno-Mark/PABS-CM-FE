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
import { drawerWidth } from "@/static/commonVariables";
// Utlis import
import { useStyles } from "@/utils/useStyles";
import CallIcon from "@/assets/Icons/client/sidebar/CallIcon";

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

const SidebarData = [
  { label: "Basic Details", value: 27 },
  { label: "Amount Details", value: 0 },
  { label: "Taxation Workflow", value: 100 },
];

const ClientSidebar = () => {
  const classes = useStyles();
  const pathname = usePathname();

  return (
    <>
      <CssBaseline />
      <MyDrawer className="z-0 h-screen" variant="permanent" open={true}>
        <List className="m-0 p-0 min-h-[80px] !bg-[#023963]">
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 80,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#023963",
              }}
            >
              <Image
                alt="PABS_Logo"
                src={"/PABS.png"}
                width={150}
                height={150}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <div className="mt-8">
          {SidebarData.map(
            (data: { label: string; value: number }, index: number) => (
              <div
                key={index}
                className="flex items-center justify-between mb-5 mx-2"
              >
                <span className="mr-2 w-[100px] text-md">{data.label}</span>
                <div className="relative flex items-center w-[60px] h-4 rounded-full bg-[#F6F6F6]">
                  <div
                    className={`absolute left-0 top-0 h-full ${
                      data.value < 93
                        ? "rounded-l-full"
                        : "rounded-l-full rounded-r-full"
                    }`}
                    style={{
                      width: `${Math.max((data.value / 100) * 60, 6)}px`, // Adjust width and ensure a minimum width of 8px
                      backgroundColor: "#022946",
                    }}
                  ></div>
                  <span
                    className={`relative z-10 ml-auto mr-1 text-[8px] ${
                      data.value > 63 ? "text-white" : "text-[#023963]"
                    }`}
                  >
                    {data.value}%
                  </span>
                </div>
              </div>
            )
          )}
        </div>
        <DrawerFooter>
          <Divider sx={{ mb: 1 }} />
          <div className="text-[#333333] flex items-center justify-center gap-2 border border-[#6E6D7A] bg-[#0229460D] py-2 pl-4 pr-16 mx-1 cursor-pointer rounded-md">
            <CallIcon />
            Contact us
          </div>
        </DrawerFooter>
      </MyDrawer>
    </>
  );
};

export default ClientSidebar;