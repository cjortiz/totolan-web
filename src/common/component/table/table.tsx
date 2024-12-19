import "./styles/table-style-dark.css";
import "./styles/table-style.css";

import { Space } from "antd";
import { DateFormat, ViewMode } from "../../constants";
import { observer } from "mobx-react-lite";

import { SummaryDetails } from "./components";
import { SiriusPagination } from "./components/totpagination";
import { TablePropertyProps } from "./props";
import {
  tableWrapper,
  footerWrapper,
  noRecord,
  paginationStyle,
  summaryStyle,
  exportButtonStyle,
} from "./styles/table.style";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { CommonTotTable } from "../common-table";
import moment from "moment";

export const CommonTable = observer(
  <T extends Record<string, any>>(props: TablePropertyProps<T>) => {
    const {
      size,
      scroll,
      rowKey,
      columns,
      pageSize,
      viewMode,
      totalSize,
      hideCount,
      pageNumber,
      dataSource,
      expandable,
      showSummary,
      totalSummary,
      titleSummary,
      isTableHidden,
      summaryContent,
      showPagination,
      hideSummaryModal,
      customRowClassName,

      onRow,
      onSort,
      onPaginationChange,
    } = props;

    const { appStateStore } = useStores();

    return (
      <>
        <div
          style={tableWrapper}
          hidden={isTableHidden || dataSource?.length === 0}
        >
          <CommonTotTable
            showSorterTooltip={false}
            size={size ? size : "small"}
            rowKey={rowKey}
            columns={columns}
            dataSource={dataSource}
            className="common-table"
            scroll={scroll ? scroll : { y: "calc(90vh - 275px)" }}
            rowClassName={customRowClassName}
            expandable={expandable}
            pagination={false}
            onRow={onRow}
            onChange={onSort}
          />
        </div>
        {dataSource && dataSource.length !== 0 && !hideCount && (
          <div
            style={footerWrapper}
            className={`tot-footer ${appStateStore.isDarkMode ? "dark" : ""}`}
          >
            {viewMode !== ViewMode.VIEW && (
              <div className="tot-footer-text" style={summaryStyle}>
                {showSummary ? (
                  <SummaryDetails
                    title={titleSummary}
                    value={totalSummary}
                    content={summaryContent}
                    hideModal={hideSummaryModal}
                  />
                ) : (
                  `Showing ${(pageNumber - 1) * pageSize + 1} to ${Math.min(
                    pageNumber * pageSize,
                    totalSize
                  )} of ${totalSize} entries`
                )}
              </div>
            )}
            {showPagination === undefined ? (
              <div style={paginationStyle}>
                <Space direction="horizontal">
                  <SiriusPagination
                    size="default"
                    total={totalSize}
                    pageSize={pageSize}
                    current={pageNumber}
                    onChange={onPaginationChange}
                  />
                </Space>
              </div>
            ) : undefined}
            {viewMode !== ViewMode.VIEW && (
              <div style={exportButtonStyle}>
                {moment().format(DateFormat.YYYYMMDD_SLASH)}
              </div>
            )}
          </div>
        )}
        <div hidden={!(!isTableHidden && dataSource?.length === 0)}>
          <h2 style={noRecord}>{translate("common.noRecordFound")}</h2>
        </div>
      </>
    );
  }
);
