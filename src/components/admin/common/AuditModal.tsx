import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import {
  auditLogModalstyle,
  stickyHeaderStyle,
  tableContainerStyle,
} from "@/utils/modalStyle";
import { Box, Modal } from "@mui/material";
import dayjs from "dayjs";

interface Data {
  fieldName: string;
  oldValue: string;
  newValue: string;
}

interface AuditDetails {
  moduleName: string;
  subSection: string;
  performedAction: string;
  tableName: string;
  createdDate: string;
  createdBy: string;
  data: Data[];
}

interface AuditModalProps {
  isOpen: boolean;
  handleClose: () => void;
  auditDetails: AuditDetails;
}

function AuditModal({ isOpen, handleClose, auditDetails }: AuditModalProps) {
  const updatedDateTime = (dateTime: string) => {
    return dateTime ? dayjs(dateTime).format("MM/DD/YYYY HH:mm:ss") : "N/A";
  };

  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return "N/A";
    return dayjs(dateTime)
      .add(5, "hour")
      .add(30, "minute")
      .format("MM/DD/YYYY HH:mm:ss");
  };

  const getSubSectionName = (tableName: string) => {
    switch (tableName) {
      case "ClientInfo_AutoCares":
        return "Auto care";
      case "ClientInfo_SMBs":
        return "SMB";
      case "ClientInfo_WhiteLabels":
        return "White Label";
      default:
        return "Other";
    }
  };

  const formatFieldName = (fieldName: string) => {
    return fieldName
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (str) => str.toUpperCase());
  };

  const RenamedDateFields = [
    "createdAt",
    "updatedAt",
    "tokenExpiryDate",
    "verifyDate",
    "tokenCreatedTime",
    "accessTokenExpiryTime",
    "refreshTokenExpiryTime",
  ];

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="flex justify-center outline-none"
    >
      <Box sx={auditLogModalstyle}>
        <div className="flex flex-col h-full overflow-hidden p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Event Details</h2>
            <span className="cursor-pointer" onClick={handleClose}>
              <CloseIcon />
            </span>
          </div>
          <div className="flex flex-col space-y-3 overflow-auto">
            <div className="flex space-x-48">
              <div className="flex-1">
                <span className="font-semibold">Section : </span>
                <span>{auditDetails.moduleName}</span>
              </div>
              <div className="flex-1 ">
                <span className="font-semibold">Update Date/Time : </span>
                <span>{updatedDateTime(auditDetails.createdDate)}</span>
              </div>
            </div>
            <div className="flex space-x-48">
              <div className="flex-1">
                <span className="font-semibold">Sub Section : </span>
                <span>{getSubSectionName(auditDetails.tableName)}</span>
              </div>
              <div className="flex-1">
                <span className="font-semibold">Updated by : </span>
                <span>{auditDetails.createdBy}</span>
              </div>
            </div>
            <div className="flex space-x-48">
              <div className="flex-1">
                <span className="font-semibold">Action on event : </span>
                <span>{auditDetails.performedAction}</span>
              </div>
            </div>
            <div style={tableContainerStyle}>
              <table className="min-w-full divide-y divide-[#023963] border border-[#023963]">
                <thead className="bg-gray-200" style={stickyHeaderStyle}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Sr No.
                    </th>
                    <th className="px-14 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Field
                    </th>
                    <th className="px-14 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Old Value
                    </th>
                    <th className="px-14 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      New Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#023963]">
                  {auditDetails.data && auditDetails.data.length > 0 ? (
                    auditDetails.data
                      .filter(
                        (action: any) =>
                          action.fieldName !== "password" &&
                          action.fieldName !== "token"
                      )
                      .map((action: any, index: number) => (
                        <tr key={index}>
                          <td className="px-6 py-4 max-w-xs text-sm">
                            {index + 1}
                          </td>
                          <td className="px-14 py-4 max-w-xs text-sm break-words">
                            {RenamedDateFields.includes(action.fieldName)
                              ? formatDateTime(action.oldValue)
                              : action.fieldName === "isFormLocked"
                              ? action.oldValue == 0
                                ? "false"
                                : "true"
                              : action.oldValue}
                          </td>
                          <td className="px-14 py-4 max-w-xs text-sm break-words">
                            {RenamedDateFields.includes(action.fieldName)
                              ? formatDateTime(action.newValue)
                              : action.fieldName === "isFormLocked"
                              ? action.newValue == 0
                                ? "false"
                                : "true"
                              : action.newValue}
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-sm">
                        No fields changed
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default AuditModal;
