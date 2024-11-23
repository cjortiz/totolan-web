import "./tot-input-style.css";
import "./tot-input-style-dark.css";

import {
  Checkbox as AntCheckbox,
  DatePicker as AntDatePicker,
  Form,
  Input,
  InputNumber,
  Radio as AntRadio,
  Select as AntSelect,
  SelectProps,
  Space,
  Switch as AntSwitch,
  TimePicker as AntTimePicker,
  Typography,
} from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import { ChangeEvent, useEffect, useState } from "react";
import { color } from "../../../theme";

import * as Props from "./tot-input-props";
import { DEFAULT_MARGIN_BOTTOM } from "../../constants";
import { translate } from "../../i18n";
import { SearchFieldType } from "../search-bar";
import { SiriusTypography } from "../typography";
import { TotIcons } from "../../icons/tot-icon";

const TotInput = (props: Props.SiriusInputProps) => {
  const {
    id,
    name,
    type,
    rules,
    label,
    style,
    hidden,
    prefix,
    placeholder,
    help,
    colon,
    switchLabel,
    checkboxLabel,
    radioLabel,
    normalize,
    dependencies,
    hasFeedback,
    width,
    initialValue,
    className,
    marginBottom,
    valuePropName,
    switchLabelColor,
    checkboxLabelColor,
    radioLabelColor,
    showOptions,
    switchGap,
    additionalClassname,
    marginTop,
    onBlur,
    onChange,
    disabledDate,
    onSearchFilter,
    isDark,
    colorPickerLabel,
    colorPickerGap,
    blockStyles,
    ...rest
  } = props;
  const inputProp: any = { ...rest };
  const formProp: Props.SiriusFormProp = {
    name,
    initialValue,
    rules,
    hidden,
    normalize,
    dependencies,
    hasFeedback,
    valuePropName,
    help,
  };
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { appStateStore } = useStores();

  let isRequired = false;

  if (rules) {
    isRequired = rules.some(
      (rule: any) => rule.hasOwnProperty("required") && rule.required
    );
  }

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event);
  };

  switch (type) {
    case "datePicker":
    case SearchFieldType.DatePicker:
      return (
        <Form.Item
          className={`sirius-input-form-item ${isFocused ? "focused" : " "}${
            isDark ? " dark" : ""
          }`}
          label={label && `${label}${isRequired ? " *" : ""}`}
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <AntDatePicker
            className={`tot-input-datepicker ${
              inputProp.readOnly ? "tot-readonly-date" : ""
            }${isDark ? " dark" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={placeholder}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            suffixIcon={<TotIcons.Calendar />}
            allowClear={{ clearIcon: <TotIcons.Close /> }}
            disabledDate={disabledDate}
            popupClassName={`tot-datePicker-calendar ${isDark ? " dark" : ""}`}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...inputProp}
          />
        </Form.Item>
      );
    case "dateRangePicker":
    case SearchFieldType.DateRange:
      return (
        <Form.Item
          className={`tot-input-form-item ${isFocused ? "focused" : " "}${
            isDark ? " dark" : ""
          }`}
          label={label && `${label}${isRequired ? " *" : ""}`}
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <AntDatePicker.RangePicker
            className={`tot-input-dateRangePicker ${
              inputProp.readOnly ? "tot-readonly-date" : ""
            }${isDark ? " dark" : ""}`}
            prefix={!label ? prefix : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            placeholder={[placeholder, placeholder]}
            suffixIcon={<TotIcons.Calendar />}
            allowClear={{ clearIcon: <TotIcons.Close /> }}
            popupClassName={`tot-dateRangePicker-calendar ${
              isDark ? " dark" : ""
            }`}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...inputProp}
          />
        </Form.Item>
      );
    case "timePicker":
      return (
        <Form.Item
          className={`tot-inputTime-form-item ${isFocused ? "focused" : " "}${
            isDark ? " dark" : ""
          }`}
          label={label && `${label}${isRequired ? " *" : ""}`}
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <AntTimePicker
            className={`tot-input-timepicker ${
              inputProp.readOnly ? "tot-readonly-time" : ""
            }${isDark ? " dark" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={placeholder}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            suffixIcon={<TotIcons.Time />}
            allowClear={{ clearIcon: <TotIcons.Close /> }}
            popupClassName={`tot-timeRangePicker-calendar ${
              isDark ? " dark" : ""
            }`}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...inputProp}
          />
        </Form.Item>
      );
    case "timeRangePicker":
      return (
        <Form.Item
          className={`tot-inputTime-form-item ${isFocused ? "focused" : " "}${
            isDark ? " dark" : ""
          }`}
          label={label && `${label}${isRequired ? " *" : ""}`}
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <AntTimePicker.RangePicker
            className={`tot-input-timeRangepicker ${
              inputProp.readOnly ? "tot-readonly-time" : ""
            }${isDark ? " dark" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={[placeholder, placeholder]}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            suffixIcon={<TotIcons.Time />}
            allowClear={{ clearIcon: <TotIcons.Close /> }}
            popupClassName={`tot-timeRangePicker-calendar ${
              isDark ? " dark" : ""
            }`}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...inputProp}
          />
        </Form.Item>
      );
    case "dropdown":
    case SearchFieldType.Select:
      const inputHasValue: boolean =
        Array.isArray(inputProp.value) && inputProp.value.length > 0
          ? true
          : (!Array.isArray(inputProp.value) && inputProp.value) ||
            inputProp.value === 0
          ? true
          : false;
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-form-item-dropdown${
            isFocused || inputProp.readOnly || inputHasValue ? " clicked" : ""
          }${isDark ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" ? "100%" : width,
          }}
          {...formProp}
        >
          <AntSelect
            className={`tot-dropdown ${isFocused ? "focused" : ""} ${
              inputProp.readOnly ? "tot-readonly-dropdown" : ""
            }${isDark ? " dark" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            maxTagTextLength={12}
            maxTagCount={"responsive"}
            allowClear={{ clearIcon: <TotIcons.Close /> }}
            suffixIcon={<TotIcons.Dropdown />}
            style={style ? style : {}}
            value={inputProp.value}
            popupClassName={`tot-popup-dropdown ${
              appStateStore.isDarkMode ? "dark" : ""
            }`}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputProp}
          />
        </Form.Item>
      );
    case "selectList":
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-field-list${
            isFocused
              ? " focused"
              : "" || inputProp.readOnly || inputProp.value
              ? " clicked"
              : ""
          }${isDark ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" ? "100%" : width,
          }}
          rules={rules}
          {...formProp}
        >
          <AntSelect
            className={`tot-input-element-list ${isFocused ? "focused" : ""} ${
              inputProp.readOnly ? "tot-read-only" : ""
            }`}
            open={false}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            maxTagCount={"responsive"}
            style={style ? style : { width: width === "full" ? "100%" : width }}
            suffixIcon={<TotIcons.List />}
            value={inputProp.value}
            disabled={inputProp.readOnly}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputProp}
          />
        </Form.Item>
      );
    case "switch":
    case SearchFieldType.Switch:
      return (
        <div style={{ display: "flex", gap: switchGap ? switchGap : "1rem" }}>
          <Form.Item
            style={{
              marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
              marginTop: marginTop ? marginTop : 0,
            }}
            label={label}
            hidden={formProp.hidden}
            {...formProp}
          >
            <AntSwitch
              className={`tot-switch ${
                inputProp.readOnly ? "tot-readonly-switch" : ""
              }${isDark ? " dark" : ""}`}
              id={id}
              onChange={onChange}
              {...inputProp}
            />
          </Form.Item>
          {switchLabel && (
            <Form.Item
              style={{
                marginBottom: marginBottom
                  ? marginBottom
                  : DEFAULT_MARGIN_BOTTOM,
                marginTop: marginTop ? marginTop : 0,
              }}
              hidden={formProp.hidden}
            >
              <label
                className={`${id ? "tot-switch-label" : ""} ${
                  inputProp.readOnly ? "tot-readonly-switch" : ""
                }${appStateStore.isDarkMode ? " dark" : ""}`}
                htmlFor={id}
              >
                {switchLabel}
              </label>
            </Form.Item>
          )}
        </div>
      );
    case "checkbox":
      return (
        <Space size={"middle"} align="start">
          <Form.Item
            style={{
              marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            }}
            help="sample"
            label={label}
            hidden={formProp.hidden}
            {...formProp}
          >
            <AntCheckbox
              className={
                className
                  ? className
                  : `tot-checkbox ${
                      inputProp.readOnly ? "tot-readonly-checkbox" : ""
                    }${additionalClassname ? ` ${additionalClassname}` : ""}`
              }
              id={formProp.name}
              onChange={onChange}
              {...inputProp}
            />
          </Form.Item>
          {checkboxLabel && (
            <Form.Item
              style={{
                marginBottom: marginBottom
                  ? marginBottom
                  : DEFAULT_MARGIN_BOTTOM,
              }}
              hidden={formProp.hidden}
            >
              <label
                className={`tot-checkbox-label ${
                  inputProp.readOnly ? "tot-readonly-checkbox" : ""
                }`}
                htmlFor={formProp.name}
              >
                {checkboxLabel}
              </label>
            </Form.Item>
          )}
        </Space>
      );
    case "radio":
      return (
        <Space size={"middle"} align="start">
          <Form.Item
            style={{
              marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            }}
            label={label}
            hidden={formProp.hidden}
            {...formProp}
          >
            <AntRadio
              className={`tot-radio ${
                inputProp.readOnly ? "tot-readonly-radio" : ""
              }${isDark ? " dark" : ""}`}
              id={id}
              onChange={onChange}
              {...inputProp}
            />
          </Form.Item>
          {radioLabel && (
            <Form.Item
              style={{
                marginBottom: marginBottom
                  ? marginBottom
                  : DEFAULT_MARGIN_BOTTOM,
              }}
              hidden={formProp.hidden}
            >
              <label
                className={`${id ? "tot-radio-label" : ""} ${
                  inputProp.readOnly ? "tot-readonly-radio" : ""
                }${appStateStore.isDarkMode ? " dark" : ""}`}
                htmlFor={id}
              >
                {radioLabel}
              </label>
            </Form.Item>
          )}
        </Space>
      );
    case "radioGroup":
    case SearchFieldType.Radio:
      return (
        <Form.Item
          className="tot-group-label"
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
          }}
          label={label}
          hidden={formProp.hidden}
          {...formProp}
        >
          <AntRadio.Group
            className={
              className
                ? className
                : `tot-radio ${inputProp.readOnly ? "tot-readonly-radio" : ""}`
            }
            id={formProp.name}
            onChange={onChange}
            {...inputProp}
          />
        </Form.Item>
      );

    case "number":
      const { min, max, showNumberButton } = inputProp;

      const allowedKeyCodesRegExp =
        /^(?:[0-9]|Numpad[0-9]|Backspace|Tab|Enter|LeftArrow|RightArrow|Delete|\.|Decimal)$/;

      const handleKeyDown = (e) => {
        const key = e.key;
        const currentValue = parseFloat(inputProp.value) || 0;

        if (allowedKeyCodesRegExp.test(key)) {
          if (
            (min === undefined || currentValue >= min) &&
            (max === undefined || currentValue <= max)
          ) {
            if (e.key.length === 1) {
              const proposedValue = parseFloat(currentValue.toString() + e.key);
              if (max !== undefined && proposedValue > max) {
                e.preventDefault();
              }
            }
            return true;
          } else {
            e.preventDefault();
          }
        } else {
          e.preventDefault();
        }
      };
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-field-number${
            isFocused ||
            inputProp.readOnly ||
            (inputProp.value !== undefined && inputProp.value !== null)
              ? " clicked"
              : ""
          }${isDark ? " dark" : ""} ${
            showNumberButton ? "with-number-button" : ""
          }`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <InputNumber
            className={`tot-input-element-number ${
              isFocused ? "focused" : ""
            } ${inputProp.readOnly ? "tot-read-only" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            value={inputProp.value}
            min={min}
            max={max}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...inputProp}
          />
        </Form.Item>
      );
    case "textarea":
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-field-textarea${
            isFocused || inputProp.readOnly || inputProp.value ? " clicked" : ""
          }${isDark ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <Input.TextArea
            className={`tot-input-element-textarea ${
              isFocused ? "focused" : ""
            } disable-resize ${inputProp.readOnly ? "tot-read-only" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            value={inputProp.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange(e);
            }}
            {...inputProp}
          />
        </Form.Item>
      );
    case "group":
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-search-group${
            isFocused || inputProp.readOnly || inputProp.value ? " clicked" : ""
          }${isDark ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" || !width ? "100%" : width,
          }}
          {...formProp}
        >
          <Input
            className={`tot-input-element-search-group ${
              isFocused ? "focused" : ""
            } ${inputProp.readOnly ? "tot-read-only" : ""}`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            value={inputProp.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputProp}
          />
        </Form.Item>
      );

    case "password":
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-field${
            isFocused || inputProp.readOnly || inputProp.value ? " clicked" : ""
          }${isDark ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""}`}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
            width: width === "full" ? "100%" : width,
          }}
          {...formProp}
        >
          <Input.Password
            // TODO:: not working if TotIcons is used
            // TODO size of icons
            iconRender={(visible) =>
              inputProp.readOnly ? null : visible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="17"
                  viewBox="0 0 25 17"
                  fill="none"
                >
                  <path
                    d="M11.7676 0.610744C8.12988 0.889933 4.18457 3.27039 0.844727 7.20842C0.0976562 8.09007 0 8.24681 0 8.59457C0 8.94233 0.0976562 9.09907 0.844727 9.98072C3.59863 13.2281 6.89941 15.5106 9.94629 16.2796C10.8252 16.5 11.5723 16.5882 12.5 16.5882C13.4473 16.5882 14.1992 16.4951 15.1123 16.26C18.1445 15.4812 21.416 13.2085 24.1553 9.98072C24.9023 9.09907 25 8.94233 25 8.59457C25 8.24681 24.9023 8.09007 24.1553 7.20842C21.4014 3.96101 18.1006 1.67852 15.0537 0.909525C14.0039 0.64503 12.7734 0.537273 11.7676 0.610744ZM13.8428 2.39853C16.3965 2.85405 19.0039 4.38714 21.5381 6.92434C22.3682 7.7619 23.0469 8.5113 23.0469 8.59457C23.0469 8.74641 21.0547 10.8036 20.2393 11.4893C18.0713 13.3163 15.9521 14.4086 13.8184 14.8004C13.2471 14.9033 11.8701 14.9131 11.3037 14.82C8.94531 14.4331 6.51855 13.1106 4.14062 10.926C3.2959 10.1522 1.95312 8.71702 1.95312 8.59457C1.95312 8.44273 3.94531 6.38555 4.76074 5.69982C7.13867 3.69652 9.49219 2.56017 11.792 2.30547C12.168 2.26629 13.4082 2.32016 13.8428 2.39853Z"
                    fill={color.black1}
                  />
                  <path
                    d="M11.8751 3.65243C10.503 3.81406 9.15534 4.64673 8.36921 5.83206C7.06062 7.80108 7.31941 10.4362 8.99421 12.1114C10.9278 14.0559 14.0723 14.0559 16.0059 12.1114C17.9444 10.1717 17.9444 7.01739 16.0059 5.07776C15.21 4.27448 14.1798 3.77978 13.0616 3.64753C12.5684 3.59365 12.3829 3.59365 11.8751 3.65243ZM13.1592 5.38634C13.3497 5.42552 13.711 5.56267 13.9649 5.68512C15.044 6.22391 15.7716 7.38964 15.7716 8.59456C15.7716 9.79949 15.044 10.9652 13.9649 11.504C12.9591 11.9987 12.0411 11.9987 11.0352 11.504C9.95612 10.9652 9.22859 9.79949 9.22859 8.59456C9.22859 8.10966 9.35066 7.63944 9.59968 7.12515C10.2491 5.81247 11.7286 5.08756 13.1592 5.38634Z"
                    fill={color.black1}
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="19"
                  viewBox="0 0 27 19"
                  fill="none"
                >
                  <path
                    d="M22.333 0.0958652C22.2487 0.145338 21.5631 0.768715 20.8143 1.47125L19.4537 2.75264L18.8157 2.51516C17.666 2.07978 16.4953 1.80768 15.1823 1.65431C14.1856 1.54051 12.1184 1.58009 11.1797 1.72852C9.18634 2.0501 7.47775 2.65863 5.7797 3.64812C3.77579 4.81571 1.95118 6.4731 0.585353 8.36302C0.0527345 9.10019 0 9.19914 0 9.50093C0 9.79283 0.0527345 9.89673 0.532618 10.5696C1.78242 12.316 3.64395 14.0526 5.43692 15.141C5.6795 15.2894 5.89044 15.4181 5.90626 15.423C5.91681 15.4329 5.37892 15.9573 4.70919 16.5906C4.03946 17.2239 3.46465 17.7879 3.43301 17.8472C3.40137 17.9066 3.37501 18.0748 3.37501 18.2183C3.37501 18.6982 3.69669 19 4.20821 19C4.36114 19 4.55098 18.9703 4.63009 18.9307C4.80411 18.8417 23.4827 1.30799 23.567 1.15462C23.5987 1.09525 23.625 0.927032 23.625 0.783558C23.625 0.471869 23.4985 0.244287 23.2454 0.100813C23.0133 -0.0327682 22.5493 -0.0327682 22.333 0.0958652ZM15.2139 3.31664C16.0471 3.42549 16.9436 3.62833 17.6344 3.86581L18.0985 4.02413L17.2653 4.80582C16.4901 5.53309 16.4215 5.58751 16.3213 5.5232C15.7676 5.18677 15.1348 4.94435 14.502 4.82561C13.885 4.70687 12.6932 4.7415 12.1342 4.89487C10.394 5.36983 9.09142 6.60174 8.58517 8.24428C8.42169 8.77861 8.41115 10.1243 8.56408 10.6636C8.69064 11.1039 8.94904 11.6778 9.16525 11.9994L9.32873 12.2468L8.27931 13.2313L7.2299 14.2208L6.73946 13.9289C4.99395 12.8949 3.25899 11.3562 2.10938 9.81262L1.88262 9.50588L2.06719 9.24367C2.48379 8.65492 3.17461 7.89796 4.00255 7.12122C4.91485 6.27026 5.5002 5.81509 6.42306 5.24119C9.09669 3.57886 12.1342 2.9159 15.2139 3.31664ZM14.4651 6.51268C14.7129 6.58689 15.1348 6.765 15.1348 6.79469C15.1348 6.79963 14.117 7.75944 12.8672 8.93198L10.6049 11.0544L10.4731 10.7873C10.2674 10.3667 10.1778 9.96599 10.1778 9.47619C10.1778 8.47681 10.6418 7.61101 11.5225 6.98764C12.3504 6.40384 13.5053 6.21584 14.4651 6.51268Z"
                    fill={color.black1}
                  />
                  <path
                    d="M21.7898 5.01362C21.4682 5.32036 21.1992 5.59247 21.2045 5.6172C21.2045 5.64689 21.4101 5.81015 21.658 5.98826C22.5861 6.64627 24.2051 8.25418 24.9275 9.23872L25.1174 9.50094L24.8748 9.83736C24.2051 10.7576 22.7285 12.227 21.7266 12.9839C19.248 14.8392 16.4953 15.7842 13.5527 15.7891C12.5824 15.7891 12.0287 15.7446 11.1533 15.5863L10.626 15.4873L9.95622 16.1157C9.37614 16.6599 9.19157 16.8726 9.30759 16.8726C9.32341 16.8726 9.61345 16.9369 9.95622 17.021C11.2799 17.3327 11.7967 17.3871 13.4736 17.3921C15.1822 17.3921 15.6832 17.3426 16.9805 17.0408C20.6719 16.1899 24.0732 13.8794 26.4146 10.6388C26.9473 9.90168 27 9.80273 27 9.50094C27 9.19914 26.9473 9.10019 26.4146 8.36303C25.4654 7.04701 24.2578 5.81015 22.9605 4.82067C22.6969 4.61782 22.4596 4.45456 22.4332 4.45456C22.4068 4.45456 22.1168 4.70688 21.7898 5.01362Z"
                    fill={color.black1}
                  />
                  <path
                    d="M17.5922 8.95178L16.8539 9.64442L16.7643 10.065C16.49 11.3463 15.4564 12.316 14.1012 12.5634L13.6582 12.6426L12.9146 13.3401C12.5033 13.726 12.1816 14.0625 12.1975 14.0872C12.2186 14.1169 12.4084 14.1664 12.6246 14.201C13.1941 14.2901 14.3596 14.2406 14.8658 14.1021C16.5902 13.637 17.9033 12.4051 18.4096 10.7823C18.6152 10.1144 18.5941 8.34819 18.3779 8.27893C18.3463 8.26903 17.993 8.57577 17.5922 8.95178Z"
                    fill={color.black1}
                  />
                </svg>
              )
            }
            className={`tot-input-element ${isFocused ? "focused" : ""} ${
              inputProp.readOnly ? "tot-read-only" : ""
            }`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            value={inputProp.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputProp}
          />
        </Form.Item>
      );

    default:
      return (
        <Form.Item
          colon={colon ? colon : false}
          className={`tot-input-field${
            isFocused || inputProp.readOnly || inputProp.value ? " clicked" : ""
          }${appStateStore.isDarkMode ? " dark" : ""}`}
          label={
            label && (
              <Typography.Text
                className={`prefix ${
                  isFocused ? "focused" : "" || inputProp.value ? "visible" : ""
                } ${inputProp.readOnly ? "tot-read-only" : ""} `}
              >
                {label && `${label}${isRequired ? " *" : ""}`}
              </Typography.Text>
            )
          }
          style={{
            marginBottom: marginBottom ? marginBottom : DEFAULT_MARGIN_BOTTOM,
          }}
          {...formProp}
        >
          <Input
            className={`tot-input-element ${isFocused ? "focused" : ""} ${
              inputProp.readOnly ? "tot-read-only" : ""
            }`}
            prefix={!label ? prefix : null}
            placeholder={!label ? placeholder : null}
            style={
              style
                ? style
                : { width: width === "full" || !width ? "100%" : width }
            }
            value={inputProp.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputProp}
          />
        </Form.Item>
      );
  }
};

