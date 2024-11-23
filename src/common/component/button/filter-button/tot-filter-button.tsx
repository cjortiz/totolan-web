import { EMPTY_STRING, ViewMode } from "../../../constants";
import { translate } from "../../../i18n";
import { TotIcons } from "../../../icons/tot-icon";
import { SearchFieldProps, SearchFieldType } from "../../search-bar";
import SiriusButton from "../tot-button";

interface TotFilterButtonProps {
  viewMode: ViewMode;
  onSubmit: () => void;
  iconView?: boolean;
}

export const TotFilterButton = (
  props: TotFilterButtonProps
): SearchFieldProps => {
  const { viewMode, iconView, onSubmit } = props;
  return {
    key: "submit",
    type: SearchFieldType.Button,
    button: (
      <SiriusButton.Tertiary
        width={iconView ? EMPTY_STRING : "9.063rem"}
        hidden={viewMode === ViewMode.VIEW}
        onClick={onSubmit}
      >
        {iconView ? EMPTY_STRING : translate("common.search")}
      </SiriusButton.Tertiary>
    ),
  };
};
