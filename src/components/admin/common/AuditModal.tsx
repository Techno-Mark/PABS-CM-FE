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
  const parsedDate = dayjs(auditDetails.createdDate);
  const updatedDateTime = parsedDate.format("MM/DD/YYYY HH:mm:ss");

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
            <div className="flex space-x-64">
              <div className="flex-1">
                <span className="font-semibold">Section : </span>
                <span>{auditDetails.moduleName}</span>
              </div>
              <div className="flex-1 ">
                <span className="font-semibold">Update Date/Time : </span>

                <span>{updatedDateTime}</span>
              </div>
            </div>
            <div className="flex space-x-64">
              <div className="flex-1">
                <span className="font-semibold">Sub Section : </span>
                <span>{getSubSectionName(auditDetails.tableName)}</span>
              </div>
              <div className="flex-1">
                <span className="font-semibold">Updated by : </span>
                <span>{auditDetails.createdBy}</span>
              </div>
            </div>
            <div style={tableContainerStyle}>
              <table className="min-w-full divide-y divide-[#023963] border border-[#023963]">
                <thead className="bg-gray-200" style={stickyHeaderStyle}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Action on event
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Field
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      Old Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#FFF]">
                      New Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-[#023963]">
                  {auditDetails.data?.map((action: any, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 max-w-xs text-sm">
                        {auditDetails.performedAction}
                      </td>
                      <td className="px-6 py-4 max-w-xs text-sm">{action.fieldName}</td>
                      <td className="px-6 py-4 max-w-xs text-sm break-words">
                        {action.oldValue}
                      </td>
                      <td className="px-6 py-4 max-w-xs text-sm break-words">
                        {action.newValue}
                      </td>
                    </tr>
                  ))}
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
