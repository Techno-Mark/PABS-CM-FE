"use client";
import React, { useEffect, useState } from "react";
// common components
import Wrapper from "@/components/Wrapper";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
import {
  CircularProgress,
  Switch,
  TablePagination,
  Tooltip,
} from "@mui/material";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";
import { GetRoleListResponse, RoleList } from "@/models/roleManage";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { deleteRoleUrl, roleListUrl, toggleRoleUrl } from "@/static/apiUrl";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import RoleDrawer from "@/components/admin/drawer/RoleDrawer";
import { RoleListResponse } from "@/models/userManage";

function Page() {
  const columns: GridColDef[] = [
    {
      field: "RoleId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr No.</span>
      ),
      width: 100,
      sortable: false,
    },
    {
      field: "RoleName",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Role Name</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "RoleStatus",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Active</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="flex justify-start h-full items-center">
            <Switch
              checked={params.row.RoleStatus}
              onChange={(e) =>
                setSwitchPopup({
                  isOpen: true,
                  isChecked: e.target.checked,
                  roleId: params.row.RoleId,
                })
              }
            />
          </div>
        );
      },
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
        return (
          <div className="flex gap-9 justify-start h-full items-center">
            <Tooltip title="Edit" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpenDrawer(true);
                  setEdit(true);
                  setRoleId(params.row.RoleId);
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
                  setRoleId(params.row.RoleId);
                }}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [roleData, setRoleData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [roleId, setRoleId] = useState<number>(0);
  const [roleList, setRoleList] = useState<RoleList[]>([]);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [roleListParams, setRoleListParams] = useState<{
    page: number;
    limit: number;
    search: string;
  }>({
    page: 0,
    limit: 0,
    search: "",
  });
  const [switchPopup, setSwitchPopup] = useState<{
    isOpen: boolean;
    isChecked: null | boolean;
    roleId: number;
  }>({
    isOpen: false,
    isChecked: null,
    roleId: 0,
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

    roleList.length <= 0 && getRoleList();
  }, []);

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
    getRoleList();
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
          <button
            onClick={() => {
              setOpenDrawer(true);
              setEdit(false);
            }}
            className={`!border-[#023963] px-3 border !normal-case !text-[16px] !bg-[#FFFFFF] !text-[#023963] !h-[36px] !rounded-md`}
          >
            Add Role
          </button>
        </div>
      </div>

      <div className="w-full h-[78vh] mt-5">
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <DataGrid
            disableColumnMenu
            rows={roleData}
            columns={columns}
            getRowId={(i: any) => i.RoleId}
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
          } this role?`}
          handleModalSubmit={handleToggleRole}
          handleClose={() =>
            setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 })
          }
          setIsOpen={(value) =>
            value === false &&
            setSwitchPopup({ isOpen: false, isChecked: null, roleId: 0 })
          }
          setId={() => {}}
        />
      )}

      {openDelete && (
        <ConfirmModal
          title="Delete"
          isLoading={isLoading}
          isOpen={openDelete}
          message="Are you sure you want to delete this role?"
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
