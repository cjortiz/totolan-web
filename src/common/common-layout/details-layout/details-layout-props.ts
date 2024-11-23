import { ViewMode } from "../../constants";

export interface DetailsLayoutProps {
  children: React.ReactNode;
  viewMode: ViewMode;
  auditHeader?: React.ReactNode;
  showHeader?: boolean;
  title?: string;
  removeMarginTop?: boolean;
}
