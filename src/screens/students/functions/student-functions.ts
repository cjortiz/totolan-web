import { CURRENT_PAGE, PAGE_SIZE, PaginationDto } from "../../../common";
import { StudentFilterData } from "../students";

export const STUDENT_DEF_FILTER = (): StudentFilterData => {
  const data = defaultFilterValue({
    sortField: "firstName",
    sortDirection: "descend",
    object: {},
  });
  console.log(data);
  return data;
};

/**
 * Generates a default filter value for pagination and sorting.
 *
 * @param {object} props - The properties used to construct the default filter value.
 * @param {string} props.sortField - The field by which to sort.
 * @param {("ascend" | "descend" | string)} [props.sortDirection] - The sort direction, defaulting to "descend" if not provided.
 * @param {any} [props.object] - Additional filter object to include.
 * @returns {PaginationDto} The default filter value for pagination and sorting.
 */
export const defaultFilterValue = (props: {
  sortField: string;
  sortDirection?: "ascend" | "descend" | string;
  object?: any;
}): PaginationDto => {
  const { sortField, sortDirection, object } = props;
  return {
    sortDirection: sortDirection ? sortDirection : "descend",
    sortField: sortField,
    pageNumber: CURRENT_PAGE,
    pageSize: PAGE_SIZE,
    ...object,
  };
};
