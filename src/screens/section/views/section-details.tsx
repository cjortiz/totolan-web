import { Form } from "antd";
import {
  TotFormItem,
  ViewMode,
  translate,
  FormItemFieldType,
  GRADE_YEAR_OPTIONS,
  MainActionType,
  useStores,
} from "../../../common";
import { getS } from "../../../utils";
import { DEFAULT_DATA, SectionSetupListInterface } from "../section";
import { useEffect } from "react";
import { DEF_GRADE_YEAR_DATA } from "../../yearsetup/constants";
import { addNewData, fetchDataById } from "../operations";
import { observer } from "mobx-react-lite";

interface SectionSetupDetailsProps {
  viewMode: ViewMode;
  selectedId: number;
  actionType: MainActionType;
  sectionData: SectionSetupListInterface;
  setViewMode: (args: ViewMode) => void;
  setSelectedId: (args: number) => void;
  setActionType: (args: MainActionType) => void;
  setSectionData: (args: SectionSetupListInterface) => void;
}

export const SectionSetupDetails = observer(
  (props: SectionSetupDetailsProps) => {
    const {
      viewMode,
      selectedId,
      actionType,
      sectionData,

      setViewMode,
      setSelectedId,
      setActionType,
      setSectionData,
    } = props;
    const [form] = Form.useForm();
    const { messageStore, appStateStore, dropdownStore } = useStores();
    const { showMessage } = messageStore;
    const { setLoading } = appStateStore;

    useEffect(() => {
      switch (actionType) {
        case MainActionType.ADD:
          setSectionData(DEFAULT_DATA);
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
          setSectionData(DEFAULT_DATA);
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
          setSectionData
        );
      }
    }, [selectedId]);

    const onFinishHandler = (data: SectionSetupListInterface) => {
      addNewData(
        form,
        data,
        showMessage,
        setViewMode,
        setSectionData,
        setLoading,
        setActionType
      );
      form.resetFields();
    };

    const setDataHandler = (newProperties: object) => {
      setSectionData({ ...sectionData, ...newProperties });
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
                value: sectionData?.gradeYear,
                label: translate("section.gradeYear"),
                inputType: FormItemFieldType.DROPDOWN,
                options: GRADE_YEAR_OPTIONS,
                width: "25rem",
                onSelect: (data) => setDataHandler({ gradeYear: getS(data) }),
              },
              {
                key: "sectionName",
                name: "sectionName",
                value: sectionData.sectionName,
                label: translate("section.sectionName"),
                inputType: FormItemFieldType.INPUT,
                width: "25rem",
                onBlur: (val) =>
                  setDataHandler({ sectionName: val.target?.value }),
              },
              {
                key: "adviserId",
                name: "adviserId",
                value: sectionData?.adviserId,
                label: translate("year.instructor"),
                inputType: FormItemFieldType.DROPDOWN,
                options: dropdownStore.teacherDropdown.options,
                onSelect: (data) => setDataHandler({ adviserId: getS(data) }),
                hidden: false,
                width: "400px",
              },
            ]}
          />
        </Form>
      </div>
    );
  }
);
