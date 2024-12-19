import { SelectProps } from "antd";
import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import { DefaultOptionType, BaseOptionType } from "antd/es/select";
import { SearchFieldType } from "../component/search-bar";
import { DateFormat, ViewMode, ButtonSelectType } from "./enum";

export interface DropdownInterface {
  key?: React.Key;
  label: string;
  value: string;
  idName?: string;
  isDefault?: boolean;
  options?: [];
}

type PickerType = "time" | "date" | "week" | "month" | "quarter" | "year";

type SizeType = "small" | "large" | "medium";

type InputType =
  | "email"
  | "password"
  | "group"
  | "text"
  | "number"
  | "file"
  | "search"
  | "textarea"
  | "switch"
  | "checkbox"
  | "radio"
  | "radioGroup"
  | "dropdown"
  | "selectList"
  | "datePicker"
  | "dateRangePicker"
  | "timePicker"
  | "timeRangePicker"
  | "colorPicker";

export interface SiriusInputProps
  extends SiriusTextAreaProps,
    SiriusSearchProps,
    SiriusPasswordProps,
    SiriusNumberProps,
    SiriusDateProps,
    SiriusTimeProps,
    SiriusSelectProps,
    SiriusSwitchProps,
    SiriusCheckboxProps,
    SiriusRadioProps,
    SiriusRadioGroupProps,
    SiriusSelectListProps,
    SiriusColorPickerProps {
  type?: InputType | SearchFieldType;
  isDark?: boolean;
}

export interface CommonInputProps extends SiriusInputMethod, SiriusFormProp {
  id?: string;
  allowClear?: boolean | { clearIcon: React.ReactNode };
  placeholder?: string;
  value?: any;
  style?: React.CSSProperties;
  minLength?: number;
  maxLength?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  bordered?: boolean;
  size?: SizeType;
  width?: string | "full";
  rules?: Rule[];
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  marginBottom?: string;
  marginTop?: string;
  className?: string;
  format?: "MM/DD/YYYY" | "HH:mm" | "HH:mm:ss" | DateFormat;
  open?: boolean;
  status?: "error" | "warning";
  defaultValue?: any;
  additionalClassname?: string;
}

export interface SiriusFormProp {
  name?: string;
  label?: string;
  initialValue?: any;
  rules?: Rule[];
  hidden?: boolean;
  normalize?: any;
  dependencies?: NamePath[];
  hasFeedback?: boolean;
  valuePropName?: "checked";
  help?: React.ReactNode;
  colon?: boolean;
}

/**
 * {For Text Area Exclusive Props}
 */
export interface SiriusTextAreaProps extends CommonInputProps {
  autoSize?: boolean;
  rows?: number;
  showCount?:
    | boolean
    | {
        formatter: (info: {
          value: string;
          count: number;
          maxLength?: number;
        }) => string;
      };
  onResize?: (width: any, height: any) => void;
}

/**
 * {For Search Area Exclusive Props}
 */
export interface SiriusSearchProps extends CommonInputProps {
  enterButton?: boolean | React.ReactNode;
  loading?: boolean;
  onSearch?: (value: any, event: any) => void;
}

/**
 * {For Password Exclusive Props}
 */
export interface SiriusPasswordProps extends CommonInputProps {
  iconRender?: (visible: any) => React.ReactNode;
  visibilityToggle?: boolean;
  visible?: boolean;
  onVisibleChange?: boolean;
  autoComplete?: string;
  placeholder?: string;
  label?: string;
}

/**
 * {For Number Exclusive Props}
 */
export interface SiriusNumberProps extends CommonInputProps {
  min?: number;
  max?: number;
  step?: number | string;
  controls?: boolean;
  stringMode?: boolean;
  showNumberButton?: boolean;
}

/**
 * {For Date Picker Exclusive Props}
 */
export interface SiriusDateProps extends CommonInputProps, SiriusTimeProps {
  picker?: PickerType;
  showTime?: boolean;
  allowEmpty?: [boolean, boolean];
  defaultPickerValue?: any;
  disabledDate?: any;
}