// Input Email
TotInput.Email = observer((props: Props.CommonInputProps) => {
  const { appStateStore } = useStores();
  const { suffix, rules, label, placeholder, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="email"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.email")
          : undefined
      }
      placeholder={placeholder}
      rules={rules ? rules : [{ max: 255 }]} // TODO:: add default rules for email input
      // TODO size of icons
      suffix={suffix ? suffix : <TotIcons.Email />}
      {...rest}
    />
  );
});

// Input Password
TotInput.Password = observer((props: Props.SiriusPasswordProps) => {
  const { appStateStore } = useStores();
  const { iconRender, rules, label, placeholder, suffix, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="password"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.password")
          : undefined
      }
      placeholder={placeholder}
      rules={rules ? rules : [{ max: 255 }]} // TODO:: add default rules for password input
      {...rest}
    />
  );
});

// Input Search
TotInput.Search = observer((props: Props.SiriusSearchProps) => {
  const { appStateStore } = useStores();
  const { prefix, rules, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      placeholder={translate("common.search")}
      rules={rules ? rules : [{ max: 255 }]}
      prefix={prefix ? prefix : <TotIcons.Search />}
      {...rest}
    />
  );
});

// Input Search Group
TotInput.Group = observer((props: Props.SiriusSearchProps) => {
  const { appStateStore } = useStores();
  const { suffix, rules, label, placeholder, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="group"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.textarea")
          : undefined
      }
      rules={rules ? rules : [{ max: 255 }]}
      suffix={
        suffix ? (
          suffix
        ) : (
          <TotIcons.Search className="sirius-search-icon-group" />
        )
      }
      {...rest}
    />
  );
});

