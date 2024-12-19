import { useState } from "react";
import {
  ModalLayout,
  PaginationDto,
  TotModal,
  translate,
  ViewMode,
} from "../../../common";
import { defaultFilterValue } from "../../students/functions/student-functions";
import { SubjectModalList } from "./views";

export interface TeacherSubjectModalProps {
  open: boolean;
  teacherName: string;
  onClose: () => void;
}

export interface SubjectModalFilterData extends PaginationDto {
  searchString?: string;
  gradeYear?: string | number;
}

export const SUB_MODAL_DEF_FILTER = (): SubjectModalFilterData => {
  const data = defaultFilterValue({
    sortField: "subject",
    sortDirection: "descend",
    object: {},
  });
  return data;
};

export const TeacherSubjectModal = (props: TeacherSubjectModalProps) => {
  const { open, teacherName, onClose } = props;
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.LIST);
  const [filterData, setFilterData] =
    useState<SubjectModalFilterData>(SUB_MODAL_DEF_FILTER);

  return (
    <ModalLayout
      openModal={open}
      screenTitle={translate("teacher.teacherSub", { teacher: teacherName })}
      closeModal={onClose}
    >
      <SubjectModalList
        viewMode={viewMode}
        filterData={filterData}
        setViewMode={setViewMode}
        setFilterData={setFilterData}
      />
    </ModalLayout>
  );
};
