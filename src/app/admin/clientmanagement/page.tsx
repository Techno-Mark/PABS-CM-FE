"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// Components imports
import Wrapper from "@/components/Wrapper";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import ClientFilter from "@/components/admin/modals/ClientFilter";
import { showToast } from "@/components/ToastContainer";
import ClientDrawer from "@/components/admin/drawer/ClientDrawer";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
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
// static imports
import { ToastType } from "@/static/toastType";
import {
  InvitaionMailClientUrl,
  assigneUserListUrl,
  businessListUrl,
  deleteClientUrl,
  getClientListUrl,
  saveAssignee,
} from "@/static/apiUrl";
// Types imports
import {
  BusinessList,
  BusinessListResponse,
  Option,
} from "@/models/userManage";
import { ClientList, GetClientListResponse } from "@/models/clientManage";
// API imports
import { callAPIwithHeaders } from "@/api/commonFunction";
// Utlis imports
import { useStyles } from "@/utils/useStyles";
import { checkPermission } from "@/utils/permissionCheckFunction";
import { AlphabetColor, noRecordText } from "@/utils/commonData";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
// Cookie imports
import Cookies from "js-cookie";
import ClientModal from "@/components/client/common/ClientModal";
import FormIcon from "@/assets/Icons/client/FormIcon";

