import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../models";
import { useEffect, useState } from "react";
import { color as SiriusColor } from "../../../../theme";
import { siriusTypographyStyle } from "./sirius-typography-functions";
import { FontSize } from "./sirius-typography-props";
const Heading1 = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Title, { level: 1, style: {
            ...siriusTypographyStyle({
                size: FontSize.Heading1,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const Heading2 = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Title, { level: 2, style: {
            ...siriusTypographyStyle({
                size: FontSize.Heading2,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const Heading3 = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Title, { level: 3, style: {
            ...siriusTypographyStyle({
                size: FontSize.Heading3,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const BodyLarge = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Text, { style: {
            ...siriusTypographyStyle({
                size: FontSize.BodyLarge,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const BodyMedium = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Text, { style: {
            ...siriusTypographyStyle({
                size: FontSize.BodyMedium,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const ButtonDefault = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Text, { style: {
            ...siriusTypographyStyle({
                size: FontSize.ButtonDefault,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const BodySmall = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Text, { style: {
            ...siriusTypographyStyle({
                size: FontSize.BodySmall,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
});
const BodyExtraSmall = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, hoverStyle, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    const defaultStyle = {
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
    return (_jsx(Typography.Text, { style: combinedStyle, onMouseEnter: hoverStyle &&
            (() => {
                setCombinedStyle({ ...defaultStyle, ...hoverStyle });
            }), onMouseLeave: hoverStyle &&
            (() => {
                setCombinedStyle({ ...defaultStyle });
            }), ...rest, children: children }));
});
const Caption = observer((props) => {
    const { children, color, fontWeight, letterSpacing, isShadow, style, darkColor, ...rest } = props;
    const { appStateStore } = useStores();
    const defaultColor = appStateStore.isDarkMode
        ? SiriusColor.white02
        : SiriusColor.black02;
    const colorSelected = () => {
        if (appStateStore.isDarkMode) {
            if (darkColor) {
                return darkColor;
            }
            else {
                return color;
            }
        }
        else {
            return color;
        }
    };
    return (_jsx(Typography.Text, { style: {
            ...siriusTypographyStyle({
                size: FontSize.Caption,
                color: color ? colorSelected() : defaultColor,
                fontWeight: fontWeight,
                letterSpacing: letterSpacing,
                isShadow: isShadow,
            }),
            ...style,
        }, ...rest, children: children }));
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
