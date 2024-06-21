import { callAPIwithHeaders } from "@/api/commonFunction";
import { showToast } from "@/components/ToastContainer";
import WhitelabelDrawerPanel from "@/components/admin/common/WhitelabelDrawerPanel";
import {
  OnboardingFormAccountDetailsEdit,
  OnboardingFormAccountDetailsGetById,
  OnboardingFormAccountDetailsSave,
} from "@/static/apiUrl";
import { ToastType } from "@/static/toastType";
import { useStyles } from "@/utils/useStyles";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface AccountDetailsDrawerProps {
  openDrawer: boolean;
  setOpenDrawer: any;
  clientID: any;
  setId: any;
  canEdit: boolean;
  type: string;
  getAccountList: () => void;
}

interface InitialValues {
  clientId: string | null;
  orgName: string | null;
  background: string | null;
  industry: string | null;
  entity: string | null;
  accounting: string | null;
  document: string | null;
  bankConnected: string | null;
  accountingMethod: string | null;
  estimateTime: number | string | null;
  pabs: string | null;
  bookKeeping: string | null;
  deadline: Dayjs | string | null;
  notes1: string | null;
  notes: string | null;
}

const initialValues: InitialValues = {
  clientId: "",
  orgName: "",
  background: "",
  industry: "",
  entity: "",
  accounting: "",
  document: "",
  bankConnected: "",
  accountingMethod: "",
  estimateTime: "",
  pabs: "",
  bookKeeping: "",
  deadline: "",
  notes1: "",
  notes: "",
};

