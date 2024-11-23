import "./search-bar-dark.css";
import "./search-bar.css";

import { Button, Drawer, Form, Space } from "antd";
import { useForm } from "antd/lib/form/Form";

import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";

import { ExcludeFilterKeys, SearchBarProps } from "./search-bar.props";
import {
  formContainerStyle,
  searchBarContainerStyle,
  searchBarDivStyle,
  searchContainer,
} from "./search-bar.style";

import { color } from "../../../theme";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { SiriusTypography } from "../typography";
import SiriusButton from "../button/tot-button";
import { checkIfFilterHasChanges } from "../../../utils/common-utils";
import { TotBadge } from "../badge/tot-badge";
import { SearchField } from "./search-field";
import { SearchPanelField } from "./search-panel-field";

export const SearchBar = observer(
  ({
    filter,
    hidden,
    setFilter,
    searchArea,
    searchPanel,
    getContainer,
    setShowTable,
    searchButton,
    isOpenMoreFilter,
    onResetMoreFilters,
    defaultFilteredKey,
    onSearchMoreFilters,
    branchDefaultValue,
  }: SearchBarProps) => {
    const [_filter, _setFilter] = useState({});

    const filteredKeys = searchButton
      ? Object.keys(_filter)
      : Object.keys(filter);

    const filteredKeysCount = filteredKeys.filter(
      (key) =>
        ![
          ...ExcludeFilterKeys,
          ...searchArea.map((item) => item.key),
          ...(defaultFilteredKey || []),
        ].includes(key)
    ).length;

    const [filterCounter, setFilterCounter] = useState<number>(
      filteredKeysCount || 0
    );
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
      const { changesCount, changedKeys }: any =
        checkIfFilterHasChanges(defaultFilter, filter) || 0;

      if (filter)
        if (changesCount > 0) {
          const excludedChangedKeys = changedKeys.filter(
            (key: any) =>
              ![
                ...ExcludeFilterKeys,
                ...searchArea.map((item) => item.key),
              ].includes(key)
          );
          setFilterCounter(filteredKeysCount + excludedChangedKeys.length);
        } else {
          setFilterCounter(filteredKeysCount);
        }
    }, [filter]);

    const onChange = (name: string, val: string | string[]) => {
      if (
        (val && !Array.isArray(val)) ||
        (Array.isArray(val) && val?.length > 0)
      ) {
        if (searchButton) {
          _filter[name] = val;
          _setFilter({ ..._filter });
        } else {
          filter[name] = val;
          setFilter({ ...filter });
        }
      } else {
        if (searchButton) {
          const newFilter = { ..._filter };
          delete newFilter[name];
          _setFilter(newFilter);
        } else {
          const newFilter = { ...filter };
          delete newFilter[name];
          setFilter(newFilter);
        }
      }
    };

    const searchAreaComponents = useMemo(
      () =>
        searchArea.map((fieldProps, i) => {
          fieldProps.marginBottom = "0";
          return (
            <SearchField
              {...fieldProps}
              key={`search-field-${i}`}
              marginBottom="0"
              onChangeFilter={onChange}
            />
          );
        }),
      [searchArea, onChange]
    );

    const searchPanelComponents = useMemo(
      () =>
        searchPanel.map((fieldProps, i) => (
          <SearchPanelField
            {...fieldProps}
            key={`search-panel-com-${i}`}
            onChangeFilter={onChange}
          />
        )),
      [searchPanel, onChange]
    );

    const openMoreFilter = searchPanel.length > 0 && !isOpenMoreFilter;

    const handleSubmit = () => {
      setFilter({ ..._filter });
      if (setShowTable) {
        setShowTable(true);
      }
    };

    const [form] = useForm();

    return (
      <div hidden={hidden} style={searchContainer} className="search-container">
        <Form form={form} autoComplete="off">
          <Space style={searchBarDivStyle}>
            {searchAreaComponents}
            {searchButton && (
              <SiriusButton.Tertiary onClick={handleSubmit}>
                {translate("common.search")}
              </SiriusButton.Tertiary>
            )}
          </Space>
        </Form>
        <div hidden={openMoreFilter ? false : true}>
          {openMoreFilter && (
            <Space>
              <TotBadge count={filterCounter}>
                <Button
                  className={`sirius-more-filter-btn ${
                    appStateStore.isDarkMode ? "dark" : ""
                  }`}
                  type="link"
                  htmlType="submit"
                  onClick={() => setDrawerOpen(true)}
                >
                  <SiriusTypography.BodySmall color={color.gray03}>
                    {translate("common.moreFilter")}
                  </SiriusTypography.BodySmall>
                </Button>
              </TotBadge>
            </Space>
          )}
        </div>
        <Drawer
          width={"31.25rem"}
          className={`sirius-drawer ${appStateStore.isDarkMode ? "dark" : ""}`}
          title={translate("common.moreFilter")}
          placement="right"
          open={drawerOpen}
          getContainer={getContainer}
          onClose={() => setDrawerOpen(false)}
        >
          <div style={searchBarContainerStyle}>
            <Form
              className={`sirius-scrollbar${
                appStateStore.isDarkMode ? " dark" : ""
              }`}
              style={formContainerStyle}
              layout="vertical"
            >
              {searchPanelComponents}
            </Form>
            {onResetMoreFilters && onSearchMoreFilters && (
              <div className="sirius-drawer-buttons">
                <SiriusButton.Secondary
                  onClick={() => {
                    form.resetFields();
                    onResetMoreFilters();
                  }}
                >
                  {translate("common.RESET")}
                </SiriusButton.Secondary>
                <SiriusButton.Primary
                  onClick={() => {
                    setDrawerOpen(false);
                    onSearchMoreFilters();
                  }}
                >
                  {translate("common.SEARCH")}
                </SiriusButton.Primary>
              </div>
            )}
          </div>
        </Drawer>
      </div>
    );
  }
);