// Input Textarea
TotInput.TextArea = observer((props: Props.SiriusTextAreaProps) => {
  const { appStateStore } = useStores();
  const { suffix, rules, label, placeholder, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="textarea"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.textarea")
          : undefined
      }
      placeholder={placeholder}
      rules={rules ? rules : [{ max: 255 }]} // TODO:: add default rules for textarea input
      {...rest}
    />
  );
});

// Input number
TotInput.Number = observer((props: Props.SiriusNumberProps) => {
  const { appStateStore } = useStores();
  return (
    <TotInput isDark={appStateStore.isDarkMode} type="number" {...props} />
  );
});

// Input Switch
TotInput.Switch = observer((props: Props.SiriusSwitchProps) => {
  const { valuePropName, ...rest } = props;
  const { appStateStore } = useStores();

  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      valuePropName={valuePropName ? valuePropName : "checked"}
      type="switch"
      {...rest}
    />
  );
});

// Input Color Picker
TotInput.ColorPicker = observer((props: Props.SiriusColorPickerProps) => {
  const { ...rest } = props;
  const { appStateStore } = useStores();

  return (
    <TotInput isDark={appStateStore.isDarkMode} type="colorPicker" {...rest} />
  );
});

TotInput.Checkbox = (props: Props.SiriusCheckboxProps) => {
  const { rules, valuePropName, ...rest } = props;
  return (
    <TotInput
      valuePropName={valuePropName ? valuePropName : "checked"}
      type="checkbox"
      {...rest}
    />
  );
};

