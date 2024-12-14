import { defaultFilterValue } from "../../students/functions/student-functions";
import { SectionSetupFilterData } from "../section";

export const SECTION_DEF_FILTER = (): SectionSetupFilterData => {
  const data = defaultFilterValue({
    sortField: "sectionName",
    sortDirection: "descend",
    object: {},
  });
  return data;
};
