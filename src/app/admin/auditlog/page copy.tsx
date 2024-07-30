"use client";
import { useState } from "react";
// MUI import
import { Tooltip } from "@mui/material";
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

function Page() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openAuditModal, setOpenAuditModal] = useState<boolean>(false);
  const [selectedAudit, setSelectedAudit] = useState<any>(null);

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
      field: "module",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Module</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "actionTaken",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Action Taken</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "username",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Username</span>
      ),
      flex: 1,
      sortable: false,
    },
    {
      field: "dateOfEvent",
      renderHeader: () => (
        <span className="font-semibold text-[13px]">Date of Event</span>
      ),
      flex: 1,
      sortable: false,
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

  const staticAuditLogData = [
    {
      id: 1,
      module: "Client Management",
      username: "John Doe",
      dateOfEvent: "2024-07-01",
      section: "Client Details",
      subSection: "Basic Info",
      updateDateTime: "2024-07-01 10:00 AM",
      updatedBy: "John Doe",
      actions: [
        {
          actionTaken: "Update Client Info",
          field: "Client Name",
          oldValue: "Client X",
          newValue: "Client A",
        },
        {
          actionTaken: "Update Client Info",
          field: "Client Address",
          oldValue: "123 Old St",
          newValue: "456 New Ave",
        },
        {
          actionTaken: "Update Client Info",
          field: "Client Email",
          oldValue: "clientx@example.com",
          newValue: "clienta@example.com",
        },
      ],
    },
    {
      id: 2,
      module: "User Management",
      username: "Jane Smith",
      dateOfEvent: "2024-07-02",
      section: "User Details",
      subSection: "Profile Info",
      updateDateTime: "2024-07-02 02:00 PM",
      updatedBy: "Jane Smith",
      actions: [
        {
          actionTaken: "Update User Profile",
          field: "Email",
          oldValue: "jane@oldemail.com",
          newValue: "jane@newemail.com",
        },
        {
          actionTaken: "Update User Profile",
          field: "Phone Number",
          oldValue: "+1234567890",
          newValue: "+0987654321",
        },
        {
          actionTaken: "Update User Profile",
          field: "Address",
          oldValue: "789 Old Rd",
          newValue: "321 New Blvd",
        },
        {
          actionTaken: "Update User Profile",
          field: "Email",
          oldValue: "jane@oldemail.com",
          newValue: "jane@newemail.com",
        },
        {
          actionTaken: "Update User Profile",
          field: "Phone Number",
          oldValue: "+1234567890",
          newValue: "+0987654321",
        },
        {
          actionTaken: "Update User Profile",
          field: "Address",
          oldValue: "789 Old Rd",
          newValue: "321 New Blvd",
        },
      ],
    },
  ];

  const moduleList = [
    { label: "Module 1", value: 1 },
    { label: "Module 2", value: 2 },
    { label: "Module 3", value: 3 },
  ];

  const clientUserList = [
    { label: "Client User 1", value: 1 },
    { label: "Client User 2", value: 2 },
    { label: "Client User 3", value: 3 },
  ];

  const userListParams = {
    fromDate: null,
    toDate: null,
    moduleIds: [],
    clientUserIds: [],
    saveClicked: false,
  };

  const handleFilterData = ({
    fromDate,
    toDate,
    moduleIds,
    clientUserIds,
    saveClicked,
  }: any) => {
    // Handle the filtered data here
    console.log("Filtered Data:", {
      fromDate,
      toDate,
      moduleIds,
      clientUserIds,
      saveClicked,
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
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
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
          rows={staticAuditLogData}
          columns={columns}
          getRowId={(i: any) => i.id}
          localeText={noRecordText}
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
          clientUserList={clientUserList}
          sendFilterData={handleFilterData}
          userListParams={userListParams}
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
