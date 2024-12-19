import {
  ShowMessageInterface,
  PaginatedResponseDto,
  ViewMode,
  MainActionType,
} from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { GradeYearApi } from "../../../services/api/axios-year-setup/year-setup-service";
import { GradeYearFilterData, GradeYearListInterface } from "../data";
import { FormInstance } from "antd";

export const fetchDataList = (
  filterData: GradeYearFilterData,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (
    data: PaginatedResponseDto<GradeYearListInterface[]>
  ) => void,
  setloading: (loading: boolean) => void
) => {
  setloading(true);
  GradeYearApi.fetchGradeYearList(filterData)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData);
        setTableListData(response?.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setloading(false));
};

export const addNewData = (
  form: FormInstance,
  gradeYearData: GradeYearListInterface,
  showMessage: ShowMessageInterface,
  setViewMode: (view: ViewMode) => void,
  setGradeYearData: (args: GradeYearListInterface) => void,
  setLoading: (loading: boolean) => void,
  setActionType: (args: MainActionType) => void
) => {
  setLoading(true);
  GradeYearApi.addNewDetails(gradeYearData)
    .then((response) => {
      if (response.isSuccess) {
        setGradeYearData(response.resultData);
        form.setFieldsValue(response.resultData);
        setActionType(MainActionType.REFRESH);
        setViewMode(ViewMode.VIEW);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setLoading(false));
};

export const fetchDataById = (
  form: FormInstance,
  id: number,
  showMessage: ShowMessageInterface,
  setViewMode: (args: ViewMode) => void,
  setGradeYearData: (arg: GradeYearListInterface) => void
) => {
  GradeYearApi.fetchById(id)
    .then((response) => {
      if (response.isSuccess) {
        setGradeYearData(response.resultData);
        form.setFieldsValue(response.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setViewMode(ViewMode.VIEW));
};
