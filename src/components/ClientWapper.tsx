import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
//mui components
import { Box, CssBaseline } from "@mui/material";
//custom components
import ClientHeader from "@/components/client/common/ClientHeader";
import ClientSidebar from "@/components/client/common/ClientSidebar";
// Static import
import { drawerWidth } from "@/static/commonVariables";
// Cookie import
import Cookies from "js-cookie";

type WrapperPropsType = {
  formSubmit?: number;
  isScrollable?: boolean;
  children: ReactNode;
  perCountBasicDetails?: number;
  perCountChecklist?: number;
  perCountSmbChecklist?: number;
  perCountWhiteLabelChecklist?: number;
  perCountWhiteLabelBasicDetails?: number;
  setAutoCareProgressPercentage: (value: number) => void;
  setWhiteLabelProgressPercentage: (value: number) => void;
  formSubmittedStatus: boolean;
};

const ClientWrapper = ({
  isScrollable,
  perCountBasicDetails,
  perCountChecklist,
  perCountSmbChecklist,
  perCountWhiteLabelChecklist,
  perCountWhiteLabelBasicDetails,
  formSubmit,
  setAutoCareProgressPercentage,
  setWhiteLabelProgressPercentage,
  children,
  formSubmittedStatus,
}: WrapperPropsType) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="max-h-screen flex flex-col overflow-hidden">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            overflow: isScrollable ? "scroll" : "hidden",
          }}
        >
          <CssBaseline />
          <ClientHeader
            formSubmittedStatus={formSubmittedStatus}
            formSubmit={formSubmit}
          />
          <ClientSidebar
            perCountWhiteLabelBasicDetails={perCountWhiteLabelBasicDetails}
            perCountWhiteLabelChecklist={perCountWhiteLabelChecklist}
            perCountBasicDetails={perCountBasicDetails}
            perCountChecklist={perCountChecklist}
            perCountSmbChecklist={perCountSmbChecklist}
            sidebarModule={formSubmit}
            setAutoCareProgressPercentage={(value: number) =>
              setAutoCareProgressPercentage(value)
            }
            setWhiteLabelProgressPercentage={(value: number) =>
              setWhiteLabelProgressPercentage(value)
            }
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              backgroundColor: "#F9FBFF",
              width: { sm: `100%` },
            }}
          >
            {children}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ClientWrapper;
