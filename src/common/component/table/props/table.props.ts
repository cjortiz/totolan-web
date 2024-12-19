import { TableProps } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import {
  ColumnsType,
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
  TablePaginationConfig,
} from "antd/lib/table/interface";
import { ViewMode } from "../../../constants";

export interface TablePropertyProps<T> extends TableProps<T> {
  dataSource: T[];
  size?: SizeType;
  totalSize: number;
  pageNumber: number;
  pageSize: number;
  isTableHidden?: boolean;
  viewMode?: ViewMode;
  totalSummary?: number | string;
  showSummary?: boolean;
  titleSummary?: string;
  showExportButton?: boolean;
  showExportTotalRow?: boolean;
  onSalesHistory?: boolean;
  emailSubjectTitle?: string;
  emailServiceType?: string;
  emailRequestMapping?: string;
  columnKeyToInsertTotalLabel?: string;
  exportScreenTitle?: string;
  exportColumn?: ColumnsType<T>;
  uniqueTableColumns?: ColumnsType<T>;
  customRowClassName?: any;
  summaryContent?: React.ReactNode;
  additionalButton?: React.ReactNode;
  onSort?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra: TableCurrentDataSource<T>
  ) => void;
  onExportTableData?: () => Promise<ExportData<T>>;
  onPaginationChange?: ((page: number, pageSize: number) => void) | undefined;
  showSubTotalRow?: boolean;
  summaryColumns?: { header: string; dataKey: string }[];
  showSummaryTable?: boolean;
  summaryData?: () => Promise<ExportSummaryDataProps[]>;
  hideExportExcel?: boolean;
  hideExportPDF?: boolean;
  hideExportCSV?: boolean;
  hideExportEmail?: boolean;
  hideSummaryModal?: boolean;
  showPagination?: boolean;
  /**
   * @deprecated This property will be removed in the future. Do not use it.
   */
  rowValue?: (row: number) => void;
  halignColumns?: string[];
  hideCount?: boolean;
}

export interface SummaryProps {
  title?: string;
  value?: number | string;
  content?: React.ReactNode;
  hideModal?: boolean;
}

export interface ExportButtonProps<T> {
  screenTitle?: string;
  onSalesHistory?: boolean;
  columns: ColumnsType<T>;
  uniqueTableColumns?: ColumnsType<T>;
  onExportTableData?: () => Promise<ExportData<T>>;
  moreButtonContent?: React.ReactNode;
  showTotalRow?: boolean;
  showSubTotalRow?: boolean;
  columnKeyToInsertTotalLabel?: string;
  summaryColumns?: { header: string; dataKey: string }[];
  showSummaryTable?: boolean;
  emailSubjectTitle?: string;
  emailServiceType?: string;
  emailRequestMapping?: string;
  summaryData?: () => Promise<ExportSummaryDataProps[]>;
  hideExportExcel?: boolean;
  hideExportPDF?: boolean;
  hideExportCSV?: boolean;
  hideExportEmail?: boolean;
  hideEmail?: boolean;
  hideCsv?: boolean;
  isPriceProof?: boolean;
  halignColumns?: string[];
}

export interface ExportData<T> {
  resultData: T[];
  filterParam: string;
  totalRowData?: object;
}

export interface ExportSummaryDataProps {
  dataKey: string | number;
  title: string;
  count: number;
  total: number | string;
}
