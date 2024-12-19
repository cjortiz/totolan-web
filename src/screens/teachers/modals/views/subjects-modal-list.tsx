import { useState } from "react";
import {
  CommonTable,
  GENDER_OPTIONS,
  GRADE_YEAR_OPTIONS,
  ListLayout,
  PaginationDto,
  SearchBar,
  SearchFieldProps,
  SearchFieldType,
  SiriusTypography,
  translate,
  ViewMode,
} from "../../../../common";
import { TotIcons } from "../../../../common/icons/tot-icon";
import { SubjectModalFilterData } from "../subjects-modal";
import { ColumnsType } from "antd/es/table";
import { color } from "../../../../theme";
import { GradeYearListInterface } from "../../../yearsetup/data";

interface SubjectModalListProps {
  viewMode: ViewMode;
  filterData: SubjectModalFilterData;
  setViewMode: (args: ViewMode) => void;
  setFilterData: (args: SubjectModalFilterData) => void;
}

export const SubjectModalList = (props: SubjectModalListProps) => {
  const { viewMode, filterData, setViewMode, setFilterData } = props;

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
        // onPressEnter: () => fetchListHandler(),
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
        // onSelect: () => fetchListHandler(),
      },
    ];
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
            {record.gradeYear}
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
    ];
  };

  return (
    <div style={{ width: "100%", height: "80vh" }}>
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
          dataSource={[]}
          totalSize={0}
          pageNumber={0}
          pageSize={0}
        />
      </ListLayout>
    </div>
  );
};
