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
