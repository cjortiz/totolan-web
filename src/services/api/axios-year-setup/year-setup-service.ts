import {
  ApiResultModel,
  PaginatedResponseDto,
  TotError,
  TotResponse,
} from "../../../common";
import {
  GradeYearFilterData,
  GradeYearListInterface,
} from "../../../screens/yearsetup/data";
import { axiosInstance } from "../axios/axios-instance";

const fetchGradeYearList = (
  filterData: GradeYearFilterData
): Promise<ApiResultModel<PaginatedResponseDto<GradeYearListInterface[]>>> => {
  return axiosInstance
    .post(`/gradeYear/get-all`, filterData)
    .then((response) => {
      return response?.data;
    })
    .catch((error: TotError<TotResponse<GradeYearListInterface[]>>) => {
      throw error.response?.data;
    });
};

const addNewDetails = (
  value: GradeYearListInterface
): Promise<ApiResultModel<GradeYearListInterface>> => {
  return axiosInstance
    .post(`/gradeYear`, value)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<GradeYearListInterface>>) => {
      throw err.response?.data;
    });
};

const fetchById = (
  value: number
): Promise<ApiResultModel<GradeYearListInterface>> => {
  return axiosInstance
    .get(`/gradeYear/${value}`)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<GradeYearListInterface>>) => {
      throw err.response?.data;
    });
};

export const GradeYearApi = {
  fetchById,
  addNewDetails,
  fetchGradeYearList,
};
