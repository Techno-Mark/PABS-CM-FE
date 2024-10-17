import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//mui components
import { Box, CssBaseline } from "@mui/material";
//custom components
import Header from "@/components/admin/common/AdminHeader";
import Sidebar from "@/components/admin/common/AdminSidebar";
// Static import
import { drawerWidth } from "@/static/commonVariables";
// Cookie import
import Cookies from "js-cookie";

type WrapperPropsType = {
  isScrollable?: boolean;
  children: ReactNode;
};

const Wrapper = ({ isScrollable, children }: WrapperPropsType) => {
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
          <Header openSidebar={openSidebar} />
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            onRouteChange={() => {}}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 3,
              backgroundColor: "#FFF",
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

export default Wrapper;
