import { useEffect, useState } from "react";
import {
  ViewMode,
  MainActionType,
  MainLayout,
  TotHeaderButtons,
  translate,
  PaginatedResponseDto,
  DEFAULT_DATA_LIST,
  PaginationDto,
  useStores,
} from "../../common";
import { SECTION_DEF_FILTER } from "./functions";
import { SectionSetupList } from "./views";
import { observer } from "mobx-react-lite";

export interface SectionSetupListInterface {
  id: number;
  gradeYear: string;
  sectionName: string;
  adviserId: string;
}

export interface SectionSetupFilterData extends PaginationDto {
  searchString?: string;
  gradeYear?: string;
}

export const DEFAULT_DATA: SectionSetupListInterface = {
  id: undefined,
  gradeYear: "",
  sectionName: "",
  adviserId: undefined,
};

export const SectionSetup = observer(() => {
  const { dropdownStore, messageStore, appStateStore } = useStores();
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [actionType, setActionType] = useState<MainActionType>(
    MainActionType.DEFAULT
  );
  const [filterData, setFilterData] = useState<SectionSetupFilterData>(
    SECTION_DEF_FILTER()
  );

  const [sectionData, setSectionData] =
    useState<SectionSetupListInterface>(DEFAULT_DATA);

  const [sectionList, setSectionList] =
    useState<PaginatedResponseDto<SectionSetupListInterface[]>>(
      DEFAULT_DATA_LIST
    );

  useEffect(() => {
    dropdownStore.fetchDropdown({
      queryUrl: "/teachers",
      queryStore: "teacher-dropdown-store",
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
      title={translate("section.title")}
    >
      <SectionSetupList
        viewMode={viewMode}
        actionType={actionType}
        filterData={filterData}
        sectionData={sectionData}
        sectionList={sectionList}
        setViewMode={setViewMode}
        setActionType={setActionType}
        setFilterData={setFilterData}
        setSectionData={setSectionData}
        setSectionList={setSectionList}
      />
    </MainLayout>
  );
});
