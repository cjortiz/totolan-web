export var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["LIST"] = 0] = "LIST";
    ViewMode[ViewMode["VIEW"] = 1] = "VIEW";
    ViewMode[ViewMode["EDIT"] = 2] = "EDIT";
    ViewMode[ViewMode["ADD"] = 3] = "ADD";
    ViewMode[ViewMode["COPY"] = 4] = "COPY";
    ViewMode[ViewMode["DEFAULT"] = 5] = "DEFAULT";
})(ViewMode || (ViewMode = {}));
export var ExceptionType;
(function (ExceptionType) {
    ExceptionType["Multiple"] = "multiple";
    ExceptionType["Single"] = "single";
})(ExceptionType || (ExceptionType = {}));
export var ButtonSelectType;
(function (ButtonSelectType) {
    ButtonSelectType[ButtonSelectType["CLEAR_BUTTON"] = 0] = "CLEAR_BUTTON";
    ButtonSelectType[ButtonSelectType["SAVE_BUTTON"] = 1] = "SAVE_BUTTON";
    ButtonSelectType[ButtonSelectType["CLOSE_BUTTON"] = 2] = "CLOSE_BUTTON";
    ButtonSelectType[ButtonSelectType["CLOSE_CANCEL_SAVE_BUTTON"] = 3] = "CLOSE_CANCEL_SAVE_BUTTON";
    ButtonSelectType[ButtonSelectType["CLEAR_CANCEL_SAVE_BUTTON"] = 4] = "CLEAR_CANCEL_SAVE_BUTTON";
    ButtonSelectType[ButtonSelectType["CLEAR_CANCEL_SELECT_BUTTON"] = 5] = "CLEAR_CANCEL_SELECT_BUTTON";
})(ButtonSelectType || (ButtonSelectType = {}));
export var DateFormat;
(function (DateFormat) {
    DateFormat["MMDDYYYY"] = "MMDDYYYY";
    DateFormat["YYYYMMDD"] = "YYYYMMDD";
    DateFormat["YYYYMMDDHHMMSS"] = "YYYYMMDDHHmmSS";
    DateFormat["HHMMSS"] = "HHmmSS";
    DateFormat["YYYYMMDD_SLASH"] = "YYYY/MM/DD";
    DateFormat["YYYYMMDD_DASH"] = "YYYY-MM-DD";
    DateFormat["YYYYMMDD_SLASH_HHMM"] = "YYYY/MM/DD HH:mm";
    DateFormat["YYYYMMDD_DASH_HHMM"] = "YYYY-MM-DD HH:mm";
    DateFormat["YYYYMMDD_DASH_HHMMSS"] = "YYYY-MM-DD HH:mm:ss";
    DateFormat["HHMM"] = "HHmm";
    DateFormat["HHMM_COLON"] = "HH:mm";
    DateFormat["HHMM_A"] = "hh:mm A";
    DateFormat["HHMMSS_COLON"] = "HH:mm:ss";
    DateFormat["MMDDYYYY_SLASH"] = "MM/DD/YYYY";
    DateFormat["MMDDYYYY_SLASH_HHMM"] = "MM/DD/YYYY HH:mm";
    DateFormat["MMDD_SLASH"] = "MM/DD";
    DateFormat["MMMMYYYY"] = "MMMM YYYY";
    DateFormat["YYYYMM_SLASH"] = "YYYY-MM";
    DateFormat["MMM_D_YYYY_DDD"] = "MMM D, YYYY (ddd)";
    DateFormat["MMM_D_YYYY_DDD_HHMM_A"] = "MMM D, YYYY (ddd) hh:mm A";
})(DateFormat || (DateFormat = {}));
export var MainActionType;
(function (MainActionType) {
    MainActionType[MainActionType["DEFAULT"] = 0] = "DEFAULT";
    MainActionType[MainActionType["ADD"] = 1] = "ADD";
    MainActionType[MainActionType["EDIT"] = 2] = "EDIT";
    MainActionType[MainActionType["REFRESH"] = 3] = "REFRESH";
    MainActionType[MainActionType["DELETE"] = 4] = "DELETE";
    MainActionType[MainActionType["SAVE"] = 5] = "SAVE";
    MainActionType[MainActionType["CLOSE"] = 6] = "CLOSE";
    MainActionType[MainActionType["BATCH_SELECT"] = 7] = "BATCH_SELECT";
    MainActionType[MainActionType["GET_ALL"] = 8] = "GET_ALL";
    MainActionType[MainActionType["COPY"] = 9] = "COPY";
})(MainActionType || (MainActionType = {}));
export var TypeOf;
(function (TypeOf) {
    TypeOf["Object"] = "object";
    TypeOf["File"] = "file";
    TypeOf["Number"] = "number";
    TypeOf["String"] = "string";
})(TypeOf || (TypeOf = {}));