TotInput.Radio = (props: Props.SiriusRadioProps) => {
  const { rules, valuePropName, ...rest } = props;
  const { appStateStore } = useStores();
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      valuePropName={valuePropName ? valuePropName : "checked"}
      type="radio"
      {...rest}
    />
  );
};

TotInput.RadioGroup = (props: Props.SiriusRadioGroupProps) => {
  const { rules, valuePropName, ...rest } = props;
  return (
    <TotInput
      valuePropName={valuePropName ? valuePropName : "checked"}
      type="radioGroup"
      {...rest}
    />
  );
};

TotInput.Dropdown = observer((props: Props.SiriusSelectProps) => {
  const { appStateStore } = useStores();
  const { rules, label, placeholder, ...rest } = props;
  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="dropdown"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.selectOption")
          : undefined
      }
      placeholder={placeholder}
      showArrow={true}
      dropdownRender={(render) => {
        return render;
      }}
      notFoundContent={
        <div>
          <div className="sirius-dropdown-error-icon">
            <TotIcons.Error />
          </div>
          <div>
            <SiriusTypography.BodyMedium color={color.black03}>
              {translate("common.noDataAvailable")}
            </SiriusTypography.BodyMedium>
          </div>
        </div>
      }
      {...props}
    />
  );
});

TotInput.SelectList = observer((props: Props.SiriusSelectListProps) => {
  const { appStateStore } = useStores();
  // TODO:: create a select list with dropdown
  const {
    title,
    onSave,
    viewMode,
    buttonSelecType,
    value,
    options,
    label,
    mode,
    isStatic,
    placeholder,
    hideModal,
    isSearchable,
    refetchDropdown,
    onSearchFilter,
    isShowNoOfRecord,
    defaultQueryFilter,
    isFilterMultipleSelection = false,
    ...rest
  } = props;
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (openModal) {
      refetchDropdown && refetchDropdown();
    }
  }, [openModal]);

  const getSelectedData = (): SelectProps["options"] => {
    if (value && Array.isArray(value)) {
      return options?.filter((obj) => value.includes(obj.value));
    } else if (value && !Array.isArray(value)) {
      return options?.filter((obj) => value === obj.value);
    } else {
      return [];
    }
  };

  return (
    <>
      <div>
        <TotInput
          isDark={appStateStore.isDarkMode}
          type="selectList"
          label={
            label
              ? label
              : !label && !placeholder
              ? translate("common.list")
              : undefined
          }
          placeholder={placeholder}
          options={options}
          value={value}
          showArrow={true}
          mode={mode}
          onClick={() => {
            if (!hideModal) setOpenModal(true);
          }}
          {...rest}
        />
      </div>
    </>
  );
});

