import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import "./search-bar-dark.css";
import "./search-bar.css";
import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/lib/form/Form";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";
import { ExcludeFilterKeys } from "./search-bar.props";
import { formContainerStyle, searchBarContainerStyle, searchBarDivStyle, searchContainer, } from "./search-bar.style";
import { color } from "../../../theme";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { SiriusTypography } from "../typography";
import SiriusButton from "../button/tot-button";
import { checkIfFilterHasChanges } from "../../../utils/common-utils";
import { TotBadge } from "../badge/tot-badge";
import { SearchField } from "./search-field";
import { SearchPanelField } from "./search-panel-field";
export const SearchBar = observer(({ filter, hidden, setFilter, searchArea, searchPanel, getContainer, setShowTable, searchButton, isOpenMoreFilter, onResetMoreFilters, defaultFilteredKey, onSearchMoreFilters, branchDefaultValue, }) => {
    const [_filter, _setFilter] = useState({});
    const filteredKeys = searchButton
        ? Object.keys(_filter)
        : Object.keys(filter);
    const filteredKeysCount = filteredKeys.filter((key) => ![
        ...ExcludeFilterKeys,
        ...searchArea.map((item) => item.key),
        ...(defaultFilteredKey || []),
    ].includes(key)).length;
    const [filterCounter, setFilterCounter] = useState(filteredKeysCount || 0);
    const [defaultFilter, setDefaultFilter] = useState({});
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { appStateStore } = useStores();
    useEffect(() => {
        _setFilter({ ...filter });
    }, [filter]);
    useEffect(() => {
        setDefaultFilter({ ...filter });
    }, [
        //added branchDefaultValue to the dependency array so that the default filter will be updated when branch field has a default value already
        branchDefaultValue,
    ]);
    useEffect(() => {
        const { changesCount, changedKeys } = checkIfFilterHasChanges(defaultFilter, filter) || 0;
        if (filter)
            if (changesCount > 0) {
                const excludedChangedKeys = changedKeys.filter((key) => ![
                    ...ExcludeFilterKeys,
                    ...searchArea.map((item) => item.key),
                ].includes(key));
                setFilterCounter(filteredKeysCount + excludedChangedKeys.length);
            }
            else {
                setFilterCounter(filteredKeysCount);
            }
    }, [filter]);
    const onChange = (name, val) => {
        if ((val && !Array.isArray(val)) ||
            (Array.isArray(val) && val?.length > 0)) {
            if (searchButton) {
                _filter[name] = val;
                _setFilter({ ..._filter });
            }
            else {
                filter[name] = val;
                setFilter({ ...filter });
            }
        }
        else {
            if (searchButton) {
                const newFilter = { ..._filter };
                delete newFilter[name];
                _setFilter(newFilter);
            }
            else {
                const newFilter = { ...filter };
                delete newFilter[name];
                setFilter(newFilter);
            }
        }
    };
    const searchAreaComponents = useMemo(() => searchArea.map((fieldProps, i) => {
        fieldProps.marginBottom = "0";
        return (_createElement(SearchField, { ...fieldProps, key: `search-field-${i}`, marginBottom: "0", onChangeFilter: onChange }));
    }), [searchArea, onChange]);
    const searchPanelComponents = useMemo(() => searchPanel.map((fieldProps, i) => (_createElement(SearchPanelField, { ...fieldProps, key: `search-panel-com-${i}`, onChangeFilter: onChange }))), [searchPanel, onChange]);
    const openMoreFilter = searchPanel.length > 0 && !isOpenMoreFilter;
    const handleSubmit = () => {
        setFilter({ ..._filter });
        if (setShowTable) {
            setShowTable(true);
        }
    };
    const [form] = useForm();
    return (_jsxs("div", { hidden: hidden, style: searchContainer, className: "search-container", children: [_jsx(Form, { form: form, autoComplete: "off", children: _jsxs(Space, { style: searchBarDivStyle, children: [searchAreaComponents, searchButton && (_jsx(SiriusButton.Tertiary, { onClick: handleSubmit, children: translate("common.search") }))] }) }), _jsx("div", { hidden: openMoreFilter ? false : true, children: openMoreFilter && (_jsx(Space, { children: _jsx(TotBadge, { count: filterCounter, children: _jsx(Button, { className: `sirius-more-filter-btn ${appStateStore.isDarkMode ? "dark" : ""}`, type: "link", htmlType: "submit", onClick: () => setDrawerOpen(true), children: _jsx(SiriusTypography.BodySmall, { color: color.gray03, children: translate("common.moreFilter") }) }) }) })) }), _jsx(Drawer, { width: "31.25rem", className: `sirius-drawer ${appStateStore.isDarkMode ? "dark" : ""}`, title: translate("common.moreFilter"), placement: "right", open: drawerOpen, getContainer: getContainer, onClose: () => setDrawerOpen(false), children: _jsxs("div", { style: searchBarContainerStyle, children: [_jsx(Form, { className: `sirius-scrollbar${appStateStore.isDarkMode ? " dark" : ""}`, style: formContainerStyle, layout: "vertical", children: searchPanelComponents }), onResetMoreFilters && onSearchMoreFilters && (_jsxs("div", { className: "sirius-drawer-buttons", children: [_jsx(SiriusButton.Secondary, { onClick: () => {
                                        form.resetFields();
                                        onResetMoreFilters();
                                    }, children: translate("common.RESET") }), _jsx(SiriusButton.Primary, { onClick: () => {
                                        setDrawerOpen(false);
                                        onSearchMoreFilters();
                                    }, children: translate("common.SEARCH") })] }))] }) })] }));
});
