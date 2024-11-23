import TotInput from "../input/tot-input";
import { SearchFieldPropsExt, SearchFieldType } from "./search-bar.props";

export const SearchField = (props: SearchFieldPropsExt) => {
  const {
    button,
    isButtomBeside,
    type,
    name,
    mode,
    selectmode,
    isName,
    onChangeFilter,
    ...rest
  } = props;

  switch (type) {
    case SearchFieldType.Select:
      return (
        <TotInput.Dropdown
          {...rest}
          mode={mode || selectmode}
          onChange={(e) => onChangeFilter(name, e)}
        />
      );
    case SearchFieldType.DateRange:
      return (
        <TotInput.DateRangePicker
          {...rest}
          onChange={(e) => onChangeFilter(name, e)}
        />
      );
    case SearchFieldType.Search:
      return (
        <TotInput.Search
          name={isName ? name : undefined}
          onChange={(e) => {
            onChangeFilter(name, e.target.value);
          }}
          {...rest}
        />
      );
    case SearchFieldType.Text:
      const inputFieldProps: any = { ...props };
      return isButtomBeside ? (
        <div style={{ display: "flex", gap: "0.2rem" }}>
          <TotInput
            {...rest}
            onChange={(e) =>
              onChangeFilter(inputFieldProps.name, e.target.value)
            }
          />
          {button}
        </div>
      ) : (
        <TotInput
          {...rest}
          onChange={(e) => onChangeFilter(inputFieldProps.name, e.target.value)}
        />
      );
    case SearchFieldType.DatePicker:
      return (
        <TotInput.DatePicker
          {...rest}
          onChange={(e) => onChangeFilter(name, e)}
        />
      );
    case SearchFieldType.MonthPicker:
      return (
        <TotInput.DatePicker
          {...rest}
          picker="month"
          onChange={(e) => onChangeFilter(name, e)}
        />
      );
    case SearchFieldType.Switch:
      return (
        <TotInput.Switch {...rest} onChange={(e) => onChangeFilter(name, e)} />
      );
    case SearchFieldType.Number:
      return (
        <TotInput.Number {...rest} onChange={(e) => onChangeFilter(name, e)} />
      );
    case SearchFieldType.Radio:
      return (
        <TotInput.RadioGroup
          {...rest}
          onChange={(e) => onChangeFilter(name, e.target.value)}
        />
      );
    case SearchFieldType.SelectList:
      return (
        <TotInput.SelectList
          {...rest}
          mode={mode || selectmode}
          onSave={(e) => onChangeFilter(name, e)}
        />
      );
    case SearchFieldType.Button:
      return <>{props.button}</>;
    case SearchFieldType.Custom:
      return <>{props.render}</>;
    default:
      return null;
  }
};
