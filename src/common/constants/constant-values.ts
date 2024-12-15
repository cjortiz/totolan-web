import { translate } from "../i18n";
import { PaginatedResponseDto } from "./common-props";

export const PAGE_SIZE = 100;

/**
 * Default Width for Icons
 */
export const DEFAULT_ICON_WIDTH = "1rem";

/**
 * Default Height for Icons
 */
export const DEFAULT_ICON_HEIGHT = "1rem";

/**
 * Default size for background icon circle
 */
export const DEFAULT_SIZE_CIRCLE = "2.5rem";

/**
 * Default Margin Bottom for input fields
 */
export const DEFAULT_MARGIN_BOTTOM = "1.25rem";

export const EMPTY_STRING = "";

export const DEFAULT_ICON_SIZE = 16;

/**
 * Default Current Page Value on Pagination
 */
export const CURRENT_PAGE = 1;

/**
 * Represents the default data list structure for a paginated response.
 */
export const DEFAULT_DATA_LIST: PaginatedResponseDto<any> = {
  content: [],
  totalSize: 1,
  pageNumber: 1,
  summaryTotal: 0.0,
};

export const GENDER_OPTIONS = [
  {
    label: translate("common.gender.male"),
    value: "0",
  },
  {
    label: translate("common.gender.female"),
    value: "1",
  },
];

export const GRADE_YEAR_OPTIONS = [
  {
    label: "Grade 1",
    value: "1",
  },
  {
    label: "Grade 2",
    value: "2",
  },
  {
    label: "Grade 3",
    value: "3",
  },
  {
    label: "Grade 4",
    value: "4",
  },
  {
    label: "Grade 5",
    value: "5",
  },
  {
    label: "Grade 6",
    value: "6",
  },
];
