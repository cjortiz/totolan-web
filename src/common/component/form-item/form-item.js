import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Divider, Form, Input, Space } from "antd";
import React from "react";
import { FormItemFieldType, } from "./form.props";
import TotInput from "../input/tot-input";
import { color } from "../../../theme";
export const TotFormItem = (props) => {
    const { items, readonly, direction, align, style, gap } = props;
    const formItems = () => {
        return items.map((item) => {
            const { inputType, readOnly, ...rest } = item;
            const formProp = { ...rest };
            switch (inputType) {
                case FormItemFieldType.TEXT:
                case FormItemFieldType.INPUT:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput, { readOnly: readonly || readOnly, ...formProp, initialValue: item.initialValue }) }, item.key));
                case FormItemFieldType.EMAIL:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Email, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.PASSWORD:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Password, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.TEXTAREA:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.TextArea, { initialValue: item.initialValue, readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.NUMBER:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Number, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.DATE:
                case FormItemFieldType.DATE_PICKER:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.DatePicker, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.DATE_RANGE:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.DateRangePicker, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.TIME:
                case FormItemFieldType.TIME_PICKER:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.TimePicker, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.TIME_RANGE:
                case FormItemFieldType.TIME_RANGE_PICKER:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.TimeRangePicker, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.SWITCH:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Switch, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.RADIO:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Radio, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.RADIOGROUP:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.RadioGroup, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.CHECKBOX:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Checkbox, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.SELECT:
                case FormItemFieldType.DROPDOWN:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Dropdown, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.SELECT_LIST:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.SelectList, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.SEARCH:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.Search, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.COLOR_PICKER:
                    return (_jsx(React.Fragment, { children: _jsx(TotInput.ColorPicker, { readOnly: readonly || readOnly, ...formProp }) }, item.key));
                case FormItemFieldType.DIVIDER:
                    const { divierStyle, width, ...dividerProps } = formProp;
                    return (_jsx(React.Fragment, { children: _jsx(Divider, { style: divierStyle
                                ? divierStyle
                                : {
                                    width: width ? width : "100%",
                                    minWidth: "0rem",
                                    borderColor: color.white01,
                                    borderWidth: " 0.05rem",
                                }, ...dividerProps }) }, item.key));
                case FormItemFieldType.HIDDEN:
                    return (_jsx(React.Fragment, { children: _jsx(Form.Item, { hidden: true, name: formProp.name, children: _jsx(Input, {}) }) }, item.key));
                default:
                    return _jsx(React.Fragment, { children: item.render }, item.key);
            }
        });
    };
    return (_jsx(_Fragment, { children: direction ? (_jsx(Space, { className: "sirius-form-item", style: { ...style, gap: gap ? gap : 0 }, align: align || "start", direction: direction ? direction : "vertical", children: formItems() })) : (formItems()) }));
};
