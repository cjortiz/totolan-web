import { ColumnsType } from "antd/es/table";
import {
  CommonTable,
  DetailsLayout,
  ListLayout,
  MainActionType,
  PaginatedResponseDto,
  SiriusTypography,
  translate,
  useStores,
  ViewMode,
} from "../../../common";
import { color } from "../../../theme";
import { useEffect, useState } from "react";
import {
  SearchBar,
  SearchFieldProps,
  SearchFieldType,
} from "../../../common/component/search-bar";
import { TotIcons } from "../../../common/icons/tot-icon";
import { StudentFilterData } from "../students";
import { fetchDataList } from "../operations/student-operations";
import { StudentDetails } from "./student-details";
import { Moment } from "moment";
import {
  commonPaginationChangeHandler,
  getS,
} from "../../../utils/common-utils";

interface StudentsListProps {
  viewMode: ViewMode;
  studentData: StudentData;
  actionType: MainActionType;
  filterData: StudentFilterData;
  studentList: PaginatedResponseDto<StudentTableListInterface[]>;
  setViewMode: (view: ViewMode) => void;
  setStudentData: (student: StudentData) => void;
  setActionType: (action: MainActionType) => void;
  setFilterData: (filter: StudentFilterData) => void;
  setStudentList: (
    list: PaginatedResponseDto<StudentTableListInterface[]>
  ) => void;
}

export interface StudentTableListInterface {
  id: number;
  idNumber: string;
  firstName: string;
  lastName: string;
  age: number;
  gradeYear: string;
  sex: string;
}

export interface StudentData {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  address: string;
  gender: string;
  age: number;
  birthDate: Moment;
  contactNum: string;
  mothersName: string;
  fathersName: string;
  idNumber: string;
  image: string | undefined;
  imageName: string | undefined;
  isUploaded: boolean;
}

export const StudentList = (props: StudentsListProps) => {
  const {
    viewMode,
    actionType,
    filterData,
    studentData,
    studentList,

    setViewMode,
    setActionType,
    setFilterData,
    setStudentData,
    setStudentList,
  } = props;

  const { messageStore } = useStores();
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
    fetchDataList(filterData, showMessage, () => {}, setStudentList);
  };

  const detailTitleHandler = (): string => {
    if (viewMode === ViewMode.ADD) {
      return translate("student.studentsNewTitle");
    }
    const middleInit = studentData?.middleName
      ? studentData.middleName.at(0)
      : "";
    const fullName =
      getS(studentData.firstName).concat(" ") +
      getS(middleInit).concat(". ") +
      getS(studentData.lastName);
    return fullName;
  };

  const columns = (): ColumnsType<StudentTableListInterface> => {
    return [
      {
        title: translate("student.tableTitles.idNumber"),
        dataIndex: "idNumber",
        key: "idNumber",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) => (
          <SiriusTypography.BodyExtraSmall
            color={color.secondary07}
            onClick={() => {
              setSelectedId(record?.id);
            }}
          >
            {record.idNumber}
          </SiriusTypography.BodyExtraSmall>
        ),
      },
      {
        title: translate("student.tableTitles.name"),
        dataIndex: "name",
        key: "name",
        sorter: true,
        showSorterTooltip: false,
        render: (_, record) =>
          `${record?.firstName?.concat(" ")?.concat(record?.lastName)}`,
      },
      {
        title: translate("student.tableTitles.age"),
        dataIndex: "age",
        key: "age",
        sorter: true,
      },
      {
        title: translate("student.tableTitles.gradeYear"),
        dataIndex: "gradeYear",
        key: "gradeYear",
        sorter: true,
      },
      {
        title: translate("student.tableTitles.sex"),
        dataIndex: "sex",
        key: "sex",
        sorter: true,
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

  return (
    <>
      <ListLayout
        searchBar={
          viewMode === ViewMode.LIST && (
            <SearchBar
              filter={filterData}
              setFilter={setFilterData}
              searchArea={searchArea()}
              searchPanel={searchArea()}
            />
          )
        }
        viewMode={viewMode}
      >
        <CommonTable
          key={"idNum"}
          columns={listColumns()}
          viewMode={viewMode}
          dataSource={studentList.content}
          totalSize={studentList.totalSize}
          pageNumber={studentList.pageNumber}
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
        <StudentDetails
          pageView={viewMode}
          actionType={actionType}
          studentData={studentData}
          setPageView={setViewMode}
          setActionType={setActionType}
          setStudentData={setStudentData}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </DetailsLayout>
    </>
  );
};
