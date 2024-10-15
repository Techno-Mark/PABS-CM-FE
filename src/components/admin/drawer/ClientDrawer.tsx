import { useCallback, useEffect, useState } from "react";
// MUI Imports
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  Tooltip,
} from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
// Types import
import {
  ClientFormFieldType,
  NumberFieldType,
  StringFieldType,
} from "@/models/common";
import {
  ClientDrawerProps,
  GetClientByIdResponse,
} from "@/models/clientManage";
// Modal import
import ConfirmModal from "@/components/admin/common/ConfirmModal";
// Utlis import
import { useStyles } from "@/utils/useStyles";
// Component import
import DrawerPanel from "@/components/admin/common/DrawerPanel";
import { showToast } from "@/components/ToastContainer";
import Dropzone from "react-dropzone";
// Static import
import { statusOptionDrawer } from "@/static/usermanage";
import { ToastType } from "@/static/toastType";
import { getClientDetailsByIdUrl, saveClientUrl } from "@/static/apiUrl";
// API import
import { callAPIwithHeaders } from "@/api/commonFunction";
// Utils import
import { convertFileToBase64 } from "@/utils/convertFileToBase64";
import { checkPermission } from "@/utils/permissionCheckFunction";
// Icons import
import ImgInfoIcon from "@/assets/Icons/admin/ImgInfoIcon";
import DropDownArrow from "@/assets/Icons/dropdownarrow";

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
  const initialFieldStringValues = {
    value: "",
    error: false,
    errorText: "",
  };
  const initialFieldNumberValues = {
    ...initialFieldStringValues,
    value: -1,
  };
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  const [sFID, setSFID] = useState<StringFieldType>(initialFieldStringValues);
  const [clientFullName, setClientFullName] = useState<StringFieldType>(
    initialFieldStringValues
  );
  const [businessType, setBusinessType] = useState<NumberFieldType>({
    ...initialFieldStringValues,
    value: -1,
  });

  const [email, setEmail] = useState<StringFieldType>(initialFieldStringValues);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isFileError, setFileError] = useState<boolean>(false);
  const [fileErrorText, setFileErrorText] = useState<string>("");
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);
  const [initialValues, setInitialValues] = useState<ClientFormFieldType>({
    sFID: initialFieldStringValues,
    clientFullName: initialFieldStringValues,
    businessType: initialFieldNumberValues,
    email: initialFieldStringValues,
    file: file,
  });
  const [open, setOpen] = useState(false);

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
            const newInitialValues = {
              sFID: {
                value: ResponseData.SFID,
                error: false,
                errorText: "",
              },
              clientFullName: {
                value: ResponseData.Clientname,
                error: false,
                errorText: "",
              },
              email: {
                value: ResponseData.Email,
                error: false,
                errorText: "",
              },
              businessType: {
                value: ResponseData.BusinessTypeId,
                error: false,
                errorText: "",
              },
              file:
                ResponseData.ClientLogo.trim().length > 0
                  ? ResponseData.ClientLogo
                  : null,
            };
            setSFID(newInitialValues.sFID);
            setClientFullName(newInitialValues.clientFullName);
            setEmail(newInitialValues.email);
            setBusinessType(newInitialValues.businessType);
            setFile(newInitialValues.file);
            setInitialValues(newInitialValues);
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
        errorText: "SF ID is required",
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
    const numbers_specialCharacter_Regex = /(\d|[^\w\s-])/;

    if (e.target.value.trim().length === 0) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Client Full Name is required",
      });
    } else if (e.target.value.length > 50) {
      return;
    } else if (numbers_specialCharacter_Regex.test(e.target.value)) {
      setClientFullName({
        value: e.target.value,
        error: true,
        errorText: "Numbers and Special characters are not allowed",
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
    const emailRegex = /^[\w+.-]+@([\w-]+\.)+[\w-]{2,4}$/;
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
        errorText: "Department Type is required",
      });
    } else {
      setBusinessType({
        ...initialFieldStringValues,
        value: Number(e.target.value),
      });
    }
  };

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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const sFIDError = validateAndSetField(setSFID, sFID.value, "SF ID");
    const clientFullNameError = validateAndSetField(
      setClientFullName,
      clientFullName.value,
      "Client Full Name"
    );
    const emailError = validateAndSetField(setEmail, email.value, "Email");
    const businessTypeError = validateAndSetFieldNumber(
      setBusinessType,
      businessType.value,
      "Department Type"
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
          checkPermission("Client Management", "view") && getClientList();
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
      clientFullName.error
    ) {
      setLoading(false);
    } else {
      await callAPIwithHeaders(saveClientUrl, "post", callback, {
        clientId: clientId,
        sfId: sFID.value,
        fullName: clientFullName.value,
        email: email.value,
        businessTypeId: businessType.value,
        checkListStatus: 1,
        clientLogoUrl: imagePreview !== null ? file : "",
      });
    }
  };

  const compareValues = useCallback(() => {
    const currentValues: ClientFormFieldType = {
      sFID,
      clientFullName,
      businessType,
      email,
      file,
    };
    for (const key in currentValues) {
      if (key === "file") {
        if (
          currentValues[key as keyof ClientFormFieldType] !==
          initialValues[key as keyof ClientFormFieldType]
        ) {
          return true;
        }
      } else {
        if (
          currentValues[key as keyof ClientFormFieldType].value !==
          initialValues[key as keyof ClientFormFieldType].value
        ) {
          return true;
        }
      }
    }
    return false;
  }, [sFID, clientFullName, businessType, email, file, initialValues]);

  useEffect(() => {
    setIsSaveButtonEnabled(compareValues());
  }, [sFID, clientFullName, businessType, email, file, compareValues]);

  return (
    <>
      <DrawerPanel
        isSaveEnabled={isSaveButtonEnabled}
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
        submitButtonText="Add Client"
        closeButtonText="Close"
      >
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            SF ID<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please enter SF ID"
            value={sFID.value}
            error={sFID.error}
            helperText={sFID.errorText}
            onChange={handleSFIDChange}
            InputProps={{
              classes: {
                underline: classes.underline,
                input: classes.inputWithPlaceholder,
              },
            }}
            inputProps={{
              className: classes.textSize,
            }}
          />
        </div>
        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            Client Full Name<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please enter client Full Name"
            value={clientFullName.value}
            error={clientFullName.error}
            helperText={clientFullName.errorText}
            onChange={handleClientFullNameChange}
            InputProps={{
              classes: {
                underline: classes.underline,
                input: classes.inputWithPlaceholder,
              },
            }}
            inputProps={{
              className: classes.textSize,
            }}
          />
        </div>

        <div className="text-[12px] flex flex-col pb-5">
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            Department Type<span className="text-[#DC3545]">*</span>
          </label>
          <FormControl variant="standard">
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              className={`${businessType.value === -1
                ? "!text-[12px] font-normal text-[#6C6C6C]/50 font-proximanova tracking-[0.28px]"
                : "!text-[14px] font-normal text-[#333333] font-proximanova"
                }`}
              value={businessType.value}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              IconComponent={() => (
                <DropDownArrow
                  fillColor="#333"
                  style={{
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              )}
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
          <label className="text-[#6C6C6C] text-[12px] font-normal">
            Email<span className="text-[#DC3545]">*</span>
          </label>
          <TextField
            id="outlined-basic"
            variant="standard"
            size="small"
            placeholder="Please enter Email"
            value={email.value}
            error={email.error}
            helperText={email.errorText}
            onChange={handleEmailChange}
            InputProps={{
              classes: {
                underline: classes.underline,
                input: classes.inputWithPlaceholder,
              },
            }}
            inputProps={{
              className: classes.textSize,
            }}
          />
        </div>
        <label className="text-[#333333] text-[14px] flex items-center gap-2 font-normal pb-2">
          Upload Logo
          <Tooltip
            title={
              <ul className="custom-tooltip">
                <li>File type must contain only PNG.</li>
                <li>Image dimensions should be 150x100 pixels.</li>
              </ul>
            }
            placement="top"
            arrow
            classes={{
              tooltip: classes.tooltipStyle,
              arrow: classes.arrowStyle,
            }}
          >
            <span>
              <ImgInfoIcon />
            </span>
          </Tooltip>
        </label>
        {imagePreview && (
          <div className="flex flex-col pb-5">
            <div className="p-4 border border-[#6e6d7aad] rounded-md flex gap-2 items-center justify-between">
              <img className="w-auto h-14" src={imagePreview} alt="Preview" />
              <span
                className="cursor-pointer"
                onClick={() => {
                  setImagePreview(null);
                  setFile(null);
                }}
              >
                <CloseOutlinedIcon />
              </span>
            </div>
          </div>
        )}
        <div className="text-[12px] flex flex-col">
          <div
            className={`py-1 border-2 border-dotted ${isFileError ? "border-[#DC3545]" : "border-[#D8D8D8]"
              } bg-[#FFFFFF] rounded-full w-full overflow-hidden flex justify-center items-center`}
          >
            <Dropzone
              multiple={false}
              onDrop={(e: File[]) => {
                const file = e[0];
                const fileType = `${file.name}`;
                const fileTypeParts = fileType.split(".");
                const fileTypeExtension =
                  fileTypeParts[fileTypeParts.length - 1];
                if (["png"].includes(fileTypeExtension.toLowerCase())) {
                  if (file) {
                    setFileError(false);
                    if (Math.round(file.size / 1024) < 500) {
                      setFileError(false);
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const image = new Image();
                        image.onload = () => {
                          if (image.width <= 150 && image.height <= 100) {
                            setFileError(false);
                            setImagePreview(reader.result);
                            convertFileToBase64(file)
                              .then((data) => setFile(data))
                              .catch((err) => console.error(err));
                          } else {
                            setFileErrorText(
                              "Image dimensions should less than or equal 150x100 pixels."
                            );
                            setFileError(true);
                          }
                        };
                        image.src = reader.result as string;
                      };
                      reader.readAsDataURL(file);
                    } else {
                      setFileErrorText("File size should be less than 500 KB");
                      setFileError(true);
                      return;
                    }
                  }
                } else {
                  setFileErrorText("File type is not valid");
                  setFileError(true);
                  return;
                }
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="p-1">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <span className="select-none cursor-pointer justify-center items-center text-center text-xs font-normal text-[#6C6C6C] text-[14px] p-2">
                      <FileUploadOutlinedIcon className="text-[#6e6d7aad] mr-2" />
                      {/* Drag and drop or&nbsp;
                      <span className="text-[#223E99]">browse</span>
                      &nbsp;to upload */}
                      Drag and drop or browse to upload
                    </span>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          {isFileError && (
            <span className="text-[#DC3545] text-[12px] pl-5">
              {fileErrorText}
            </span>
          )}
        </div>
      </DrawerPanel>
    </>
  );
};

export default ClientDrawer;
