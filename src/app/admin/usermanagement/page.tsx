"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Components imports
import Wrapper from "@/components/Wrapper";
import UserDrawer from "@/components/admin/drawer/UserDrawer";
import UserFilter from "@/components/admin/modals/UserFilter";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import { showToast } from "@/components/ToastContainer";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
// MUI imports
import { TablePagination, Tooltip, MenuItem, Select } from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
// static import
import { ToastType } from "@/static/toastType";
import {
  businessListUrl,
  deleteUserUrl,
  getUserListUrl,
  roleListUrl,
} from "@/static/apiUrl";
// API import
import { callAPIwithHeaders } from "@/api/commonFunction";
// Type import
import {
  BusinessList,
  BusinessListResponse,
  GetUserListResponse,
  RoleList,
  RoleListResponse,
  UserList,
} from "@/models/userManage";
// Utils import
import { checkPermission } from "@/utils/permissionCheckFunction";
import { noRecordText, renderCellFunction } from "@/utils/commonData";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
import { useStyles } from "@/utils/useStyles";
// Cookie import
import Cookies from "js-cookie";

function Page() {
  const router = useRouter();
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "srNo",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Sr No.</span>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <span className="font-semibold">{params.value}</span>
      ),
    },
    {
      field: "Username",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Full Name</span>
      ),
      flex: 1,
      sortable: false,
      // renderCell: (params) => renderCellFunction(params.value),
      renderCell: (params) => {
        const userId = Cookies.get("userId");
        if (
          checkPermission("User Management", "edit") ||
          checkPermission("User Management", "delete")
        ) {
          return (
            <>
              {userId === params.row.UserId ? (
                ""
              ) : (checkPermission("User Management", "edit") ||
                checkPermission("User Management", "delete")) && (
                <div className="flex gap-9 justify-start h-full items-center">
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
                    {checkPermission("User Management", "edit") && (
                      <MenuItem
                        value="edit"
                        onClick={async () => {
                          setOpenDrawer(true);
                          setEdit(true);
                          setUserId(params.row.UserId);
                          getBusinessList(params.row.RoleName);
                        }}
                        className="text-[14px] font-normal text-[#333] font-proximanova py-[10px] px-[15px]"
                      >
                        Edit
                      </MenuItem>
                    )}

                    {/* Delete Menu Item */}
                    {checkPermission("User Management", "delete") && (
                      <MenuItem
                        value="delete"
                        onClick={() => {
                          setIsLoading(false);
                          setOpenDelete(true);
                          setUserId(params.row.UserId);
                        }}
                        className="text-[14px] font-normal text-[#333] font-proximanova py-[10px] px-[15px]"
                      >
                        Delete
                      </MenuItem>
                    )}
                  </Select>
                </div>
              )}
            </>
          );
        }
      }
    },
    {
      field: "Email",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Email</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => renderCellFunction(params.value),
    },
    {
      field: "RoleName",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Role</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => renderCellFunction(params.value),
    },
    {
      field: "Status",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Status</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <span className="flex items-center">
          <span className={`w-2 h-2 rounded-full mr-2 ${params.value.toLowerCase() === "active" ? "bg-[#0078C8]" : "bg-[#DC3545]"}`}></span>
          {params.value}
        </span>
      ),
    }
  ];

  // if (
  //   checkPermission("User Management", "edit") ||
  //   checkPermission("User Management", "delete")
  // ) {
  //   columns.push({
  //     field: "action",
  //     renderHeader: () => (
  //       <span className="font-semibold text-[13px] flex justify-end items-end">
  //         Actions
  //       </span>
  //     ),
  //     sortable: false,
  //     width: 120,
  //     renderCell: (params) => {
  //       const userId = Cookies.get("userId");
  //       return (
  //         <>
  //           {userId == params.row.UserId
  //             ? ""
  //             : (checkPermission("User Management", "edit") ||
  //                 checkPermission("User Management", "delete")) && (
  //                 <div className="flex gap-9 justify-start h-full items-center">
  //                   {checkPermission("User Management", "edit") && (
  //                     <Tooltip title="Edit" placement="top" arrow>
  //                       <span
  //                         className="cursor-pointer"
  //                         onClick={async () => {
  //                           setOpenDrawer(true);
  //                           setEdit(true);
  //                           setUserId(params.row.UserId);
  //                           getBusinessList(params.row.RoleName);
  //                         }}
  //                       >
  //                         <EditIcon />
  //                       </span>
  //                     </Tooltip>
  //                   )}
  //                   {checkPermission("User Management", "delete") && (
  //                     <Tooltip title="Delete" placement="top" arrow>
  //                       <span
  //                         className="cursor-pointer"
  //                         onClick={() => {
  //                           setIsLoading(false);
  //                           setOpenDelete(true);
  //                           setUserId(params.row.UserId);
  //                         }}
  //                       >
  //                         <DeleteIcon />
  //                       </span>
  //                     </Tooltip>
  //                   )}
  //                 </div>
  //               )}
  //         </>
  //       );
  //     },
  //   });
  // }

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userId, setUserId] = useState<number>(0);
  const [roleList, setRoleList] = useState<RoleList[]>([]);
  const [businessList, setBusinessList] = useState<BusinessList[]>([]);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [userListParams, setUserListParams] = useState<{
    page: number;
    limit: number;
    search: string;
    roleId: number[];
    businessTypeId: number[];
    userStatus: boolean[];
    saveClicked: boolean;
  }>({
    page: 1,
    limit: rowsPerPage,
    search: "",
    roleId: [],
    businessTypeId: [],
    userStatus: [],
    saveClicked: false,
  });

  useEffect(() => {
    const roleId = Cookies.get("roleId");
    if (roleId == "4") {
      router.push("/");
    } else {
      if (
        (checkPermission("User Management", "view") ||
          checkPermission("User Management", "create")) === false
      ) {
        router.push("/");
      }
    }
  }, [router]);

  const getRoleList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: RoleListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setRoleList(ResponseData.roles);
          return;
      }
    };
    await callAPIwithHeaders(roleListUrl, "post", callback, {
      page: 0,
      limit: 0,
      search: "",
      dropdown: true,
    });
  };

  const getBusinessList = async (editUserRole?: String) => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: BusinessListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setBusinessList(ResponseData.BusinessTypes);
          return;
      }
    };
    await callAPIwithHeaders(
      editUserRole === "Admin"
        ? `${businessListUrl}?showAll=1`
        :
        businessListUrl,
      "get",
      callback,
      {}
    );
  };

  useEffect(() => {
    roleList.length <= 0 && getRoleList();
    businessList.length <= 0 && getBusinessList();
  }, []);

  const getFilterData = (
    roleId: number[],
    statusId: boolean[],
    businessId: number[],
    saveClicked: boolean
  ) => {
    setUserListParams({
      ...userListParams,
      roleId: roleId,
      userStatus: statusId,
      businessTypeId: businessId,
      saveClicked: saveClicked,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNo(0);
      setUserListParams({
        ...userListParams,
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
    setUserListParams({
      ...userListParams,
      page: pageNo + 1,
    });
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageNo(0);
    setRowsPerPage(parseInt(event.target.value));
    setUserListParams({
      ...userListParams,
      page: 1,
      limit: parseInt(event.target.value),
    });
  };

  const getUserList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: GetUserListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setUserData(
            ResponseData.users.map((item, index) => ({
              ...item,
              srNo:
                (ResponseData.currentPage - 1) * userListParams.limit +
                (index + 1),
            }))
          );
          setTotalCount(ResponseData.totalUsers);
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(getUserListUrl, "post", callback, userListParams);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (checkPermission("User Management", "view")) {
        getUserList();
      } else {
        setLoading(false);
        showToast("You do not have view permission", ToastType.Error);
      }
    }, 550);

    return () => clearTimeout(timer);
  }, [userListParams]);

  const handleDelete = async () => {
    setIsLoading(true);
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
          setUserId(0);
          setOpenDelete(false);
          setSearch("");
          setPageNo(0);
          setUserListParams({
            ...userListParams,
            search: "",
            page: 0 + 1,
            limit: rowsPerPage,
          });
          return;
      }
    };
    await callAPIwithHeaders(deleteUserUrl, "post", callback, {
      userId: userId,
    });
  };

  return (
    <Wrapper>
      <div className="flex justify-between w-full mt-10 bg-[#F6F6F6] items-center px-6 py-5">
        <h3 className="font-semibold text-base tracking-wide">User Management</h3>
        <div className="flex items-center gap-3 justify-end">
          {checkPermission("User Management", "view") ? (
            <div className="w-[250px] bg-[#FFFFFF] flex h-[36px] rounded-[300px]">
              <span className="m-3 flex items-center">
                <SearchIcon />
              </span>
              <input
                type="search"
                id="default-search"
                placeholder="Search"
                className="p-2 flex items-center text-[13px] outline-none w-full max-w-[230px] bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          ) : (
            <div>&nbsp;</div>
          )}
          {checkPermission("User Management", "view") && (
            <Tooltip title="Filter" placement="top" arrow
              classes={{
                tooltip: classes.tooltipStyle,
                arrow: classes.arrowStyle,
              }}>
              <span
                className="w-[38px] h-[36px] flex items-center justify-center cursor-pointer"
                onClick={() => setOpenFilter(true)}
              >
                <FilterIcon />
              </span>
            </Tooltip>
          )}
          {checkPermission("User Management", "create") && (
            <button
              onClick={() => {
                setOpenDrawer(true);
                setEdit(false);
              }}
              className={`px-5 normal-case text-[16px] bg-[#0078C8] hover:bg-[#023963] !text-[#fff] !rounded-md font-normal h-[36px]`}
            >
              Add User
            </button>
          )}
        </div>
      </div>

      {checkPermission("User Management", "view") && (
        <div className="w-full h-[78vh] bg-[#FFFFFF] [&>div]:border-l-0 [&>div]:rounded-none">
          <DataGrid
            disableColumnMenu
            rows={userData}
            columns={columns}
            getRowId={(i: any) => i.UserId}
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
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
        <UserDrawer
          type="User"
          canEdit={openEdit}
          userId={userId}
          setId={() => setUserId(0)}
          openDrawer={openDrawer}
          setOpenDrawer={(value) => setOpenDrawer(value)}
          getUserList={getUserList}
          roleList={[
            {
              RoleId: -1,
              RoleName: "Please Select",
              RoleStatus: true,
            },
            ...roleList,
          ]}
          businessList={[
            {
              BusinessId: -1,
              BussinessName: "Please Select",
            },
            ...businessList,
          ]}
        />
      )}

      {openFilter && (
        <UserFilter
          isOpen={openFilter}
          setIsOpen={(value) => setOpenFilter(value)}
          roleList={roleList}
          businessList={businessList}
          sendFilterData={getFilterData}
          userListParams={userListParams}
        />
      )}

      {openDelete && (
        <ConfirmModal
          title="Delete"
          isLoading={isLoading}
          isOpen={openDelete}
          message="Are you sure you want to delete the user profile?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => setOpenDelete(value)}
          setId={() => setUserId(0)}
        />
      )}
      <DrawerOverlay isOpen={openDrawer} />
    </Wrapper>
  );
}

export default Page;