const AccountDetailsDrawer: React.FC<AccountDetailsDrawerProps> = ({
  openDrawer,
  setOpenDrawer,
  clientID,
  setId,
  canEdit,
  type,
  getAccountList,
}) => {
  const userId = Cookies.get("userId");
  const classes = useStyles();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
  const [formValues, setFormValues] = useState<InitialValues>(initialValues);
  const [initialFormValues, setInitialFormValues] =
    useState<InitialValues>(initialValues);

  useEffect(() => {
    const getById = async () => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: {
          id: number;
          userId: number;
          clientId: string | null;
          organizationName: string | null;
          backgroundNatureOfBusiness: string | null;
          IndustryType: string | null;
          entityType: string | null;
          accountingSoftware: string | null;
          documentSharing: string | null;
          bankConnectedWithAccountingSoftware: string | null;
          accountingMethodIncTax: string | null;
          estimateHoursOfWork: number | string | null;
          pabsDuties: string | null;
          bookkeepingPeriod: string | null;
          deadline: string | null;
          notes1MonthlyTransactions: string | null;
          notes: string | null;
        }
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            setFormValues({
              clientId: ResponseData.clientId,
              orgName: ResponseData.organizationName,
              background: ResponseData.backgroundNatureOfBusiness,
              industry: ResponseData.IndustryType,
              entity: ResponseData.entityType,
              accounting: ResponseData.accountingSoftware,
              document: ResponseData.documentSharing,
              bankConnected: ResponseData.bankConnectedWithAccountingSoftware,
              accountingMethod: ResponseData.accountingMethodIncTax,
              estimateTime: ResponseData.estimateHoursOfWork,
              pabs: ResponseData.pabsDuties,
              bookKeeping: ResponseData.bookkeepingPeriod,
              deadline: ResponseData.deadline,
              notes1: ResponseData.notes1MonthlyTransactions,
              notes: ResponseData.notes,
            });
            setInitialFormValues({
              clientId: ResponseData.clientId,
              orgName: ResponseData.organizationName,
              background: ResponseData.backgroundNatureOfBusiness,
              industry: ResponseData.IndustryType,
              entity: ResponseData.entityType,
              accounting: ResponseData.accountingSoftware,
              document: ResponseData.documentSharing,
              bankConnected: ResponseData.bankConnectedWithAccountingSoftware,
              accountingMethod: ResponseData.accountingMethodIncTax,
              estimateTime: ResponseData.estimateHoursOfWork,
              pabs: ResponseData.pabsDuties,
              bookKeeping: ResponseData.bookkeepingPeriod,
              deadline: ResponseData.deadline,
              notes1: ResponseData.notes1MonthlyTransactions,
              notes: ResponseData.notes,
            });
            return;
        }
      };
      await callAPIwithHeaders(
        `${OnboardingFormAccountDetailsGetById}/${userId}`,
        "post",
        callback,
        {
          id: clientID,
        }
      );
    };
    clientID > 0 && getById();
  }, [clientID]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const params = {
      id: clientID,
      clientId: formValues.clientId,
      organizationName: formValues.orgName,
      backgroundNatureOfBusiness: formValues.background,
      industryType: formValues.industry,
      entityType: formValues.entity,
      accountingSoftware: formValues.accounting,
      documentSharing: formValues.document,
      bankConnectedWithAccountingSoftware: formValues.bankConnected,
      accountingMethodIncTax: formValues.accountingMethod,
      estimateHoursOfWork: Number(formValues.estimateTime),
      pabsDuties: formValues.pabs,
      bookkeepingPeriod: formValues.bookKeeping,
      deadline: formValues.deadline,
      notes1MonthlyTransactions: formValues.notes1,
      notes: formValues.notes,
    };
    const callback = (
      ResponseStatus: string,
      Message: string,
      ResponseData: null
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          setLoading(false);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          setLoading(false);
          setOpenDrawer(false);
          setId();
          getAccountList();
          return;
      }
    };
    const save = `${OnboardingFormAccountDetailsSave}/${userId}`;
    const edit = `${OnboardingFormAccountDetailsEdit}/${userId}`;
    await callAPIwithHeaders(
      clientID > 0 ? edit : save,
      "post",
      callback,
      clientID > 0 ? params : [params]
    );
  };

  const compareValues = useCallback(() => {
    for (const key in formValues) {
      if (
        formValues[key as keyof InitialValues] !==
        initialFormValues[key as keyof InitialValues]
      ) {
        return true;
      }
    }
    return false;
  }, [formValues]);

  useEffect(() => {
    setIsSaveButtonEnabled(compareValues());
  }, [formValues, compareValues]);

  const handleChange =
    (field: keyof InitialValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (field === "estimateTime") {
        if (!/^\d*$/.test(value) || value.length > 4) return;
      }

      setFormValues((prevValues) => ({
        ...prevValues,
        [field]: value,
      }));
    };

  const handleDateChange = (date: Dayjs | null) => {
    const formattedDate = date ? date.format("DD MM YYYY") : null;
    setFormValues((prevValues) => ({
      ...prevValues,
      deadline: formattedDate,
    }));
  };

  return (
    <>
      <WhitelabelDrawerPanel
        type={type}
        isSaveEnabled={isSaveButtonEnabled}
        canEdit={canEdit}
        openDrawer={openDrawer}
        isLoading={isLoading}
        setOpenDrawer={(value) => setOpenDrawer(value)}
        handleSubmit={handleSubmit}
        setId={setId}
        largeDrawer={true}
      >
        <div className="flex items-center justify-center gap-5 w-full">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">Client ID</label>
            <TextField
              id="clientId"
              variant="standard"
              size="small"
              placeholder="Please Enter Client ID"
              value={formValues.clientId}
              onChange={handleChange("clientId")}
              InputProps={{
                classes: {
                  underline: classes.underline,
                },
              }}
              inputProps={{
                className: classes.textSize,
                maxLength: 6,
              }}
            />
          </div>
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Organization Name
            </label>
            <TextField
              id="orgName"
              variant="standard"
              size="small"
              placeholder="Please Enter Organization Name"
              value={formValues.orgName}
              onChange={handleChange("orgName")}
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
        </div>
        <div className="flex items-center justify-center gap-5 w-full my-4">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Background/Nature of Business
            </label>
            <TextField
              id="background"
              variant="standard"
              size="small"
              placeholder="Please Enter Background/Nature of Business"
              value={formValues.background}
              onChange={handleChange("background")}
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
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">Industry Type</label>
            <TextField
              id="industry"
              variant="standard"
              size="small"
              placeholder="Please Enter Industry Type"
              value={formValues.industry}
              onChange={handleChange("industry")}
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
        </div>
        <div className="flex items-center justify-center gap-5 w-full">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">Entity Type</label>
            <TextField
              id="entity"
              variant="standard"
              size="small"
              placeholder="Please Enter Entity Type"
              value={formValues.entity}
              onChange={handleChange("entity")}
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
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Accounting Software
            </label>
            <TextField
              id="accounting"
              variant="standard"
              size="small"
              placeholder="Please Enter Accounting Software"
              value={formValues.accounting}
              onChange={handleChange("accounting")}
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
        </div>
        <div className="flex items-center justify-center gap-5 w-full my-4">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Document Sharing
            </label>
            <TextField
              id="document"
              variant="standard"
              size="small"
              placeholder="Please Enter Document Sharing"
              value={formValues.document}
              onChange={handleChange("document")}
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
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Bank Connected with Accounting Software
            </label>
            <TextField
              id="bankConnected"
              variant="standard"
              size="small"
              placeholder="Please Enter Bank Connected with Accounting"
              value={formValues.bankConnected}
              onChange={handleChange("bankConnected")}
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
        </div>
        <div className="flex items-center justify-center gap-5 w-full">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Accounting Method-Inc Tax
            </label>
            <TextField
              id="accountingMethod"
              variant="standard"
              size="small"
              placeholder="Please Enter Accounting Method-Inc Tax"
              value={formValues.accountingMethod}
              onChange={handleChange("accountingMethod")}
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
          <div className="text-[12px] flex flex-col  w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Estimate Hours of Work
            </label>
            <TextField
              id="estimateTime"
              variant="standard"
              type="number"
              fullWidth
              size="small"
              placeholder="Please Enter Estimate Hours of Work"
              value={formValues.estimateTime}
              onChange={handleChange("estimateTime")}
              InputProps={{
                classes: {
                  underline: classes.underline,
                },
              }}
              inputProps={{
                className: classes.textSize,
                maxLength: 4,
              }}
              onFocus={(e) =>
                e.target.addEventListener(
                  "wheel",
                  function (e) {
                    e.preventDefault();
                  },
                  { passive: false }
                )
              }
              sx={{
                "& input[type=number]": {
                  "-moz-appearance": "textfield",
                  "-webkit-appearance": "none",
                  margin: 0,
                },
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                  {
                    "-webkit-appearance": "none",
                  },
              }}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 w-full my-4">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">PABS Duties</label>
            <TextField
              id="document"
              variant="standard"
              size="small"
              placeholder="Please Enter PABS Duties"
              value={formValues.pabs}
              onChange={handleChange("pabs")}
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
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Book Keeping Monthly or Clean Up
            </label>
            <TextField
              id="bankConnected"
              variant="standard"
              size="small"
              placeholder="Please Enter Book Keeping Monthly or Clean Up"
              value={formValues.bookKeeping}
              onChange={handleChange("bookKeeping")}
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
        </div>
        <div className="flex items-center justify-center gap-5 w-full">
          <div className="text-[12px] flex flex-col w-1/2">
            <div
              className={`text-[12px] flex flex-col w-full muiDatepickerCustomizer`}
            >
              <label className="text-[#6E6D7A] text-[12px] mb-[-18px]">
                Deadline
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={
                    formValues.deadline
                      ? dayjs(formValues.deadline, "DD MM YYYY")
                      : null
                  }
                  onChange={handleDateChange}
                  format="DD/MM/YYYY"
                  slotProps={{
                    textField: {
                      readOnly: true,
                    } as Record<string, any>,
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">
              Notes1 - Monthly Transactions
            </label>
            <TextField
              id="bankConnected"
              variant="standard"
              size="small"
              placeholder="Please Enter Notes1 - Monthly Transactions"
              value={formValues.notes1}
              onChange={handleChange("notes1")}
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
        </div>
        <div className="flex items-center justify-start gap-5 w-full mt-4">
          <div className="text-[12px] flex flex-col w-1/2">
            <label className="text-[#6E6D7A] text-[12px]">Notes</label>
            <TextField
              id="document"
              variant="standard"
              size="small"
              placeholder="Please Enter Notes"
              value={formValues.notes}
              onChange={handleChange("notes")}
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
        </div>
      </WhitelabelDrawerPanel>
    </>
  );
};

export default AccountDetailsDrawer;