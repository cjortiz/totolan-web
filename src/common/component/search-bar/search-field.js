import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TotInput from "../input/tot-input";
import { SearchFieldType } from "./search-bar.props";
export const SearchField = (props) => {
    const { button, isButtomBeside, type, name, mode, selectmode, isName, onChangeFilter, ...rest } = props;
    switch (type) {
        case SearchFieldType.Select:
            return (_jsx(TotInput.Dropdown, { ...rest, mode: mode || selectmode, onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.DateRange:
            return (_jsx(TotInput.DateRangePicker, { ...rest, onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.Search:
            return (_jsx(TotInput.Search, { name: isName ? name : undefined, onChange: (e) => {
                    onChangeFilter(name, e.target.value);
                }, ...rest }));
        case SearchFieldType.Text:
            const inputFieldProps = { ...props };
            return isButtomBeside ? (_jsxs("div", { style: { display: "flex", gap: "0.2rem" }, children: [_jsx(TotInput, { ...rest, onChange: (e) => onChangeFilter(inputFieldProps.name, e.target.value) }), button] })) : (_jsx(TotInput, { ...rest, onChange: (e) => onChangeFilter(inputFieldProps.name, e.target.value) }));
        case SearchFieldType.DatePicker:
            return (_jsx(TotInput.DatePicker, { ...rest, onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.MonthPicker:
            return (_jsx(TotInput.DatePicker, { ...rest, picker: "month", onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.Switch:
            return (_jsx(TotInput.Switch, { ...rest, onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.Number:
            return (_jsx(TotInput.Number, { ...rest, onChange: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.Radio:
            return (_jsx(TotInput.RadioGroup, { ...rest, onChange: (e) => onChangeFilter(name, e.target.value) }));
        case SearchFieldType.SelectList:
            return (_jsx(TotInput.SelectList, { ...rest, mode: mode || selectmode, onSave: (e) => onChangeFilter(name, e) }));
        case SearchFieldType.Button:
            return _jsx(_Fragment, { children: props.button });
        case SearchFieldType.Custom:
            return _jsx(_Fragment, { children: props.render });
        default:
            return null;
    }
};
