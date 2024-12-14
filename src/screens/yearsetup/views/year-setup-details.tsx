import { Form } from "antd";
import {
  TotFormItem,
  ViewMode,
  translate,
  FormItemFieldType,
  MainActionType,
  useStores,
  GRADE_YEAR_OPTIONS,
} from "../../../common";
import { GradeYearDetailsProps, GradeYearListInterface } from "../data";
import { getS } from "../../../utils";
import { useEffect } from "react";
import { DEF_GRADE_YEAR_DATA } from "../constants";
import { addNewData, fetchDataById, fetchDataList } from "../operations";
import { observer } from "mobx-react-lite";

export const GradeYearDetails = observer((props: GradeYearDetailsProps) => {
  const {
    viewMode,
    actionType,
    selectedId,
    gradeYearData,

    setViewMode,
    setSelectedId,
    setActionType,
    setGradeYearData,
  } = props;
  const [form] = Form.useForm();
  const { messageStore, appStateStore } = useStores();
  const { showMessage } = messageStore;
  const { setLoading } = appStateStore;

  useEffect(() => {
    switch (actionType) {
      case MainActionType.ADD:
        setGradeYearData(DEF_GRADE_YEAR_DATA);
        break;
      case MainActionType.EDIT:
        if (viewMode === ViewMode.VIEW) {
          setViewMode(ViewMode.EDIT);
        }
        break;
      case MainActionType.SAVE:
        form.submit();
        break;
      case MainActionType.CLOSE:
        setViewMode(ViewMode.LIST);
        setSelectedId(undefined);
        form.resetFields();
        setGradeYearData(DEF_GRADE_YEAR_DATA);
        break;
      default:
        break;
    }

    setActionType(MainActionType.DEFAULT);
  }, [actionType]);

  useEffect(() => {
    if (
      (viewMode === ViewMode.LIST || viewMode === ViewMode.VIEW) &&
      selectedId
    ) {
      fetchDataById(
        form,
        selectedId,
        showMessage,
        setViewMode,
        setGradeYearData
      );
    }
  }, [selectedId]);

  const onFinishHandler = (data: GradeYearListInterface) => {
    addNewData(
      form,
      data,
      showMessage,
      setViewMode,
      setGradeYearData,
      setLoading
    );
    form.resetFields();
    setActionType(MainActionType.REFRESH);
  };

  const setDataHandler = (newProperties: object) => {
    setGradeYearData({ ...gradeYearData, ...newProperties });
  };

  return (
    <div
      style={{
        display: "flex",
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
          readonly={viewMode === ViewMode.VIEW ? true : false}
          items={[
            {
              key: "gradeYear",
              name: "gradeYear",
              value: gradeYearData?.gradeYear,
              label: translate("year.gradeLevel"),
              inputType: FormItemFieldType.DROPDOWN,
              options: GRADE_YEAR_OPTIONS,
              width: "25rem",
              onSelect: (data) => setDataHandler({ gradeYear: getS(data) }),
            },
            {
              key: "subject",
              name: "subject",
              value: gradeYearData.subject,
              label: translate("year.subject"),
              inputType: FormItemFieldType.INPUT,
              width: "25rem",
              onBlur: (val) => setDataHandler({ subject: val.target?.value }),
            },
            {
              key: "teacherId",
              name: "teacherId",
              value: gradeYearData?.teacherId,
              label: translate("year.instructor"),
              inputType: FormItemFieldType.DROPDOWN,
              hidden: false,
              width: "400px",
            },
          ]}
        />
      </Form>
    </div>
  );
});
