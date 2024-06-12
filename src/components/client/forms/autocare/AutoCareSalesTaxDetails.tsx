import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
import { autoCareSalesTaxTypes } from "@/models/autoCareLogininfo";
import { initialAutoCareSalesTaxDetails } from "@/static/autoCareLoginInfo";
import { useStyles } from "@/utils/useStyles";
import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function AutoCareSalesTaxDetails({ className }: any) {
  const classes = useStyles();
  const [salesTaxDetailsRows, setSalesTaxDetailsRows] = useState<
    autoCareSalesTaxTypes[]
  >([initialAutoCareSalesTaxDetails]);

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
        <div key={index} className="py-3 px-2 w-full flex justify-center">
          <span className="pr-2 flex justify-center items-center text-[12px]">
            {index + 1}.
          </span>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="text-[12px] flex flex-col">
                <label className="text-[#6E6D7A] text-[12px]">User-ID</label>
                <TextField
                  name="salestaxDetailsUserId"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter User-ID"
                  value={row.salestaxDetailsUserId}
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
                  name="details"
                  variant="standard"
                  size="small"
                  placeholder="Please Enter Details"
                  value={row.salestaxDetailsDetails}
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
