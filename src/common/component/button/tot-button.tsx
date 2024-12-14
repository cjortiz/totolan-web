import "./tot-button-style.css";
import "./tot-button-style-dark.css";

import { Button } from "antd";

import {
  getClassName,
  SiriusButtonCommonProps,
  SiriusButtonProps,
} from "./tot-button.props";
import { color } from "../../../theme";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { DEFAULT_ICON_SIZE } from "../../constants";
import { TotIcons } from "../../icons/tot-icon";
import { CloseOutlined } from "@ant-design/icons";

const SiriusButton = (props: SiriusButtonCommonProps) => {
  const {
    className,
    text,
    tx,
    children,
    type,
    padding,
    size,
    width,
    tabIndex,
    additionalClassname,
    ...buttonProps
  } = props;

  const paddingOverride = padding ? { padding: padding } : {};

  const i18nText = tx && translate(tx);
  const content = i18nText || text || children;
  const { appStateStore } = useStores();

  return (
    <Button
      tabIndex={tabIndex && tabIndex}
      type={type === "link" ? "link" : undefined}
      className={`${className ? className : getClassName(type)}${
        additionalClassname ? ` ${additionalClassname}` : ""
      } ${appStateStore.isDarkMode ? "dark" : ""}`}
      size={size ? size : "middle"}
      style={{ width: width ? width : "100%", ...paddingOverride }}
      {...buttonProps}
    >
      {content}
    </Button>
  );
};

SiriusButton.Primary = (props: SiriusButtonProps) => {
  return <SiriusButton {...props} />;
};

SiriusButton.Secondary = (props: SiriusButtonProps) => {
  return <SiriusButton type="secondary" {...props} />;
};

SiriusButton.Tertiary = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return <SiriusButton icon={icon && icon} type="tertiary" {...rest} />;
};

SiriusButton.Link = (props: SiriusButtonProps) => {
  return <SiriusButton type="link" {...props} />;
};

SiriusButton.IconPrimary = (props: SiriusButtonProps) => {
  return <SiriusButton type="add" className="tot-icon-primary" {...props} />;
};

SiriusButton.IconSecondary = (props: SiriusButtonProps) => {
  return <SiriusButton type="add" className="tot-icon-secondary" {...props} />;
};

SiriusButton.Save = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <SiriusButton.IconPrimary
      icon={
        <TotIcons.Save
          width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
          height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
          color={color.secondary01}
        />
      }
      padding="1.25rem"
      {...rest}
    ></SiriusButton.IconPrimary>
  );
};

SiriusButton.Add = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconPrimary
        icon={
          <TotIcons.Add
            width={iconWidth ? iconWidth : undefined}
            height={iconHeight ? iconWidth : undefined}
            color={color.secondary01}
          />
        }
        {...rest}
      />
    </div>
  );
};

SiriusButton.BACK = (props: SiriusButtonProps) => {
  const { icon, iconHeight, children, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconSecondary
        icon={
          <TotIcons.Back
            width={iconWidth ? iconWidth : undefined}
            height={iconHeight ? iconWidth : undefined}
            color={color.white}
          />
        }
        {...rest}
      >
        {children}
      </SiriusButton.IconSecondary>
    </div>
  );
};

SiriusButton.Refresh = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconPrimary
        icon={
          <TotIcons.Refresh
            width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
            height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
            color={color.secondary01}
          />
        }
        {...rest}
      />
    </div>
  );
};

SiriusButton.Menu = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <SiriusButton.IconSecondary
      icon={
        <TotIcons.Menu
          width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
          height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
          color={color.secondary02}
        />
      }
      {...rest}
    />
  );
};

SiriusButton.Edit = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconSecondary
        icon={
          <TotIcons.Edit
            width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
            height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
            color={color.secondary02}
          />
        }
        {...rest}
      />
    </div>
  );
};

SiriusButton.Delete = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconSecondary
        icon={
          <TotIcons.Delete
            width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
            height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
            color={color.secondary02}
          />
        }
        {...rest}
      />
    </div>
  );
};

SiriusButton.Close = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconSecondary
        icon={
          <TotIcons.Close
            width={iconWidth ? iconWidth : 24}
            height={iconHeight ? iconWidth : 24}
            color={color.secondary01}
          />
        }
        {...rest}
      />
    </div>
  );
};

SiriusButton.Options = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <SiriusButton.IconSecondary
      icon={
        <TotIcons.Options
          width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
          height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
          color={color.secondary02}
        />
      }
      {...rest}
    />
  );
};

SiriusButton.Batchselect = (props: SiriusButtonProps) => {
  const { icon, iconHeight, iconWidth, ...rest } = props;
  return (
    <div>
      <SiriusButton.IconSecondary
        icon={
          <TotIcons.Batchselect
            width={iconWidth ? iconWidth : DEFAULT_ICON_SIZE}
            height={iconHeight ? iconWidth : DEFAULT_ICON_SIZE}
            color={color.secondary02}
          />
        }
        {...rest}
      />
    </div>
  );
};

export default SiriusButton;
