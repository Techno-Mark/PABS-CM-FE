import { ReactNode, useState } from "react";
//mui components
import { Box, CssBaseline } from "@mui/material";
//custom components
import Header from "./admin/AdminHeader";
import Sidebar from "./admin/AdminSidebar";
import { drawerWidth } from "@/static/commonVariables";

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