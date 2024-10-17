import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import ClientSidebar from "@/components/client/common/ClientSidebar";
import { ClientModalProps } from "@/models/clientModal";
import { clientModalstyle } from "@/utils/modalStyle";
import {
  Box,
  CssBaseline,
  Modal,
  AppBar as MuiAppBar,
  styled,
  Switch,
  SwitchProps,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
// Types imports
import { AppBarProps } from "@/models/adminHeader";
// Static import
import { drawerWidth } from "@/static/commonVariables";
import { ToastType } from "@/static/toastType";
// Icons imports
import DownloadIcon from "@/assets/Icons/client/forms/DownloadIcon";
// Components import
import BasicDetailsAutoCare from "@/components/client/common/BasicDetailsAutoCare";
import ChecklistAutoCare from "@/components/client/common/ChecklistAutoCare";
import ChecklistSmb from "@/components/client/common/ChecklistSmb";
import { showToast } from "@/components/ToastContainer";

import { callAPIwithHeaders } from "@/api/commonFunction";
import CommentIcon from "@/assets/Icons/admin/CommentIcon";
import DrawerOverlay from "@/components/admin/common/DrawerOverlay";
import CommentDrawer from "@/components/admin/drawer/CommentDrawer";
import AccountDetailsWhitelabel from "@/components/client/common/AccountDetailsWhitelabel";
import BasicDetailsWhitelabel from "@/components/client/common/BasicDetailsWhitelabel";
import ChecklistWhitelabel from "@/components/client/common/ChecklistWhitelabel";
import { GetClientByIdResponse } from "@/models/clientManage";
import {
  getClientDetailsByIdUrl,
  onboardingDownloadFormUrl,
  onboardingListFormUrl,
  toggleFormLockedUrl,
} from "@/static/apiUrl";
import Cookies from "js-cookie";
import { useStyles } from "@/utils/useStyles";
import LockIcon from "@/assets/Icons/client/forms/LockIcon";
import UnLockIcon from "@/assets/Icons/client/forms/UnLockIcon";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? drawerWidth : 0,
  width: `calc(100% - ${open ? drawerWidth : 0}px)`,
}));

