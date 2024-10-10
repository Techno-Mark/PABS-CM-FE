"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
// Components imports
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import ClientDrawer from "@/components/admin/drawer/ClientDrawer";
import ClientFilter from "@/components/admin/modals/ClientFilter";
import { showToast } from "@/components/ToastContainer";
import Wrapper from "@/components/Wrapper";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
// MUI imports
import {
  Autocomplete,
  Avatar,
  AvatarGroup,
  Button,
  Checkbox,
  CircularProgress,
  InputAdornment,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TablePagination,
  TextField,
  Tooltip
} from "@mui/material";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
// static imports
import {
  ClientStatusUpdateUrl,
  InvitaionMailClientUrl,
  assigneUserListUrl,
  businessListUrl,
  deleteClientUrl,
  getClientListUrl,
  saveAssignee,
} from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
// Types imports
import { ClientList, GetClientListResponse } from "@/models/clientManage";
import {
  BusinessList,
  BusinessListResponse,
  Option,
} from "@/models/userManage";
// API imports
import { callAPIwithHeaders } from "@/api/commonFunction";
// Utlis imports
import { AlphabetColor, noRecordText } from "@/utils/commonData";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
import { checkPermission } from "@/utils/permissionCheckFunction";
import { useStyles } from "@/utils/useStyles";
// Cookie imports
import dropdownarrow from "@/assets/Icons/dropdownarrow";
import ClientModal from "@/components/client/common/ClientModal";
import Cookies from "js-cookie";

