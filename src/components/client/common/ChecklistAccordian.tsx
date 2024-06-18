import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
} from "@mui/material";
import React from "react";
import { ChecklistAccordianProps } from "@/models/autoCareChecklist";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Cookie import
import Cookies from "js-cookie";

const ChecklistAccordian = ({
  title,
  children,
  expandedAccordian,
  handleChange,
  hasError = false,
  checkStatus,
  handleSwitchChange,
}: ChecklistAccordianProps) => {
  const roleId = Cookies.get("roleId");
  return (
    <Accordion
      expanded={expandedAccordian}
      onChange={handleChange}
      className={`!border-t-4 !rounded-md ${
        hasError ? "!border-[#ec2a2a]" : "!border-[#022946]"
      } w-full`}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="flex justify-between items-center w-full">
          <span className="text-[#333333] text-[18px] font-medium">
            {title}
          </span>
          {roleId !== "4" && (
            <span className={`!z-0`}>
              <Switch checked={checkStatus} onChange={handleSwitchChange}/>
            </span>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ChecklistAccordian;
