import { ViewMode, } from "../../../common";
import { errorHandler } from "../../../common/constants/error-handler";
import { StudentApi } from "../../../services/api/axios-students/students-services";
import moment from "moment";
export const fetchDataList = (filterData, showMessage, setHideTable, setTableListData) => {
    StudentApi.fetchStudentList(filterData)
        .then((response) => {
        if (response.isSuccess) {
            console.log(response.resultData);
            setTableListData(response?.resultData);
        }
    })
        .catch((error) => errorHandler(error, showMessage))
        .finally(() => setHideTable(false));
};
export const addNewStudent = (newStudent, showMessage) => {
    StudentApi.addNewStudent(newStudent)
        .then((response) => {
        if (response.isSuccess) {
            console.log(response.resultData);
        }
    })
        .catch((error) => errorHandler(error, showMessage));
};
export const fetchStudentById = (form, id, showMessage, setViewMode, setStudentData) => {
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
        .catch((error) => errorHandler(error, showMessage))
        .finally(() => setViewMode(ViewMode.VIEW));
};
