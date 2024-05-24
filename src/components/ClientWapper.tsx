import { ReactNode, useEffect, useState } from "react";
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
  isScrollable?: boolean;
  children: ReactNode;
};

const ClientWrapper = ({ isScrollable, children }: WrapperPropsType) => {
  const [openSidebar, setOpenSidebar] = useState(true);
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
          <ClientSidebar/>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
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
