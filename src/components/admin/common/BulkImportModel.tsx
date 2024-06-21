import { callAPIwithHeaders } from "@/api/commonFunction";
import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import ExcelIcon from "@/assets/Icons/client/forms/ExcelIcon";
import { showToast } from "@/components/ToastContainer";
import { BulkModalProps } from "@/models/userManage";
import { OnboardingFormAccountDetailsSave } from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { bulkStyle } from "@/utils/modalStyle";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Modal,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import Cookies from "js-cookie";

const BulkImportModel = ({
  isOpen,
  title,
  isLoading,
  setIsOpen,
  handleClose,
  getAccountList,
}: BulkModalProps) => {
  const userId = Cookies.get("userId");
  const [isUploading, setIsUplaoding] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [excelData, setExcelData] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data instanceof ArrayBuffer) {
          const workbook = XLSX.read(new Uint8Array(data), { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(sheet);

          // Transform the JSON data and handle missing fields
          const transformedData = json.map((item: any) => ({
            clientId: item["Client ID"] || "",
            organizationName: item["OrganizationName"] || "",
            backgroundNatureOfBusiness:
              item["Background/Nature of Business"] || "",
            industryType: item["Industry Type"] || "",
            entityType: item["Entity Type"] || "",
            accountingSoftware: item["Accounting Software"] || "",
            documentSharing: item["Document Sharing"] || "",
            bankConnectedWithAccountingSoftware:
              item["Bank Connected with Accounting Software"] || "",
            accountingMethodIncTax: item["Accounting Method-Inc Tax"] || "",
            estimateHoursOfWork: parseInt(item["Estimate Hours of Work"]) || 0,
            pabsDuties: item["PABS Duties"] || "",
            bookkeepingPeriod:
              item["Bookkeeping Monthly or Clean Up (Period - Months/Years)"] ||
              "",
            deadline: item["Deadline"] ? new Date(item["Deadline"]) : "",
            notes1MonthlyTransactions:
              item["Notes1 - Monthly Transactions"] || "",
            notes: item["Notes"] || "",
          }));

          setExcelData(transformedData);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = async () => {
    if (excelData) {
      setIsUplaoding(true);
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: null
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            setIsUplaoding(false);
            setIsOpen(false);
            return;
          case "success":
            showToast(Message, ToastType.Success);
            setIsUplaoding(false);
            setIsOpen(false);
            getAccountList();
            return;
        }
      };
      await callAPIwithHeaders(
        `${OnboardingFormAccountDetailsSave}/${userId}`,
        "post",
        callback,
        excelData
      );
    }
    setIsOpen(false);
  };

  const downloadSampleFile = () => {
    const sampleFilePath = "/Sample file.xlsx";

    const link = document.createElement("a");
    link.href = sampleFilePath;
    link.download = "Sample-file.xlsx";
    link.click();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="h-[100vh] flex justify-center"
    >
      <Box sx={bulkStyle}>
        <div className="p-5 top-0 flex justify-between">
          <span className="font-bold text-[18px]"> {title}</span>
          <Tooltip title="Close" placement="bottom" arrow>
            <span
              className="flex items-center cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon />
            </span>
          </Tooltip>
        </div>
        <Divider />
        <div className="p-6 mb-5 px-5 h-[235px] w-[40vw]">
          <div className="flex items-center justify-around gap-5">
            <input
              accept=".xls,.xlsx"
              style={{ display: "none" }}
              id="raised-button-file"
              onChange={handleFileChange}
              type="file"
            />
            <label
              htmlFor="raised-button-file"
              className="flex items-center justify-center border border-lightSilver rounded-md w-full h-52 shadow-md hover:shadow-xl hover:bg-[#f5fcff] hover:border-[#a4e3fe] cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                {isUploading ? (
                  <span>Uploading..</span>
                ) : !isUploading && selectedFile !== null ? (
                  selectedFile.name
                ) : (
                  <>
                    <ExcelIcon />
                    <span className="text-darkCharcoal">Import Excel</span>
                  </>
                )}
              </div>
            </label>
          </div>
        </div>
        <Divider />
        <div className="flex py-5 px-4 gap-5 w-full justify-between !items-end right-0 bottom-0">
          <Button
            onClick={() => downloadSampleFile()}
            className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !h-[36px] !rounded-full !w-fit px-4 font-semibold text-[16px]`}
            variant="outlined"
          >
            Sample File
          </Button>
          <div>
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
              className={`!border-[#023963] !bg-[#FFFFFF] text-[#023963] !h-[36px] mr-4 !rounded-full !w-fit px-4 font-semibold text-[16px]`}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className={`!bg-[#023963] text-white !h-[36px] !rounded-full !w-fit px-4`}
              variant="contained"
            >
              {isLoading ? (
                <CircularProgress
                  size={20}
                  sx={{ color: "white !important" }}
                />
              ) : (
                <span className="uppercase font-semibold text-[16px]">
                  Import
                </span>
              )}
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default BulkImportModel;
