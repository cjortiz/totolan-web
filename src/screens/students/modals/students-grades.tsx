import { Modal } from "antd";
import { CommonTable, translate } from "../../../common";

interface GradesModalProps {
  open: boolean;
  studentName: string;
  setOpen: (args: boolean) => void;
}

export const GradesModal = (props: GradesModalProps) => {
  const { open, studentName, setOpen } = props;

  const titleHandler = (): string => {
    return translate("student.details.gradesTitle", {
      studentsName: studentName,
    });
  };
  return (
    <Modal
      centered
      title={titleHandler()}
      open={open}
      onCancel={() => setOpen(false)}
    >
      <CommonTable dataSource={[]} totalSize={0} pageNumber={0} pageSize={0} />
    </Modal>
  );
};
