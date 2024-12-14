import { defaultFilterValue } from "../../students/functions/student-functions";
import { GradeYearFilterData } from "../data";

export const GRADE_YEAR_DEF_FILTER = (): GradeYearFilterData => {
  const data = defaultFilterValue({
    sortField: "gradeYear",
    sortDirection: "descend",
    object: {},
  });
  return data;
};
