import "./common-table-style.css";
import "./common-table-style-dark.css";

import { Table, TableProps } from "antd";
import { PAGE_SIZE } from "../../constants";
import { observer } from "mobx-react-lite";
import { useStores } from "../../models";
import { useState } from "react";

interface CommonTableProps<T> extends TableProps<T> {
  hideTable?: boolean;
  customCursor?: boolean;
  isLocalTable?: boolean;
}

export const CommonTotTable = observer(
  <T extends Record<string, any>>(props: CommonTableProps<T>) => {
    const { hideTable, isLocalTable = false, customCursor = true } = props;
    const { appStateStore } = useStores();

    // LOCAL PAGE SIZE
    const [pageSize, setPageSize] = useState<number>(PAGE_SIZE);

    return (
      <>
        <div hidden={hideTable}>
          <Table
            {...props}
            className={`common-table ${customCursor ? "custom-cursor" : ""} ${
              appStateStore.isDarkMode ? "dark" : ""
            }`}
            pagination={
              isLocalTable
                ? {
                    pageSize: pageSize,
                    onChange: (page: number, pageSize: number) =>
                      setPageSize(pageSize),
                    total: props.dataSource?.filter((item) => !item?.isDeleted)
                      .length,
                    className: `tot-pagination-modal ${
                      appStateStore.isDarkMode ? "dark" : ""
                    }`,
                  }
                : props.pagination
            }
          >
            {props.children}
          </Table>
        </div>
      </>
    );
  }
);
