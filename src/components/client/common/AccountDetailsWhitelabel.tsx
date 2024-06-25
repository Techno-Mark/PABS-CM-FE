/* eslint-disable react/jsx-key */
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import { ChecklistWhitelabelType } from "@/models/whitelabelBasicDetails";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import { noRecordText, renderCellFunction } from "@/utils/commonData";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import {
  OnboardingFormAccountDetailsDelete,
  OnboardingFormAccountDetailsList,
  onboardingSaveFormUrl,
} from "@/static/apiUrl";
import { Button, Chip, Stack, TablePagination, Tooltip } from "@mui/material";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
import AccountDetailsDrawer from "./AccountDetailsDrawer";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import BulkImportModel from "@/components/admin/common/BulkImportModel";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";

const AccountDetailsWhitelabel = ({
  setChecklistFormSubmit,
  checkAllWhitelabelBasicDetails,
  checkAllWhitelabelChecklist,
  clientInfo,
  whiteLabelProgressPercentage,
  isFormSubmmitWhitelabel,
  setWhiteLabelFormSubmittedStatus
}: any) => {
  const userId = Cookies.get("userId");
  const roleId = Cookies.get("roleId");
  const businessTypeId = Cookies.get("businessTypeId");

  const [loading, setLoading] = useState<boolean>(true);
  const [isBulkLoading, setBulkLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clientId, setClientId] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [bulkOpenDrawer, setBulkOpenDrawer] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [accountList, setAccountList] = useState<any>([]);
  const [isOpenConfirmationSubmit, setIsOpenConfirmationSubmit] =
    useState<boolean>(false);
  const [accountListParams, setAccountListParams] = useState<{
    page: number;
    limit: number;
    search: string;
  }>({
    page: 1,
    limit: rowsPerPage,
    search: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNo(0);
      setAccountListParams({
        ...accountListParams,
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
    setAccountListParams({
      ...accountListParams,
      page: pageNo + 1,
    });
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageNo(0);
    setRowsPerPage(parseInt(event.target.value));
    setAccountListParams({
      ...accountListParams,
      page: 1,
      limit: parseInt(event.target.value),
    });
  };

  const renderCellFunctionTooltip = (value: any) => (
    <Tooltip title={value} placement="top-start">
      {value}
    </Tooltip>
  );

  const columns: GridColDef[] = [
    {
      field: "id",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr No.</span>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <span className="font-semibold">{params.api.getAllRowIds().indexOf(params.id)+1}</span>
      ),
    },
    {
      field: "clientId",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Client ID</span>
      ),
      minWidth: 150,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "organizationName",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Organization Name</span>
      ),
      minWidth: 150,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "backgroundNatureOfBusiness",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Background/Nature of Business
        </span>
      ),
      minWidth: 230,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "IndustryType",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Industry Type</span>
      ),
      minWidth: 150,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "entityType",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Entity Type</span>
      ),
      minWidth: 150,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "accountingSoftware",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Accounting Software</span>
      ),
      minWidth: 160,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "documentSharing",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Document Sharing</span>
      ),
      minWidth: 150,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "bankConnectedWithAccountingSoftware",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Bank Connected with Accounting Software
        </span>
      ),
      minWidth: 300,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "accountingMethodIncTax",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Accounting Method-Inc Tax
        </span>
      ),
      minWidth: 200,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "estimateHoursOfWork",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Estimate Hours of Work
        </span>
      ),
      minWidth: 170,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "pabsDuties",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">PABS Duties</span>
      ),
      minWidth: 100,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "bookkeepingPeriod",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Bookkeeping Monthly or Clean Up (Period - Months/Years)
        </span>
      ),
      minWidth: 240,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "deadline",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Deadline</span>
      ),
      minWidth: 100,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "notes1MonthlyTransactions",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">
          Notes1 - Monthly Transactions
        </span>
      ),
      minWidth: 220,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "notes",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Notes</span>
      ),
      minWidth: 100,
      sortable: false,
      renderCell: (params) => renderCellFunctionTooltip(params.value),
    },
    {
      field: "status",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Status</span>
      ),
      minWidth: 100,
      sortable: false,
      renderCell: (params) =>
        renderCellFunctionTooltip(
          <div className="flex h-full justify-start items-center">
            <Chip
              size="small"
              label={`${params.value === true ? "Active" : "Inactive"}`}
              color={`${params.value === true ? "success" : "error"}`}
            />
          </div>
        ),
    },
  ];

  if (roleId === "4" ? !isFormSubmmitWhitelabel : true) {
    columns.push({
      field: "action",
      renderHeader: () => (
        <span className="font-semibold text-[13px] flex justify-end items-end">
          Actions
        </span>
      ),
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <div className="flex gap-8 justify-start h-full items-center">
            <Tooltip title="Edit" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpenDrawer(true);
                  setEdit(true);
                  setClientId(params.row.id);
                }}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip title="Delete" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setIsLoading(false);
                  setOpenDelete(true);
                  setClientId(params.row.id);
                }}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      },
    });
  }

  const getAccountList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: {
        totalAccountDetails: number;
        totalPages: number;
        currentPage: number;
        accountDetail: any[];
      }
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setAccountList(ResponseData.accountDetail);
          setTotalCount(ResponseData.totalAccountDetails);
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(
      `${OnboardingFormAccountDetailsList}/${userId}`,
      "post",
      callback,
      accountListParams
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getAccountList();
      setWhiteLabelFormSubmittedStatus(isFormSubmmitWhitelabel)
    }, 550);

    return () => clearTimeout(timer);
  }, [accountListParams]);

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
          setSearch("");
          setPageNo(0);
          setAccountListParams({
            ...accountListParams,
            search: "",
            page: 0 + 1,
            limit: rowsPerPage,
          });
          return;
      }
    };
    await callAPIwithHeaders(
      `${OnboardingFormAccountDetailsDelete}/${userId}`,
      "post",
      callback,
      {
        id: clientId,
      }
    );
  };

  const handleSubmit = () => {
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setIsOpenConfirmationSubmit(false);
          return;
        case "success":
          setIsOpenConfirmationSubmit(false);
          showToast(Message, ToastType.Success);
          return;
      }
    };

    if (!checkAllWhitelabelBasicDetails) {
      setChecklistFormSubmit(11);
      setIsOpenConfirmationSubmit(false);
      showToast(
        "Please provide mandatory fields to submit the onboarding form.",
        ToastType.Error
      );
    } else if (!checkAllWhitelabelChecklist) {
      setChecklistFormSubmit(12);
      setIsOpenConfirmationSubmit(false);
      showToast(
        "Please provide mandatory fields to submit the onboarding form.",
        ToastType.Error
      );
    } else {
      if (!isFormSubmmitWhitelabel) {
        callAPIwithHeaders(onboardingSaveFormUrl, "post", callback, {
          userId: !!clientInfo?.UserId
            ? parseInt(clientInfo?.UserId)
            : parseInt(userId!),
          businessTypeId: !!clientInfo?.DepartmentId
            ? parseInt(clientInfo?.DepartmentId)
            : parseInt(businessTypeId!),
          progress: whiteLabelProgressPercentage,
          isSubmited: true,
        });
      }
    }
  };

  return (
    <div
      className={`flex flex-col ${
        roleId !== "4" ? "h-[95vh]" : "h-full  w-[95%]"
      } pt-12`}
    >
      <div className="flex justify-between px-4  pt-4 bg-[#F9FBFF]">
        <div className="w-[30%] bg-[#FFFFFF] flex h-[36px] border border-[#D8D8D8] rounded-md">
          <span className="m-3 flex items-center">
            <SearchIcon />
          </span>
          <input
            type="search"
            id="default-search"
            placeholder="Search"
            className="p-2 flex items-center text-[13px] outline-none w-[90%]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {roleId === "4"
          ? isFormSubmmitWhitelabel
          : true && (
              <div className="flex gap-5">
                <button
                  onClick={() => {
                    setBulkOpenDrawer(true);
                  }}
                  className={`!border-[#023963] px-3 border !normal-case !text-[16px] !bg-[#FFFFFF] !text-[#023963] !h-[36px] !rounded-md`}
                >
                  Bulk Upload
                </button>
                <button
                  onClick={() => {
                    setOpenDrawer(true);
                    setEdit(false);
                  }}
                  className={`!border-[#023963] px-3 border !normal-case !text-[16px] !bg-[#FFFFFF] !text-[#023963] !h-[36px] !rounded-md`}
                >
                  Add Account Detail
                </button>
              </div>
            )}
      </div>

      <div className={`flex flex-col gap-5`}>
        <div
          className={` ${
            roleId !== "4" ? "h-[64vh]" : ""
          } px-4 mt-5 scrollbar overflow-auto`}
        >
          <DataGrid
            disableColumnMenu
            rows={accountList}
            columns={columns}
            getRowId={(i: any) => i.id}
            localeText={noRecordText}
            loading={loading}
            className="h-[calc(100vh-200px)]"
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
        <div className="py-3 border-[#D8D8D8] bg-[#ffffff] flex items-center justify-between border-t px-6">
          <Button
            onClick={() => setChecklistFormSubmit(12)}
            className={`!border-[#022946] !bg-[#FFFFFF] !text-[#022946] !rounded-full font-semibold text-[14px]`}
            variant="outlined"
          >
            Back
          </Button>
          {roleId === "4" && !isFormSubmmitWhitelabel && (
            <Button
              onClick={() => setIsOpenConfirmationSubmit(true)}
              className={`!bg-[#022946] font-semibold text-white !rounded-full text-[14px]`}
              variant="outlined"
            >
              Submit
            </Button>
          )}
        </div>
      </div>

      {openDrawer && (
        <AccountDetailsDrawer
          type=""
          canEdit={openEdit}
          clientID={clientId}
          setId={() => setClientId(0)}
          openDrawer={openDrawer}
          setOpenDrawer={(value: boolean) => setOpenDrawer(value)}
          getAccountList={getAccountList}
        />
      )}

      {bulkOpenDrawer && (
        <BulkImportModel
          title="Import Data"
          isLoading={isBulkLoading}
          isOpen={bulkOpenDrawer}
          handleClose={() => setBulkOpenDrawer(false)}
          setIsOpen={(value) => setBulkOpenDrawer(value)}
          getAccountList={getAccountList}
        />
      )}

      {openDelete && (
        <ConfirmModal
          title="Delete"
          isLoading={isLoading}
          isOpen={openDelete}
          message="Are you sure you want to delete this record?"
          handleModalSubmit={handleDelete}
          handleClose={() => setOpenDelete(false)}
          setIsOpen={(value) => setOpenDelete(value)}
          setId={() => setClientId(0)}
        />
      )}

      {isOpenConfirmationSubmit && (
        <ConfirmModal
          title="Confirm"
          isOpen={isOpenConfirmationSubmit}
          message="After submit you will not be able to update data. Please click confirm to continue."
          handleModalSubmit={() => handleSubmit()}
          handleClose={() => setIsOpenConfirmationSubmit(false)}
          setIsOpen={(value) => {
            setIsOpenConfirmationSubmit(value);
          }}
        />
      )}

      <DrawerOverlay isOpen={openDrawer} />
    </div>
  );
};

export default AccountDetailsWhitelabel;
