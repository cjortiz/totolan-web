import { Badge } from "antd";
import React from "react";
import { color as defaultColor } from "../../../theme";

interface TotBadgeProps {
  count?: number;
  offset?: [number, number];
  dot?: boolean;
  overflowCount?: number;
  color?: string;
  children: React.ReactNode;
}

export const TotBadge = (props: TotBadgeProps) => {
  const { color, children, ...rest } = props;
  return (
    <Badge {...rest} color={color ? color : defaultColor.primary02}>
      {children}
    </Badge>
  );
};
