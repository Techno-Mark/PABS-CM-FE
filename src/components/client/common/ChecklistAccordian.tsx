import React from "react";
// MUI import
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// Models import
import { ChecklistAccordianProps } from "@/models/autoCareChecklist";
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
  switchDisabled = false,
  isFormLocked,
}: ChecklistAccordianProps) => {
  const roleId = Cookies.get("roleId");

  return (
    <Accordion
      expanded={expandedAccordian}
      onChange={handleChange}
      className={`shadow-none border-0 before:h-0 ${hasError ? "!border-[#ec2a2a]" : ""} w-full`}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        className="bg-[#F4FBFF] flex flex-row-reverse [&>div]:!my-0"
      >
        <div className="flex justify-start items-center w-full pl-5">
          <span className="text-[#333333] text-[16px] font-semibold ">
            {title}
          </span>
          {roleId !== "4" && (
            <span className={`!z-0`}>
              <Switch
                checked={checkStatus}
                onChange={handleSwitchChange}
                disabled={
                  switchDisabled ||
                  (isFormLocked && (roleId === "3" || roleId === "4"))
                }
              />
            </span>
          )}
        </div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ChecklistAccordian;
