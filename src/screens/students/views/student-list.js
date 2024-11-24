import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CommonTable, DetailsLayout, ListLayout, MainActionType, SiriusTypography, translate, useStores, ViewMode, } from "../../../common";
import { color } from "../../../theme";
import { useEffect, useState } from "react";
import { SearchBar, SearchFieldType, } from "../../../common/component/search-bar";
import { TotIcons } from "../../../common/icons/tot-icon";
import { fetchDataList } from "../operations/student-operations";
import { StudentDetails } from "./student-details";
import { commonPaginationChangeHandler, getS, } from "../../../utils/common-utils";
export const StudentList = (props) => {
    const { viewMode, actionType, filterData, studentData, studentList, setViewMode, setActionType, setFilterData, setStudentData, setStudentList, } = props;
    const { messageStore } = useStores();
    const { showMessage } = messageStore;
    const [selectedId, setSelectedId] = useState();
    useEffect(() => {
        fetchListHandler();
    }, []);
    useEffect(() => {
        switch (actionType) {
            case MainActionType.GET_ALL:
            case MainActionType.REFRESH:
                fetchListHandler();
                break;
            case MainActionType.ADD:
                setViewMode(ViewMode.ADD);
                break;
            default:
                break;
        }
        setActionType(MainActionType.DEFAULT);
    }, [actionType]);
    const fetchListHandler = () => {
        fetchDataList(filterData, showMessage, () => { }, setStudentList);
    };
    const detailTitleHandler = () => {
        if (viewMode === ViewMode.ADD) {
            return translate("student.studentsNewTitle");
        }
        const middleInit = studentData?.middleName
            ? studentData.middleName.at(0)
            : "";
        const fullName = getS(studentData.firstName).concat(" ") +
            getS(middleInit).concat(". ") +
            getS(studentData.lastName);
        return fullName;
    };
    const columns = () => {
        return [
            {
                title: translate("student.tableTitles.idNumber"),
                dataIndex: "idNumber",
                key: "idNumber",
                sorter: true,
                showSorterTooltip: false,
                render: (_, record) => (_jsx(SiriusTypography.BodyExtraSmall, { color: color.secondary07, onClick: () => {
                        setSelectedId(record?.id);
                    }, children: record.idNumber })),
            },
            {
                title: translate("student.tableTitles.name"),
                dataIndex: "name",
                key: "name",
                sorter: true,
                showSorterTooltip: false,
                render: (_, record) => `${record?.firstName?.concat(" ")?.concat(record?.lastName)}`,
            },
            {
                title: translate("student.tableTitles.age"),
                dataIndex: "age",
                key: "age",
                sorter: true,
            },
            {
                title: translate("student.tableTitles.gradeYear"),
                dataIndex: "gradeYear",
                key: "gradeYear",
                sorter: true,
            },
            {
                title: translate("student.tableTitles.sex"),
                dataIndex: "sex",
                key: "sex",
                sorter: true,
            },
        ];
    };
    const searchArea = () => {
        return [
            {
                key: "searchString",
                name: "searchString",
                type: SearchFieldType.Text,
                prefix: _jsx(TotIcons.Search, {}),
                placeholder: "Search",
                size: "large",
                allowClear: true,
                onPressEnter: () => fetchListHandler(),
            },
        ];
    };
    const listColumns = () => {
        if (viewMode === ViewMode.VIEW) {
            return columns().filter((pre) => pre.key === "idNumber" || pre.key === "name");
        }
        return columns();
    };
    return (_jsxs(_Fragment, { children: [_jsx(ListLayout, { searchBar: viewMode === ViewMode.LIST && (_jsx(SearchBar, { filter: filterData, setFilter: setFilterData, searchArea: searchArea(), searchPanel: searchArea() })), viewMode: viewMode, children: _jsx(CommonTable, { columns: listColumns(), viewMode: viewMode, dataSource: studentList.content, totalSize: studentList.totalSize, pageNumber: studentList.pageNumber, pageSize: filterData.pageSize, onPaginationChange: (page, pageSize) => commonPaginationChangeHandler(page, pageSize, filterData, fetchListHandler) }, "idNum") }), _jsx(DetailsLayout, { showHeader: true, title: detailTitleHandler(), viewMode: viewMode, children: _jsx(StudentDetails, { pageView: viewMode, actionType: actionType, studentData: studentData, setPageView: setViewMode, setActionType: setActionType, setStudentData: setStudentData, selectedId: selectedId, setSelectedId: setSelectedId }) })] }));
};