function ClientModal({
  clientInfo,
  isOpen,
  setIsOpenModal,
  handleClose,
}: ClientModalProps) {
  const CustomSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 68,
    height: 30,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 4,
      transitionDuration: "600ms",
      transitionTimingFunction: "ease-in-out",
      "&.Mui-checked": {
        transform: "translateX(38px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#1976d2",
          opacity: 1,
          border: 0,
          transition: "background-color 600ms ease-in-out",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 34 / 2,
      backgroundColor: "#787878",
      opacity: 1,
      transition: "background-color 600ms ease-in-out",
    },
  }));

  const token = Cookies.get("token");
  const loginUserRole = Cookies.get("roleId");
  const formSubmitId =
    clientInfo?.DepartmentId === 3
      ? 31
      : clientInfo?.DepartmentId === 2
        ? 21
        : 11;
  const [perCountBasicDetails, setPerCountBasicDetails] = useState<number>(0);
  const [perCountChecklist, setPerCountChecklist] = useState<number>(0);
  const [perCountSmbChecklist, setPerCountSmbChecklist] = useState<number>(0);
  const [autoCareProgressPer, setAutoCareProgressPer] = useState<number>(0);
  const [perCounWhiteLabeltBasicDetails, setPerCountWhiteLabelBasicDetails] =
    useState<number>(0);
  const [whiteLabelPerCountChecklist, setWhitelabelPerCountChecklist] =
    useState<number>(0);
  const [whiteLabelProgressPer, setWhiteLabelProgressPer] = useState<number>(0);
  const [formSubmit, setFormSubmit] = useState<number>(formSubmitId);
  const [formDetails, setFormDetails] = useState<any>(null);
  const [isFormSubmmitWhitelabel, setIsFormSubmitWhitelabel] =
    useState<boolean>(false);
  const [isClientLogoDisplay, setIsClientLogoDisplay] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [openCommentModal, setOpenCommentModal] = useState<boolean>(false);

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
            setIsChecked(ResponseData?.IsFormLocked ?? false);
            return;
        }
      };
      await callAPIwithHeaders(getClientDetailsByIdUrl, "post", callback, {
        clientId: clientInfo.ClientId,
      });
    };
    clientInfo.ClientId > 0 && getById();
  }, [clientInfo]);

  const getFormDetials = async () => {
    const callBack = (
      ResponseStatus: string,
      Message: string,
      ResponseData: any
    ) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          setIsClientLogoDisplay(ResponseData?.clientLogo ?? "");
          setFormDetails(ResponseData !== null ? ResponseData : null);
          return;
      }
    };

    callAPIwithHeaders(onboardingListFormUrl, "post", callBack, {
      userId: Number(clientInfo?.UserId!),
    });
  };

  useEffect(() => {
    getFormDetials();
  }, []);
  const classes = useStyles();

  const handleDownload = () => {
    fetch(`${process.env.APIDEV_URL}/${onboardingDownloadFormUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId: Number(clientInfo?.UserId!) }),
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error downloading file");
        }
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "ClientInfo.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleToggleFormLocked = async (value: boolean) => {
    setIsChecked(value);
    const callback = (ResponseStatus: string, Message: string) => {
      switch (ResponseStatus) {
        case "failure":
          showToast(Message, ToastType.Error);
          return;
        case "success":
          showToast(Message, ToastType.Success);
          return;
      }
    };
    await callAPIwithHeaders(toggleFormLockedUrl, "post", callback, {
      clientId: clientInfo.ClientId || 0,
      status: value,
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="flex justify-center outline-none"
    >
      <Box sx={clientModalstyle}>
        <div className="max-h-screen flex flex-col overflow-hidden">
          <Box
            sx={{
              height: "100vh",
              display: "flex",
            }}
          >
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{
                zIndex: 1,
                backgroundColor: "white !important",
                borderRadius: "5px",
                borderBottom: "0.5px solid lightgrey !important",
                boxShadow: "none !important",
                height: "50.5px !important",
                width: {
                  sm: `100%`,
                },
                ml: { sm: `35px` },
              }}
            >
              <Toolbar>
                <div className="flex flex-row w-full justify-between items-center mb-3">
                  <div
                    className={`!text-[#000000] flex items-center gap-4 ${!!isClientLogoDisplay &&
                      "justify-center"
                      }`}
                  >
                    {!!isClientLogoDisplay && (
                      <span>
                        <img
                          className="w-15 h-10"
                          src={`data:image;base64,${isClientLogoDisplay}`}
                          alt="client logo"
                        />
                      </span>
                    )}
                    <div className="text-[18px] text-[#D8D8D8] flex items-center">
                      <span className="text-[#333] font-semibold mr-5">{clientInfo.SFID}</span> | <span className="text-[#333] font-semibold mx-5">{clientInfo.clientName}</span> | <span className="text-[#333] font-semibold ml-5">{clientInfo.DepartmentType}</span>
                    </div>
                    {(formSubmit === 12 ||
                      formSubmit === 21 ||
                      formSubmit === 32) && (
                        <Tooltip title="Comment" placement="bottom" arrow classes={{
                          tooltip: classes.tooltipStyle,
                          arrow: classes.arrowStyle,
                        }}>
                          <span
                            className="flex items-center cursor-pointer"
                            onClick={() => setOpenCommentModal(true)}
                          >
                            <CommentIcon />
                          </span>
                        </Tooltip>
                      )}
                    <Tooltip title="Download" placement="bottom" arrow classes={{
                      tooltip: classes.tooltipStyle,
                      arrow: classes.arrowStyle,
                    }}>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={handleDownload}
                      >
                        <DownloadIcon />
                      </span>
                    </Tooltip>
                    <Tooltip title={isChecked ? "Lock" : "Unlock"} placement="bottom" arrow classes={{
                      tooltip: classes.tooltipStyle,
                      arrow: classes.arrowStyle,
                    }}>
                      <div className="flex justify-center items-center">
                        {(loginUserRole == "1" || loginUserRole == "2") && (
                          <div className="relative">
                            <div className="absolute top-0 left-[-10px] w-full opacity-0">
                              <CustomSwitch
                                className="w-full"
                                checked={isChecked}
                                onChange={(e: any) =>
                                  handleToggleFormLocked(e.target.checked)
                                }
                              />
                            </div>
                            {/* <span className={`absolute ${isChecked
                                ? "left-2.5 text-[11px]"
                                : "right-[3px] text-[11px]"
                                } font-bold top-1/2 transform -translate-y-1/2 text-white`}>
                              {isChecked ? "Lock" : "Unlock"}
                            </span> */}
                            {isChecked ? <LockIcon /> : <UnLockIcon />}
                          </div>
                        )}
                      </div>
                    </Tooltip>
                  </div>
                  <div className="relative flex gap-5">
                    <Tooltip title="Close" placement="bottom" arrow classes={{
                      tooltip: classes.tooltipStyle,
                      arrow: classes.arrowStyle,
                    }}>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={() => setIsOpenModal(false)}
                      >
                        <CloseIcon />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            {/* <ClientSidebar
              setWhiteLabelProgressPercentage={(value: number) =>
                setWhiteLabelProgressPer(value)
              }
              clientInfo={clientInfo}
              perCountChecklist={perCountChecklist}
              perCountBasicDetails={perCountBasicDetails}
              perCountSmbChecklist={perCountSmbChecklist}
              perCountWhiteLabelBasicDetails={perCounWhiteLabeltBasicDetails}
              perCountWhiteLabelChecklist={whiteLabelPerCountChecklist}
              sidebarModule={formSubmit}
              setAutoCareProgressPercentage={(value: number) =>
                setAutoCareProgressPer(value)
              }
            /> */}
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                backgroundColor: "#F9FBFF",
                width: { sm: `calc(100% - 280px)` },
                height: "calc(100% - 64px)",
              }}
            >
              <div className="mt-12">
                <ClientSidebar
                  setWhiteLabelProgressPercentage={(value: number) =>
                    setWhiteLabelProgressPer(value)
                  }
                  clientInfo={clientInfo}
                  perCountChecklist={perCountChecklist}
                  perCountBasicDetails={perCountBasicDetails}
                  perCountSmbChecklist={perCountSmbChecklist}
                  perCountWhiteLabelBasicDetails={perCounWhiteLabeltBasicDetails}
                  perCountWhiteLabelChecklist={whiteLabelPerCountChecklist}
                  sidebarModule={formSubmit}
                  setAutoCareProgressPercentage={(value: number) =>
                    setAutoCareProgressPer(value)
                  }
                />
              </div>
              {clientInfo.DepartmentId === 3 ? (
                <>
                  {formSubmit === 31 && (
                    <BasicDetailsAutoCare
                      setAutoCareFormSubmittedStatus={() => { }}
                      setCheckAllFields={() => { }}
                      autoCareProgressPercentage={autoCareProgressPer}
                      setIsOpenModal={(value: boolean) => setIsOpenModal(value)}
                      clientInfo={clientInfo}
                      setBasicDetailsFormSubmit={(value: number) =>
                        setFormSubmit(value)
                      }
                      setBasicDetailCount={(value: number) =>
                        setPerCountBasicDetails(value)
                      }
                    />
                  )}
                  <ChecklistAutoCare
                    setAutoCareFormSubmittedStatus={() => { }}
                    formSubmitId={formSubmit}
                    checkAllBasicDetails={false}
                    autoCareProgressPercentage={autoCareProgressPer}
                    setIsOpenModal={(value: boolean) => setIsOpenModal(value)}
                    clientInfo={clientInfo}
                    setChecklistFormSubmit={(value: number) =>
                      setFormSubmit(value)
                    }
                    setChecklistCount={(value: number) =>
                      setPerCountChecklist(value)
                    }
                  />
                </>
              ) : clientInfo.DepartmentId === 2 ? (
                <>
                  {formSubmit === 21 && (
                    <ChecklistSmb
                      setSmbFormSubmittedStatus={() => { }}
                      clientInfo={clientInfo}
                      setIsOpenModal={(value: boolean) => setIsOpenModal(value)}
                      setSMBChecklistCount={(value: number) =>
                        setPerCountSmbChecklist(value)
                      }
                      formDetails={
                        formDetails !== null ? formDetails?.checkList : false
                      }
                      responseData={formDetails !== null ? formDetails : false}
                      getFormDetials={getFormDetials}
                      isFormLocked={isChecked}
                    />
                  )}
                </>
              ) : clientInfo.DepartmentId === 1 ? (
                <>
                  {formSubmit === 11 && (
                    <BasicDetailsWhitelabel
                      setWhiteLabelFormSubmittedStatus={() => { }}
                      setCheckAllWhiteLabelBasicFields={() => { }}
                      whiteLabelProgressPercentage={whiteLabelProgressPer}
                      clientInfo={clientInfo}
                      setWhitelabelBasicDetailsFormSubmit={(value: number) =>
                        setFormSubmit(value)
                      }
                      setWhitelabelBasicDetailCount={(value: number) =>
                        setPerCountWhiteLabelBasicDetails(value)
                      }
                      setIsOpenModal={(value: boolean) => setIsOpenModal(value)}
                      getFormCheckedValue={(value: boolean) => {
                        setIsChecked(value);
                      }}
                    />
                  )}
                  <ChecklistWhitelabel
                    setWhiteLabelFormSubmittedStatus={() => { }}
                    setCheckAllWhiteLabelCheckist={() => { }}
                    setWhiteLabelFormIsSubmit={(value: boolean) =>
                      setIsFormSubmitWhitelabel(value)
                    }
                    whiteLabelProgressPercentage={whiteLabelProgressPer}
                    clientInfo={clientInfo}
                    formSubmitId={formSubmit}
                    setChecklistFormSubmit={(value: number) =>
                      setFormSubmit(value)
                    }
                    setWhiteLabelChecklistCount={(value: number) =>
                      setWhitelabelPerCountChecklist(value)
                    }
                  />
                  {formSubmit === 13 && (
                    <AccountDetailsWhitelabel
                      isFormSubmmitWhitelabel={isFormSubmmitWhitelabel}
                      whiteLabelProgressPercentage={whiteLabelProgressPer}
                      clientInfo={clientInfo}
                      setChecklistFormSubmit={(value: number) =>
                        setFormSubmit(value)
                      }
                      isFormLocked={isChecked}
                    />
                  )}
                </>
              ) : (
                ""
              )}

              {openCommentModal && (
                <CommentDrawer
                  isOpen={openCommentModal}
                  setIsOpen={(value: boolean) => setOpenCommentModal(value)}
                  clientId={clientInfo.ClientId}
                />
              )}
              <DrawerOverlay isOpen={openCommentModal} />
            </Box>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export default ClientModal;
