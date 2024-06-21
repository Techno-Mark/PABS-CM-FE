import CloseIcon from "@/assets/Icons/admin/CloseIcon";
import { ClientModalProps } from "@/models/clientModal";
import { clientModalstyle, style } from "@/utils/modalStyle";
import {
  Box,
  CssBaseline,
  Modal,
  AppBar as MuiAppBar,
  styled,
  Toolbar,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ClientSidebar from "@/components/client/common/ClientSidebar";
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
import {
  onboardingDownloadFormUrl,
  onboardingListFormUrl,
} from "@/static/apiUrl";
import BasicDetailsWhitelabel from "./BasicDetailsWhitelabel";
import ChecklistWhitelabel from "./ChecklistWhitelabel";

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
  const [formSubmit, setFormSubmit] = useState<number>(formSubmitId);
  const [formDetails, setFormDetails] = useState<any>(null);

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

  const handleDownload = () => {
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

    callAPIwithHeaders(onboardingDownloadFormUrl, "post", callback, {
      userId: clientInfo.UserId,
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
                  sm: `calc(100% - 281px)`,
                },
                ml: { sm: `65px` },
              }}
            >
              <Toolbar>
                <div className="flex flex-row w-full justify-between items-center mb-3">
                  <div className="!text-[#000000]">
                    <span className="!font-semibold text-[15px]">
                      {clientInfo.SFID} &nbsp;|&nbsp; {clientInfo.clientName}{" "}
                      &nbsp;|&nbsp; {clientInfo.DepartmentType}
                    </span>
                  </div>
                  <div className="relative flex gap-5">
                    <Tooltip title="Download" placement="bottom" arrow>
                      <span
                        className="flex items-center cursor-pointer"
                        onClick={handleDownload}
                      >
                        <DownloadIcon />
                      </span>
                    </Tooltip>
                    <Tooltip title="Close" placement="bottom" arrow>
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
            <ClientSidebar
              clientInfo={clientInfo}
              perCountChecklist={perCountChecklist}
              perCountBasicDetails={perCountBasicDetails}
              perCountSmbChecklist={perCountSmbChecklist}
              sidebarModule={formSubmit}
              setAutoCareProgressPercentage={(value: number) =>
                setAutoCareProgressPer(value)
              }
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                backgroundColor: "#F9FBFF",
                width: { sm: `calc(100% - 280px)` },
                height: "calc(100% - 64px)",
              }}
            >
              {clientInfo.DepartmentId === 3 ? (
                <>
                  {formSubmit === 31 && (
                    <BasicDetailsAutoCare
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
                  {formSubmit === 32 && (
                    <ChecklistAutoCare
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
                  )}
                </>
              ) : clientInfo.DepartmentId === 2 ? (
                <>
                  {formSubmit === 21 && (
                    <ChecklistSmb
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
                    />
                  )}
                </>
              ) : (
                <>
                  {formSubmit === 11 ? (
                    <BasicDetailsWhitelabel
                      clientInfo={clientInfo}
                      setWhitelabelBasicDetailsFormSubmit={(value: number) =>
                        setFormSubmit(value)
                      }
                      setWhitelabelBasicDetailCount={(value: number) => { }}
                    />
                  ) : formSubmit === 12 ? (
                    <ChecklistWhitelabel
                      clientInfo={clientInfo}
                      setChecklistFormSubmit={(value: number) =>
                        setFormSubmit(value)
                      }
                      setChecklistCount={(value: number) => { }}
                    />
                  ) : (
                    ""
                  )}
                </>
              )}
            </Box>
          </Box>
        </div>
      </Box>
    </Modal>
  );
}

export default ClientModal;
