import { NumberFieldType, StringFieldType } from "@/models/common";
import {
  GetRoleByIdResponse,
  RoleDrawerProps,
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
import React, { useEffect, useState } from "react";
import DrawerPanel from "../common/DrawerPanel";
import { callAPIwithHeaders } from "@/api/commonFunction";
import {
  getRoleDetailsByIdUrl,
  getRolePermission,
  saveRoleUrl,
} from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";
import { GridColDef } from "@mui/x-data-grid";
import { statusOptionDrawer } from "@/static/usermanage";

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
  const [role, setRole] = useState<NumberFieldType>({
    ...initialFieldNumberValues,
    value: -1,
  });
  const [permission, setPermission] = useState<RolePermission[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

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
            setRoleName({
              value: ResponseData.roleName,
              error: false,
              errorText: "",
            });
            setRole({
              value:
                ResponseData.status === 0
                  ? 2
                  : ResponseData.status === 1
                  ? 1
                  : -1,
              error: false,
              errorText: "",
            });
            setPermission(ResponseData.permissions);
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
    } else if (e.target.value.trim().length > 50) {
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
        errorText: "Role Status is Required",
      });
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

    const roleError = validateAndSetFieldNumber(
      setRole,
      role.value,
      "Role Status"
    );
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

  return (
    <DrawerPanel
      type={type}
      canEdit={canEdit}
      openDrawer={openDrawer}
      isLoading={isLoading}
      setOpenDrawer={(value) => setOpenDrawer(value)}
      handleSubmit={handleSubmit}
      setId={setRoleId}
    >
      <div className="text-[12px] flex flex-col mb-5">
        <label className="text-[#6E6D7A] text-[12px]">
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
            },
          }}
          inputProps={{
            className: classes.textSize,
          }}
        />
      </div>
      <div className="text-[12px] flex flex-col pb-5">
        <label className="text-[#6E6D7A] text-[12px]">
          Role Status<span className="text-[#DC3545]">*</span>
        </label>
        <FormControl variant="standard">
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            className={`${
              role.value === -1 ? "!text-[12px] text-[#6E6D7A]" : "!text-[14px]"
            }`}
            value={role.value}
            error={role.error}
            onChange={handleRoleChange}
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
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                Module
              </th>
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                All
              </th>
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                View
              </th>
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                Create
              </th>
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                Edit
              </th>
              <th
                scope="col"
                className="px-2 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 tracking-wider"
              >
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {permission.map((item) => (
              <tr key={item.moduleId}>
                <td className="whitespace-nowrap w-1/4">
                  <div className="flex items-start">
                    <div className="ml-2">
                      <div className="text-[13px] font-medium text-gray-900">
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
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DrawerPanel>
  );
};

export default RoleDrawer;
