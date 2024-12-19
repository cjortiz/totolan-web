import { FormInstance } from "antd";
import {
  DateFormat,
  EMPTY_STRING,
  MainActionType,
  PaginatedResponseDto,
  ShowMessageInterface,
  ViewMode,
} from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { StudentApi } from "../../../services/api/axios-students/students-services";
import { StudentFilterData } from "../students";
import { StudentData, StudentTableListInterface } from "../views";
import moment from "moment";
import { GradeListInterface } from "../modals";

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
  setLoading: (loading: boolean) => void,
  setActionType: (args: MainActionType) => void
) => {
  setLoading(true);
  StudentApi.addNewStudent(newStudent)
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

export const fetchGrades = (
  studentId: number,
  showMessage: ShowMessageInterface,
  setHideTable: (hidden: boolean) => void,
  setTableListData: (data: GradeListInterface[]) => void,
  setloading: (loading: boolean) => void
) => {
  const filterData = { studentId: studentId };
  setloading(true);
  StudentApi.fetchGrades(filterData)
    .then((response) => {
      if (response.isSuccess) {
        setTableListData(response?.resultData);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => setloading(false));
};

export const submitGrades = (
  gradesList: GradeListInterface[],
  showMessage: ShowMessageInterface,
  setLoading: (loading: boolean) => void,
  closeModal: (args: boolean) => void,
  setEditKeyString: (args: string) => void
) => {
  setLoading(true);
  StudentApi.submitGrades(gradesList)
    .then((response) => {
      if (response.isSuccess) {
        closeModal(false);
      }
    })
    .catch((error: any) => errorHandler(error, showMessage))
    .finally(() => {
      setLoading(false);
      setEditKeyString(EMPTY_STRING);
    });
};
