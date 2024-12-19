import { TotModal, translate } from "../../../common";

export interface TeacherSectionModalProps {
  open: boolean;
  teacherName: string;
  onClose: () => void;
}

export const TeacherSectionModal = (props: TeacherSectionModalProps) => {
  const { open, teacherName, onClose } = props;
  return (
    <TotModal
      title={translate("teacher.teacherSec", { teacher: teacherName })}
      onCancel={onClose}
      open={open}
      width={"60%"}
    >
      Teacher
    </TotModal>
  );
};
