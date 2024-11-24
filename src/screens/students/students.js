import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { DEFAULT_DATA_LIST, MainActionType, MainLayout, translate, ViewMode, } from "../../common";
import { StudentList } from "./views";
import { SiriusHeaderButtons } from "../../common/component/button";
import { STUDENT_DEF_FILTER } from "./functions/student-functions";
import { DEF_STUDENT_DATA } from "./constants";
export const Students = () => {
    const [viewMode, setViewMode] = useState(ViewMode.LIST);
    const [filterData, setFilterData] = useState(STUDENT_DEF_FILTER());
    const [actionType, setActionType] = useState(MainActionType.DEFAULT);
    const [studentData, setStudentData] = useState(DEF_STUDENT_DATA);
    const [studentList, setStudentList] = useState(DEFAULT_DATA_LIST);
    return (_jsx(MainLayout, { buttons: SiriusHeaderButtons({
            viewMode: viewMode,
            onClickButtonType: setActionType,
        }), title: translate("student.studentListTitle"), children: _jsx(StudentList, { setStudentList: setStudentList, setStudentData: setStudentData, setFilterData: setFilterData, setActionType: setActionType, setViewMode: setViewMode, studentList: studentList, studentData: studentData, actionType: actionType, filterData: filterData, viewMode: viewMode }) }));
};
