import { useState } from "react";
import {
  DEFAULT_DATA_LIST,
  MainActionType,
  MainLayout,
  PaginatedResponseDto,
  translate,
  ViewMode,
} from "../../common";
import { TotHeaderButtons } from "../../common/component/button";
import { GradeYearFilterData, GradeYearListInterface } from "./data";
import { GRADE_YEAR_DEF_FILTER } from "./functions";
import { GradeYearList } from "./views";
import { DEF_GRADE_YEAR_DATA } from "./constants";
import { observer } from "mobx-react-lite";

export const GradeYearSetup = observer(() => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [actionType, setActionType] = useState<MainActionType>(
    MainActionType.DEFAULT
  );
  const [filterData, setFilterData] = useState<GradeYearFilterData>(
    GRADE_YEAR_DEF_FILTER()
  );
  const [gradeYearData, setGradeYearData] =
    useState<GradeYearListInterface>(DEF_GRADE_YEAR_DATA);
  const [gradeYearList, setGradeYearList] =
    useState<PaginatedResponseDto<GradeYearListInterface[]>>(DEFAULT_DATA_LIST);

  return (
    <MainLayout
      buttons={TotHeaderButtons({
        viewMode: viewMode,
        onClickButtonType: setActionType,
      })}
      title={translate("year.title")}
    >
      <GradeYearList
        viewMode={viewMode}
        actionType={actionType}
        filterData={filterData}
        gradeYearList={gradeYearList}
        gradeYearData={gradeYearData}
        setViewMode={setViewMode}
        setFilterData={setFilterData}
        setActionType={setActionType}
        setGradeYearData={setGradeYearData}
        setGradeYearList={setGradeYearList}
      />
    </MainLayout>
  );
});
