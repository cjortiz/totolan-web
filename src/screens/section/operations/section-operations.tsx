import { FormInstance } from "antd";
import {
  MainActionType,
  PaginatedResponseDto,
  ShowMessageInterface,
  ViewMode,
} from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { SectionApi } from "../../../services/api/axios-section/sections-service";
import { SectionSetupFilterData, SectionSetupListInterface } from "../section";

export const fetchDataList = (
  filterData: SectionSetupFilterData,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (
    data: PaginatedResponseDto<SectionSetupListInterface[]>
  ) => void,
  setloading: (loading: boolean) => void
) => {
  setloading(true);
  SectionApi.fetchList(filterData)
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
  gradeYearData: SectionSetupListInterface,
  showMessage: ShowMessageInterface,
  setViewMode: (view: ViewMode) => void,
  setGradeYearData: (args: SectionSetupListInterface) => void,
  setLoading: (loading: boolean) => void,
  setActionType: (args: MainActionType) => void
) => {
  setLoading(true);
  SectionApi.addNewDetails(gradeYearData)
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
  setGradeYearData: (arg: SectionSetupListInterface) => void
) => {
  SectionApi.fetchById(id)
    .then((response) => {
      if (response.isSuccess) {
        setGradeYearData(response.resultData);
        form.setFieldsValue(response.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setViewMode(ViewMode.VIEW));
};
