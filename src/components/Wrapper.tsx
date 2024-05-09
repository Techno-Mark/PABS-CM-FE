import { ReactNode, useState } from "react";
//mui components
import { Box, CssBaseline } from "@mui/material";
//custom components
import Header from "./admin/common/AdminHeader";
import Sidebar from "./admin/common/AdminSidebar";
import { drawerWidth } from "@/static/commonVariables";
import { ToastContainer } from "./ToastContainer";

type WrapperPropsType = {
  isScrollable?: boolean;
  children: ReactNode;
};

const Wrapper = ({ isScrollable, children }: WrapperPropsType) => {
  const [openSidebar, setOpenSidebar] = useState(true);

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
          <ToastContainer />
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

export default Wrapper;