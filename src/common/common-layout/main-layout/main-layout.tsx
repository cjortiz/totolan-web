import "./main-layout-style.css";

import { SiriusTypography } from "../../component";
import { MainLayoutProps } from "./main-layout-props";
import { Space } from "antd";
import { color } from "../../../theme";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";

export const MainLayout = observer((props: MainLayoutProps) => {
  const { children, buttons, title } = props;
  const { appStateStore } = useStores();

  return (
    <div className="main-layout-container">
      <div className="main-layout-header">
        <SiriusTypography.BodyLarge
          fontWeight="semibold"
          color={appStateStore.isDarkMode ? color.white10 : color.white}
        >
          {title}
        </SiriusTypography.BodyLarge>
        {buttons && <Space>{buttons}</Space>}
      </div>
      <div className="main-layout-content">{children}</div>
    </div>
  );
});
