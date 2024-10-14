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
import PasswordIcon from "@/assets/Icons/PasswordIcon";

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
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Sr No.</span>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => {
        const serialNumber =
          pageNo * rowsPerPage +
          params.api.getSortedRowIds().indexOf(params.id) +
          1;
        return serialNumber;
      },
    },
    {
      field: "moduleName",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Module</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "performedAction",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Action Taken</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "createdBy",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Username</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "createdDate",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova">Date of Event</span>
      ),
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        if (params.value) {
          const parsedDate = dayjs(params.value);
          if (parsedDate.isValid()) {
            return parsedDate.format("MM/DD/YYYY HH:mm:ss");
          }
        }
        return "";
      },
    },
    {
      field: "action",
      renderHeader: () => (
        <span className="font-bold text-[14px] uppercase tracking-[0.28px] font-proximanova"><PasswordIcon/></span>
      ),
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
                <PasswordIcon/>
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
      <div className="flex justify-between w-full mt-16 bg-[#F6F6F6] items-center px-6">
      <h3 className="font-semibold text-base tracking-wide">Audit Logs</h3>
      <div className="flex items-center gap-3 justify-end">
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
        <Tooltip title="Filter" placement="top" arrow>
          <span
            className="w-[38px] h-[36px] flex items-center justify-center cursor-pointer"
            onClick={() => setOpenFilter(true)}
          >
            <FilterIcon />
          </span>
        </Tooltip>
      </div>  
      </div>

      <div className="w-full h-[78vh] mt-5 bg-[#FFFFFF]">
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
            [`& .${gridClasses.columnHeaders}`]: {
              borderTop: "1px solid #6C6C6C",
              borderBottom: "2px solid #6C6C6C",
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
