import React from "react";
// Icons import
import MinusCircle from "@/assets/Icons/client/forms/MinusCircle";
import PlusCircleicon from "@/assets/Icons/client/forms/PlusCircleicon";
// Models import
import { autoCareVendorDetailsTypes } from "@/models/autoCareLogininfo";
// Static import
import { initialAutoCareVendorDetails } from "@/static/autoCareLoginInfo";
// Utils import
import { useStyles } from "@/utils/useStyles";
// MUI import
import { Grid, TextField } from "@mui/material";

function AutoCareVendorDetails({
  className,
  vendorDetailsRows,
  setVendorDetailsRows,
}: autoCareVendorDetailsTypes) {
  const classes = useStyles();

  const handleAddRow = () => {
    setVendorDetailsRows([...vendorDetailsRows, initialAutoCareVendorDetails]);
  };

  const handleRemoveRow = (index: any) => {
    const newRows = vendorDetailsRows.filter((_, i) => i !== index);
    setVendorDetailsRows(newRows);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newRows = vendorDetailsRows.map((vendorDetailsRows, rowIndex) =>
      rowIndex === index
        ? { ...vendorDetailsRows, [name]: value }
        : vendorDetailsRows
    );
    setVendorDetailsRows(newRows);
  };

  return (
    <div className={`${className}`}>
      {vendorDetailsRows.map((row, index) => (
        <div
          key={index}
          className={`py-3 px-2 w-full flex justify-between ${
            vendorDetailsRows.length - 1 === index ? "gap-[30px]" : "gap-[63px]"
          }${
            index !== vendorDetailsRows.length - 1 &&
            "border-b border-[#D8D8D8]"
          }`}
        >
          <div className="flex">
            <span className="pr-2 flex justify-center items-start font-semibold text-[12px]">
              {index + 1}.
            </span>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">No</label>
                  <TextField
                    name="vendorDetailsNo"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter No"
                    value={row.vendorDetailsNo}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">Location</label>
                  <TextField
                    name="vendorDetailsLocation"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Location"
                    value={row.vendorDetailsLocation}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Vendor Name
                  </label>
                  <TextField
                    name="vendorDetailsName"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Vendor Name"
                    value={row.vendorDetailsName}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">Service</label>
                  <TextField
                    name="vendorDetailsService"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Service"
                    value={row.vendorDetailsService}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Vendor Login Link
                  </label>
                  <TextField
                    name="vendorDetailsLoginLink"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Vendor Login Link"
                    value={row.vendorDetailsLoginLink}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Vendor User ID
                  </label>
                  <TextField
                    name="vendorDetailsUserId"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Vendor User ID"
                    value={row.vendorDetailsUserId}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Vendor Password
                  </label>
                  <TextField
                    name="vendorDetailsPassword"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Vendor Password"
                    value={row.vendorDetailsPassword}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    PABS Notes/Status
                  </label>
                  <TextField
                    name="vendorDetailsNotes_Status"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter PABS Notes/Status"
                    value={row.vendorDetailsNotes_Status}
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
              <Grid item xs={4}>
                <div className="text-[12px] flex flex-col">
                  <label className="text-[#6E6D7A] text-[12px]">
                    Client Comments
                  </label>
                  <TextField
                    name="vendorDetailsClientComments"
                    variant="standard"
                    size="small"
                    placeholder="Please Enter Client Comments"
                    value={row.vendorDetailsClientComments}
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
            </Grid>
          </div>
          <div className="flex justify-end items-end gap-3">
            {vendorDetailsRows.length > 1 && (
              <span className="cursor-pointer" onClick={() => handleRemoveRow(index)}>
                <MinusCircle />
              </span>
            )}
            {index === vendorDetailsRows.length - 1 && (
              <span className="cursor-pointer" onClick={handleAddRow}>
                <PlusCircleicon />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutoCareVendorDetails;
