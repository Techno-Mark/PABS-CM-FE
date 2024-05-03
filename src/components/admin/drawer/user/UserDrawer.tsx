import { useState } from "react";
// MUI Imports
import {
  Drawer,
  styled,
  Divider,
  CssBaseline,
  Button,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { Theme, makeStyles } from "@material-ui/core/styles";
// Types imports
import { DrawerProps } from "@/models/UserManage";
// Static data imports
import {
  businessTypeOption,
  statusOption,
  userRoles,
} from "@/static/usermanage";
import { formDrawerWidth } from "@/static/commonVariables";
// Icons imports
import CloseIcon from "@/assets/Icons/admin/CloseIcon";

const useStyles = makeStyles({
  imageCenter: {
    justifyContent: "center",
    width: "100%",
  },

  textSize: {
    fontSize: "14px",
    fontFamily: "Poppins !important",
  },

  drawer: {
    background: "#FFFFFF",
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

const UserDrawer = ({ openDrawer, setOpenDrawer, canEdit }: DrawerProps) => {
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };
  const classes = useStyles();
  const [userFullName, setUserFullName] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [role, setRole] = useState<StringFieldType>({
    ...initialFieldStringValues,
    value: "-1",
  });
  const [businessType, setBusinessType] = useState<StringFieldType>({
    ...initialFieldStringValues,
    value: "-1",
  });
  const [status, setStatus] = useState<StringFieldType>({
    ...initialFieldStringValues,
    value: "-1",
  });

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleUserFullNameChange = (e: { target: { value: string } }) => {
    const specialCharsRegex = /[^\w\s-]/;
    if (e.target.value.trim().length === 0) {
      setUserFullName({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is Required",
      });
    } else if (e.target.value.trim().length > 50) {
      return;
    } else if (specialCharsRegex.test(e.target.value)) {
      setUserFullName({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "Special characters are not allowed",
      });
    } else {
      setUserFullName({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0) {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
        error: true,
        errorText: "This field is required",
      });
    } else if (e.target.value.trim().length > 254) {
      return;
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value.trim())
    ) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is not valid!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleRoleChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setRole({
        ...initialFieldStringValues,
        value: "-1",
        error: true,
        errorText: "This field is Required",
      });
    } else {
      setRole({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleBusinessTypeChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setBusinessType({
        ...initialFieldStringValues,
        value: "-1",
        error: true,
        errorText: "This field is Required",
      });
    } else {
      setBusinessType({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleStatusChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setStatus({
        ...initialFieldStringValues,
        value: "-1",
        error: true,
        errorText: "This field is Required",
      });
    } else {
      setStatus({
        ...initialFieldStringValues,
        value: e.target.value,
        error: false,
        errorText: "",
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const validateAndSetField = (field: any, value: string) => {
      if (value.trim().length === 0 || value === "-1") {
        field({
          ...initialFieldStringValues,
          value: value === "-1" ? "-1" : value,
          error: true,
          errorText: "This field is required",
        });
        return true;
      }
      return false;
    };

    const emailError = validateAndSetField(setEmail, email.value);
    const roleError = validateAndSetField(setRole, role.value);
    const businessTypeError = validateAndSetField(
      setBusinessType,
      businessType.value
    );
    const statusError = validateAndSetField(setStatus, status.value);
    const userFullNameError = validateAndSetField(
      setUserFullName,
      userFullName.value
    );

    if (canEdit) {
      if (userFullNameError || statusError) {
        setLoading(false);
      } else {
        setTimeout(() => {
          console.log("success");
          setLoading(false);
        }, 2000);
      }
    } else {
      if (emailError || userFullNameError || roleError || businessTypeError) {
        setLoading(false);
      } else {
        setTimeout(() => {
          console.log("success");
          setLoading(false);
        }, 2000);
      }
    }
  };

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
            {" "}
            {canEdit ? "Edit" : "Add"} User
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
        <div className="p-5 h-[calc(100%-143px)]">
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              User Full Name<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Client Full Name"
              value={userFullName.value}
              error={userFullName.error}
              helperText={userFullName.errorText}
              onChange={handleUserFullNameChange}
              InputProps={{
                classes: {
                  underline: classes.underline,
                },
              }}
            />
          </div>
          <div className="text-[12px] flex flex-col py-5">
            <label className="text-[#6E6D7A] text-[12px]">
              Email<span className="text-[#DC3545]">*</span>
            </label>
            <TextField
              id="outlined-basic"
              variant="standard"
              size="small"
              placeholder="Please Enter Email"
              value={email.value}
              error={email.error && !canEdit}
              helperText={email.errorText && !canEdit ? email.errorText : ""}
              onChange={handleEmailChange}
              InputProps={{
                classes: {
                  underline: classes.underline,
                },
              }}
              disabled={canEdit}
            />
          </div>
          <div className="text-[12px] flex flex-col pb-5">
            <label className="text-[#6E6D7A] text-[12px]">
              Role<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  role.value === "-1"
                    ? "!text-[12px] text-[#6E6D7A]"
                    : "!text-[14px]"
                }`}
                value={role.value}
                error={role.error && !canEdit}
                onChange={handleRoleChange}
                disabled={canEdit}
              >
                {userRoles.map((role) => (
                  <MenuItem
                    key={role.value}
                    value={role.value}
                    disabled={role.value === "-1"}
                  >
                    {role.label}
                  </MenuItem>
                ))}
              </Select>
              {role.error && !canEdit && (
                <span className="text-[#d32f2f]">{role.errorText}</span>
              )}
            </FormControl>
          </div>
          {canEdit && (
            <div className="text-[12px] flex flex-col pb-5">
              <label className="text-[#6E6D7A] text-[12px]">
                Select Status<span className="text-[#DC3545]">*</span>
              </label>
              <FormControl variant="standard">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  className={`${
                    status.value === "-1"
                      ? "!text-[12px] text-[#6E6D7A]"
                      : "!text-[14px]"
                  }`}
                  value={status.value}
                  error={status.error}
                  onChange={handleStatusChange}
                >
                  {statusOption.map((type) => (
                    <MenuItem
                      key={type.value}
                      value={type.value}
                      disabled={type.value === "-1"}
                    >
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
                {status.error && (
                  <span className="text-[#d32f2f]">{status.errorText}</span>
                )}
              </FormControl>
            </div>
          )}
          <div className="text-[12px] flex flex-col">
            <label className="text-[#6E6D7A] text-[12px]">
              Select Business Type<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  businessType.value === "-1"
                    ? "!text-[12px] text-[#6E6D7A]"
                    : "!text-[14px]"
                }`}
                value={businessType.value}
                error={businessType.error && !canEdit}
                onChange={handleBusinessTypeChange}
                disabled={canEdit}
              >
                {businessTypeOption.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === "-1"}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
              {businessType.error && !canEdit && (
                <span className="text-[#d32f2f]">{businessType.errorText}</span>
              )}
            </FormControl>
          </div>
        </div>
        <Divider />
        <DrawerFooter>
          <div className="flex py-5 px-4 gap-5 w-full">
            <Button
              onClick={() => setOpenDrawer(false)}
              className={`!border-[#023963] text-[#023963] !h-[36px] !rounded-full !w-[90px] font-semibold text-[16px]`}
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

export default UserDrawer;
