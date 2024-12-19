import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import {
  CommonTable,
  DetailsLayout,
  GENDER_OPTIONS,
  GRADE_YEAR_OPTIONS,
  ListLayout,
  MainActionType,
  SearchBar,
  SearchFieldProps,
  SearchFieldType,
  SiriusTypography,
  translate,
  useStores,
  ViewMode,
} from "../../../common";
import {
  TeacherData,
  TeacherListProps,
  TeacherTableListInterface,
} from "../data";
import { TotIcons } from "../../../common/icons/tot-icon";
import { commonPaginationChangeHandler, getN, getS } from "../../../utils";
import { ColumnsType } from "antd/es/table";
import { color } from "../../../theme";
import { fetchDataList } from "../operations";
import { TeacherDetails } from "./teachers-details";

export const TeacherList = observer((props: TeacherListProps) => {
  const {
    viewMode,
    actionType,
    filterData,
    teacherData,
    teacherList,
    setViewMode,
    setActionType,
    setFilterData,
    setTeacherData,
    setTeacherList,
  } = props;
  const { messageStore, appStateStore } = useStores();
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

  const fetchListHandler = () => {
    fetchDataList(
      filterData,
      showMessage,
      () => {},
      setTeacherList,
      appStateStore.setLoading
    );
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
      {
        key: "sex",
        name: "sex",
        value: filterData.sex,
        label: translate("student.details.gender"),
        type: SearchFieldType.Select,
        options: GENDER_OPTIONS,
        width: "150px",
        style: { marginTop: -5 },
        size: "large",
        allowClear: true,
        onSelect: () => fetchListHandler(),
      },
    ];
  };

  const columns = (): ColumnsType<TeacherTableListInterface> => {
    return [
      {
        title: translate("student.tableTitles.idNumber"),
        dataIndex: "idNumber",
        key: "idNumber",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) => (
          <SiriusTypography.BodyExtraSmall
            color={color.secondary01}
            onClick={() => {
              setSelectedId(record?.id);
            }}
          >
            {record.idNumber}
          </SiriusTypography.BodyExtraSmall>
        ),
      },
      {
        title: translate("teacher.teacherName"),
        dataIndex: "name",
        key: "name",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) =>
          `${record?.firstName?.concat(" ")?.concat(record?.lastName)}`,
      },
      {
        title: translate("student.tableTitles.sex"),
        dataIndex: "sex",
        key: "sex",
        sorter: true,
        render: (val) => GENDER_OPTIONS[getN(val)]?.label,
      },
    ];
  };

  const listColumns = () => {
    if (viewMode === ViewMode.VIEW) {
      return columns().filter(
        (pre) => pre.key === "idNumber" || pre.key === "name"
      );
    }
    return columns();
  };

  const detailTitleHandler = (): string => {
    if (viewMode === ViewMode.ADD) {
      return translate("student.studentsNewTitle");
    }
    const middleInit = teacherData?.middleName
      ? teacherData.middleName.at(0)
      : "";
    const fullName =
      getS(teacherData.firstName).concat(" ") +
      getS(middleInit).concat(". ") +
      getS(teacherData.lastName);
    return fullName;
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
          dataSource={teacherList.content}
          totalSize={teacherList.totalSize}
          pageNumber={teacherList.pageNumber}
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
        <TeacherDetails
          pageView={viewMode}
          selectedId={selectedId}
          teacherData={teacherData}
          actionType={actionType}
          setPageView={setViewMode}
          setActionType={setActionType}
          setSelectedId={setSelectedId}
          setTeacherData={setTeacherData}
        />
      </DetailsLayout>
    </>
  );
});
