import { Box, Switch } from "@mui/material";
import React from "react";

interface FormBoxProps {
  title: string;
  checked: boolean;
  children: any;
}

const FormBox = ({ title, checked, children }: FormBoxProps) => {
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: 3,
        borderRadius: 2,
        borderTop: "4px solid #022946",
      }}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b border-[#D8D8D8]">
        <span>{title}</span>
        <Switch checked={checked} />
      </div>
      <div className="py-2 px-4 gap-5 h-[300px]">{children}</div>
    </Box>
  );
};

export default FormBox;