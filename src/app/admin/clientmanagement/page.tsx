"use client";
import React, { useEffect, useState } from "react";
// Components imports
import Wrapper from "@/components/Wrapper";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// MUI imports
import {
  Autocomplete,
  Avatar,
  CircularProgress,
  InputAdornment,
  ListItem,
  ListItemText,
  TablePagination,
  TextField,
  Tooltip,
} from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import ClientFilter from "@/components/admin/modals/ClientFilter";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import {
  BusinessList,
  BusinessListResponse,
  Option,
} from "@/models/userManage";
import {
  InvitaionMailClientUrl,
  assigneUserListUrl,
  businessListUrl,
  deleteClientUrl,
  getClientListUrl,
} from "@/static/apiUrl";
import ClientDrawer from "@/components/admin/drawer/ClientDrawer";
import { ClientList, GetClientListResponse } from "@/models/clientManage";
import Loader from "@/components/admin/common/Loader";
import { useStyles } from "@/utils/useStyles";
import { checkPermission } from "@/utils/permissionCheckFunction";

function Page() {
  const classes = useStyles();
  const [assignUserList, setAssignUserList] = useState<Option[]>([]);
  const columns: GridColDef[] = [
    {
      field: "ClientId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr.No.</span>
      ),
      width: 70,
    },
    {
      field: "SfId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">SF ID</span>
      ),
      flex: 1,
    },
    {
      field: "Clientname",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Client Name</span>
      ),
      flex: 1,
    },
    {
      field: "BusinessType",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Business Type</span>
      ),
      flex: 1,
    },
    {
      field: "Status",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Status</span>
      ),
      flex: 1,
    },
    {
      field: "AssignUserId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Assigning User</span>
      ),
      width: 200,
      renderCell: (params) => {
        return (
          <Autocomplete
            className={classes.underlineDropdown}
            options={assignUserList}
            renderOption={(props: any, item: any) => (
              <ListItem {...props} className="flex gap-2 text-ellipsis">
                <Avatar className="!h-8 !w-8" alt={item.label}>
                  {item.label.charAt(0)}
                </Avatar>
                <ListItemText>{item.label}</ListItemText>
              </ListItem>
            )}
            getOptionLabel={(item) => item.label}
            onChange={(e, record) => {
              const callBack = (ResponseStatus: string, Message: string) => {
                switch (ResponseStatus) {
                  case "failure":
                    showToast(Message, ToastType.Error);
                    return;
                  case "success":
                    showToast(Message, ToastType.Success);
                    getClientList();
                    return;
                }
              };

              callAPIwithHeaders("/api/users/assignuser", "post", callBack, {
                userId: !!record ? record.value : -1,
                // userId: record.value,
                clientId: params.row.ClientId,
              });
            }}
            value={
              assignUserList.filter((item) => item.value === params.value)[0]
            }
            renderInput={(param) => (
              <TextField
                className="h-12 flex justify-end items-center"
                variant="standard"
                {...param}
                InputProps={{
                  ...param.InputProps,
                  startAdornment: param.inputProps.value && (
                    <InputAdornment position="start">
                      <Avatar className="mb-2 !h-8 !w-8 bg-red-400">
                        {assignUserList
                          .filter((item) => item.value === params.value)[0]
                          ?.label.charAt(0)}
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        );
      },
    },
    {
      field: "checkListStatus",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Checklist Status</span>
      ),
      renderCell: (params) => {
        return <div>{params.value === "1" ? "Completed" : "Pending"}</div>;
      },
      flex: 1,
    },
    {
      field: "actions",
      renderHeader: () => (
        <span className="font-semibold text-[13px] flex justify-end items-end">
          Actions
        </span>
      ),
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex gap-9 justify-start h-full items-center">
            {checkPermission("Client Management", "edit") && (
              <Tooltip title="Edit" placement="top" arrow>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenDrawer(true);
                    setEdit(true);
                    setClientId(params.row.ClientId);
                  }}
                >
                  <EditIcon />
                </span>
              </Tooltip>
            )}
            {checkPermission("Client Management", "delete") && (
              <Tooltip title="Delete" placement="top" arrow>
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setOpenDelete(true);
                    setClientId(params.row.ClientId);
                  }}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            )}
            <Tooltip title="Form Type" placement="top" arrow>
              <span className="cursor-pointer">
                <DescriptionOutlinedIcon
                  fontSize="small"
                  sx={{
                    fill: "black",
                    opacity: "0.54",
                  }}
                />
              </span>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [clientData, setClientData] = useState<ClientList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [clientId, setClientId] = useState<number>(0);
  const [businessList, setBusinessList] = useState<BusinessList[]>([]);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [clientListParams, setClientListParams] = useState<{
    page: number;
    limit: number;
    search: string;
    businessTypeId: number[];
    status: number[];
    checkListStatus: string[];
  }>({
    page: 1,
    limit: rowsPerPage,
    search: "",
    businessTypeId: [],
    status: [],
    checkListStatus: [],
  });
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [invitaionLoading, setInvitaionLoading] = useState<boolean>(false);

  const getAssignUserList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setAssignUserList(
            ResponseData.Users.map((item: any) => ({
              label: item.UserName,
              value: item.UserId,
            }))
          );
          return;
      }
    };
    await callAPIwithHeaders(assigneUserListUrl, "get", callback, {});
  };

  useEffect(() => {
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

    businessList.length <= 0 && getBusinessList();
    assignUserList.length <= 0 && getAssignUserList();
  }, []);

  const getFilterData = (
    businessId: number[],
    statusId: number[],
    checkListStatusId: string[]
  ) => {
    setClientListParams({
      ...clientListParams,
      businessTypeId: businessId,
      status: statusId,
      checkListStatus: checkListStatusId,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNo(0);
      setClientListParams({
        ...clientListParams,
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
    setClientListParams({
      ...clientListParams,
      page: pageNo + 1,
    });
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageNo(0);
    setRowsPerPage(parseInt(event.target.value));
    setClientListParams({
      ...clientListParams,
      page: 1,
      limit: parseInt(event.target.value),
    });
  };

  const getClientList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: GetClientListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setClientData(ResponseData.clients);
          setTotalCount(ResponseData.totalClients);
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(
      getClientListUrl,
      "post",
      callback,
      clientListParams
    );
  };

  useEffect(() => {
    getClientList();
  }, [clientListParams]);

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
          setClientId(0);
          setOpenDelete(false);
          setSelectedIds([]);
          setSearch("");
          setPageNo(0);
          setClientListParams({
            ...clientListParams,
            search: "",
            page: 0 + 1,
            limit: rowsPerPage,
          });
          return;
      }
    };
    await callAPIwithHeaders(deleteClientUrl, "post", callback, {
      clientId: clientId,
    });
  };

  const handleSelectionModelChange = (ids: any) => {
    setSelectedIds(ids);
  };

  const SendInvitation = async () => {
    setInvitaionLoading(true);
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: GetClientListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          setInvitaionLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setSelectedIds([]);
          setLoading(false);
          setInvitaionLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(InvitaionMailClientUrl, "post", callback, {
      clientIds: selectedIds,
    });
  };

  return (
    <Wrapper>
      <div className="flex justify-between w-full mt-12 bg-[#F9FBFF]">
        {checkPermission("Client Management", "view") ? (
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
        ) : (
          <div>&nbsp;</div>
        )}
        <div className="flex gap-5">
          {checkPermission("Client Management", "view") && (
            <Tooltip title="Filter" placement="top" arrow>
              <span
                className="border-[#023963] !bg-[#FFFFFF] w-[38px] h-[36px] flex items-center justify-center border rounded-lg cursor-pointer"
                onClick={() => setOpenFilter(true)}
              >
                <FilterIcon />
              </span>
            </Tooltip>
          )}
          {selectedIds.length > 0 && (
            <button
              disabled={selectedIds.length <= 0}
              onClick={() => SendInvitation()}
              className={`${
                selectedIds.length <= 0
                  ? "!border-[#636363] !text-[#636363] cursor-not-allowed"
                  : "!border-[#023963] !text-[#023963]"
              } px-3 border !normal-case !text-[16px] ${
                invitaionLoading
                  ? "flex items-center justify-center bg-[#023963]"
                  : "!bg-[#FFFFFF]"
              } !h-[36px] !rounded-md`}
            >
              {invitaionLoading ? (
                <CircularProgress size={20} />
              ) : (
                "Send Invite"
              )}
            </button>
          )}
          {checkPermission("Client Management", "create") && (
            <button
              onClick={() => {
                setOpenDrawer(true);
                setEdit(false);
              }}
              className={`!border-[#023963] px-3 border !normal-case !text-[16px] !bg-[#FFFFFF] !text-[#023963] !h-[36px] !rounded-md`}
            >
              Add Client
            </button>
          )}
        </div>
      </div>

      {checkPermission("Client Management", "view") && (
        <div className="w-full h-[78vh] mt-5">
          {loading ? (
            <Loader />
          ) : (
            <DataGrid
              disableRowSelectionOnClick
              disableColumnMenu
              checkboxSelection
              rows={clientData}
              columns={columns}
              getRowId={(i: any) => i.ClientId}
              onRowSelectionModelChange={handleSelectionModelChange}
              rowSelectionModel={selectedIds}
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
      )}

      {openDrawer && (
        <ClientDrawer
          type="Client"
          canEdit={openEdit}
          openDrawer={openDrawer}
          setOpenDrawer={(value) => setOpenDrawer(value)}
          handleClear={(value) => value === false && setSelectedIds([])}
          clientId={clientId}
          setClientId={() => setClientId(0)}
          getClientList={getClientList}
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
        <ClientFilter
          isOpen={openFilter}
          setIsOpen={(value) => setOpenFilter(value)}
          businessList={businessList}
          sendFilterData={getFilterData}
          clientListParams={clientListParams}
        />
      )}

      {openDelete && (
        <ConfirmModal
          title="Delete"
          isLoading={isLoading}
          isOpen={openDelete}
          message="Are you sure you want to delete this client ?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => {
            setOpenDelete(value);
            value === false && setSelectedIds([]);
          }}
        />
      )}
      <DrawerOverlay isOpen={openDrawer} />
    </Wrapper>
  );
}

export default Page;
