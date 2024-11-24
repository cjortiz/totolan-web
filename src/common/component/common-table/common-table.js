import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import "./common-table-style.css";
import "./common-table-style-dark.css";
import { Table } from "antd";
import { PAGE_SIZE } from "../../constants";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import { useState } from "react";
export const CommonTotTable = observer((props) => {
    const { hideTable, isLocalTable = false, customCursor = true } = props;
    const { appStateStore } = useStores();
    // LOCAL PAGE SIZE
    const [pageSize, setPageSize] = useState(PAGE_SIZE);
    return (_jsx(_Fragment, { children: _jsx("div", { hidden: hideTable, children: _jsx(Table, { ...props, className: `common-table ${customCursor ? "custom-cursor" : ""} ${appStateStore.isDarkMode ? "dark" : ""}`, pagination: isLocalTable
                    ? {
                        pageSize: pageSize,
                        onChange: (page, pageSize) => setPageSize(pageSize),
                        total: props.dataSource?.filter((item) => !item?.isDeleted)
                            .length,
                        className: `tot-pagination-modal ${appStateStore.isDarkMode ? "dark" : ""}`,
                    }
                    : props.pagination, children: props.children }) }) }));
});
