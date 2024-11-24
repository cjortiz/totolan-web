import { jsx as _jsx } from "react/jsx-runtime";
import "./tot-pagination-style.css";
import "./tot-pagination-style-dark.css";
import { Pagination } from "antd";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../models";
import { getN } from "../../../../../utils/common-utils";
export const SiriusPagination = observer((props) => {
    const { size, total, pageSize, current, onChange, className } = props;
    const { appStateStore } = useStores();
    return (_jsx("div", { children: _jsx(Pagination, { size: size, total: total, showSizeChanger: getN(total) > 100, pageSizeOptions: [100, 50, 20], pageSize: pageSize, current: current, className: `tot-pagination ${appStateStore.isDarkMode ? "dark" : ""}`, onChange: onChange }) }));
});
