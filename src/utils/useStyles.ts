import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  imageCenter: {
    justifyContent: "center",
    width: "100%",
  },
  avatarStyle: {
    height: "24px",
    width: "24px",
    fontSize: "12px",
  },
  textSize: {
    fontSize: "14px",
  },
  drawer: {
    background: "#FFFFFF",
    height: "100%",
  },
  sidebarDrawer: {
    // background: "#023963 !important",
    height: "100%",
    justifyContent:"space-between"
  },
  underlineWithPlaceholderColor: {
    "&:after": {
      borderBottom: "0.5px solid #023963",
    },
    "& .MuiInputBase-input": {
      borderColor: "#023963",
    },
    "& .MuiInputBase-input::placeholder": {
      "--tw-placeholder-opacity": 1,
      color: "#6E7487",
    },
  },
  underline: {
    "&:after": {
      borderBottom: "0.5px solid #023963",
    },
    "& .MuiInputBase-input": {
      borderColor: "#023963",
    },
  },
  underlineDropdown: {
    "& div::before": {
      borderBottom: "none !important",
    },
  },
  select: {
    "& .MuiSelect-select": {
      height: "21px !important",
      fontSize: "14px !important",
    },
  },
  checkbox: {
    "& .MuiCheckbox-root": {
      paddingLeft: "0px !important",
    },
  },
  date: {
    "& .MuiInputBase-input": {
      fontSize: "12px !important",
    },
  },
});