function Page() {
  const router = useRouter();
  const classes = useStyles();
  const roleId = Cookies.get("roleId");

  const AssignUserCell = ({
    params,
    roleId,
    assignUserList1,
    assignUserList2,
    assignUserList3,
    saveAssignUser,
  }: any) => {
    const selectedValues = Array.isArray(params.value)
      ? params.value
      : [params.value].filter(Boolean);
    const userList =
      params.row.BusinessTypeId === 1
        ? assignUserList1
        : params.row.BusinessTypeId === 2
          ? assignUserList2
          : assignUserList3;

    const [tempSelectedValues, setTempSelectedValues] =
      useState(selectedValues);
    const [open, setOpen] = useState(false);
    const selectedUsers = userList.filter((item: any) =>
      tempSelectedValues.includes(item.value)
    );
    const autocompleteRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (
          autocompleteRef.current &&
          !autocompleteRef.current.contains(event.target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleAvatarGroupClick = (event: React.MouseEvent) => {
      event.stopPropagation();
      setOpen(true);
    };

    if (roleId !== "3") {
      return (
        <div ref={autocompleteRef}>
          <Autocomplete
            className={classes.underlineDropdown}
            multiple
            disableCloseOnSelect
            options={userList}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={(event, reason) => {
              if (reason === "toggleInput") {
                setOpen(false);
              }
            }}
            renderOption={(props, option) => {
              const isSelected = tempSelectedValues.includes(option.value);
              return (
                <Tooltip title={option.email} arrow
                  classes={{
                    tooltip: classes.tooltipStyle,
                    arrow: classes.arrowStyle,
                  }}
                  placement="right">
                  <li {...props}>
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        const newSelectedValues = isSelected
                          ? tempSelectedValues.filter(
                            (value: Number) => value !== option.value
                          )
                          : [...tempSelectedValues, option.value];
                        setTempSelectedValues(newSelectedValues);
                      }}
                    />
                    <Avatar className={classes.avatarStyle} alt={option.label}>
                      <AlphabetColor
                        alphabet={option.label.charAt(0).toUpperCase()}
                      />
                    </Avatar>
                    <div style={{ marginLeft: 8 }}>
                      <ListItemText
                        primary={option.label}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "14px",
                            textOverflow: "ellipsis",
                          },
                        }}
                      />
                    </div>
                  </li>
                </Tooltip>
              );
            }}
            getOptionLabel={(item) => item.label}
            onChange={(event, newValue) => {
              setTempSelectedValues(newValue.map((item) => item.value));
            }}
            value={userList.filter((item: Option) =>
              tempSelectedValues.includes(item.value)
            )}
            renderInput={(param) => (
              <TextField
                placeholder={`${tempSelectedValues.filter((value: Number) => value !== 0)
                  .length < 1
                  ? "Assign Users"
                  : ""
                  }`}
                className="h-12 flex items-center justify-center"
                variant="standard"
                {...param}
                InputProps={{
                  ...param.InputProps,
                  style: {
                    fontSize: "14px",
                  },
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={handleAvatarGroupClick}
                    >
                      <AvatarGroup
                        max={5}
                        sx={{ marginRight: 1, cursor: "pointer" }}
                      >
                        {selectedUsers.map((option: Option) => (
                          <Tooltip
                            key={option.value}
                            title={selectedUsers
                              .map((u: Option) => u.label)
                              .join(", ")}
                            arrow
                            classes={{
                              tooltip: classes.tooltipStyle,
                              arrow: classes.arrowStyle,
                            }}
                            placement="top"
                          >
                            <Avatar className={classes.avatarStyle}>
                              <AlphabetColor
                                alphabet={option.label.charAt(0).toUpperCase()}
                              />
                            </Avatar>
                          </Tooltip>
                        ))}
                      </AvatarGroup>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            PaperComponent={({ children }) => (
              <Paper
                ref={dropdownRef}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {children}
                <div className="w-full">
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      params.api.setEditCellValue({
                        id: params.id,
                        field: params.field,
                        value: tempSelectedValues,
                      });
                      setOpen(false);

                      saveAssignUser(tempSelectedValues, params.row.ClientId);
                    }}
                  >
                    SAVE
                  </Button>
                </div>
              </Paper>
            )}
          />
        </div>
      );
    } else {
      const assignedUsers = Array.isArray(params.row.AssignUser)
        ? params.row.AssignUser
        : [params.row.AssignUser];
      return (
        <div
          className="flex justify-start  text-[14px] gap-2"
          style={{ marginTop: 11 }}
        >
          <AvatarGroup max={5}>
            {assignedUsers.map((user: string, index: string) => (
              <Tooltip
                key={index}
                title={assignedUsers.map((u: Option) => u).join(", ")}
                arrow
                placement="top"
              >
                <Avatar className={classes.avatarStyle} alt={user}>
                  <AlphabetColor alphabet={user.charAt(0).toUpperCase()} />
                </Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>
        </div>
      );
    }
  };

  const columns: GridColDef[] = [
    {
      field: "srNo",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">Sr No.</span>
      ),
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <span className="font-normal text-[14px]">{params.value}</span>
      ),
    },
    {
      field: "SfId",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">SF ID</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "Clientname",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">Client Name</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        return (
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
                padding: '0 !important',
                width: 'auto',
              },
              ".MuiSvgIcon-root": {
                display: 'none',
              },
              fontSize: 14,
            }}
            renderValue={() => (
              <div>
                {params.value}
              </div>
            )}
          >
            {checkPermission("Client Management", "edit") && (
              <MenuItem
                value="edit"
                onClick={() => {
                  setOpenDrawer(true);
                  setEdit(true);
                  setClientId(params.row.ClientId);
                }}
                className="text-[14px] font-normal text-[#333]"
              >
                Edit
              </MenuItem>
            )}
            {checkPermission("Client Management", "delete") && (
              <MenuItem
                value="delete"
                onClick={() => {
                  setIsLoading(false);
                  setOpenDelete(true);
                  setClientId(params.row.ClientId);
                }}
                className="text-[14px] font-normal text-[#333]"
              >
                Delete
              </MenuItem>
            )}
            <MenuItem
              value="formType"
              onClick={() => {
                setClientOpenModal(true);
                setClientInfo({
                  SFID: params.row.SfId,
                  DepartmentType: params.row.BusinessType,
                  DepartmentId: params.row.BusinessTypeId,
                  ClientId: params.row.ClientId,
                  clientName: params.row.Clientname,
                  UserId: params.row.UserId,
                  IsFormLocked: params.row.IsFormLocked,
                });
              }}
              className="text-[14px] font-normal text-[#333]"
            >
              Form Type
            </MenuItem>
          </Select>
        );
      },
    },
    {
      field: "BusinessType",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">Department Type</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "CheckListStatus",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">Checklist Status</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <span className="font-normal text-[14px]">
          {params.value}{" "}
          {params.row.Progress !== null && `(${params.row.Progress}%)`}
        </span>
      ),
    },
    {
      field: "AssignUserId",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase">Assigning User</span>
      ),
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return (
          <AssignUserCell
            params={params}
            roleId={roleId}
            assignUserList1={assignUserList1}
            assignUserList2={assignUserList2}
            assignUserList3={assignUserList3}
            saveAssignUser={saveAssignUser}
          />
        );
      },
    },
    {
      field: "Status",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px]">Status</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Select
          value={params.value}
          onChange={(e) =>
            handleStatusChange(e.target.value as string, params.row.ClientId)
          }
          displayEmpty
          size="small"
          IconComponent={dropdownarrow}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
            },
            ".MuiSelect-select": {
              padding: 0,
              width: 50,
              marginBottom: 1,
            },
            ".MuiSvgIcon-root": {
              top: 0,
              right: 0,
            },
            fontSize: 14,
          }}
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      ),
    },
    // {
    //   field: "actions",
    //   renderHeader: () => (
    //     <span className="font-bold text-[14px] uppercase flex justify-end items-end">
    //       Actions
    //     </span>
    //   ),
    //   width: 160,
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       // <div className="flex gap-9 justify-start h-full items-center">
    //       //   {checkPermission("Client Management", "edit") && (
    //       //     <Tooltip title="Edit" placement="top" arrow>
    //       //       <span
    //       //         className="cursor-pointer"
    //       //         onClick={() => {
    //       //           setOpenDrawer(true);
    //       //           setEdit(true);
    //       //           setClientId(params.row.ClientId);
    //       //         }}
    //       //       >
    //       //         <EditIcon />
    //       //       </span>
    //       //     </Tooltip>
    //       //   )}
    //       //   {checkPermission("Client Management", "delete") && (
    //       //     <Tooltip title="Delete" placement="top" arrow>
    //       //       <span
    //       //         className="cursor-pointer"
    //       //         onClick={() => {
    //       //           setIsLoading(false);
    //       //           setOpenDelete(true);
    //       //           setClientId(params.row.ClientId);
    //       //         }}
    //       //       >
    //       //         <DeleteIcon />
    //       //       </span>
    //       //     </Tooltip>
    //       //   )}
    //       //   <Tooltip title="Form Type" placement="top" arrow>
    //       //     <span
    //       //       className="cursor-pointer"
    //       //       onClick={() => {
    //       //         setClientOpenModal(true);
    //       //         setClientInfo({
    //       //           SFID: params.row.SfId,
    //       //           DepartmentType: params.row.BusinessType,
    //       //           DepartmentId: params.row.BusinessTypeId,
    //       //           ClientId: params.row.ClientId,
    //       //           clientName: params.row.Clientname,
    //       //           UserId: params.row.UserId,
    //       //           IsFormLocked: params.row.IsFormLocked,
    //       //         });
    //       //       }}
    //       //     >
    //       //       <FormIcon />
    //       //     </span>
    //       //   </Tooltip>
    //       // </div>
    //       <Select
    //         value=""
    //         displayEmpty
    //         size="small"
    //         sx={{
    //           boxShadow: "none",
    //           ".MuiOutlinedInput-notchedOutline": { border: 0 },
    //           "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    //             border: 0,
    //           },
    //           "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //             border: 0,
    //           },
    //           ".MuiSelect-select": {
    //             padding: 0,
    //             width: 50,
    //           },
    //           ".MuiSvgIcon-root": {
    //            display: 'none',
    //           },
    //           fontSize: 14,
    //         }}
    //         renderValue={() => (
    //           <div className="flex items-center justify-center">
    //             <ThreeDot />
    //           </div>
    //         )}
    //       >
    //         {checkPermission("Client Management", "edit") && (
    //           <MenuItem
    //             value="edit"
    //             onClick={() => {
    //               setOpenDrawer(true);
    //               setEdit(true);
    //               setClientId(params.row.ClientId);
    //             }}
    //             className="text-[14px] font-normal text-[#333]"
    //           >
    //             Edit
    //           </MenuItem>
    //         )}
    //         {checkPermission("Client Management", "delete") && (
    //           <MenuItem
    //             value="delete"
    //             onClick={() => {
    //               setIsLoading(false);
    //               setOpenDelete(true);
    //               setClientId(params.row.ClientId);
    //             }}
    //             className="text-[14px] font-normal text-[#333]"
    //           >
    //             Delete
    //           </MenuItem>
    //         )}
    //         <MenuItem
    //           value="formType"
    //           onClick={() => {
    //             setClientOpenModal(true);
    //             setClientInfo({
    //               SFID: params.row.SfId,
    //               DepartmentType: params.row.BusinessType,
    //               DepartmentId: params.row.BusinessTypeId,
    //               ClientId: params.row.ClientId,
    //               clientName: params.row.Clientname,
    //               UserId: params.row.UserId,
    //               IsFormLocked: params.row.IsFormLocked,
    //             });
    //           }}
    //           className="text-[14px] font-normal text-[#333]"
    //         >
    //           Form Type
    //         </MenuItem>
    //       </Select>
    //     );
    //   },
    // },
  ];
  const [clientInfo, setClientInfo] = useState<any>({
    SFID: "",
    DepartmentType: "",
    DepartmentId: "",
    ClientId: "",
    clientName: "",
    UserId: "",
    IsFormLocked: false,
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
  ): Promise<{ label: string; value: number; email: string }[]> => {
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
                email: item.UserEmail,
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

  const saveAssignUser = async (value: number[], ClientId: number) => {
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
      userId: value.filter((value) => value !== 0),
      clientId: ClientId,
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
          setClientData(
            ResponseData.clients.map((item, index) => ({
              ...item,
              srNo:
                (ResponseData.currentPage - 1) * clientListParams.limit +
                (index + 1),
            }))
          );
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
  }, [clientOpenModal, clientInfo]);

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

  const handleStatusChange = async (newStatus: string, clientId: number) => {
    const callback = (ResponseStatus: string, Message: string) => {
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

    await callAPIwithHeaders(ClientStatusUpdateUrl, "post", callback, {
      clientId: clientId,
      status: newStatus === "Active" ? true : false,
    });
  };

  return (
    <Wrapper>
      <div className="flex justify-between w-full mt-16 bg-[#F6F6F6] items-center px-6">
        <h3 className="font-semibold text-base tracking-wide">Client Management</h3>
        <div className="flex items-center gap-1 justify-between">
          {checkPermission("Client Management", "view") ? (
            <div className="w-[40%] bg-[#FFFFFF] flex h-[36px] border border-[#D8D8D8] rounded-md">
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
          {checkPermission("Client Management", "view") && (
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
          {selectedIds.length > 0 && (
            <button
              disabled={selectedIds.length <= 0}
              onClick={() => SendInvitation()}
              className={`${selectedIds.length <= 0
                ? "!border-[#636363] !text-[#636363] cursor-not-allowed"
                : "!border-[#0078C8] !text-[#0078C8] hover:!border-[#023963] hover:!text-[#023963]"
                } px-3 border !normal-case !text-[16px] ${invitaionLoading
                  ? "flex items-center justify-center bg-[#023963]"
                  : "!bg-[#FFFFFF]"
                } !h-[36px] !rounded-md text-normal text-[16px]`}
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
              className={`px-5 normal-case text-[16px] bg-[#0078C8] hover:bg-[#023963] !text-[#fff] !rounded-md font-normal h-[36px]`}
            >
              Add Client
            </button>
          )}
        </div>
      </div>

      {checkPermission("Client Management", "view") && (
        <div className="w-full h-[78vh] mt-5 bg-[#FFFFFF]">
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
              UserId: "",
              IsFormLocked: false,
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
