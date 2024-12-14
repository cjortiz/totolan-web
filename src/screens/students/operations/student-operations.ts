import { FormInstance } from "antd";
import {
  DateFormat,
  PaginatedResponseDto,
  ShowMessageInterface,
  ViewMode,
} from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { StudentApi } from "../../../services/api/axios-students/students-services";
import { StudentFilterData } from "../students";
import { StudentData, StudentTableListInterface } from "../views";
import moment from "moment";
import { calculateAgeHandler } from "../functions/student-functions";

export const fetchDataList = (
  filterData: StudentFilterData,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (
    data: PaginatedResponseDto<StudentTableListInterface[]>
  ) => void,
  setloading: (loading: boolean) => void
) => {
  setloading(true);
  StudentApi.fetchStudentList(filterData)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData);
        setTableListData(response?.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setloading(false));
};

export const addNewStudent = (
  form: FormInstance,
  newStudent: StudentData,
  showMessage: ShowMessageInterface,
  setViewMode: (view: ViewMode) => void,
  setStudentData: (args: StudentData) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  StudentApi.addNewStudent(newStudent)
    .then((response) => {
      if (response.isSuccess) {
        setStudentData(response.resultData);
        response.resultData.birthDate = moment(response.resultData.birthDate);
        form.setFieldsValue(response.resultData);
        setViewMode(ViewMode.VIEW);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setLoading(false));
};

export const fetchStudentById = (
  form: FormInstance,
  id: number,
  showMessage: ShowMessageInterface,
  setViewMode: (args: ViewMode) => void,
  setStudentData: (arg: StudentData) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  StudentApi.fetchStudentById(id)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData.birthDate);
        response.resultData.birthDate = moment(response.resultData.birthDate);
        setStudentData(response.resultData);
        console.log(response.resultData);
        form.setFieldsValue(response.resultData);
        form.setFieldValue("idNumberDisplay", response.resultData.idNumber);
        setViewMode(ViewMode.VIEW);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setLoading(false));
};
