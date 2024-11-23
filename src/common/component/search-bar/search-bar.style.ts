import { CSSProperties } from "react";

export const searchContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const priceSelectStyle: CSSProperties = {
  minWidth: 250,
};

export const searchBarContainerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
};

export const formContainerStyle: CSSProperties = {
  height: "calc(100% - 7.5rem)",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "24px",
  paddingBottom: "0",
};

export const searchBarDivStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
};
