import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
// Cookie import
import Cookies from "js-cookie";
import { ChecklistAccordianProps } from "@/models/autoCarChecklist";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ChecklistAccordian = ({
  title,
  children,
}: ChecklistAccordianProps) => {
  const roleId = Cookies.get("roleId");
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <span className="text-[#333333] text-[18px] font-medium">{title}</span>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default ChecklistAccordian;
