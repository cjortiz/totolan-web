import { Moment } from "moment";
import {
  MainActionType,
  PaginatedResponseDto,
  PaginationDto,
  ViewMode,
} from "../../../common";

export interface TeacherData {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  address: string;
  gender: string;
  birthDate: Moment;
  email: string;
  contactNumber: string;
  mothersName: string;
  fathersName: string;
  idNumber: string;
  image: string | undefined;
  imageName: string | undefined;
  isUploaded: boolean;
}
export interface TeacherFilterData extends PaginationDto {
  searchString?: string;
  gradeYear?: number;
  sex?: string;
}

export interface TeacherTableListInterface {
  id: number;
  idNumber: string;
  firstName: string;
  lastName: string;
  gradeYear: string;
  sex: string;
}

export interface TeacherListProps {
  viewMode: ViewMode;
  teacherData: TeacherData;
  actionType: MainActionType;
  filterData: TeacherFilterData;
  teacherList: PaginatedResponseDto<TeacherTableListInterface[]>;
  setViewMode: (view: ViewMode) => void;
  setTeacherData: (student: TeacherData) => void;
  setActionType: (action: MainActionType) => void;
  setFilterData: (filter: TeacherFilterData) => void;
  setTeacherList: (
    list: PaginatedResponseDto<TeacherTableListInterface[]>
  ) => void;
}

export interface TeacherDetailsProps {
  pageView: ViewMode;
  selectedId: number | undefined;
  teacherData: TeacherData;
  actionType: MainActionType;
  setPageView: (viewMode: ViewMode) => void;
  setSelectedId: (selectedId: number) => void;
  setTeacherData: (student: TeacherData) => void;
  setActionType: (actionType: MainActionType) => void;
}
