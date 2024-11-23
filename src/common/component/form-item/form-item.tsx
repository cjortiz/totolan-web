import { Divider, Form, Input, Space } from "antd";
import React from "react";

import {
  FormItemFieldProps,
  FormItemFieldType,
  FormItemProps,
} from "./form.props";
import TotInput from "../input/tot-input";
import { color } from "../../../theme";

export const TotFormItem = (props: FormItemProps) => {
  const { items, readonly, direction, align, style, gap } = props;

  const formItems = (): JSX.Element[] => {
    return items.map((item: FormItemFieldProps) => {
      const { inputType, readOnly, ...rest } = item;
      const formProp: any = { ...rest };
      switch (inputType) {
        case FormItemFieldType.TEXT:
        case FormItemFieldType.INPUT:
          return (
            <React.Fragment key={item.key}>
              <TotInput
                readOnly={readonly || readOnly}
                {...formProp}
                initialValue={item.initialValue}
              />
            </React.Fragment>
          );

        case FormItemFieldType.EMAIL:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Email readOnly={readonly || readOnly} {...formProp} />
            </React.Fragment>
          );

        case FormItemFieldType.PASSWORD:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Password
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.TEXTAREA:
          return (
            <React.Fragment key={item.key}>
              <TotInput.TextArea
                initialValue={item.initialValue}
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.NUMBER:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Number readOnly={readonly || readOnly} {...formProp} />
            </React.Fragment>
          );

        case FormItemFieldType.DATE:
        case FormItemFieldType.DATE_PICKER:
          return (
            <React.Fragment key={item.key}>
              <TotInput.DatePicker
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.DATE_RANGE:
          return (
            <React.Fragment key={item.key}>
              <TotInput.DateRangePicker
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.TIME:
        case FormItemFieldType.TIME_PICKER:
          return (
            <React.Fragment key={item.key}>
              <TotInput.TimePicker
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.TIME_RANGE:
        case FormItemFieldType.TIME_RANGE_PICKER:
          return (
            <React.Fragment key={item.key}>
              <TotInput.TimeRangePicker
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.SWITCH:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Switch readOnly={readonly || readOnly} {...formProp} />
            </React.Fragment>
          );

        case FormItemFieldType.RADIO:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Radio readOnly={readonly || readOnly} {...formProp} />
            </React.Fragment>
          );
        case FormItemFieldType.RADIOGROUP:
          return (
            <React.Fragment key={item.key}>
              <TotInput.RadioGroup
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.CHECKBOX:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Checkbox
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.SELECT:
        case FormItemFieldType.DROPDOWN:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Dropdown
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.SELECT_LIST:
          return (
            <React.Fragment key={item.key}>
              <TotInput.SelectList
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.SEARCH:
          return (
            <React.Fragment key={item.key}>
              <TotInput.Search readOnly={readonly || readOnly} {...formProp} />
            </React.Fragment>
          );

        case FormItemFieldType.COLOR_PICKER:
          return (
            <React.Fragment key={item.key}>
              <TotInput.ColorPicker
                readOnly={readonly || readOnly}
                {...formProp}
              />
            </React.Fragment>
          );

        case FormItemFieldType.DIVIDER:
          const { divierStyle, width, ...dividerProps } = formProp;

          return (
            <React.Fragment key={item.key}>
              <Divider
                style={
                  divierStyle
                    ? divierStyle
                    : {
                        width: width ? width : "100%",
                        minWidth: "0rem",
                        borderColor: color.white01,
                        borderWidth: " 0.05rem",
                      }
                }
                {...dividerProps}
              />
            </React.Fragment>
          );

        case FormItemFieldType.HIDDEN:
          return (
            <React.Fragment key={item.key}>
              <Form.Item hidden name={formProp.name}>
                <Input />
              </Form.Item>
            </React.Fragment>
          );

        default:
          return <React.Fragment key={item.key}>{item.render}</React.Fragment>;
      }
    });
  };

  return (
    <>
      {direction ? (
        <Space
          className="sirius-form-item"
          style={{ ...style, gap: gap ? gap : 0 }}
          align={align || "start"}
          direction={direction ? direction : "vertical"}
        >
          {formItems()}
        </Space>
      ) : (
        formItems()
      )}
    </>
  );
};
