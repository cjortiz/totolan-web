import {
  ApiResultModel,
  PaginatedResponseDto,
  TotError,
  TotResponse,
} from "../../../common";
import {
  SectionSetupFilterData,
  SectionSetupListInterface,
} from "../../../screens";
import { axiosInstance } from "../axios/axios-instance";

const fetchList = (
  filterData: SectionSetupFilterData
): Promise<
  ApiResultModel<PaginatedResponseDto<SectionSetupListInterface[]>>
> => {
  return axiosInstance
    .post(`/section/get-all`, filterData)
    .then((response) => {
      return response?.data;
    })
    .catch((error: TotError<TotResponse<SectionSetupListInterface[]>>) => {
      throw error.response?.data;
    });
};

const addNewDetails = (
  value: SectionSetupListInterface
): Promise<ApiResultModel<SectionSetupListInterface>> => {
  return axiosInstance
    .post(`/section`, value)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<SectionSetupListInterface>>) => {
      throw err.response?.data;
    });
};

const fetchById = (
  value: number
): Promise<ApiResultModel<SectionSetupListInterface>> => {
  return axiosInstance
    .get(`/section/${value}`)
    .then((response) => {
      return response.data;
    })
    .catch((err: TotError<TotResponse<SectionSetupListInterface>>) => {
      throw err.response?.data;
    });
};

export const SectionApi = {
  fetchList,
  addNewDetails,
  fetchById,
};
