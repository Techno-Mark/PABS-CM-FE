import { useState } from "react";
// MUI Imports
import { TextField, Select, FormControl, MenuItem } from "@mui/material";
// Types imports
import { DrawerProps } from "@/models/userManage";
import { StringFieldType } from "@/models/common";
// Static imports
import {
  businessTypeOptionDrawer,
  statusOptionDrawer,
  userRolesDrawer,
} from "@/static/usermanage";
import { ToastType } from "@/static/toastType";
// Modal import
import ConfirmModal from "@/components/admin/common/ConfirmModal";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Drawer import
import DrawerPanel from "@/components/admin/common/DrawerPanel";
import { showToast } from "@/components/ToastContainer";

const UserDrawer = ({
  openDrawer,
  setOpenDrawer,
  canEdit,
  type,
}: DrawerProps) => {
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
  const [isInactive, setInactive] = useState<boolean>(false);

  const handleUserFullNameChange = (e: { target: { value: string } }) => {
    const specialCharsRegex = /[^\w\s-]/;
    if (e.target.value.trim().length === 0) {
      setUserFullName({
        value: e.target.value,
        error: true,
        errorText: "Name is Required",
      });
    } else if (e.target.value.trim().length > 50) {
      return;
    } else if (specialCharsRegex.test(e.target.value)) {
      setUserFullName({
        value: e.target.value,
        error: true,
        errorText: "Special characters are not allowed",
      });
    } else {
      setUserFullName({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (e.target.value.trim().length === 0) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is required",
      });
    } else if (e.target.value.trim().length > 254) {
      return;
    } else if (!emailRegex.test(e.target.value.trim())) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is not valid!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleRoleChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setRole({
        value: "-1",
        error: true,
        errorText: "Role is Required",
      });
    } else {
      setRole({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleBusinessTypeChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setBusinessType({
        value: "-1",
        error: true,
        errorText: "Business Type is Required",
      });
    } else {
      setBusinessType({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleStatusChange = (e: { target: { value: string } }) => {
    if (e.target.value.trim().length === 0 || e.target.value === "-1") {
      setStatus({
        value: "-1",
        error: true,
        errorText: "Status is Required",
      });
    } else if (e.target.value === "2") {
      setInactive(true);
    } else {
      setStatus({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const validateAndSetField = (
      field: React.Dispatch<React.SetStateAction<StringFieldType>>,
      value: string,
      message: string
    ) => {
      if (value.trim().length === 0 || value === "-1") {
        field({
          value: value,
          error: true,
          errorText: `${message} is required`,
        });
        return true;
      }
      return false;
    };

    const emailError = validateAndSetField(setEmail, email.value, "Email");
    const roleError = validateAndSetField(setRole, role.value, "Role");
    const businessTypeError = validateAndSetField(
      setBusinessType,
      businessType.value,
      "Business Type"
    );
    const statusError = validateAndSetField(setStatus, status.value, "Status");
    const userFullNameError = validateAndSetField(
      setUserFullName,
      userFullName.value,
      "Name"
    );

    if (
      emailError ||
      userFullNameError ||
      roleError ||
      businessTypeError ||
      email.error ||
      userFullName.error ||
      (canEdit && statusError)
    ) {
      setLoading(false);
    } else {
      showToast(
        "User profile has been created successfully",
        ToastType.Success
      );
      setTimeout(() => {
        setOpenDrawer(false);
        setLoading(false);
      }, 2000);
    }
  };

  const handleApplyChange = () => {
    setStatus({
      ...initialFieldStringValues,
      value: "2",
    });
    setInactive(false);
  };

  return (
    <>
      <DrawerPanel
        type={type}
        canEdit={canEdit}
        openDrawer={openDrawer}
        isLoading={isLoading}
        setOpenDrawer={(value) => setOpenDrawer(value)}
        handleSubmit={handleSubmit}
      >
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">
            User Full Name<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter User Full Name"
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
            error={email.error}
            helperText={email.errorText}
            onChange={handleEmailChange}
            InputProps={{
              classes: {
                underline: classes.underline,
              },
            }}
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
              error={role.error}
              onChange={handleRoleChange}
            >
              {userRolesDrawer.map((role) => (
                <MenuItem
                  key={role.value}
                  value={role.value}
                  disabled={role.value === "-1"}
                >
                  {role.label}
                </MenuItem>
              ))}
            </Select>
            {role.error && (
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
                {statusOptionDrawer.map((type) => (
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
              error={businessType.error}
              onChange={handleBusinessTypeChange}
            >
              {businessTypeOptionDrawer.map((type) => (
                <MenuItem
                  key={type.value}
                  value={type.value}
                  disabled={type.value === "-1"}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
            {businessType.error && (
              <span className="text-[#d32f2f]">{businessType.errorText}</span>
            )}
          </FormControl>
        </div>
      </DrawerPanel>

      {isInactive && (
        <ConfirmModal
          title="Inactive"
          isOpen={isInactive}
          message="Are you sure you want to inactive the user?"
          handleModalSubmit={handleApplyChange}
          handleClose={() => setInactive(false)}
          setIsOpen={(value) => setInactive(value)}
        />
      )}
    </>
  );
};

export default UserDrawer;
