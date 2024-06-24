import { useCallback, useEffect, useState } from "react";
// MUI Imports
import { TextField, Select, FormControl, MenuItem } from "@mui/material";
// Types imports
import { GetUserByIdResponse, UserDrawerProps } from "@/models/userManage";
import {
  NumberFieldType,
  StringFieldType,
  UserFormFieldType,
} from "@/models/common";
// Static imports
import { statusOptionDrawer } from "@/static/usermanage";
import { ToastType } from "@/static/toastType";
import { saveUserUrl, getUserDetailsByIdUrl } from "@/static/apiUrl";
// Modal import
import ConfirmModal from "@/components/admin/common/ConfirmModal";
// Utlis import
import { useStyles } from "@/utils/useStyles";
import { checkPermission } from "@/utils/permissionCheckFunction";
// Component import
import DrawerPanel from "@/components/admin/common/DrawerPanel";
import { showToast } from "@/components/ToastContainer";
// API import
import { callAPIwithHeaders } from "@/api/commonFunction";
// Cookie import
import Cookies from "js-cookie";

const UserDrawer = ({
  openDrawer,
  setOpenDrawer,
  userId,
  setId,
  canEdit,
  type,
  getUserList,
  roleList,
  businessList,
}: UserDrawerProps) => {
  const roleId = Cookies.get("roleId");
  const classes = useStyles();
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };
  const initialFieldNumberValues = {
    ...initialFieldStringValues,
    value: -1,
  };
  const [fullName, setFullName] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [role, setRole] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });
  const [businessType, setBusinessType] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });
  const [status, setStatus] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isInactive, setInactive] = useState<boolean>(false);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  const [initialValues, setInitialValues] = useState<UserFormFieldType>({
    fullName: initialFieldStringValues,
    role: initialFieldNumberValues,
    businessType: initialFieldNumberValues,
    status: initialFieldNumberValues,
    email: initialFieldStringValues,
  });

  useEffect(() => {
    const getById = async () => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: GetUserByIdResponse
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            const newInitialValues = {
              fullName: {
                value: ResponseData.Username,
                error: false,
                errorText: "",
              },
              role: { value: ResponseData.RoleId, error: false, errorText: "" },
              businessType: {
                value: ResponseData.BusinessTypeId,
                error: false,
                errorText: "",
              },
              status: {
                value: ResponseData.Status ? 1 : 2,
                error: false,
                errorText: "",
              },
              email: { value: ResponseData.Email, error: false, errorText: "" },
            };
            setFullName(newInitialValues.fullName);
            setRole(newInitialValues.role);
            setBusinessType(newInitialValues.businessType);
            setStatus(newInitialValues.status);
            setEmail(newInitialValues.email);
            setInitialValues(newInitialValues);
            return;
        }
      };
      await callAPIwithHeaders(getUserDetailsByIdUrl, "post", callback, {
        userId: userId,
      });
    };
    userId > 0 && getById();
  }, [userId]);

  const handleFullNameChange = (e: { target: { value: string } }) => {
    const numbers_specialCharacter_Regex = /(\d|[^\w\s-])/;
    if (e.target.value.trim().length === 0) {
      setFullName({
        value: e.target.value,
        error: true,
        errorText: "Full Name is required",
      });
    } else if (numbers_specialCharacter_Regex.test(e.target.value)) {
      setFullName({
        value: e.target.value,
        error: true,
        errorText: "Numbers and Special characters are not allowed",
      });
    } else if (e.target.value.length > 50) {
      return;
    } else if (e.target.value.trim().length > 50) {
      setFullName({
        value: e.target.value,
        error: true,
        errorText: "Maximum 50 characters allowed",
      });
    } else {
      setFullName({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    const emailRegex = /^[\w+.-]+@([\w-]+\.)+[\w-]{2,4}$/;
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

  const handleRoleChange = (e: { target: { value: number | string } }) => {
    if (
      e.target.value.toString().trim().length === 0 ||
      Number(e.target.value) === -1
    ) {
      setRole({
        value: -1,
        error: true,
        errorText: "Role is required",
      });
    } else {
      setRole({
        ...initialFieldStringValues,
        value: Number(e.target.value),
      });
    }
  };

  const handleBusinessTypeChange = (e: {
    target: { value: number | string };
  }) => {
    if (
      e.target.value.toString().trim().length === 0 ||
      Number(e.target.value) === -1
    ) {
      setBusinessType({
        value: -1,
        error: true,
        errorText: "Department Type is required",
      });
    } else {
      setBusinessType({
        ...initialFieldStringValues,
        value: Number(e.target.value),
      });
    }
  };

  const handleStatusChange = (e: { target: { value: number | string } }) => {
    if (
      e.target.value.toString().trim().length === 0 ||
      Number(e.target.value) === -1
    ) {
      setStatus({
        value: -1,
        error: true,
        errorText: "Status is required",
      });
    } else if (Number(e.target.value) === 2) {
      setInactive(true);
    } else {
      setStatus({
        ...initialFieldStringValues,
        value: Number(e.target.value),
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
      if (value.toString().trim().length === 0 || value === "-1") {
        field({
          value: value,
          error: true,
          errorText: `${message} is required`,
        });
        return true;
      }
      return false;
    };

    const validateAndSetFieldNumber = (
      field: React.Dispatch<React.SetStateAction<NumberFieldType>>,
      value: number,
      message: string
    ) => {
      if (value.toString().trim().length === 0 || value === -1) {
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
    const roleError = validateAndSetFieldNumber(setRole, role.value, "Role");
    const businessTypeError = validateAndSetFieldNumber(
      setBusinessType,
      businessType.value,
      "Department Type"
    );
    const statusError = validateAndSetFieldNumber(
      setStatus,
      status.value,
      "Status"
    );
    const fullNameError = validateAndSetField(
      setFullName,
      fullName.value,
      "Full Name"
    );

    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: null
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setLoading(false);
          setOpenDrawer(false);
          setId();
          checkPermission("User Management", "view") && getUserList();
          return;
      }
    };

    if (
      emailError ||
      fullNameError ||
      roleError ||
      businessTypeError ||
      email.error ||
      fullName.error ||
      (canEdit && statusError)
    ) {
      setLoading(false);
    } else {
      const statusBool =
        status.value === 1 ? true : status.value === 2 ? false : true;
      await callAPIwithHeaders(saveUserUrl, "post", callback, {
        userId: userId,
        fullName: fullName.value.trimEnd(),
        email: email.value,
        roleId: role.value,
        businessTypeId: businessType.value,
        userStatus: userId > 0 ? statusBool : true,
      });
    }
  };

  const handleApplyChange = () => {
    setStatus({
      ...initialFieldStringValues,
      value: 2,
    });
    setInactive(false);
  };

  const compareValues = useCallback(() => {
    const currentValues: UserFormFieldType = {
      fullName,
      role,
      businessType,
      status,
      email,
    };
    for (const key in currentValues) {
      if (
        currentValues[key as keyof UserFormFieldType].value !==
        initialValues[key as keyof UserFormFieldType].value
      ) {
        return true;
      }
    }
    return false;
  }, [fullName, role, businessType, status, email, initialValues]);

  useEffect(() => {
    setIsSaveButtonEnabled(compareValues());
  }, [fullName, role, businessType, status, email, compareValues]);

  return (
    <>
      <DrawerPanel
        type={type}
        isSaveEnabled={isSaveButtonEnabled}
        canEdit={canEdit}
        openDrawer={openDrawer}
        isLoading={isLoading}
        setOpenDrawer={(value) => setOpenDrawer(value)}
        handleSubmit={handleSubmit}
        setId={setId}
      >
        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">
            Full Name<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter Full Name"
            value={fullName.value}
            error={fullName.error}
            helperText={fullName.errorText}
            onChange={handleFullNameChange}
            InputProps={{
              classes: {
                underline: classes.underline,
              },
            }}
            inputProps={{
              className: classes.textSize,
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
            error={Number(roleId) !== 1 && canEdit ? false : email.error}
            helperText={Number(roleId) !== 1 && canEdit ? "" : email.errorText}
            onChange={handleEmailChange}
            InputProps={{
              classes: {
                underline: classes.underline,
              },
            }}
            inputProps={{
              className: classes.textSize,
            }}
            disabled={Number(roleId) !== 1 && canEdit ? true : false}
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
                role.value === -1
                  ? "!text-[12px] text-[#6E6D7A]"
                  : "!text-[14px]"
              }`}
              value={role.value}
              error={Number(roleId) !== 1 && canEdit ? false : role.error}
              onChange={handleRoleChange}
              disabled={Number(roleId) !== 1 && canEdit ? true : false}
            >
              {roleList.map((role) => (
                <MenuItem
                  key={role.RoleId}
                  value={role.RoleId}
                  disabled={role.RoleId === -1}
                >
                  {role.RoleName}
                </MenuItem>
              ))}
            </Select>
            {role.error && (
              <span className="text-[#d32f2f]">{role.errorText}</span>
            )}
          </FormControl>
        </div>

        <div className="text-[12px] flex flex-col">
          <label className="text-[#6E6D7A] text-[12px]">
            Department Type<span className="text-[#DC3545]">*</span>
          </label>
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              className={`${
                businessType.value === -1
                  ? "!text-[12px] text-[#6E6D7A]"
                  : "!text-[14px]"
              }`}
              value={businessType.value}
              error={businessType.error}
              onChange={handleBusinessTypeChange}
            >
              {businessList.map((type) => (
                <MenuItem
                  key={type.BusinessId}
                  value={type.BusinessId}
                  disabled={type.BusinessId === -1}
                >
                  {type.BussinessName}
                </MenuItem>
              ))}
            </Select>
            {businessType.error && (
              <span className="text-[#d32f2f]">{businessType.errorText}</span>
            )}
          </FormControl>
        </div>
        {canEdit && (
          <div className="text-[12px] flex flex-col pt-5">
            <label className="text-[#6E6D7A] text-[12px]">
              Select Status<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  status.value === -1
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
                    disabled={type.value === -1}
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