TotInput.DatePicker = observer((props: Props.SiriusDateProps) => {
  const { rules, placeholder, format, label, ...rest } = props;
  const { appStateStore } = useStores();

  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="datePicker"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.date")
          : undefined
      }
      placeholder={placeholder ? placeholder : format ? format : "MM/DD/YYYY"}
      format={format ? format : "MM/DD/YYYY"}
      rules={rules ? rules : []}
      {...rest}
    />
  );
});

TotInput.DateRangePicker = observer((props: Props.SiriusDateProps) => {
  const { placeholder, format, label, rules, ...rest } = props;
  const { appStateStore } = useStores();

  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="dateRangePicker"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.date")
          : undefined
      }
      placeholder={placeholder ? placeholder : format ? format : "MM/DD/YYYY"}
      format={format ? format : "MM/DD/YYYY"}
      rules={rules ? rules : []}
      {...rest}
    />
  );
});

TotInput.TimePicker = observer((props: Props.SiriusTimeProps) => {
  const { placeholder, format, label, rules, ...rest } = props;
  const { appStateStore } = useStores();

  const timeString = "HH:mm";
  const modifiedTime = timeString.replace(/[^:]/g, "-");

  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="timePicker"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.time")
          : undefined
      }
      placeholder={placeholder ? placeholder : modifiedTime}
      format={format ? format : "HH:mm"}
      rules={rules ? rules : []}
      {...rest}
    />
  );
});

TotInput.TimeRangePicker = observer((props: Props.SiriusTimeProps) => {
  const { rules, placeholder, format, label, ...rest } = props;
  const timeString = "HH:mm";
  const modifiedTime = timeString.replace(/[^:]/g, "-");
  const { appStateStore } = useStores();

  return (
    <TotInput
      isDark={appStateStore.isDarkMode}
      type="timeRangePicker"
      label={
        label
          ? label
          : !label && !placeholder
          ? translate("common.time")
          : undefined
      }
      placeholder={placeholder ? placeholder : modifiedTime}
      format={format ? format : "HH:mm"}
      rules={rules ? rules : []}
      {...rest}
    />
  );
});

export default TotInput;
