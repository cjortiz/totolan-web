import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./styles/table-style-dark.css";
import "./styles/table-style.css";
import { Space } from "antd";
import { DateFormat, ViewMode } from "../../constants";
import { observer } from "mobx-react-lite";
import { SummaryDetails } from "./components";
import { SiriusPagination } from "./components/totpagination";
import { tableWrapper, footerWrapper, noRecord, paginationStyle, summaryStyle, exportButtonStyle, } from "./styles/table.style";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { CommonTotTable } from "../common-table";
import moment from "moment";
export const CommonTable = observer((props) => {
    const { size, scroll, rowKey, columns, pageSize, viewMode, totalSize, pageNumber, dataSource, expandable, showSummary, totalSummary, titleSummary, isTableHidden, summaryContent, showPagination, hideSummaryModal, customRowClassName, onRow, onSort, onPaginationChange, } = props;
    const { appStateStore } = useStores();
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: tableWrapper, hidden: isTableHidden || dataSource?.length === 0, children: _jsx(CommonTotTable, { showSorterTooltip: false, size: size ? size : "small", rowKey: rowKey, columns: columns, dataSource: dataSource, className: "common-table", scroll: scroll ? scroll : { y: "calc(90vh - 275px)" }, rowClassName: customRowClassName, expandable: expandable, pagination: false, onRow: onRow, onChange: onSort }) }), dataSource && dataSource.length !== 0 && (_jsxs("div", { style: footerWrapper, className: `tot-footer ${appStateStore.isDarkMode ? "dark" : ""}`, children: [viewMode !== ViewMode.VIEW && (_jsx("div", { className: "tot-footer-text", style: summaryStyle, children: showSummary ? (_jsx(SummaryDetails, { title: titleSummary, value: totalSummary, content: summaryContent, hideModal: hideSummaryModal })) : (`Showing ${(pageNumber - 1) * pageSize + 1} to ${Math.min(pageNumber * pageSize, totalSize)} of ${totalSize} entries`) })), showPagination === undefined ? (_jsx("div", { style: paginationStyle, children: _jsx(Space, { direction: "horizontal", children: _jsx(SiriusPagination, { size: "default", total: totalSize, pageSize: pageSize, current: pageNumber, onChange: onPaginationChange }) }) })) : undefined, viewMode !== ViewMode.VIEW && (_jsx("div", { style: exportButtonStyle, children: moment().format(DateFormat.YYYYMMDD_SLASH) }))] })), _jsx("div", { hidden: !(!isTableHidden && dataSource?.length === 0), children: _jsx("h2", { style: noRecord, children: translate("common.noRecordFound") }) })] }));
});
