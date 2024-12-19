import { observer } from "mobx-react-lite";
import { TeacherData, TeacherDetailsProps } from "../data";
import { Button, Form, Space } from "antd";
import {
  DateFormat,
  FormItemFieldType,
  GENDER_OPTIONS,
  MainActionType,
  TotFormItem,
  translate,
  UploadImage,
  useStores,
  ViewMode,
} from "../../../common";
import { useEffect, useState } from "react";
import { DEF_TEACHER_DATA } from "../constants";
import TotInput from "../../../common/component/input/tot-input";
import { color } from "../../../theme";
import { getS } from "../../../utils";
import { GradesModal } from "../../students/modals";
import { addNewTeacher, fetchTeacherById } from "../operations";
import { TeacherSectionModal, TeacherSubjectModal } from "../modals";

export const TeacherDetails = observer((props: TeacherDetailsProps) => {
  const {
    pageView,
    actionType,
    selectedId,
    teacherData,

    setPageView,
    setSelectedId,
    setActionType,
    setTeacherData,
  } = props;

  const [form] = Form.useForm();
  const [detailsForm] = Form.useForm();
  const { messageStore, appStateStore } = useStores();
  const { showMessage } = messageStore;
  const { setLoading } = appStateStore;

  const [openSubjects, setOpenSubjects] = useState<boolean>(false);
  const [openSections, setOpenSectionss] = useState<boolean>(false);

  useEffect(() => {
    switch (actionType) {
      case MainActionType.ADD:
        setTeacherData(DEF_TEACHER_DATA);
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
        setTeacherData(DEF_TEACHER_DATA);
        break;
      default:
        break;
    }

    setActionType(MainActionType.DEFAULT);
  }, [actionType]);

  useEffect(() => {
    if (
      (pageView === ViewMode.LIST || pageView === ViewMode.VIEW) &&
      selectedId
    ) {
      fetchTeacherById(
        form,
        selectedId,
        showMessage,
        setPageView,
        setTeacherData,
        setLoading
      );
    }
  }, [selectedId]);

  const setTeacherDataHandler = (newProperties: object) => {
    setTeacherData({ ...teacherData, ...newProperties });
  };
  const setCurrentDataByProperty = (data: any) => {};

  const onFinishHandler = (data: TeacherData) => {
    addNewTeacher(
      form,
      data,
      showMessage,
      setPageView,
      setTeacherData,
      setLoading,
      setActionType
    );
    form.resetFields();
  };

  const teacherNameHandler = (): string => {
    const middleInit = teacherData?.middleName
      ? teacherData.middleName.at(0)
      : "";
    const fullName =
      getS(teacherData.firstName).concat(" ") +
      getS(middleInit).concat(". ") +
      getS(teacherData.lastName);
    return fullName;
  };

  return (
    <div
      style={{
        height: "68vh",
        display: "flex",
        minHeight: "68vh",
        overflow: "auto",
        justifyContent: "space-between",
      }}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinishHandler}
        style={{
          height: "52.5vh",
        }}
      >
        <TotFormItem
          style={{
            height: "75vh",
          }}
          readonly={pageView === ViewMode.VIEW ? true : false}
          items={[
            {
              key: "firstName",
              name: "firstName",
              value: teacherData?.firstName,
              label: translate("student.details.firstName"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ firstName: val.target?.value }),
            },
            {
              key: "lastName",
              name: "lastName",
              value: teacherData?.lastName,
              label: translate("student.details.lastName"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ lastName: val.target?.value }),
            },
            {
              key: "middleName",
              name: "middleName",
              value: teacherData?.middleName,
              label: translate("student.details.middleName"),
              inputType: FormItemFieldType.INPUT,
              hidden: false,
              width: "400px",
              onBlur: (val) =>
                setTeacherDataHandler({ middleName: val.target?.value }),
            },
            {
              key: "ageGender",
              name: "ageGender",
              inputType: FormItemFieldType.CUSTOM,
              hidden: false,
              render: (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Space align="center" direction="horizontal">
                    <Form.Item name="gender">
                      <TotInput.Dropdown
                        label={translate("student.details.gender")}
                        width="110px"
                        size="large"
                        readOnly={pageView === ViewMode.VIEW}
                        style={{ marginTop: -5 }}
                        value={teacherData?.gender}
                        options={GENDER_OPTIONS}
                        onSelect={(val: any) =>
                          setTeacherDataHandler({ gender: val })
                        }
                      />
                    </Form.Item>
                    <Form.Item name="birthDate">
                      <TotInput.DatePicker
                        name="birthDate"
                        width="175px"
                        readOnly={pageView === ViewMode.VIEW}
                        placeholder="Birth Date"
                        allowClear={false}
                        value={teacherData?.birthDate}
                        format={DateFormat.MMDDYYYY_SLASH}
                        onChange={(val) => {
                          setTeacherDataHandler({ birthDate: val });
                        }}
                      />
                    </Form.Item>
                  </Space>
                </div>
              ),
            },
            {
              key: "address",
              name: "address",
              value: teacherData?.address,
              label: translate("student.details.address"),
              inputType: FormItemFieldType.INPUT,
              hidden: false,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ address: val.target?.value }),
            },
            {
              key: "idNumber",
              name: "idNumber",
              value: teacherData?.idNumber,
              label: translate("student.details.idNumber"),
              inputType: FormItemFieldType.INPUT,
              hidden: false,
              width: "25rem",
              maxLength: 6,
              onBlur: (val) => {
                setTeacherDataHandler({ idNumber: val.target?.value });
                detailsForm.setFieldValue("idNumber", getS(val.target?.value));
              },
            },
            {
              key: "fathersName",
              name: "fathersName",
              value: teacherData?.fathersName,
              label: translate("student.details.fathersName"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ fathersName: val.target?.value }),
            },
            {
              key: "mothersName",
              name: "mothersName",
              value: teacherData?.mothersName,
              label: translate("student.details.mothersName"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ mothersName: val.target?.value }),
            },
            {
              key: "contactNumber",
              name: "contactNumber",
              value: teacherData?.contactNumber,
              label: translate("student.details.contactNum"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ contactNumber: val.target?.value }),
            },
            {
              key: "email",
              name: "email",
              value: teacherData?.email,
              label: translate("teacher.email"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) =>
                setTeacherDataHandler({ email: val.target?.value }),
            },
          ]}
        />
      </Form>
      <div
        style={{
          position: "absolute",
          left: "60%",
          width: "320px",
          border: "1px solid #999999",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <UploadImage
            readOnly={false}
            viewMode={pageView}
            altName={teacherData?.imageName}
            currentImage={teacherData?.image ? teacherData?.image : null}
            setCurrentImage={setTeacherDataHandler}
            setFormData={setCurrentDataByProperty}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "6%",
            height: "43%",
            flexDirection: "column",
          }}
        >
          <Form form={detailsForm}>
            <TotFormItem
              items={[
                {
                  key: "customId",
                  name: "customId",
                  label: translate("student.details.studentName"),
                  inputType: FormItemFieldType.CUSTOM,
                  readOnly: true,
                  width: "200px",
                  render: (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Space align="center" direction="horizontal">
                        <Form.Item name={"teacherName"}>
                          <TotInput
                            name="teacherName"
                            label={translate("teacher.teacherName")}
                            size="large"
                            readOnly
                            width="200px"
                          />
                        </Form.Item>
                        <Form.Item name="idNumberDisplay">
                          <TotInput
                            name="idNumberDisplay"
                            label={translate("student.details.idNumber")}
                            size="large"
                            readOnly
                            width="80px"
                          />
                        </Form.Item>
                      </Space>
                    </div>
                  ),
                },
              ]}
            />
          </Form>
          <Button
            color="primary"
            style={{ color: "white", background: color.secondary01 }}
            onClick={() => setOpenSubjects(true)}
          >
            {translate("teacher.subjects")}
          </Button>
          <Button
            color="primary"
            style={{ color: "white", background: color.secondary01 }}
            onClick={() => setOpenSectionss(true)}
          >
            {translate("teacher.sections")}
          </Button>
          {openSubjects && (
            <TeacherSubjectModal
              open={openSubjects}
              teacherName={teacherNameHandler()}
              onClose={() => setOpenSubjects(false)}
            />
          )}
          {openSections && (
            <TeacherSectionModal
              open={openSections}
              teacherName={teacherNameHandler()}
              onClose={() => setOpenSectionss(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
});
