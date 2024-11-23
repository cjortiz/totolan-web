import React from "react";
import { ListLayoutProps } from "./list-layout-props";

import * as Style from "./list-layout-style";
import { TotCard } from "../../component";
import { ViewMode } from "../../constants";

export const ListLayout = (props: ListLayoutProps) => {
  const { viewMode, children, searchBar } = props;

  const layoutStyle = (): React.CSSProperties => {
    switch (viewMode) {
      case ViewMode.VIEW:
      case ViewMode.COPY:
        return Style.listLayoutViewMode;
      case ViewMode.ADD:
      case ViewMode.EDIT:
        return Style.listLayoutHiddenMode;
      default:
        return Style.listLayoutDefaultMode;
    }
  };

  return (
    <TotCard style={layoutStyle()}>
      {searchBar && (
        <div style={Style.listLayoutSearchBarPaddingBottom}>{searchBar}</div>
      )}
      {children}
    </TotCard>
  );
};
