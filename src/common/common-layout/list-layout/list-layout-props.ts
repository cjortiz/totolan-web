import { ViewMode } from "../../constants";

export interface ListLayoutProps {
  children?: React.ReactNode;
  viewMode: ViewMode;
  searchBar?: React.ReactNode;
}
