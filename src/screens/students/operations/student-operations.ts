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

export const fetchDataList = (
  filterData: StudentFilterData,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (
    data: PaginatedResponseDto<StudentTableListInterface[]>
  ) => void
) => {
  StudentApi.fetchStudentList(filterData)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData);
        setTableListData(response?.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setHideTable(false));
};

export const addNewStudent = (
  newStudent: StudentData,
  showMessage: ShowMessageInterface
) => {
  StudentApi.addNewStudent(newStudent)
    .then((response) => {
      if (response.isSuccess) {
        console.log(response.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage));
};

export const fetchStudentById = (
  form: FormInstance,
  id: number,
  showMessage: ShowMessageInterface,
  setViewMode: (args: ViewMode) => void,
  setStudentData: (arg: StudentData) => void
) => {
  StudentApi.fetchStudentById(id)
    .then((response) => {
      if (response.isSuccess) {
        response.resultData.birthDate = moment(response.resultData.birthDate);
        setStudentData(response.resultData);
        console.log(response.resultData);
        form.setFieldsValue(response.resultData);
        form.setFieldValue("idNumberDisplay", response.resultData.idNumber);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setViewMode(ViewMode.VIEW));
};
