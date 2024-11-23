import "./details-layout-style.css";
import "./details-layout-style-dark.css";

import { ViewMode } from "../../constants";
import { DetailsLayoutProps } from "./details-layout-props";
import { TotCard, SiriusTypography } from "../../component";
import { useStores } from "../../models";
import { color } from "../../../theme";
import { observer } from "mobx-react-lite";

export const DetailsLayout = observer((props: DetailsLayoutProps) => {
  const { appStateStore } = useStores();
  const {
    viewMode,
    children,
    auditHeader,
    showHeader,
    title,
    removeMarginTop,
  } = props;

  const detailsLayoutClassName = (() => {
    switch (viewMode) {
      case ViewMode.VIEW:
        return " view";
      case ViewMode.DEFAULT:
      case ViewMode.LIST:
        return " list";
      default:
        return " default";
    }
  })();

  return (
    <TotCard
      additionalClassname={`details-layout-card tot-scrollbar ${detailsLayoutClassName}${
        showHeader ? " pt-0" : ""
      }`}
    >
      {showHeader && (
        <div
          className={`details-layout-header${
            appStateStore.isDarkMode ? " dark" : ""
          }`}
        >
          <div className="details-layout-box-container">
            <div
              className={`details-layout-box ${
                appStateStore.isDarkMode ? " dark" : ""
              }`}
            />
            <SiriusTypography.BodyMedium
              color={appStateStore.isDarkMode ? color.white10 : color.gray03}
            >
              {title}
            </SiriusTypography.BodyMedium>
          </div>
          {auditHeader}
        </div>
      )}
      <div
        className={`details-layout-content${removeMarginTop ? " mt-0" : ""}`}
      >
        {children}
      </div>
    </TotCard>
  );
});
