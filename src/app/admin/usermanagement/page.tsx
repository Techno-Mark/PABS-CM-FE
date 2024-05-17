"use client";
import React, { useEffect, useState } from "react";
// Components imports
import Wrapper from "@/components/Wrapper";
import UserDrawer from "@/components/admin/drawer/UserDrawer";
import UserFilter from "@/components/admin/modals/UserFilter";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
// MUI imports
import { TablePagination, Tooltip } from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import {
  businessListUrl,
  deleteUserUrl,
  getUserListUrl,
  roleListUrl,
} from "@/static/apiUrl";
import {
  BusinessList,
  BusinessListResponse,
  GetUserListResponse,
  RoleList,
  RoleListResponse,
  UserList,
} from "@/models/userManage";
import Loader from "@/components/admin/common/Loader";
import Cookies from "js-cookie";

function Page() {
  const columns: GridColDef[] = [
    {
      field: "UserId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr No.</span>
      ),
      width: 100,
      sortable: false,
    },
    {
      field: "Username",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Full Name</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "Email",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Email</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "RoleName",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Role</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "Status",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Status</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "action",
      renderHeader: () => (
        <span className="font-semibold text-[13px] flex justify-end items-end">
          Actions
        </span>
      ),
      sortable: false,
      width: 120,
      renderCell: (params) => {
        const userId = Cookies.get("userId");
        return (
          <>
            {userId == params.row.UserId ? (
              ""
            ) : (
              <div className="flex gap-9 justify-start h-full items-center">
                <Tooltip title="Edit" placement="top" arrow>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenDrawer(true);
                      setEdit(true);
                      setUserId(params.row.UserId);
                    }}
                  >
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip title="Delete" placement="top" arrow>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenDelete(true);
                      setUserId(params.row.UserId);
                    }}
                  >
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            )}
          </>
        );
      },
    },
  ];

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    userStatus: number[];
  }>({
    page: 1,
    limit: rowsPerPage,
    search: "",
    roleId: [],
    businessTypeId: [],
    userStatus: [],
  });

  useEffect(() => {
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
      });
    };

    const getBusinessList = async () => {
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
      await callAPIwithHeaders(businessListUrl, "get", callback, {});
    };

    roleList.length <= 0 && getRoleList();
    businessList.length <= 0 && getBusinessList();
  }, []);

  const getFilterData = (
    roleId: number[],
    statusId: number[],
    businessId: number[]
  ) => {
    setUserListParams({
      ...userListParams,
      roleId: roleId,
      userStatus: statusId,
      businessTypeId: businessId,
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
          setUserData(ResponseData.users);
          setTotalCount(ResponseData.totalUsers);
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(getUserListUrl, "post", callback, userListParams);
  };

  useEffect(() => {
    getUserList();
  }, [userListParams]);

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
      <div className="flex justify-between w-full mt-12 bg-[#F9FBFF]">
        <div className="w-[50%] bg-[#FFFFFF] flex h-[36px] border border-[#D8D8D8] rounded-md">
          <span className="m-3 flex items-center">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="p-2 flex items-center text-[13px] outline-none w-[90%]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <Tooltip title="Filter" placement="top" arrow>
            <span
              className="border-[#023963] !bg-[#FFFFFF] w-[38px] h-[36px] flex items-center justify-center border rounded-lg cursor-pointer"
              onClick={() => setOpenFilter(true)}
            >
              <FilterIcon />
            </span>
          </Tooltip>
          <button
            onClick={() => {
              setOpenDrawer(true);
              setEdit(false);
            }}
            className={`!border-[#023963] px-3 border !normal-case !text-[16px] !bg-[#FFFFFF] !text-[#023963] !h-[36px] !rounded-md`}
          >
            Add User
          </button>
        </div>
      </div>

      <div className="w-full h-[78vh] mt-5">
        {loading ? (
          <Loader />
        ) : (
          <DataGrid
            disableColumnMenu
            rows={userData}
            columns={columns}
            getRowId={(i: any) => i.UserId}
            slots={{
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
            }}
          />
        )}
      </div>

      {openDrawer && (
        <UserDrawer
          type="User"
          canEdit={openEdit}
          userId={userId}
          setUserId={() => setUserId(0)}
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
          message="Are you sure you want to delete this user ?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => setOpenDelete(value)}
          setUserId={() => setUserId(0)}
        />
      )}
      <DrawerOverlay isOpen={openDrawer} />
    </Wrapper>
  );
}

export default Page;
