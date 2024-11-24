import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Style from "./list-layout-style";
import { TotCard } from "../../component";
import { ViewMode } from "../../constants";
export const ListLayout = (props) => {
    const { viewMode, children, searchBar } = props;
    const layoutStyle = () => {
        switch (viewMode) {
            case ViewMode.VIEW:
            case ViewMode.COPY:
                return Style.listLayoutViewMode;
            case ViewMode.ADD:
            case ViewMode.EDIT:
                return Style.listLayoutHiddenMode;
            default:
                return Style.listLayoutDefaultMode;
        }
    };
    return (_jsxs(TotCard, { style: layoutStyle(), children: [searchBar && (_jsx("div", { style: Style.listLayoutSearchBarPaddingBottom, children: searchBar })), children] }));
};
