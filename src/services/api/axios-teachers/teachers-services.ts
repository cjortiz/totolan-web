import {
  ApiResultModel,
  DropdownResponseDto,
  PaginatedResponseDto,
  TotError,
  TotResponse,
} from "../../../common";
import {
  TeacherData,
  TeacherFilterData,
  TeacherTableListInterface,
} from "../../../screens/teachers/data";
import { axiosInstance } from "../axios/axios-instance";

const fetchStudentList = (
  filterData: TeacherFilterData
): Promise<
  ApiResultModel<PaginatedResponseDto<TeacherTableListInterface[]>>
> => {
  return axiosInstance
    .post(`/teachers/get-all`, filterData)
    .then((response) => {
      return response?.data;
    })
    .catch((error: TotError<TotResponse<TeacherTableListInterface[]>>) => {
      throw error.response?.data;
    });
};

const fetchTeacherDropdown = (): Promise<
  ApiResultModel<PaginatedResponseDto<DropdownResponseDto[]>>
> => {
  return axiosInstance
    .post(`/teachers/drop-down`)
    .then((response) => {
      return response?.data;
    })
    .catch((error: TotError<TotResponse<DropdownResponseDto[]>>) => {
      throw error.response?.data;
    });
};

const addNewTeacher = (
  value: TeacherData
): Promise<ApiResultModel<TeacherData>> => {
  return axiosInstance
    .post(`/teachers`, value)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<TeacherData>>) => {
      throw err.response?.data;
    });
};

const fetchTeacherById = (
  value: number
): Promise<ApiResultModel<TeacherData>> => {
  return axiosInstance
    .get(`/teachers/${value}`)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<TeacherData>>) => {
      throw err.response?.data;
    });
};

export const TeachersApi = {
  addNewTeacher,
  fetchStudentList,
  fetchTeacherById,
  fetchTeacherDropdown,
};
