import { jsx as _jsx } from "react/jsx-runtime";
import { EMPTY_STRING, ViewMode } from "../../../constants";
import { translate } from "../../../i18n";
import { SearchFieldType } from "../../search-bar";
import SiriusButton from "../tot-button";
export const TotFilterButton = (props) => {
    const { viewMode, iconView, onSubmit } = props;
    return {
        key: "submit",
        type: SearchFieldType.Button,
        button: (_jsx(SiriusButton.Tertiary, { width: iconView ? EMPTY_STRING : "9.063rem", hidden: viewMode === ViewMode.VIEW, onClick: onSubmit, children: iconView ? EMPTY_STRING : translate("common.search") })),
    };
};
