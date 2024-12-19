import { FormInstance } from "antd";
import {
  MainActionType,
  PaginatedResponseDto,
  ShowMessageInterface,
  ViewMode,
} from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { TeachersApi } from "../../../services/api";
import {
  TeacherData,
  TeacherFilterData,
  TeacherTableListInterface,
} from "../data";
import moment from "moment";

export const fetchDataList = (
  filterData: TeacherFilterData,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (
    data: PaginatedResponseDto<TeacherTableListInterface[]>
  ) => void,
  setloading: (loading: boolean) => void
) => {
  setloading(true);
  TeachersApi.fetchStudentList(filterData)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData);
        setTableListData(response?.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setloading(false));
};

export const addNewTeacher = (
  form: FormInstance,
  newTeacher: TeacherData,
  showMessage: ShowMessageInterface,
  setViewMode: (view: ViewMode) => void,
  setStudentData: (args: TeacherData) => void,
  setLoading: (loading: boolean) => void,
  setActionType: (args: MainActionType) => void
) => {
  setLoading(true);
  TeachersApi.addNewTeacher(newTeacher)
    .then((response) => {
      if (response.isSuccess) {
        setStudentData(response.resultData);
        response.resultData.birthDate = moment(response.resultData.birthDate);
        form.setFieldsValue(response.resultData);
        setActionType(MainActionType.REFRESH);
        setViewMode(ViewMode.VIEW);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setLoading(false));
};

export const fetchTeacherById = (
  form: FormInstance,
  id: number,
  showMessage: ShowMessageInterface,
  setViewMode: (args: ViewMode) => void,
  setStudentData: (arg: TeacherData) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  TeachersApi.fetchTeacherById(id)
    .then((response) => {
      if (response.isSuccess) {
        response.resultData.birthDate = moment(response.resultData.birthDate);
        setStudentData(response.resultData);
        form.setFieldsValue(response.resultData);
        form.setFieldValue("idNumberDisplay", response.resultData.idNumber);
        setViewMode(ViewMode.VIEW);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setLoading(false));
};
