import { jsx as _jsx } from "react/jsx-runtime";
import { Divider } from "antd";
import { SearchFieldType } from "./search-bar.props";
import { SearchField } from "./search-field";
export const SearchPanelField = (props) => {
    if (props.type === SearchFieldType.Divider) {
        return _jsx(Divider, {});
    }
    return _jsx(SearchField, { ...props });
};
