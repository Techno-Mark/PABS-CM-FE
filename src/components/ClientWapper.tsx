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
import CommentModel from "./client/common/CommentModel";
import DrawerOverlay from "./admin/common/DrawerOverlay";

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
  const [commentModelOpen, setCommentModelOpen] = useState(false);

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
            setCommentModelOpen={setCommentModelOpen}
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
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {children}

            {/* {commentModelOpen && (
              <CommentModel
                commentModelOpen={commentModelOpen}
                setCommentModelOpen={(
                  value: boolean | ((prevState: boolean) => boolean)
                ) => {
                  setCommentModelOpen(value);
                }}
                handleClose={() => {
                  setCommentModelOpen(false);
                }}
              />
            )}
            <DrawerOverlay isOpen={commentModelOpen} /> */}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ClientWrapper;