/**
 * {For Time Picker Exclusive Props}
 */
export interface SiriusTimeProps extends CommonInputProps {
  use12Hours?: boolean;
  secondStep?: number;
  minuteStep?: number;
  hourStep?: number;
}

export interface ApiResultModel<T> {
  isSuccess: boolean;
  errorCodes: any;
  errorMessages: any;
  message: string;
  messageParams: any;
  resultData: T;
  exceptionType: string;
  uploadLength?: number;
}

export interface PaginatedResponseDto<T> {
  content: T;
  totalSize: number;
  pageNumber: number;
  summaryTotal?: number;
}

export interface DropdownResponseDto {
  value: number;
  label: string;
}

export interface SorterOptions {
  sortField: string;
  sortDirection: string;
}

export type ShowMessageInterface = (type: string, message: string) => void;

export interface TotError<T> {
  response: TotResponse<T>;
}

export interface TotResponse<T> {
  data: ApiResultModel<T>;
  config: any;
  status: number;
  statusText: string;
}

export interface PaginationDto {
  pageNumber: number;
  pageSize: number;
  sortDirection?: string;
  sortField?: string;
  paginationEnabled?: boolean;
  resetPage?: boolean;
}

/**
 * {For Select Exclusive Props}
 */
export interface SiriusSelectProps extends CommonInputProps {
  maxTagCount?: number | "responsive";
  maxTagTextLength?: number;
  mode?: "multiple" | "tags";
  options?: DefaultOptionType[];
  onDeselect?: (e: any) => void;
  onClear?: () => void;
  onSelect?: (data: SelectProps["options"], option?: DropdownInterface) => void;
  defaultActiveFirstOption?: boolean;
  showSearch?: boolean;
  suffixIcon?: React.ReactNode;
  showArrow?: boolean;
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  notFoundContent?: React.ReactNode;
  dropdownRender?: (originNode: React.ReactNode) => React.ReactNode;
  tagRender?: (props: any) => React.ReactNode;
  filterOption?:
    | boolean
    | ((inputValue: string, option: BaseOptionType) => boolean);
  showOptions?: boolean;
}

/**
 * {For Switch Exclusive Props}}
 */
export interface SiriusSwitchProps extends CommonInputProps {
  checked?: boolean;
  switchLabel?: string;
  switchLabelColor?: string;
  switchGap?: string;
}

export interface SiriusColorPickerProps extends CommonInputProps {
  popup?: boolean;
  colorPickerLabel?: string;
  blockStyles?: React.CSSProperties;
  colorPickerGap?: string;
}

export interface SiriusCheckboxProps extends CommonInputProps {
  checked?: boolean;
  checkboxLabel?: string;
  checkboxLabelColor?: string;
  indeterminate?: any;
}

export interface SiriusRadioProps extends CommonInputProps {
  checked?: boolean;
  radioLabel?: string;
  radioLabelColor?: string;
}

export interface SiriusRadioGroupProps extends CommonInputProps {
  checked?: boolean;
  radioLabel?: string;
  options?: DefaultOptionType[];
  radioLabelColor?: string;
  valuePropName?: "checked";
}

export interface SiriusSelectListProps
  extends CommonInputProps,
    SiriusSelectProps {
  isSearchable?: boolean;
  title?: string;
  onSave?: any;
  viewMode?: ViewMode;
  isStatic?: boolean;
  buttonSelecType?: ButtonSelectType;
  hideModal?: boolean;
  refetchDropdown?: () => void;
  onSearchFilter?: (data: string) => void;
  isShowNoOfRecord?: boolean;
  defaultQueryFilter?: any;
  isFilterMultipleSelection?: boolean;
}

/**
 * {For Methods Exclusive Props}
 */
export interface SiriusInputMethod {
  onBlur?: (e: any) => void;
  onInput?: (e: any) => void;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onClick?: () => void;
  onPressEnter?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onPaste?: (e: any) => void;
  onFocus?: (e: any) => void;
}
