import { useEffect, useState } from "react";
// MUI Imports
import { TextField, Select, FormControl, MenuItem } from "@mui/material";
// Types imports
import { NumberFieldType, StringFieldType } from "@/models/common";
// Modal import
import ConfirmModal from "@/components/admin/common/ConfirmModal";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Drawer import
import DrawerPanel from "@/components/admin/common/DrawerPanel";
import Dropzone from "react-dropzone";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { statusOptionDrawer } from "@/static/usermanage";
import { ToastType } from "@/static/toastType";
import { showToast } from "@/components/ToastContainer";
import { callAPIwithHeaders } from "@/api/commonFunction";
import { getClientDetailsByIdUrl, saveClientUrl } from "@/static/apiUrl";
import {
  ClientDrawerProps,
  GetClientByIdResponse,
} from "@/models/clientManage";
import { convertFileToBase64 } from "@/utils/convertFileToBase64";

const ClientDrawer = ({
  openDrawer,
  setOpenDrawer,
  clientId,
  setClientId,
  canEdit,
  type,
  getClientList,
  businessList,
  handleClear,
}: ClientDrawerProps) => {
  const FileErrType = {};
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  // const [fileErrType, setFileErrType] = useState<0 | 1 | 2>(0);
  const [sFID, setSFID] = useState<StringFieldType>(initialFieldStringValues);
  const [clientFullName, setClientFullName] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [businessType, setBusinessType] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });
  const [status, setStatus] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isInactive, setInactive] = useState<boolean>(false);

  useEffect(() => {
    const getById = async () => {
      const callback = (
        ResponseStatus: string,
        Message: string,
        ResponseData: GetClientByIdResponse
      ) => {
        switch (ResponseStatus) {
          case "failure":
            showToast(Message, ToastType.Error);
            return;
          case "success":
            setSFID({
              value: ResponseData.SFID,
              error: false,
              errorText: "",
            });
            setClientFullName({
              value: ResponseData.Clientname,
              error: false,
              errorText: "",
            });
            setEmail({
              value: ResponseData.Email,
              error: false,
              errorText: "",
            });
            setBusinessType({
              value: ResponseData.BusinessTypeId,
              error: false,
              errorText: "",
            });
            setStatus({
              value:
                ResponseData.Status === true
                  ? 1
                  : ResponseData.Status === false
                  ? 2
                  : -1,
              error: false,
              errorText: "",
            });
            setFile(
              ResponseData.ClientLogo.trim().length > 0
                ? ResponseData.ClientLogo
                : null
            );
            setImagePreview(
              ResponseData.ClientLogo.trim().length > 0
                ? `data:image;base64,${ResponseData.ClientLogo}`
                : null
            );
            return;
        }
      };
      await callAPIwithHeaders(getClientDetailsByIdUrl, "post", callback, {
        clientId: clientId,
      });
    };
    clientId > 0 && getById();
  }, [clientId]);

  const handleSFIDChange = (e: { target: { value: string } }) => {
    const specialCharsRegex = /[^\w\s-]/;
    if (e.target.value.trim().length === 0) {
      setSFID({
        value: e.target.value,
        error: true,
        errorText: "SFID is Required",
      });
    } else if (e.target.value.trim().length > 50) {
      return;
    } else if (specialCharsRegex.test(e.target.value)) {
      setSFID({
        value: e.target.value,
        error: true,
        errorText: "Special characters are not allowed",
      });
    } else {
      setSFID({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleClientFullNameChange = (e: { target: { value: string } }) => {
    const numbersRegex = /\d/;
    const specialCharsRegex = /[^\w\s.-]/;

    if (e.target.value.trim().length === 0) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Full Name is Required",
      });
    } else if (numbersRegex.test(e.target.value)) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Numbers are not allowed",
      });
    } else if (specialCharsRegex.test(e.target.value)) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Special characters are not allowed",
      });
    } else if (e.target.value.trim().length > 50) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Maximum 50 characters allowed",
      });
    } else {
      setClientFullName({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (e.target.value.trim().length === 0) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is required",
      });
    } else if (e.target.value.trim().length > 254) {
      return;
    } else if (!emailRegex.test(e.target.value.trim())) {
      setEmail({
        value: e.target.value,
        error: true,
        errorText: "Email is not valid!",
      });
    } else {
      setEmail({
        ...initialFieldStringValues,
        value: e.target.value,
      });
    }
  };

  const handleBusinessTypeChange = (e: {
    target: { value: number | string };
  }) => {
    if (
      e.target.value.toString().trim().length === 0 ||
      Number(e.target.value) === -1
    ) {
      setBusinessType({
        value: -1,
        error: true,
        errorText: "Business Type is Required",
      });
    } else {
      setBusinessType({
        ...initialFieldStringValues,
        value: Number(e.target.value),
      });
    }
  };

  const handleStatusChange = (e: { target: { value: number | string } }) => {
    if (
      e.target.value.toString().trim().length === 0 ||
      Number(e.target.value) === -1
    ) {
      setStatus({
        value: -1,
        error: true,
        errorText: "Status is Required",
      });
    } else if (Number(e.target.value) === 2) {
      setInactive(true);
    } else {
      setStatus({
        ...initialFieldStringValues,
        value: Number(e.target.value),
      });
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const validateAndSetField = (
      field: React.Dispatch<React.SetStateAction<StringFieldType>>,
      value: string,
      message: string
    ) => {
      if (value.toString().trim().length === 0 || value === "-1") {
        field({
          value: value,
          error: true,
          errorText: `${message} is required`,
        });
        return true;
      }
      return false;
    };

    const validateAndSetFieldNumber = (
      field: React.Dispatch<React.SetStateAction<NumberFieldType>>,
      value: number,
      message: string
    ) => {
      if (value.toString().trim().length === 0 || value === -1) {
        field({
          value: value,
          error: true,
          errorText: `${message} is required`,
        });
        return true;
      }
      return false;
    };

    const sFIDError = validateAndSetField(setSFID, sFID.value, "SFID");
    const clientFullNameError = validateAndSetField(
      setClientFullName,
      clientFullName.value,
      "Full Name"
    );
    const emailError = validateAndSetField(setEmail, email.value, "Email");
    const businessTypeError = validateAndSetFieldNumber(
      setBusinessType,
      businessType.value,
      "Business Type"
    );
    const statusError = validateAndSetFieldNumber(
      setStatus,
      status.value,
      "Status"
    );

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
          handleClear(false);
          setClientId();
          getClientList();
          return;
      }
    };

    if (
      emailError ||
      sFIDError ||
      clientFullNameError ||
      businessTypeError ||
      email.error ||
      sFID.error ||
      clientFullName.error ||
      (canEdit && statusError)
    ) {
      setLoading(false);
    } else {
      const statusBool =
        status.value === 1 ? true : status.value === 2 ? false : true;
      await callAPIwithHeaders(saveClientUrl, "post", callback, {
        clientId: clientId,
        sfId: sFID.value,
        fullName: clientFullName.value,
        email: email.value,
        businessTypeId: businessType.value,
        status: clientId > 0 ? statusBool : true,
        checkListStatus: 1,
        clientLogoUrl: imagePreview !== null ? file : "",
      });
    }
  };

  const handleApplyChange = () => {
    setStatus({
      ...initialFieldStringValues,
      value: 2,
    });
    setInactive(false);
  };

  return (
    <>
      <DrawerPanel
        isSaveEnabled={true}
        type={type}
        canEdit={canEdit}
        openDrawer={openDrawer}
        isLoading={isLoading}
        setOpenDrawer={(value) => {
          setOpenDrawer(value);
          handleClear(value);
        }}
        handleSubmit={handleSubmit}
        setId={setClientId}
      >
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6E6D7A] text-[12px]">
            SF ID<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter SF ID"
            value={sFID.value}
            error={sFID.error}
            helperText={sFID.errorText}
            onChange={handleSFIDChange}
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
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6E6D7A] text-[12px]">
            Full Name<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter Full Name"
            value={clientFullName.value}
            error={clientFullName.error}
            helperText={clientFullName.errorText}
            onChange={handleClientFullNameChange}
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
        {canEdit && (
          <div className="text-[12px] flex flex-col pb-5">
            <label className="text-[#6E6D7A] text-[12px]">
              Select Status<span className="text-[#DC3545]">*</span>
            </label>
            <FormControl variant="standard">
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={`${
                  status.value === -1
                    ? "!text-[12px] text-[#6E6D7A]"
                    : "!text-[14px]"
                }`}
                value={status.value}
                error={status.error}
                onChange={handleStatusChange}
              >
                {statusOptionDrawer.map((type) => (
                  <MenuItem
                    key={type.value}
                    value={type.value}
                    disabled={type.value === -1}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
              {status.error && (
                <span className="text-[#d32f2f]">{status.errorText}</span>
              )}
            </FormControl>
          </div>
        )}
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6E6D7A] text-[12px]">
            Business Type<span className="text-[#DC3545]">*</span>
          </label>
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              className={`${
                businessType.value === -1
                  ? "!text-[12px] text-[#6E6D7A]"
                  : "!text-[14px]"
              }`}
              value={businessType.value}
              error={businessType.error}
              onChange={handleBusinessTypeChange}
            >
              {businessList.map((type) => (
                <MenuItem
                  key={type.BusinessId}
                  value={type.BusinessId}
                  disabled={type.BusinessId === -1}
                >
                  {type.BussinessName}
                </MenuItem>
              ))}
            </Select>
            {businessType.error && (
              <span className="text-[#d32f2f]">{businessType.errorText}</span>
            )}
          </FormControl>
        </div>
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6E6D7A] text-[12px]">
            Email<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please Enter Email"
            value={email.value}
            error={email.error}
            helperText={email.errorText}
            onChange={handleEmailChange}
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
        <label className="text-[#6E6D7A] font-semibold text-base pb-2">
          Upload Logo
        </label>
        {imagePreview && (
          <div className="flex flex-col pb-5">
            <div className="p-4 border border-[#6e6d7aad] rounded-md flex gap-2 items-center justify-between">
              <img className="w-40 h-14" src={imagePreview} alt="Preview" />
              <span
                className="cursor-pointer"
                onClick={() => setImagePreview(null)}
              >
                <CloseOutlinedIcon />
              </span>
            </div>
          </div>
        )}
        <div className="text-[12px] flex flex-col">
          <div
            // ${
            //   fileErrType ? "border-red-500" : "border-gray-300"
            // }
            className={`py-1 border-2 border-dotted bg-gray-100 rounded-full w-full overflow-hidden flex justify-center items-center`}
          >
            <Dropzone
              multiple={false}
              onDrop={(e: any) => {
                const file = e[0];
                const fileType = `${file.name}`;
                const fileTypeParts = fileType.split(".");
                const fileTypeExtension =
                  fileTypeParts[fileTypeParts.length - 1];
                if (
                  [
                    "apng",
                    "avif",
                    "gif",
                    "jpeg",
                    "png",
                    "svg",
                    "webp",
                    "jpg",
                  ].includes(fileTypeExtension.toLowerCase())
                ) {
                  if (file) {
                    if (Math.round(file.size / 1024 / 1024) < 1) {
                      // setFileErrType(0);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setImagePreview(reader.result);
                        convertFileToBase64(file)
                          .then((data) => setFile(data))
                          .catch((err) => console.error(err));
                      };
                      reader.readAsDataURL(file);
                    } else {
                      showToast(
                        "File size should be less than 1 MB",
                        ToastType.Warning
                      );
                      // setFileErrType(2);
                      // setFile(null);
                      // setImagePreview(null);
                      return;
                    }
                  }
                } else {
                  showToast("File type is not valid", ToastType.Warning);
                  // setFileErrType(1);
                  // setFile(null);
                  // setImagePreview(null);
                  return;
                }
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="p-1">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <span className="select-none cursor-pointer justify-center items-center text-center text-xs font-normal text-[#333] p-2">
                      <FileUploadOutlinedIcon className="text-[#6e6d7aad] mr-2" />
                      Drag and drop or&nbsp;
                      <span className="text-[#223E99]">browse</span>
                      &nbsp;to upload
                    </span>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          {/* <span className="ml-2 my-1 w-full flex justify-start text-red-500">
            {fileErrType === 1
              ? "File type is not valid"
              : fileErrType === 2
              ? "File size should be less than 1 MB"
              : ""}
          </span> */}
        </div>
      </DrawerPanel>

      {isInactive && (
        <ConfirmModal
          title="Inactive"
          isOpen={isInactive}
          message="Are you sure you want to inactive the user?"
          handleModalSubmit={handleApplyChange}
          handleClose={() => setInactive(false)}
          setIsOpen={(value) => setInactive(value)}
        />
      )}
    </>
  );
};

export default ClientDrawer;