function Page() {
  const router = useRouter();
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const columns: GridColDef[] = [
    {
      field: "ClientId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr No.</span>
      ),
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <span className="font-semibold">{params.value}</span>
      ),
    },
    {
      field: "SfId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">SF ID</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "Clientname",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Client Name</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "BusinessType",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Department Type</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "CheckListStatus",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Checklist Status</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "AssignUserId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Assigning User</span>
      ),
      width: 200,
      sortable: false,
      renderCell: (params) => {
        if (roleId !== "3") {
          return (
            <Autocomplete
              className={classes.underlineDropdown}
              options={
                params.row.BusinessTypeId === 1
                  ? assignUserList1
                  : params.row.BusinessTypeId === 2
                  ? assignUserList2
                  : assignUserList3
              }
              renderOption={(props: any, item: any) => (
                <ListItem
                  {...props}
                  className="flex gap-2 text-ellipsis cursor-pointer"
                >
                  <Avatar className={classes.avatarStyle} alt={item.label}>
                    <AlphabetColor
                      alphabet={item.label.charAt(0).toUpperCase()}
                    />
                  </Avatar>
                  <ListItemText
                    primaryTypographyProps={{ sx: { fontSize: "14px" } }}
                  >
                    {item.label}
                  </ListItemText>
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

                callAPIwithHeaders(saveAssignee, "post", callBack, {
                  userId: !!record ? record.value : -1,
                  clientId: params.row.ClientId,
                });
              }}
              value={
                (params.row.BusinessTypeId === 1
                  ? assignUserList1
                  : params.row.BusinessTypeId === 2
                  ? assignUserList2
                  : assignUserList3
                ).filter((item) => item.value === params.value)[0]
              }
              renderInput={(param) => (
                <TextField
                  placeholder="Assign User"
                  className="h-12 flex items-center justify-center"
                  variant="standard"
                  {...param}
                  InputProps={{
                    ...param.InputProps,
                    style: {
                      fontSize: "14px",
                    },
                    startAdornment: param.inputProps.value && (
                      <InputAdornment position="start">
                        <Avatar className={classes.avatarStyle}>
                          <AlphabetColor
                            alphabet={(params.row.BusinessTypeId === 1
                              ? assignUserList1
                              : params.row.BusinessTypeId === 2
                              ? assignUserList2
                              : assignUserList3
                            )
                              .filter((item) => item.value === params.value)[0]
                              ?.label.charAt(0)
                              .toUpperCase()}
                          />
                        </Avatar>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          );
        } else {
          return (
            <div className="flex justify-start items-center text-[14px] gap-2">
              <Avatar
                className={classes.avatarStyle}
                alt={params.row.AssignUser}
              >
                <AlphabetColor
                  alphabet={params.row.AssignUser.charAt(0).toUpperCase()}
                />
              </Avatar>
              <span>{params.row.AssignUser}</span>
            </div>
          );
        }
      },
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
      field: "actions",
      renderHeader: () => (
        <span className="font-semibold text-[13px] flex justify-end items-end">
          Actions
        </span>
      ),
      width: 160,
      sortable: false,
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
                    setIsLoading(false);
                    setOpenDelete(true);
                    setClientId(params.row.ClientId);
                  }}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            )}
            <Tooltip title="Form Type" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setClientOpenModal(true);
                  setClientInfo({
                    SFID: params.row.SfId,
                    DepartmentType: params.row.BusinessType,
                    DepartmentId: params.row.BusinessTypeId,
                    ClientId: params.row.ClientId,
                    clientName: params.row.Clientname,
                    UserId: params.row.UserId
                  });
                }}
              >
                <FormIcon />
              </span>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  const [clientInfo, setClientInfo] = useState<any>({
    SFID: "",
    DepartmentType: "",
    DepartmentId: "",
    ClientId: "",
    clientName: "",
    UserId:"",
  });
  const [assignUserList1, setAssignUserList1] = useState<Option[]>([]);
  const [assignUserList2, setAssignUserList2] = useState<Option[]>([]);
  const [assignUserList3, setAssignUserList3] = useState<Option[]>([]);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [clientOpenModal, setClientOpenModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [clientData, setClientData] = useState<ClientList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
    status: boolean[];
    checkListStatus: string[];
    saveClicked: boolean;
  }>({
    page: 1,
    limit: rowsPerPage,
    search: "",
    businessTypeId: [],
    status: [],
    checkListStatus: [],
    saveClicked: false,
  });
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [invitaionLoading, setInvitaionLoading] = useState<boolean>(false);

  useEffect(() => {
    const roleId = Cookies.get("roleId");
    if (roleId == "4") {
      router.push("/");
    } else {
      if (
        (checkPermission("Client Management", "view") ||
          checkPermission("Client Management", "create")) === false
      ) {
        router.push("/");
      }
    }
  }, [router]);

  const getAssignUser = async (
    id: number
  ): Promise<{ label: string; value: number }[]> => {
    return new Promise((resolve, reject) => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: any
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            reject(new Error(Message));
            break;
          case "success":
            resolve(
              ResponseData.Users.map((item: any) => ({
                label: item.UserName,
                value: item.UserId,
              }))
            );
            break;
          default:
            reject(new Error("Unexpected response status"));
        }
      };

      callAPIwithHeaders(assigneUserListUrl, "post", callback, {
        businessTypeId: id,
      });
    });
  };

  const getAssignUserList = async (id: number) => {
    try {
      const users = await getAssignUser(id);
      id === 1
        ? setAssignUserList1(users)
        : id === 2
        ? setAssignUserList2(users)
        : setAssignUserList3(users);
    } catch (error) {
      console.error("Failed to get assigned user list", error);
    }
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

  useEffect(() => {
    businessList.length <= 0 && getBusinessList();
  }, []);

  const getFilterData = (
    businessId: number[],
    statusId: boolean[],
    checkListStatusId: string[],
    saveClicked: boolean
  ) => {
    setClientListParams({
      ...clientListParams,
      businessTypeId: businessId,
      status: statusId,
      checkListStatus: checkListStatusId,
      saveClicked: saveClicked,
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
    assignUserList1.length <= 0 && getAssignUserList(1);
    assignUserList2.length <= 0 && getAssignUserList(2);
    assignUserList3.length <= 0 && getAssignUserList(3);
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
    const timer = setTimeout(() => {
      if (checkPermission("Client Management", "view")) {
        getClientList();
      } else {
        setLoading(false);
        showToast("You do not have view permission", ToastType.Error);
      }
    }, 550);

    return () => clearTimeout(timer);
  }, [clientListParams]);

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
              type="search"
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
                <CircularProgress
                  size={20}
                  sx={{ color: "white !important" }}
                />
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
          <DataGrid
            disableRowSelectionOnClick
            disableColumnMenu
            checkboxSelection
            isRowSelectable={(params: any) => !params.row.IsPasswordSet}
            rows={clientData}
            columns={columns}
            loading={loading}
            getRowId={(i: any) => i.ClientId}
            onRowSelectionModelChange={handleSelectionModelChange}
            rowSelectionModel={selectedIds}
            localeText={noRecordText}
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
            }}
          />
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
          setId={() => setClientId(0)}
          message="Are you sure you want to delete the client profile?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => {
            setOpenDelete(value);
            value === false && setSelectedIds([]);
          }}
        />
      )}

      {clientOpenModal && (
        <ClientModal
          clientInfo={clientInfo}
          isOpen={clientOpenModal}
          handleClose={() => {
            setClientOpenModal(false);
            setClientInfo({
              SFID: "",
              DepartmentType: "",
              DepartmentId: "",
              ClientId: "",
              clientName: "",
              UserId:"",
            });
          }}
          setIsOpenModal={(value) => {
            setClientOpenModal(value);
          }}
        />
      )}
      <DrawerOverlay isOpen={openDrawer} />
      <DrawerOverlay isOpen={clientOpenModal} />
    </Wrapper>
  );
}

export default Page;
