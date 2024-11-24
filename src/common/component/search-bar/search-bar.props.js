export var SearchFieldType;
(function (SearchFieldType) {
    SearchFieldType[SearchFieldType["Select"] = 0] = "Select";
    SearchFieldType[SearchFieldType["DateRange"] = 1] = "DateRange";
    SearchFieldType[SearchFieldType["Divider"] = 2] = "Divider";
    SearchFieldType[SearchFieldType["Input"] = 3] = "Input";
    SearchFieldType[SearchFieldType["Text"] = 4] = "Text";
    SearchFieldType[SearchFieldType["DatePicker"] = 5] = "DatePicker";
    SearchFieldType[SearchFieldType["Switch"] = 6] = "Switch";
    SearchFieldType[SearchFieldType["MonthPicker"] = 7] = "MonthPicker";
    SearchFieldType[SearchFieldType["Button"] = 8] = "Button";
    SearchFieldType[SearchFieldType["Nothing"] = 9] = "Nothing";
    SearchFieldType[SearchFieldType["Custom"] = 10] = "Custom";
    SearchFieldType[SearchFieldType["Radio"] = 11] = "Radio";
    SearchFieldType[SearchFieldType["Search"] = 12] = "Search";
    SearchFieldType[SearchFieldType["Number"] = 13] = "Number";
    SearchFieldType[SearchFieldType["SelectList"] = 14] = "SelectList";
    SearchFieldType[SearchFieldType["ColorPicker"] = 15] = "ColorPicker";
})(SearchFieldType || (SearchFieldType = {}));
export const ExcludeFilterKeys = [
    "pageSize",
    "pageNumber",
    "sortDirection",
    "sortField",
    "resetPage",
    "companyId",
    "paginationEnabled",
];
