import { ColumnsType } from "antd/es/table";
import {
  ListLayout,
  ViewMode,
  SearchBar,
  CommonTable,
  DetailsLayout,
  SiriusTypography,
  translate,
  useStores,
  SearchFieldProps,
  SearchFieldType,
  GRADE_YEAR_OPTIONS,
  MainActionType,
  PaginatedResponseDto,
} from "../../../common";
import { color } from "../../../theme";
import { commonPaginationChangeHandler } from "../../../utils";
import { useEffect, useState } from "react";
import { TotIcons } from "../../../common/icons/tot-icon";
import { SectionSetupFilterData, SectionSetupListInterface } from "../section";
import { SectionSetupDetails } from "./section-details";
import { fetchDataList } from "../operations";
import { observer } from "mobx-react-lite";

interface SectionSetupListProps {
  viewMode: ViewMode;
  actionType: MainActionType;
  filterData: SectionSetupFilterData;
  sectionData: SectionSetupListInterface;
  sectionList: PaginatedResponseDto<SectionSetupListInterface[]>;
  setSectionData: (student: SectionSetupListInterface) => void;
  setViewMode: (args: ViewMode) => void;
  setActionType: (action: MainActionType) => void;
  setFilterData: (filter: SectionSetupFilterData) => void;
  setSectionList: (
    list: PaginatedResponseDto<SectionSetupListInterface[]>
  ) => void;
}

export const SectionSetupList = observer((props: SectionSetupListProps) => {
  const {
    viewMode,
    filterData,
    actionType,
    sectionData,
    sectionList,

    setViewMode,
    setFilterData,
    setActionType,
    setSectionData,
    setSectionList,
  } = props;
  const { messageStore, appStateStore } = useStores();
  const { showMessage } = messageStore;
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    switch (actionType) {
      case MainActionType.GET_ALL:
      case MainActionType.REFRESH:
        fetchListHandler();
        break;
      case MainActionType.ADD:
        setViewMode(ViewMode.ADD);
        break;
      default:
        break;
    }
    setActionType(MainActionType.DEFAULT);
  }, [actionType]);

  const detailTitleHandler = (): string => {
    if (viewMode === ViewMode.ADD) {
      return translate("section.addTitle");
    }

    return sectionData?.sectionName;
  };

  const fetchListHandler = () => {
    fetchDataList(
      filterData,
      showMessage,
      () => {},
      setSectionList,
      appStateStore.setLoading
    );
  };

  const columns = (): ColumnsType<SectionSetupListInterface> => {
    return [
      {
        title: translate("section.sectionName"),
        dataIndex: "sectionName",
        key: "sectionName",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) => (
          <SiriusTypography.BodyExtraSmall
            color={color.secondary01}
            onClick={() => {
              setSelectedId(record?.id);
            }}
          >
            {record?.sectionName}
          </SiriusTypography.BodyExtraSmall>
        ),
      },
      {
        title: translate("section.gradeYear"),
        dataIndex: "gradeYear",
        key: "gradeYear",
        sorter: true,
        showSorterTooltip: false,
        render: (val) => `Grade ${val}`,
      },
      {
        title: translate("section.teacher"),
        dataIndex: "adviserId",
        key: "adviserId",
        sorter: true,
        showSorterTooltip: false,
      },
    ];
  };

  const searchArea = (): SearchFieldProps[] => {
    return [
      {
        key: "searchString",
        name: "searchString",
        type: SearchFieldType.Text,
        prefix: <TotIcons.Search />,
        placeholder: "Search",
        size: "large",
        allowClear: true,
        onPressEnter: () => fetchListHandler(),
      },
      {
        key: "gradeYear",
        name: "gradeYear",
        value: filterData.gradeYear,
        type: SearchFieldType.Select,
        options: GRADE_YEAR_OPTIONS,
        label: translate("section.gradeYear"),
        width: "150px",
        style: { marginTop: -5 },
        size: "large",
        allowClear: true,
        onSelect: () => fetchListHandler(),
      },
    ];
  };

  const listColumns = () => {
    if (viewMode === ViewMode.VIEW) {
      return columns().filter(
        (pre) => pre.key === "sectionName" || pre.key === "gradeYear"
      );
    }
    return columns();
  };

  return (
    <>
      <ListLayout
        searchBar={
          viewMode === ViewMode.LIST && (
            <SearchBar
              filter={filterData}
              setFilter={setFilterData}
              searchArea={searchArea()}
              searchPanel={[]}
            />
          )
        }
        viewMode={viewMode}
      >
        <CommonTable
          key={"id"}
          columns={listColumns()}
          viewMode={viewMode}
          dataSource={sectionList.content}
          totalSize={sectionList.totalSize}
          pageNumber={sectionList.pageNumber}
          pageSize={filterData.pageSize}
          onPaginationChange={(page: number, pageSize: number) =>
            commonPaginationChangeHandler(
              page,
              pageSize,
              filterData,
              fetchListHandler
            )
          }
        />
      </ListLayout>
      <DetailsLayout
        showHeader={true}
        title={detailTitleHandler()}
        viewMode={viewMode}
      >
        <SectionSetupDetails
          viewMode={viewMode}
          actionType={actionType}
          selectedId={selectedId}
          sectionData={sectionData}
          setViewMode={setViewMode}
          setSelectedId={setSelectedId}
          setActionType={setActionType}
          setSectionData={setSectionData}
        />
      </DetailsLayout>
    </>
  );
});
