import { useEffect, useState } from "react";
import {
  ViewMode,
  MainActionType,
  ListLayout,
  CommonTable,
  DetailsLayout,
  SearchBar,
  SearchFieldProps,
  SearchFieldType,
  translate,
  SiriusTypography,
  useStores,
} from "../../../common";
import { GraderYearListProps, GradeYearListInterface } from "../data";
import { commonPaginationChangeHandler, getS } from "../../../utils";
import { ColumnsType } from "antd/es/table";
import { color } from "../../../theme";
import { TotIcons } from "../../../common/icons/tot-icon";
import { GradeYearDetails } from "./year-setup-details";
import { fetchDataList } from "../operations";
import { observer } from "mobx-react-lite";

export const GradeYearList = observer((props: GraderYearListProps) => {
  const {
    viewMode,
    filterData,
    actionType,
    gradeYearData,
    gradeYearList,

    setViewMode,
    setFilterData,
    setActionType,
    setGradeYearData,
    setGradeYearList,
  } = props;
  const { messageStore, appStateStore, dropdownStore } = useStores();
  const { showMessage } = messageStore;
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    fetchListHandler();
  }, []);

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
      return translate("year.newTitle");
    }

    return gradeYearData?.subject;
  };

  const columns = (): ColumnsType<GradeYearListInterface> => {
    return [
      {
        title: translate("year.gradeLevel"),
        dataIndex: "gradeLevel",
        key: "gradeLevel",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) => (
          <SiriusTypography.BodyExtraSmall
            color={color.secondary01}
            onClick={() => {
              setSelectedId(record?.id);
            }}
          >
            Grade {record.gradeYear}
          </SiriusTypography.BodyExtraSmall>
        ),
      },
      {
        title: translate("year.subject"),
        dataIndex: "subject",
        key: "subject",
        sorter: true,
        showSorterTooltip: false,
      },
      {
        title: translate("year.instructor"),
        dataIndex: "teacherId",
        key: "teacherId",
        sorter: true,
        render: (val) => findTeacherStringName(val),
      },
    ];
  };

  const findTeacherStringName = (val: string) => {
    return dropdownStore.teacherDropdown.options.find(
      (obj) => getS(obj.value) === val
    )?.label;
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
        key: "teacherId",
        name: "teacherId",
        value: filterData.teacherId,
        type: SearchFieldType.Select,
        options: dropdownStore.teacherDropdown.options,
        label: translate("section.teacher"),
        width: "150px",
        style: { marginTop: -5 },
        size: "large",
        allowClear: true,
      },
    ];
  };

  const listColumns = () => {
    if (viewMode === ViewMode.VIEW) {
      return columns().filter(
        (pre) => pre.key === "gradeLevel" || pre.key === "subject"
      );
    }
    return columns();
  };

  const fetchListHandler = () => {
    fetchDataList(
      filterData,
      showMessage,
      () => {},
      setGradeYearList,
      appStateStore.setLoading
    );
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
          key={"idNum"}
          columns={listColumns()}
          viewMode={viewMode}
          dataSource={gradeYearList.content}
          totalSize={gradeYearList.totalSize}
          pageNumber={gradeYearList.pageNumber}
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
        <GradeYearDetails
          viewMode={viewMode}
          selectedId={selectedId}
          actionType={actionType}
          gradeYearData={gradeYearData}
          setViewMode={setViewMode}
          setSelectedId={setSelectedId}
          setActionType={setActionType}
          setGradeYearData={setGradeYearData}
        />
      </DetailsLayout>
    </>
  );
});
