import {
  ApiResultModel,
  PaginatedResponseDto,
  TotError,
  TotResponse,
} from "../../../common";
import { StudentFilterData } from "../../../screens";
import {
  GradeFilterDto,
  GradeListInterface,
} from "../../../screens/students/modals";
import {
  StudentData,
  StudentTableListInterface,
} from "../../../screens/students/views";
import { axiosInstance } from "../axios/axios-instance";

const fetchStudentList = (
  filterData: StudentFilterData
): Promise<
  ApiResultModel<PaginatedResponseDto<StudentTableListInterface[]>>
> => {
  return axiosInstance
    .post(`/students/get-all`, filterData)
    .then((response) => {
      return response?.data;
    })
    .catch((error: TotError<TotResponse<StudentTableListInterface[]>>) => {
      throw error.response?.data;
    });
};

const addNewStudent = (
  value: StudentData
): Promise<ApiResultModel<StudentData>> => {
  return axiosInstance
    .post(`/students`, value)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<StudentData>>) => {
      throw err.response?.data;
    });
};

const fetchStudentById = (
  value: number
): Promise<ApiResultModel<StudentData>> => {
  return axiosInstance
    .get(`/students/${value}`)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<StudentData>>) => {
      throw err.response?.data;
    });
};

const fetchGrades = (
  filterData: GradeFilterDto
): Promise<ApiResultModel<GradeListInterface[]>> => {
  return axiosInstance
    .post(`/grades/get-all`, filterData)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<GradeListInterface[]>>) => {
      throw err.response?.data;
    });
};

const submitGrades = (
  gradesList: GradeListInterface[]
): Promise<ApiResultModel<GradeListInterface[]>> => {
  return axiosInstance
    .post(`/grades`, gradesList)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<GradeListInterface[]>>) => {
      throw err.response?.data;
    });
};

export const StudentApi = {
  fetchGrades,
  submitGrades,
  addNewStudent,
  fetchStudentById,
  fetchStudentList,
};
