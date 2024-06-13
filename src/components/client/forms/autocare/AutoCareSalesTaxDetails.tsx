import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareSalesTaxDetailsTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareSalesTaxDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareSalesTaxDetails({
  className,
  salesTaxDetailsRows,
  setSalesTaxDetailsRows,
}: autoCareSalesTaxDetailsTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setSalesTaxDetailsRows([
      ...salesTaxDetailsRows,
      initialAutoCareSalesTaxDetails,
    ]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = salesTaxDetailsRows.filter((_, i) => i !== index);
    setSalesTaxDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = salesTaxDetailsRows.map((salesTaxDetailsRows, rowIndex) =>
      rowIndex === index
        ? { ...salesTaxDetailsRows, [name]: value }
        : salesTaxDetailsRows
    );
    setSalesTaxDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {salesTaxDetailsRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-center ${
            index !== salesTaxDetailsRows.length - 1 &&
            "border-b border-[#D8D8D8]"
          }`}
        >
          <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
            {index + 1}.
          </span>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">User ID</label>
                <TextField
                  name="salesTaxDetailsUserId"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter User ID"
                  value={row.salesTaxDetailsUserId}
                  onChange={(event) => handleInputChange(index, event)}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">Details</label>
                <TextField
                  name="salesTaxDetailsDetails"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Details"
                  value={row.salesTaxDetailsDetails}
                  onChange={(event) => handleInputChange(index, event)}
                  InputProps={{
                    classes: {
                      underline: classes.underline,
                    },
                  }}
                  inputProps={{
                    className: classes.textSize,
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6} className="flex justify-end items-end gap-4">
              {salesTaxDetailsRows.length > 1 && (
                <span onClick={() => handleRemoveRow(index)}>
                  <MinusCircle />
                </span>
              )}
              {index === salesTaxDetailsRows.length - 1 && (
                <span onClick={handleAddRow}>
                  <PlusCircleicon />
                </span>
              )}
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default AutoCareSalesTaxDetails;
