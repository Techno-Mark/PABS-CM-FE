"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Component import
import Wrapper from "@/components/Wrapper";
// MUI import
import { Switch, TablePagination, Tooltip, MenuItem,  Select} from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
//Icons import
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
// static import
import { ToastType } from "@/static/toastType";
import { deleteRoleUrl, roleListUrl, toggleRoleUrl } from "@/static/apiUrl";
// Components import
import { showToast } from "@/components/ToastContainer";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import RoleDrawer from "@/components/admin/drawer/RoleDrawer";
// Type import
import { GetRoleListResponse } from "@/models/roleManage";
import { RoleListType, SwitchPopupType } from "@/models/settings";
// API import
import { callAPIwithHeaders } from "@/api/commonFunction";
// Utils import
import { checkPermission } from "@/utils/permissionCheckFunction";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
import { noRecordText } from "@/utils/commonData";
// Cookie import
import Cookies from "js-cookie";

function Page() {
  const columns: GridColDef[] = [
    {
      field: "srNo",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Sr No.</span>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return params.api.getSortedRowIds().indexOf(params.id) + 1;
      },
    },
    {
      field: "RoleName",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Role Name</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            {(checkPermission("Settings", "edit") ||
              checkPermission("Settings", "delete")) ? (
              <Select
                value=""
                displayEmpty
                size="small"
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  ".MuiSelect-select": {
                    padding: "0 !important",
                    width: "auto",
                  },
                  ".MuiSvgIcon-root": {
                    display: "none",
                  },
                  fontSize: 14,
                }}
                renderValue={() => (
                  <div>
                    {params.value}
                  </div>
                )}
              >
                {/* Edit Menu Item */}
                {checkPermission("Settings", "edit") && (
                  <MenuItem
                    value="edit"
                    onClick={() => {
                      setOpenDrawer(true);
                      setEdit(true);
                      setRoleId(params.row.RoleId);
                    }}
                    className="text-[14px] font-normal text-[#333] font-proximanova py-[10px] px-[15px]"
                  >
                    Edit
                  </MenuItem>
                )}
  
                {/* Delete Menu Item */}
                {params.row.RoleId !== 1 && checkPermission("Settings", "delete") && (
                  <MenuItem
                    value="delete"
                    onClick={() => {
                      setOpenDelete(true);
                      setRoleId(params.row.RoleId);
                    }}
                    className="text-[14px] font-normal text-[#333] font-proximanova py-[10px] px-[15px]"
                  >
                    Delete
                  </MenuItem>
                )}
              </Select>
            ) : <div>{params.value}</div>}
          </>
        );
      },
    },
    {
      field: "RoleStatus",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Status</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="flex justify-start h-full items-center -ml-3">
            <Switch
              checked={params.row.RoleStatus}
              onChange={(e) =>
                setSwitchPopup({
                  isOpen: true,
                  isChecked: e.target.checked,
                  roleId: params.row.RoleId,
                })
              }
              disabled={params.row.RoleId === 1}
            />
          </div>
        );
      },
    },
  ];

  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [roleData, setRoleData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [roleId, setRoleId] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [roleListParams, setRoleListParams] = useState<RoleListType>({
    page: 0,
    limit: 0,
    search: "",
    dropdown: false,
  });
  const [switchPopup, setSwitchPopup] = useState<SwitchPopupType>({
    isOpen: false,
    isChecked: null,
    roleId: 0,
  });

  useEffect(() => {
    const roleId = Cookies.get("roleId");
    if (roleId == "4") {
      router.push("/");
    } else {
      if (
        (checkPermission("Settings", "view") ||
          checkPermission("Settings", "create")) === false
      ) {
        router.push("/");
      }
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNo(0);
      setRoleListParams({
        ...roleListParams,
        search: search.trim(),
        page: 0 + 1,
        limit: rowsPerPage,
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    pageNo: number
  ) => {
    setPageNo(pageNo);
    setRoleListParams({
      ...roleListParams,
      page: pageNo + 1,
    });
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageNo(0);
    setRowsPerPage(parseInt(event.target.value));
    setRoleListParams({
      ...roleListParams,
      page: 1,
      limit: parseInt(event.target.value),
    });
  };

  const getRoleList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: GetRoleListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setRoleData(ResponseData.roles);
          setTotalCount(ResponseData.totalRoles);
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(roleListUrl, "post", callback, roleListParams);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (checkPermission("Settings", "view")) {
        getRoleList();
      } else {
        setLoading(false);
        showToast("You do not have view permission", ToastType.Error);
      }
    }, 550);

    return () => clearTimeout(timer);
  }, [roleListParams]);

  const handleToggleRole = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: null
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 });
          setIsLoading(false);
          getRoleList();
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setIsLoading(false);
          setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 });
          getRoleList();
          return;
      }
    };
    await callAPIwithHeaders(toggleRoleUrl, "post", callback, {
      roleId: switchPopup.roleId,
      status: switchPopup.isChecked,
    });
  };

  const handleDelete = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: null
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setIsLoading(false);
          setOpenDelete(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setIsLoading(false);
          setRoleId(0);
          setOpenDelete(false);
          setSearch("");
          setPageNo(0);
          setRoleListParams({
            ...roleListParams,
            search: "",
            page: 0 + 1,
            limit: rowsPerPage,
          });
          return;
      }
    };
    await callAPIwithHeaders(deleteRoleUrl, "post", callback, {
      roleId: roleId,
    });
  };

  return (
    <Wrapper className="settingModule">
      <div className="flex justify-between w-full mt-10 bg-[#F6F6F6] items-center px-6 py-5">
      <h3 className="font-semibold text-base tracking-wide">Settings</h3>  
        <div className="flex items-center gap-3 justify-end">
          {checkPermission("Settings", "view") ? (
            <div className="w-[250px] bg-[#FFFFFF] flex h-[36px] rounded-[300px]">
              <span className="m-3 flex items-center">
                <SearchIcon />
              </span>
              <input
                type="search"
                placeholder="Search"
                className="p-2 flex items-center text-[13px] outline-none w-full max-w-[230px] bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          ) : (
            <div>&nbsp;</div>
          )}
          {checkPermission("Settings", "create") && (
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setOpenDrawer(true);
                  setEdit(false);
                }}
                className={`px-5 normal-case text-[16px] bg-[#0078C8] hover:bg-[#023963] !text-[#fff] !rounded-md font-normal h-[36px]`}
              >
                Add Role
              </button>
            </div>
          )}
        </div>  
      </div>

      {checkPermission("Settings", "view") && (
        <div className="w-full h-[78vh] bg-[#FFFFFF] [&>div]:border-l-0 [&>div]:rounded-none">
          <DataGrid
            disableColumnMenu
            rows={roleData}
            columns={columns}
            getRowId={(i: any) => i.RoleId}
            localeText={noRecordText}
            loading={loading}
            slots={{
              loadingOverlay: CustomLoadingOverlay,
              footer: () => (
                <div className="flex justify-end">
                  <TablePagination
                    count={totalCount}
                    page={pageNo}
                    onPageChange={handlePageChange}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                  />
                </div>
              ),
            }}
            sx={{
              [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
                {
                  outline: "none",
                },
              [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
                {
                  outline: "none",
                },
              [`& .${gridClasses.columnHeaders}`]: {
                borderTop: "1px solid #6C6C6C",
                borderBottom: "2px solid #6C6C6C",
              },
            }}
          />
        </div>
      )}

      {openDrawer && (
        <RoleDrawer
          type="Role"
          canEdit={openEdit}
          roleId={roleId}
          setRoleId={() => setRoleId(0)}
          openDrawer={openDrawer}
          setOpenDrawer={(value) => setOpenDrawer(value)}
          getRoleList={getRoleList}
        />
      )}

      {switchPopup.isOpen && (
        <ConfirmModal
          title="Role"
          isLoading={isLoading}
          isOpen={switchPopup.isOpen}
          message={`Are you sure you want to ${
            switchPopup.isChecked === true ? "active" : "inactive"
          } the role?`}
          handleModalSubmit={handleToggleRole}
          handleClose={() =>
            setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 })
          }
          setIsOpen={(value) =>
            value === false &&
            setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 })
          }
          setId={() => {}}
          submitButtonText="Yes"
          closeButtonText = "No"
        />
      )}

      {openDelete && (
        <ConfirmModal
          title="Delete"
          isLoading={isLoading}
          isOpen={openDelete}
          message="Are you sure you want to delete the role?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => setOpenDelete(value)}
          setId={() => setRoleId(0)}
        />
      )}
      <DrawerOverlay isOpen={openDrawer} />
    </Wrapper>
  );
}

export default Page;
