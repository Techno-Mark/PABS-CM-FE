"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// MUI import
import { TablePagination, Tooltip } from "@mui/material";
// static import
// Components import
import Wrapper from "@/components/Wrapper";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
// Type import
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
// API import
// Utils import
import { noRecordText } from "@/utils/commonData";
//Icons import
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import ViewIcon from "@/assets/Icons/admin/auditlog/ViewIcon";
import AuditModal from "@/components/admin/common/AuditModal";
import AuditFilter from "@/components/admin/modals/AuditFilter";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
// Cookie import
import Cookies from "js-cookie";
import {
  AuditListType,
  GetAuditLogListResponse,
  GetUserAllListResponse,
} from "@/models/auditlog";
import { showToast } from "@/components/ToastContainer";
import { ToastType } from "@/static/toastType";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { auditLogListUrl, userListUrl } from "@/static/apiUrl";
import { CustomLoadingOverlay } from "@/utils/CustomTableLoading";
import dayjs from "dayjs";
import { moduleList } from "@/static/auditLog";

function Page() {
  const router = useRouter();

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openAuditModal, setOpenAuditModal] = useState<boolean>(false);
  const [auditLogData, setAuditLogData] = useState<any[]>([]);
  const [userList, setUserList] = useState<GetUserAllListResponse[]>([]);
  const [selectedAudit, setSelectedAudit] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(true);
  const [auditListParams, setAuditListParams] = useState<AuditListType>({
    page: 1,
    limit: rowsPerPage,
    search: "",
    fromDate: "",
    toDate: "",
    moduleNames: [],
    userNames: [],
    saveClicked: false,
  });

  useEffect(() => {
    const roleId = Cookies.get("roleId");
    if (roleId == "4") {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageNo(0);
      setAuditListParams({
        ...auditListParams,
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
    setAuditListParams({
      ...auditListParams,
      page: pageNo + 1,
    });
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPageNo(0);
    setRowsPerPage(parseInt(event.target.value));
    setAuditListParams({
      ...auditListParams,
      page: 1,
      limit: parseInt(event.target.value),
    });
  };

  const getAuditLogList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: GetAuditLogListResponse
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setAuditLogData(ResponseData.auditLogs);
          setTotalCount(ResponseData.totalAuditLogs);

          const uniqueUsers = new Map();

          ResponseData.auditLogs.forEach((log) => {
            if (!uniqueUsers.has(log.createdBy)) {
              uniqueUsers.set(log.createdBy, {
                UserId: log.auditLogId,
                UserName: log.createdBy,
              });
            }
          });
          setUserList(Array.from(uniqueUsers.values()));
          setLoading(false);
          return;
      }
    };
    await callAPIwithHeaders(
      auditLogListUrl,
      "post",
      callback,
      auditListParams
    );
  };

  const getAuditUserList = async () => {
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          setUserList(ResponseData.Users);
          return;
      }
    };
    await callAPIwithHeaders(userListUrl, "get", callback, {});
  };

  useEffect(() => {
    getAuditLogList();
    getAuditUserList();
  }, [auditListParams]);

  const handleViewClick = (audit: any) => {
    setSelectedAudit(audit);
    setOpenAuditModal(true);
  };

  const columns: GridColDef[] = [
    {
      field: "srNo",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Sr No.</span>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return params.api.getSortedRowIds().indexOf(params.id) + 1;
      },
    },
    {
      field: "moduleName",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Module</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "performedAction",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Action Taken</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "createdBy",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Username</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "createdDate",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Date of Event</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.value) {
          const parsedDate = dayjs(params.value);
          if (parsedDate.isValid()) {
            return parsedDate.format("MM/DD/YYYY");
          }
        }
        return "";
      },
    },
    {
      field: "action",
      renderHeader: () => <span> </span>,
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <div className="flex gap-9 justify-start h-full items-center">
            <Tooltip title="View" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => handleViewClick(params.row)}
              >
                <ViewIcon />
              </span>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const getFilterData = (
    fromDate: string,
    toDate: string,
    moduleNames: string[],
    userNames: string[],
    saveClicked: boolean
  ) => {
    setAuditListParams({
      ...auditListParams,
      fromDate: fromDate,
      toDate: toDate,
      moduleNames: moduleNames,
      userNames: userNames,
      saveClicked: saveClicked,
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
            type="search"
            id="default-search"
            placeholder="Search"
            className="p-2 flex items-center text-[13px] outline-none w-[90%]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Tooltip title="Filter" placement="top" arrow>
          <span
            className="border-[#023963] !bg-[#FFFFFF] w-[38px] h-[36px] flex items-center justify-center border rounded-lg cursor-pointer"
            onClick={() => setOpenFilter(true)}
          >
            <FilterIcon />
          </span>
        </Tooltip>
      </div>

      <div className="w-full h-[78vh] mt-5">
        <DataGrid
          disableColumnMenu
          rows={auditLogData}
          columns={columns}
          getRowId={(i: any) => i.auditLogId}
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
          }}
        />
      </div>

      {openFilter && (
        <AuditFilter
          isOpen={openFilter}
          setIsOpen={(value: any) => setOpenFilter(value)}
          moduleList={moduleList}
          userList={userList}
          sendFilterData={getFilterData}
          auditListParams={auditListParams}
        />
      )}

      {selectedAudit && (
        <AuditModal
          isOpen={openAuditModal}
          handleClose={() => setOpenAuditModal(false)}
          auditDetails={selectedAudit}
        />
      )}
      <DrawerOverlay isOpen={openAuditModal} />
    </Wrapper>
  );
}

export default Page;
