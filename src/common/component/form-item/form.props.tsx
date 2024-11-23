import React from "react";
import {
  SiriusTextAreaProps,
  SiriusSearchProps,
  SiriusPasswordProps,
  SiriusNumberProps,
  SiriusDateProps,
  SiriusTimeProps,
  SiriusSelectProps,
  SiriusSwitchProps,
  SiriusInputMethod,
  SiriusRadioProps,
  SiriusRadioGroupProps,
  SiriusCheckboxProps,
  SiriusSelectListProps,
  SiriusColorPickerProps,
} from "../input";

export enum FormItemFieldType {
  TEXT,
  INPUT,
  EMAIL,
  SEARCH,
  NUMBER,
  DATE,
  DATE_PICKER,
  DATE_RANGE,
  SELECT,
  SELECT_LIST,
  DROPDOWN,
  SWITCH,
  DIVIDER,
  TEXTAREA,
  CUSTOM,
  PASSWORD,
  TIME,
  TIME_PICKER,
  TIME_RANGE,
  RADIO,
  RADIOGROUP,
  CHECKBOX,
  HIDDEN,
  TIME_RANGE_PICKER,
  COLOR_PICKER,
}

export interface FormItemProps {
  items: FormItemFieldProps[];
  readonly?: boolean;
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline" | undefined;
  style?: React.CSSProperties;
  gap?: string;
}

export interface FormItemFieldProps
  extends SiriusTextAreaProps,
    SiriusSearchProps,
    SiriusPasswordProps,
    SiriusNumberProps,
    SiriusDateProps,
    SiriusTimeProps,
    SiriusSelectProps,
    SiriusSwitchProps,
    SiriusInputMethod,
    SiriusRadioProps,
    SiriusRadioGroupProps,
    SiriusCheckboxProps,
    SiriusSelectListProps,
    SiriusColorPickerProps {
  key: string;
  inputType: FormItemFieldType;
  render?: React.ReactNode;
}
