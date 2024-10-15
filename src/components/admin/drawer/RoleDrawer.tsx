import React, { useCallback, useEffect, useState } from "react";
//Types imports
import { NumberFieldType, StringFieldType } from "@/models/common";
import {
  GetRoleByIdResponse,
  RoleDrawerProps,
  RoleFormFieldType,
  RolePermission,
} from "@/models/roleManage";
import { useStyles } from "@/utils/useStyles";
import {
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// API import
import { callAPIwithHeaders } from "@/api/commonFunction";
// Static imports
import {
  getRoleDetailsByIdUrl,
  getRolePermission,
  saveRoleUrl,
} from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { statusOptionDrawer } from "@/static/usermanage";
// Component import
import { showToast } from "@/components/ToastContainer";
import DrawerPanel from "@/components/admin/common/DrawerPanel";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

const RoleDrawer = ({
  openDrawer,
  setOpenDrawer,
  roleId,
  setRoleId,
  canEdit,
  type,
  getRoleList,
}: RoleDrawerProps) => {
  const classes = useStyles();
  const headers = ["Module", "All", "View", "Create", "Edit", "Delete"];
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };

  const initialFieldNumberValues = {
    value: -1,
    error: false,
    errorText: "",
  };
  const [roleName, setRoleName] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [isInactive, setInactive] = useState<boolean>(false);
  const [role, setRole] = useState<NumberFieldType>({
    ...initialFieldNumberValues,
    value: -1,
  });
  const [permission, setPermission] = useState<RolePermission[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
  const [initialValues, setInitialValues] = useState<RoleFormFieldType>({
    roleName: initialFieldStringValues,
    role: initialFieldNumberValues,
    permission: permission,
  });

  useEffect(() => {
    const getById = async () => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: GetRoleByIdResponse
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            const newInitialValues = {
              roleName: {
                value: ResponseData.roleName,
                error: false,
                errorText: "",
              },
              role: {
                value: ResponseData.status ? 1 : 2,
                error: false,
                errorText: "",
              },
              permission: ResponseData.permissions,
            };
            setRoleName(newInitialValues.roleName);
            setRole(newInitialValues.role);
            setPermission(newInitialValues.permission);
            setInitialValues(newInitialValues);
            return;
        }
      };
      await callAPIwithHeaders(getRoleDetailsByIdUrl, "post", callback, {
        roleId: roleId,
      });
    };

    const getPermission = async () => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: RolePermission[]
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            setPermission(ResponseData);
            return;
        }
      };
      await callAPIwithHeaders(getRolePermission, "get", callback, {});
    };

    roleId > 0 && getById();
    roleId <= 0 && getPermission();
  }, [roleId]);

  const handleRoleNameChange = (e: { target: { value: string } }) => {
    const specialCharsRegex = /[^\w\s-]/;
    if (e.target.value.trim().length === 0) {
      setRoleName({
        value: e.target.value,
        error: true,
        errorText: "Role Name is Required",
      });
    } else if (e.target.value.trim().length > 60) {
      return;
    } else if (specialCharsRegex.test(e.target.value)) {
      setRoleName({
        value: e.target.value,
        error: true,
        errorText: "Special characters are not allowed",
      });
    } else {
      setRoleName({
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
        errorText: "Status is Required",
      });
    } else if (canEdit && Number(e.target.value) === 2) {
      setInactive(true);
    } else {
      setRole({
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

    const roleError = validateAndSetFieldNumber(setRole, role.value, "Status");
    const roleNameError = validateAndSetField(
      setRoleName,
      roleName.value,
      "Role Name"
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
          setRoleId();
          getRoleList();
          return;
      }
    };

    if (roleNameError || roleError || roleName.error) {
      setLoading(false);
    } else {
      await callAPIwithHeaders(saveRoleUrl, "post", callback, {
        roleId: roleId,
        roleName: roleName.value,
        status: role.value === 1 ? true : false,
        modules: permission,
      });
    }
  };

  const handleChangePermission = (item: RolePermission) => {
    setPermission(
      permission.map((p: RolePermission) =>
        p.moduleId === item.moduleId ? item : p
      )
    );
  };

  const handleApplyChange = () => {
    setRole({
      ...initialFieldStringValues,
      value: 2,
    });
    setInactive(false);
  };

  const comparePermissions = (
    currentPermissions: RolePermission[],
    initialPermissions: RolePermission[]
  ) => {
    if (currentPermissions.length !== initialPermissions.length) {
      return true;
    }
  
    for (let i = 0; i < currentPermissions.length; i++) {
      const current = currentPermissions[i];
      const initial = initialPermissions[i];
      if (
        current.view !== initial.view ||
        current.create !== initial.create ||
        current.edit !== initial.edit ||
        current.delete !== initial.delete
      ) {
        return true;
      }
    }
  
    return false;
  };

  const compareValues = useCallback(() => {
    const currentValues: RoleFormFieldType = {
      roleName,
      role,
      permission,
    };
  
    for (const key in currentValues) {
      if (key === "permission") {
        if (
          comparePermissions(
            currentValues.permission,
            initialValues.permission
          )
        ) {
          return true;
        }
      } else {
        if (
          currentValues[key as keyof RoleFormFieldType].value !==
          initialValues[key as keyof RoleFormFieldType].value
        ) {
          return true;
        }
      }
    }
  
    return false;
  }, [roleName, role, permission, initialValues]);
  
  useEffect(() => {
    setIsSaveButtonEnabled(compareValues());
  }, [roleName, role, permission, compareValues]);


  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown state

  const handleDropdownToggle = (dropdownName: any) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };


  return (
    <>
      <DrawerPanel
        isSaveEnabled={isSaveButtonEnabled}
        type={type}
        canEdit={canEdit}
        openDrawer={openDrawer}
        isLoading={isLoading}
        setOpenDrawer={(value) => setOpenDrawer(value)}
        handleSubmit={handleSubmit}
        setId={setRoleId}
      >
        <div className="text-[12px] flex flex-col mb-5">
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            Role Name<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter Role Name"
            value={roleName.value}
            error={roleName.error}
            helperText={roleName.errorText}
            onChange={handleRoleNameChange}
            InputProps={{
              classes: {
                underline: classes.underline,
                input: classes.inputWithPlaceholder,
              },
            }}
            inputProps={{
              className: classes.textSize,
            }}
          />
        </div>
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            Status<span className="text-[#DC3545]">*</span>
          </label>
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              className={`${
                role.value === -1
                  ? "!text-[12px] font-normal text-[#6C6C6C]/50 font-proximanova tracking-[0.28px]"
                  : "!text-[14px] font-normal text-[#333333] font-proximanova"
              }`}
              value={role.value}
              error={role.error}
              onChange={handleRoleChange}
              onOpen={() => handleDropdownToggle("departmentType")}
              onClose={() => handleDropdownToggle(null)}
              disabled={roleId === 1}
              IconComponent={() => (
                <DropDownArrow
                  fillColor="#333"
                  style={{
                    transform:
                      openDropdown === "departmentType"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              )}
            >
              {statusOptionDrawer.map((role) => (
                <MenuItem
                  key={role.value}
                  value={role.value}
                  disabled={role.value === -1}
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
        <div className="text-[12px] flex flex-col pb-5 -ml-2">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                {headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="px-1 py-3 bg-gray-50 text-left font-bold text-[13px] text-[#333] uppercase tracking-[0.28px]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {permission.map((item) => (
                <tr key={item.moduleId}>
                  <td className="whitespace-nowrap w-1/4">
                    <div className="flex items-start">
                      <div className="ml-2">
                        <div className="text-[14px] font-normal text-[#333]">
                          {item.moduleName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="pr-2">
                    <Checkbox
                      checked={
                        item.view && item.create && item.edit && item.delete
                      }
                      onChange={(e) =>
                        handleChangePermission({
                          ...item,
                          view: e.target.checked,
                          create: e.target.checked,
                          edit: e.target.checked,
                          delete: e.target.checked,
                        })
                      }
                      disabled={roleId === 1}
                    />
                  </td>
                  <td className="pr-2">
                    <Checkbox
                      checked={item.view}
                      onChange={(e) =>
                        handleChangePermission({
                          ...item,
                          view: e.target.checked,
                        })
                      }
                      disabled={roleId === 1}
                    />
                  </td>
                  <td className="pr-2">
                    <Checkbox
                      checked={item.create}
                      onChange={(e) =>
                        handleChangePermission({
                          ...item,
                          create: e.target.checked,
                        })
                      }
                      disabled={roleId === 1}
                    />
                  </td>
                  <td className="pr-2">
                    <Checkbox
                      checked={item.edit}
                      onChange={(e) =>
                        handleChangePermission({
                          ...item,
                          edit: e.target.checked,
                        })
                      }
                      disabled={roleId === 1}
                    />
                  </td>
                  <td className="pr-2">
                    <Checkbox
                      checked={item.delete}
                      onChange={(e) =>
                        handleChangePermission({
                          ...item,
                          delete: e.target.checked,
                        })
                      }
                      disabled={roleId === 1}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DrawerPanel>

      {isInactive && (
        <ConfirmModal
          title="Inactive"
          isOpen={isInactive}
          message="Are you sure you want to inactive the role?"
          handleModalSubmit={handleApplyChange}
          handleClose={() => setInactive(false)}
          setIsOpen={(value) => setInactive(value)}
        />
      )}
    </>
  );
};

export default RoleDrawer;
