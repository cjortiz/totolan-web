import { Divider } from "antd";
import { SearchFieldPropsExt, SearchFieldType } from "./search-bar.props";
import { SearchField } from "./search-field";

export const SearchPanelField = (props: SearchFieldPropsExt) => {
  if (props.type === SearchFieldType.Divider) {
    return <Divider />;
  }
  return <SearchField {...props} />;
};
