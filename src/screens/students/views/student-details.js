import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Space } from "antd";
import { DateFormat, FormItemFieldType, MainActionType, TotFormItem, translate, useStores, ViewMode, } from "../../../common";
import "../grades.css";
import TotInput from "../../../common/component/input/tot-input";
import { useEffect } from "react";
import { DEF_STUDENT_DATA } from "../constants";
import { UploadImage } from "../../../common/component/upload-image";
import { getS } from "../../../utils/common-utils";
import { addNewStudent, fetchStudentById, } from "../operations/student-operations";
export const StudentDetails = (props) => {
    const { pageView, actionType, selectedId, studentData, setPageView, setSelectedId, setActionType, setStudentData, } = props;
    const [form] = Form.useForm();
    const [detailsForm] = Form.useForm();
    const { messageStore } = useStores();
    const { showMessage } = messageStore;
    useEffect(() => {
        switch (actionType) {
            case MainActionType.ADD:
                setStudentData(DEF_STUDENT_DATA);
                break;
            case MainActionType.EDIT:
                if (pageView === ViewMode.VIEW) {
                    setPageView(ViewMode.EDIT);
                }
                break;
            case MainActionType.SAVE:
                form.submit();
                break;
            case MainActionType.CLOSE:
                setPageView(ViewMode.LIST);
                form.resetFields();
                setStudentData(DEF_STUDENT_DATA);
                break;
            default:
                break;
        }
        setActionType(MainActionType.DEFAULT);
    }, [actionType]);
    useEffect(() => {
        if ((pageView === ViewMode.LIST || pageView === ViewMode.VIEW) &&
            selectedId) {
            fetchStudentById(form, selectedId, showMessage, setPageView, setStudentData);
        }
    }, [selectedId]);
    useEffect(() => {
        if (studentData) {
            const middleInit = studentData?.middleName
                ? studentData.middleName.at(0)
                : "";
            const fullName = getS(studentData.firstName).concat(" ") +
                getS(middleInit).concat(". ") +
                getS(studentData.lastName);
            if (fullName) {
                detailsForm.setFieldValue("studentName", fullName);
                detailsForm.setFieldValue("idNumberDisplay", studentData?.idNumber);
            }
        }
    }, [studentData]);
    const setStudentHandler = (newProperties) => {
        setStudentData({ ...studentData, ...newProperties });
    };
    const onFinishHandler = (data) => {
        addNewStudent(data, showMessage);
        form.resetFields();
    };
    const setCurrentDataByProperty = (data) => { };
    return (_jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [_jsx(Form, { layout: "vertical", form: form, onFinish: onFinishHandler, children: _jsx(TotFormItem, { readonly: pageView === ViewMode.VIEW ? true : false, items: [
                        {
                            key: "firstName",
                            name: "firstName",
                            value: studentData?.firstName,
                            label: translate("student.details.firstName"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ firstName: val.target?.value }),
                        },
                        {
                            key: "lastName",
                            name: "lastName",
                            value: studentData?.lastName,
                            label: translate("student.details.lastName"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ lastName: val.target?.value }),
                        },
                        {
                            key: "middleName",
                            name: "middleName",
                            value: studentData?.middleName,
                            label: translate("student.details.middleName"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ middleName: val.target?.value }),
                        },
                        {
                            key: "ageGender",
                            name: "ageGender",
                            inputType: FormItemFieldType.CUSTOM,
                            hidden: false,
                            render: (_jsx("div", { style: { display: "flex", justifyContent: "space-between" }, children: _jsxs(Space, { align: "center", direction: "horizontal", children: [_jsx(Form.Item, { name: "age", children: _jsx(TotInput, { name: "age", suffix: "yrs", readOnly: pageView === ViewMode.VIEW, value: studentData?.age, label: translate("student.details.age"), size: "large", maxLength: 2, style: { width: "100px" }, onBlur: (val) => setStudentHandler({ age: val.target?.value }) }) }), _jsx(Form.Item, { name: "gender", children: _jsx(TotInput.Dropdown, { label: translate("student.details.gender"), width: "110px", size: "large", readOnly: pageView === ViewMode.VIEW, style: { marginTop: -5 }, value: studentData?.gender, options: [
                                                    {
                                                        label: translate("common.gender.male"),
                                                        value: "0",
                                                    },
                                                    {
                                                        label: translate("common.gender.female"),
                                                        value: "1",
                                                    },
                                                ], onSelect: (val) => setStudentHandler({ gender: val }) }) }), _jsx(Form.Item, { name: "birthDate", children: _jsx(TotInput.DatePicker, { name: "birthDate", width: "175px", readOnly: pageView === ViewMode.VIEW, placeholder: "Birth Date", allowClear: false, value: studentData?.birthDate, format: DateFormat.MMDDYYYY_SLASH, onChange: (val) => setStudentHandler({ birthDate: val }) }) })] }) })),
                        },
                        {
                            key: "address",
                            name: "address",
                            value: studentData?.address,
                            label: translate("student.details.address"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ address: val.target?.value }),
                        },
                        {
                            key: "idNumber",
                            name: "idNumber",
                            value: studentData?.idNumber,
                            label: translate("student.details.idNumber"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "220px",
                            maxLength: 6,
                            onBlur: (val) => {
                                setStudentHandler({ idNumber: val.target?.value });
                                detailsForm.setFieldValue("idNumber", getS(val.target?.value));
                            },
                        },
                        {
                            key: "mothersName",
                            name: "mothersName",
                            value: studentData?.mothersName,
                            label: translate("student.details.mothersName"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ mothersName: val.target?.value }),
                        },
                        {
                            key: "fathersName",
                            name: "fathersName",
                            value: studentData?.fathersName,
                            label: translate("student.details.fathersName"),
                            inputType: FormItemFieldType.INPUT,
                            hidden: false,
                            width: "400px",
                            onBlur: (val) => setStudentHandler({ fathersName: val.target?.value }),
                        },
                    ] }) }), _jsxs("div", { style: {
                    width: "320px",
                    border: "1px solid #999999",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    borderRadius: "5px",
                }, children: [_jsx("div", { style: {
                            display: "flex",
                            justifyContent: "center",
                        }, children: _jsx(UploadImage, { readOnly: false, viewMode: pageView, altName: studentData?.imageName, currentImage: studentData?.image ? studentData?.image : null, setCurrentImage: setStudentHandler, setFormData: setCurrentDataByProperty }) }), _jsx("div", { style: {
                            display: "flex",
                            width: "100%",
                            padding: "6%",
                            height: "43%",
                            flexDirection: "column",
                        }, children: _jsx(Form, { form: detailsForm, children: _jsx(TotFormItem, { items: [
                                    {
                                        key: "customId",
                                        name: "customId",
                                        label: translate("student.details.studentName"),
                                        inputType: FormItemFieldType.CUSTOM,
                                        readOnly: true,
                                        width: "200px",
                                        render: (_jsx("div", { style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }, children: _jsxs(Space, { align: "center", direction: "horizontal", children: [_jsx(Form.Item, { name: "studentName", children: _jsx(TotInput, { name: "studentName", label: translate("student.details.studentName"), size: "large", readOnly: true, width: "200px" }) }), _jsx(Form.Item, { name: "idNumberDisplay", children: _jsx(TotInput, { name: "idNumberDisplay", label: translate("student.details.idNumber"), size: "large", readOnly: true, width: "80px" }) })] }) })),
                                    },
                                ] }) }) })] })] }));
};
