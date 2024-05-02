"use client";
import React, { useState } from "react";
// Components imports
import Wrapper from "@/components/Wrapper";
import UserDrawer from "@/components/admin/drawer/user/UserDrawer";
import DrawerOverlay from "@/components/DrawerOverlay";
import FilterPopover from "./components/FilterPopover";
// Static imports
import { UserRows } from "@/static/usermanage";
// Icons imports
import FilterIcon from "@/assets/Icons/admin/FilterIcon";
import SearchIcon from "@/assets/Icons/admin/SearchIcon";
import EditIcon from "@/assets/Icons/admin/EditIcon";
import DeleteIcon from "@/assets/Icons/admin/DeleteIcon";
// MUI imports
import { Button, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


function Page() {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Sr.No.", width: 100 },
    { field: "fullName", headerName: "Full Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex gap-9 justify-center h-full items-center">
            <Tooltip title="Edit" placement="top" arrow>
              <span
                className="cursor-pointer"
                onClick={() => {
                  setOpenDrawer(true);
                  setEdit(true);
                }}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip title="Delete" placement="top" arrow>
              <span>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openEdit, setEdit] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="bg-[#F9FBFF]">
        <div className="flex justify-between w-full mt-12">
          <div className="w-[50%] flex h-[36px] border border-[#D8D8D8] rounded-md">
            <span className="m-3 flex items-center">
              <SearchIcon />
            </span>
            <span className="text-[#A2A3A4] p-2 flex items-center text-[13px]">
              Search
            </span>
          </div>
          <div className="flex gap-5">
            <Tooltip title="Filter" placement="top" arrow>
              <span
                className="border-[#023963] w-[38px] h-[36px] flex items-center justify-center border rounded-lg cursor-pointer"
                onClick={() => setOpenFilter(true)}
              >
                <FilterIcon />
              </span>
            </Tooltip>
            <Button
              onClick={() => {
                setOpenDrawer(true);
                setEdit(false);
              }}
              className={`!border-[#023963] text-[#023963] !h-[36px] !rounded-md`}
              variant="outlined"
            >
              <span className="normal-case !text-[16px] text-[#023963]">
                Add User
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full h-[78vh] mt-5">
          <DataGrid
            rows={UserRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>

        {openDrawer && (
          <UserDrawer
            canEdit={openEdit}
            openDrawer={openDrawer}
            setOpenDrawer={(value) => setOpenDrawer(value)}
          />
        )}

        {openFilter && (
          <FilterPopover
            isOpen={openFilter}
            setIsOpen={(value) => setOpenFilter(value)}
          />
        )}
        <DrawerOverlay isOpen={openDrawer} />
      </div>
    </Wrapper>
  );
}

export default Page;
