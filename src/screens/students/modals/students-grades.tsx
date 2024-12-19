import { Empty, Input, Modal } from "antd";
import {
  CommonTable,
  EMPTY_STRING,
  ListLayout,
  ModalLayout,
  SiriusTypography,
  translate,
  useStores,
  ViewMode,
} from "../../../common";
import { useEffect, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { fetchGrades, submitGrades } from "../operations/student-operations";
import SiriusButton from "../../../common/component/button/tot-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { color } from "../../../theme";
interface GradesModalProps {
  open: boolean;
  studentId: number;
  studentName: string;
  setOpen: (args: boolean) => void;
}

export interface GradeListInterface {
  id: number;
  subjectId: number;
  subjectName: string;
  firstGrading: number;
  secondGrading: number;
  thirdGrading: number;
  fourthGrading: number;
  isPassed: number;
}

export interface GradeFilterDto {
  studentId: number;
}

export const GradesModal = (props: GradesModalProps) => {
  const { open, studentName, studentId, setOpen } = props;
  const { messageStore, appStateStore } = useStores();
  const { showMessage } = messageStore;

  const [gradesList, setGradesList] = useState<GradeListInterface[]>([]);
  const [editKeyString, setEditKeyString] = useState<string>(EMPTY_STRING);

  useEffect(() => {
    if (open) {
      fetchGradesHandler();
    }

    return () => {
      setEditKeyString(EMPTY_STRING);
    };
  }, [open]);

  const fetchGradesHandler = () => {
    fetchGrades(
      studentId,
      showMessage,
      () => {},
      setGradesList,
      appStateStore.setLoading
    );
  };

  const titleHandler = (): string => {
    return translate("student.details.gradesTitle", {
      studentsName: studentName,
    });
  };

  const onRowGradeChangeHandler = (
    record: GradeListInterface,
    newProperty: object
  ) => {
    const updateList = gradesList.map((obj) => {
      if (record.id === obj.id) {
        return {
          ...obj,
          ...newProperty,
        };
      }
      return obj;
    });

    setGradesList(updateList);
  };

  const onSubmitGrades = () => {
    submitGrades(
      gradesList,
      showMessage,
      appStateStore.setLoading,
      setOpen,
      setEditKeyString
    );
  };

  const columns = (): ColumnsType<GradeListInterface> => {
    return [
      {
        title: translate("grades.subjectName"),
        dataIndex: "subjectName",
        key: "subjectName",
        render: (val) => {
          return (
            <SiriusTypography.BodyMedium> {val}</SiriusTypography.BodyMedium>
          );
        },
      },
      {
        title: translate("grades.firstGrading"),
        dataIndex: "firstGrading",
        key: "firstGrading",
        render: (_, record) => {
          return (
            <Input
              value={record.firstGrading}
              maxLength={6}
              readOnly={record.subjectName !== editKeyString}
              onChange={(val) => {
                const value = val.target.value.replace(
                  /[^0-9.]/g,
                  EMPTY_STRING
                ); // Removes any non-numeric characters

                onRowGradeChangeHandler(record, {
                  firstGrading: value,
                });
              }}
            />
          );
        },
      },
      {
        title: translate("grades.secondGrading"),
        dataIndex: "secondGrading",
        key: "secondGrading",
        render: (_, record) => {
          return (
            <Input
              maxLength={6}
              value={record.secondGrading}
              readOnly={record.subjectName !== editKeyString}
              onChange={(val) => {
                const value = val.target.value.replace(/[^0-9]/g, EMPTY_STRING); // Removes any non-numeric characters

                onRowGradeChangeHandler(record, {
                  secondGrading: value,
                });
              }}
            />
          );
        },
      },
      {
        title: translate("grades.thirdGrading"),
        dataIndex: "thirdGrading",
        key: "thirdGrading",
        render: (_, record) => {
          return (
            <Input
              value={record.thirdGrading}
              maxLength={6}
              readOnly={record.subjectName !== editKeyString}
              onChange={(val) => {
                const value = val.target.value.replace(/[^0-9]/g, EMPTY_STRING); // Removes any non-numeric characters

                onRowGradeChangeHandler(record, {
                  thirdGrading: value,
                });
              }}
            />
          );
        },
      },
      {
        title: translate("grades.fourthGrading"),
        dataIndex: "fourthGrading",
        key: "fourthGrading",
        render: (_, record) => {
          return (
            <Input
              value={record.fourthGrading}
              maxLength={6}
              readOnly={record.subjectName !== editKeyString}
              onChange={(val) => {
                const value = val.target.value.replace(/[^0-9]/g, EMPTY_STRING); // Removes any non-numeric characters

                onRowGradeChangeHandler(record, {
                  fourthGrading: value,
                });
              }}
            />
          );
        },
      },
      {
        title: translate("grades.remarks"),
        dataIndex: "remarks",
        key: "remarks",
      },
      {
        title: translate("grades.actions"),
        dataIndex: "actions",
        key: "actions",
        render: (_, record) => {
          return (
            <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
              {record.subjectName === editKeyString ? (
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                  color={color.red}
                  onClick={() => setEditKeyString(EMPTY_STRING)}
                  title="Save"
                  size="2x"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  color={color.secondary01}
                  onClick={() => setEditKeyString(record.subjectName)}
                  title="Edit"
                  size="2x"
                />
              )}
            </div>
          );
        },
      },
    ];
  };

  return (
    <ModalLayout
      screenTitle={titleHandler()}
      openModal={open}
      closable={false}
      closeModal={() => setOpen(false)}
      buttons={[
        <SiriusButton.Save text="Submit Grades" onClick={onSubmitGrades} />,
        <SiriusButton.Close onClick={() => setOpen(false)} />,
      ]}
    >
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ListLayout viewMode={ViewMode.LIST}>
          <CommonTable
            columns={columns()}
            dataSource={gradesList}
            totalSize={gradesList?.length}
            pageNumber={1}
            pageSize={100}
            showPagination={false}
            hideCount={true}
          />
        </ListLayout>
      </div>
    </ModalLayout>
  );
};
