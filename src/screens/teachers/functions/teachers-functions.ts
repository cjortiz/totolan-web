import { defaultFilterValue } from "../../students/functions/student-functions";
import { TeacherFilterData } from "../data";

export const TEACHER_DEF_FILTER = (): TeacherFilterData => {
  const data = defaultFilterValue({
    sortField: "firstName",
    sortDirection: "descend",
    object: {},
  });
  return data;
};
