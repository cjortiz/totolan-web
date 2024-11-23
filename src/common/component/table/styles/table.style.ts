import { color } from "./../../../../theme";

export const noRecord: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  paddingTop: "35vh",
  color: color.gray,
  fontSize: "1.25rem",
  fontWeight: "inherit",
};

export const footerWrapper: React.CSSProperties = {
  display: "flex",
  width: "100%",
  alignContent: "center",
  alignItems: "center",
  bottom: 0,
  position: "absolute",
  left: 0,
  zIndex: 1,
  padding: "0rem 1.5rem 1.5rem",
  justifyContent: "space-between",
  backgroundColor: "none",
};

export const tableWrapper: React.CSSProperties = {
  marginBottom: "3rem",
};

export const summaryStyle: React.CSSProperties = {
  flex: 1,
};

export const paginationStyle: React.CSSProperties = {
  flex: 1,
  textAlign: "center",
};

export const exportButtonStyle: React.CSSProperties = {
  flex: 1,
  textAlign: "end",
  padding: "0.5rem 0",
};

export const summaryTitleStyle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: "400",
  letterSpacing: "0.00703125rem",
  cursor: "pointer",
};

export const summaryBtnStyle: React.CSSProperties = {
  border: "none",
  background: "none",
  padding: "none",
  margin: "none",
};

export const summaryValueStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: "700",
  margin: "0.5rem",
  lineHeight: "1.5rem",
};

export const summaryIconStyle: React.CSSProperties = {
  fontSize: 16,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  color: color.primary,
};

export const summaryModalStyle: React.CSSProperties = {
  maxHeight: "calc(100vh - 200px)",
  overflow: "auto",
};

export const rowDropdownStyle: React.CSSProperties = {
  width: 70,
};
