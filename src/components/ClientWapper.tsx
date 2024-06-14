import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
//mui components
import { Box, Button, CircularProgress, CssBaseline } from "@mui/material";
//custom components
import ClientSidebar from "@/components/client/common/ClientSidebar";
import ClientHeader from "@/components/client/common/ClientHeader";
// Static import
import { drawerWidth } from "@/static/commonVariables";
// Cookie import
import Cookies from "js-cookie";

type WrapperPropsType = {
  formSubmit: number;
  isScrollable?: boolean;
  children: ReactNode;
  perCountBasicDetails: number;
  perCountChecklist: number;
};

const ClientWrapper = ({
  isScrollable,
  perCountBasicDetails,
  perCountChecklist,
  formSubmit,
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
            sidebarModule={formSubmit}
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
