export enum ViewMode {
  LIST,
  VIEW,
  EDIT,
  ADD,
  COPY,
  DEFAULT,
}

export enum ExceptionType {
  Multiple = "multiple",
  Single = "single",
}

export enum ButtonSelectType {
  CLEAR_BUTTON,
  SAVE_BUTTON,
  CLOSE_BUTTON,
  CLOSE_CANCEL_SAVE_BUTTON,
  CLEAR_CANCEL_SAVE_BUTTON,
  CLEAR_CANCEL_SELECT_BUTTON,
}

export enum DateFormat {
  MMDDYYYY = "MMDDYYYY",
  YYYYMMDD = "YYYYMMDD",
  YYYYMMDDHHMMSS = "YYYYMMDDHHmmSS",
  HHMMSS = "HHmmSS",
  YYYYMMDD_SLASH = "YYYY/MM/DD",
  YYYYMMDD_DASH = "YYYY-MM-DD",
  YYYYMMDD_SLASH_HHMM = "YYYY/MM/DD HH:mm",
  YYYYMMDD_DASH_HHMM = "YYYY-MM-DD HH:mm",
  YYYYMMDD_DASH_HHMMSS = "YYYY-MM-DD HH:mm:ss",
  HHMM = "HHmm",
  HHMM_COLON = "HH:mm",
  HHMM_A = "hh:mm A",
  HHMMSS_COLON = "HH:mm:ss",
  MMDDYYYY_SLASH = "MM/DD/YYYY", //NOTE:: Not implemented in String to Date
  MMDDYYYY_SLASH_HHMM = "MM/DD/YYYY HH:mm", //NOTE:: Not implemented in String to Date
  MMDD_SLASH = "MM/DD",
  MMMMYYYY = "MMMM YYYY",
  YYYYMM_SLASH = "YYYY-MM",
  MMM_D_YYYY_DDD = "MMM D, YYYY (ddd)",
  MMM_D_YYYY_DDD_HHMM_A = "MMM D, YYYY (ddd) hh:mm A",
}

export enum MainActionType {
  DEFAULT,
  ADD,
  EDIT,
  REFRESH,
  DELETE,
  SAVE,
  CLOSE,
  BATCH_SELECT,
  GET_ALL,
  COPY,
}

export enum TypeOf {
  Object = "object",
  File = "file",
  Number = "number",
  String = "string",
}
