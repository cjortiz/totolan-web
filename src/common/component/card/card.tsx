import "./card-style.css";
import "./card-style-dark.css";

import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import React from "react";

interface TotCardProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  additionalClassname?: string;
  id?: string;
}

export const TotCard = observer((props: TotCardProps) => {
  const { children, style, additionalClassname, id } = props;
  const { appStateStore } = useStores();

  return (
    <Card
      id={id}
      className={`tot-card ${appStateStore.isDarkMode ? "dark" : ""} ${
        additionalClassname ? additionalClassname : ""
      }`}
      style={style}
    >
      {children}
    </Card>
  );
});
