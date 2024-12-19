import { observer } from "mobx-react-lite";
import {
  DEFAULT_DATA_LIST,
  MainActionType,
  MainLayout,
  PaginatedResponseDto,
  TotHeaderButtons,
  translate,
  ViewMode,
} from "../../common";
import { useState } from "react";
import { TEACHER_DEF_FILTER } from "./functions/teachers-functions";
import {
  TeacherData,
  TeacherFilterData,
  TeacherTableListInterface,
} from "./data";
import { DEF_TEACHER_DATA } from "./constants";
import { TeacherList } from "./views";

export const TeacherSetup = observer(() => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [filterData, setFilterData] = useState<TeacherFilterData>(
    TEACHER_DEF_FILTER()
  );
  const [actionType, setActionType] = useState<MainActionType>(
    MainActionType.DEFAULT
  );
  const [teacherData, setTeacherData] = useState<TeacherData>(DEF_TEACHER_DATA);
  const [teacherList, setTeacherList] =
    useState<PaginatedResponseDto<TeacherTableListInterface[]>>(
      DEFAULT_DATA_LIST
    );

  return (
    <MainLayout
      title={translate("teacher.listTitle")}
      buttons={TotHeaderButtons({
        viewMode: viewMode,
        onClickButtonType: setActionType,
      })}
    >
      <TeacherList
        viewMode={viewMode}
        teacherData={teacherData}
        actionType={actionType}
        filterData={filterData}
        teacherList={teacherList}
        setViewMode={setViewMode}
        setActionType={setActionType}
        setFilterData={setFilterData}
        setTeacherData={setTeacherData}
        setTeacherList={setTeacherList}
      />
    </MainLayout>
  );
});
