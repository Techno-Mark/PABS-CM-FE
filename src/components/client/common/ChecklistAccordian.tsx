import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
} from "@mui/material";
import React from "react";
import { ChecklistAccordianProps } from "@/models/autoCarChecklist";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ChecklistAccordian = ({
  title,
  children,
  expandedAccordian,
  handleChange,
}: ChecklistAccordianProps) => {
  return (
    <Accordion
      expanded={expandedAccordian}
      onChange={handleChange}
      className="!border-t-4 !rounded-md !border-[#022946] w-full"
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
          <span className="!z-0">
            <Switch checked={true} />
          </span>
        </div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ChecklistAccordian;
