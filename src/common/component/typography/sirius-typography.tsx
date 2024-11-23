import { Typography } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { color as SiriusColor } from "../../../theme";

import { siriusTypographyStyle } from "./sirius-typography-functions";
import { FontSize, SiriusTypographyProps } from "./sirius-typography-props";
import { useStores } from "../../models";

const Heading1 = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };
  return (
    <Typography.Title
      level={1}
      style={{
        ...siriusTypographyStyle({
          size: FontSize.Heading1,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Title>
  );
});

const Heading2 = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Title
      level={2}
      style={{
        ...siriusTypographyStyle({
          size: FontSize.Heading2,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Title>
  );
});

const Heading3 = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Title
      level={3}
      style={{
        ...siriusTypographyStyle({
          size: FontSize.Heading3,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Title>
  );
});

const BodyLarge = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;
  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Text
      style={{
        ...siriusTypographyStyle({
          size: FontSize.BodyLarge,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

const BodyMedium = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Text
      style={{
        ...siriusTypographyStyle({
          size: FontSize.BodyMedium,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

const ButtonDefault = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Text
      style={{
        ...siriusTypographyStyle({
          size: FontSize.ButtonDefault,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

const BodySmall = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  return (
    <Typography.Text
      style={{
        ...siriusTypographyStyle({
          size: FontSize.BodySmall,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

const BodyExtraSmall = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    hoverStyle,
    darkColor,
    ...rest
  } = props;

  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  const defaultStyle: React.CSSProperties = {
    ...siriusTypographyStyle({
      size: FontSize.BodyExtraSmall,
      color: color ? colorSelected() : defaultColor,
      fontWeight: fontWeight,
      letterSpacing: letterSpacing,
      isShadow: isShadow,
    }),
    ...style,
  };

  const [combinedStyle, setCombinedStyle] = useState({ ...defaultStyle });

  useEffect(() => {
    setCombinedStyle({ ...defaultStyle });
  }, [appStateStore.isDarkMode]);

  return (
    <Typography.Text
      style={combinedStyle}
      onMouseEnter={
        hoverStyle &&
        (() => {
          setCombinedStyle({ ...defaultStyle, ...hoverStyle });
        })
      }
      onMouseLeave={
        hoverStyle &&
        (() => {
          setCombinedStyle({ ...defaultStyle });
        })
      }
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

const Caption = observer((props: SiriusTypographyProps) => {
  const {
    children,
    color,
    fontWeight,
    letterSpacing,
    isShadow,
    style,
    darkColor,
    ...rest
  } = props;
  const { appStateStore } = useStores();

  const defaultColor: string = appStateStore.isDarkMode
    ? SiriusColor.white02
    : SiriusColor.black02;

  const colorSelected = () => {
    if (appStateStore.isDarkMode) {
      if (darkColor) {
        return darkColor;
      } else {
        return color;
      }
    } else {
      return color;
    }
  };
  return (
    <Typography.Text
      style={{
        ...siriusTypographyStyle({
          size: FontSize.Caption,
          color: color ? colorSelected() : defaultColor,
          fontWeight: fontWeight,
          letterSpacing: letterSpacing,
          isShadow: isShadow,
        }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography.Text>
  );
});

export const SiriusTypography = {
  Heading1,
  Heading2,
  Heading3,
  BodyLarge,
  BodyMedium,
  ButtonDefault,
  BodySmall,
  BodyExtraSmall,
  Caption,
};
