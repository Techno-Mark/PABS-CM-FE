import { keyframes } from "@emotion/react";

const slideInFromRight = keyframes`
  from {
    transform: translate(100%, -50%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`;


export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  border: "1px solid #D8D8D8",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  borderRadius: "4.8px",
  animation: `${slideInFromRight} 0.5s ease-out`,
};

export const bulkStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  border: "1px solid #023963",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
};

export const auditLogModalstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "840px",
  height: "70vh",
  borderRadius: "5px",
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  overflow: "hidden",
  animation: `${slideInFromRight} 0.5s ease-out`,
};


export const clientModalstyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98vw",
  height: "95vh",
  borderRadius: "5px",
  // bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
};

export const tableContainerStyle = {
  maxHeight: '46vh',
  overflowY: 'auto' as React.CSSProperties['overflowY'],
};

export const stickyHeaderStyle = {
  position: 'sticky' as React.CSSProperties['position'],
  top: "1px",
  backgroundColor: '#023963',
  zIndex: 1 ,
};
