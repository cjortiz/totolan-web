import {
  ViewMode,
  MainActionType,
  PaginationDto,
  PaginatedResponseDto,
} from "../../../common";

export interface GraderYearListProps {
  viewMode: ViewMode;
  actionType: MainActionType;
  filterData: GradeYearFilterData;
  gradeYearData: GradeYearListInterface;
  gradeYearList: PaginatedResponseDto<GradeYearListInterface[]>;

  setViewMode: (view: ViewMode) => void;
  setActionType: (action: MainActionType) => void;
  setGradeYearData: (args: GradeYearListInterface) => void;
  setFilterData: (filter: GradeYearFilterData) => void;
  setGradeYearList: (
    list: PaginatedResponseDto<GradeYearListInterface[]>
  ) => void;
}

export interface GradeYearDetailsProps {
  viewMode: ViewMode;
  actionType: MainActionType;
  selectedId: number | undefined;
  gradeYearData: GradeYearListInterface;

  setViewMode: (view: ViewMode) => void;
  setSelectedId: (selectedId: number) => void;
  setActionType: (action: MainActionType) => void;
  setGradeYearData: (args: GradeYearListInterface) => void;
}

export interface GradeYearFilterData extends PaginationDto {
  searchString?: string;
  teacherId?: string;
}

export interface GradeYearListInterface {
  id: number;
  gradeYear: string;
  subject: string;
  teacherId: string;
}
