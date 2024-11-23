import React from "react";
import { SiriusInputProps } from "../../constants";

export enum SearchFieldType {
  Select,
  DateRange,
  Divider,
  Input,
  Text,
  DatePicker,
  Switch,
  MonthPicker,
  Button,
  Nothing,
  Custom,
  Radio,
  Search,
  Number,
  SelectList,
  ColorPicker,
}

export declare type PanelMode =
  | "time"
  | "date"
  | "week"
  | "month"
  | "quarter"
  | "year"
  | "decade";

export const ExcludeFilterKeys = [
  "pageSize",
  "pageNumber",
  "sortDirection",
  "sortField",
  "resetPage",
  "companyId",
  "paginationEnabled",
];

/**
 * For Any Ant input props, please add them to sirius-input-props.
 */
export interface SearchFieldProps extends SiriusInputProps {
  key: string;
  button?: React.ReactNode;
  render?: React.ReactNode;
  selectmode?: "multiple" | "tags";
  isName?: boolean;
  isButtomBeside?: boolean;
}

export interface SearchFieldPropsExt extends SearchFieldProps {
  onChangeFilter?: (name: string, value: any) => void;
}

export interface SearchBarProps {
  hidden?: boolean;
  filter: any;
  getContainer?: false | undefined;
  setFilter: (filter: any) => void;
  searchArea: SearchFieldProps[];
  searchPanel: SearchFieldProps[];
  searchButton?: boolean;
  setShowTable?: (showTable: any) => void;
  isOpenMoreFilter?: boolean;
  onResetMoreFilters?: () => void;
  onSearchMoreFilters?: () => void;
  defaultFilteredKey?: string[];
  branchDefaultValue?: string;
}
