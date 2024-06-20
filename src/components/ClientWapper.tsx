import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
//mui components
import { Box, CssBaseline } from "@mui/material";
//custom components
import ClientSidebar from "@/components/client/common/ClientSidebar";
import ClientHeader from "@/components/client/common/ClientHeader";
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
  setAutoCareProgressPercentage:(value:number) => void
};

const ClientWrapper = ({
  isScrollable,
  perCountBasicDetails,
  perCountChecklist,
  perCountSmbChecklist,
  formSubmit,
  setAutoCareProgressPercentage,
  children,
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
          <ClientHeader />
          <ClientSidebar
            perCountBasicDetails={perCountBasicDetails}
            perCountChecklist={perCountChecklist}
            perCountSmbChecklist={perCountSmbChecklist}
            sidebarModule={formSubmit}
            setAutoCareProgressPercentage={(value:number) => setAutoCareProgressPercentage(value)}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              backgroundColor: "#F9FBFF",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
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
