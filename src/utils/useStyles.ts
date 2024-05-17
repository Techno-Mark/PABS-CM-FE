import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  imageCenter: {
    justifyContent: "center",
    width: "100%",
  },
  textSize: {
    fontSize: "14px",
  },
  drawer: {
    background: "#FFFFFF",
    height: "100%",
  },
  sidebarDrawer: {
    background: "#023963 !important",
    height: "100%",
  },
  underline: {
    "&:after": {
      borderBottom: "0.5px solid #023963",
    },
    "& .MuiInputBase-input": {
      borderColor: "#023963",
    },
  },
});
