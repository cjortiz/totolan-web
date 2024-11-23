import { MainActionType, ViewMode } from "../../../constants";

/**
 * Represents the position where a button should be inserted in an arrangement.
 * Possible values are "First," "Middle," or "Last."
 * These values correspond to the indices 1, 3, and 7, respectively.
 */
type ButtonInsertArrangement = "First" | "Middle" | "Last";

export interface SiriusHeaderButtonsProps {
  viewMode: ViewMode;
  hideAddButton?: boolean;
  addButton?: React.ReactNode | undefined;
  viewButton?: React.ReactNode;
  listButton?: React.ReactNode;
  editButton?: React.ReactNode;
  hideDefaultButtons?: boolean;
  defaultInventoryViewButtons?: boolean;
  addButtonInsertArrangement?: ButtonInsertArrangement;
  listButtonInsertArrangement?: ButtonInsertArrangement;
  editButtonInsertArrangement?: ButtonInsertArrangement;
  viewButtonInsertArrangement?: ButtonInsertArrangement;

  onClickButtonType: (data: MainActionType) => void;
}
