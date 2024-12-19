import { useEffect, useState } from "react";
import {
  DEFAULT_DATA_LIST,
  MainActionType,
  MainLayout,
  PaginatedResponseDto,
  PaginationDto,
  translate,
  useStores,
  ViewMode,
} from "../../common";
import { StudentData, StudentList, StudentTableListInterface } from "./views";
import { TotHeaderButtons } from "../../common/component/button";
import { STUDENT_DEF_FILTER } from "./functions/student-functions";
import { DEF_STUDENT_DATA } from "./constants";
import { observer } from "mobx-react-lite";

export interface StudentFilterData extends PaginationDto {
  searchString?: string;
  gradeYear?: number;
  section?: string;
  sex?: string;
}

export const Students = observer(() => {
  const { dropdownStore, messageStore, appStateStore } = useStores();

  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [filterData, setFilterData] = useState<StudentFilterData>(
    STUDENT_DEF_FILTER()
  );
  const [actionType, setActionType] = useState<MainActionType>(
    MainActionType.DEFAULT
  );
  const [studentData, setStudentData] = useState<StudentData>(DEF_STUDENT_DATA);
  const [studentList, setStudentList] =
    useState<PaginatedResponseDto<StudentTableListInterface[]>>(
      DEFAULT_DATA_LIST
    );

  useEffect(() => {
    dropdownStore.fetchDropdown({
      queryUrl: "/section",
      queryStore: "section-dropdown-store",
      onError: () =>
        messageStore.showMessage("error", "Teacher Dropdown fetch failed"),
      setLoading: appStateStore.setLoading,
    });
  }, []);

  return (
    <MainLayout
      buttons={TotHeaderButtons({
        viewMode: viewMode,
        onClickButtonType: setActionType,
      })}
      title={translate("student.studentListTitle")}
    >
      <StudentList
        setStudentList={setStudentList}
        setStudentData={setStudentData}
        setFilterData={setFilterData}
        setActionType={setActionType}
        setViewMode={setViewMode}
        studentList={studentList}
        studentData={studentData}
        actionType={actionType}
        filterData={filterData}
        viewMode={viewMode}
      />
    </MainLayout>
  );
});
