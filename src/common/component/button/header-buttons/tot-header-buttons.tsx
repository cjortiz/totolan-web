import { useStores } from "../../../models";
import React, { useEffect, useState } from "react";

import SiriusButton from "../tot-button";
import { SiriusHeaderButtonsProps } from "./tot-header-button-props";
import { MainActionType, ViewMode } from "../../../constants";

export const TotHeaderButtons = (props: SiriusHeaderButtonsProps) => {
  const {
    viewMode,
    onClickButtonType,
    addButton,
    viewButton,
    listButton,
    editButton,
    hideAddButton,
    hideDefaultButtons,
    addButtonInsertArrangement,
    listButtonInsertArrangement,
    editButtonInsertArrangement,
    viewButtonInsertArrangement,
    defaultInventoryViewButtons,
  } = props;

  // const [currentResource, setCurrentResource] = useState<string>();
  const [showDeleteBtn, setShowDeleteBtn] = useState<boolean>(false);
  const [showEditBtn, setShowEditBtn] = useState<boolean>(false);

  // useEffect(() => {
  //   const currentPath: any = Object.keys(PATHS).find(pathKey => {
  //     const path = PATHS[pathKey];
  //     return path.path === location.pathname;
  //   });

  //   if (currentPath) {
  //     const resourceId = PATHS[currentPath].resourceId;

  //     if (resourceId !== RESOURCE_ENABLED) {
  //       setCurrentResource(resourceId.replace(/_OPEN/, ""));
  //     } else {
  //       setCurrentResource(RESOURCE_ENABLED);
  //     }
  //   }
  // }, [location.pathname]);

  // useEffect(() => {
  //   if (currentResource !== RESOURCE_ENABLED) {
  //     const deleteResources = resourceStore.resources.find(
  //       item => item.resourceId === `${currentResource}${ResourceType.DELETE}`
  //     );

  //     const editResources = resourceStore.resources.find(
  //       item => item.resourceId === `${currentResource}${ResourceType.EDIT}`
  //     );

  //     if (deleteResources) {
  //       setShowDeleteBtn(true);
  //     }

  //     if (editResources) {
  //       setShowEditBtn(true);
  //     }
  //   } else {
  //     setShowDeleteBtn(true);
  //     setShowEditBtn(true);
  //   }
  // }, [currentResource]);

  const addExtraButton = (): React.ReactNode => {
    if (addButton && addButtonInsertArrangement) {
      let currentKey = 7;

      switch (addButtonInsertArrangement) {
        case "First":
          currentKey = 1;
          break;
        case "Middle":
          currentKey = 3;
          break;
        case "Last":
          currentKey = 7;
          break;
      }

      return <React.Fragment key={currentKey}>{addButton}</React.Fragment>;
    }
  };

  const listExtraButton = () => {
    if (listButton && listButtonInsertArrangement) {
      let currentKey = 7;

      switch (listButtonInsertArrangement) {
        case "First":
          currentKey = 1;
          break;
        case "Middle":
          currentKey = 3;
          break;
        case "Last":
          currentKey = 7;
          break;
      }

      return <React.Fragment key={currentKey}>{listButton}</React.Fragment>;
    }
  };

  const viewExtraButton = () => {
    if (viewButton && viewButtonInsertArrangement) {
      let currentKey = 7;

      switch (viewButtonInsertArrangement) {
        case "First":
          currentKey = 1;
          break;
        case "Middle":
          currentKey = 5;
          break;
        case "Last":
          currentKey = 7;
          break;
      }

      return <React.Fragment key={currentKey}>{viewButton}</React.Fragment>;
    }
  };

  const editExtraButton = () => {
    if (editButton && editButtonInsertArrangement) {
      let currentKey = 7;

      switch (editButtonInsertArrangement) {
        case "First":
          currentKey = 1;
          break;
        case "Middle":
          currentKey = 3;
          break;
        case "Last":
          currentKey = 7;
          break;
      }

      return <React.Fragment key={currentKey}>{editButton}</React.Fragment>;
    }
  };

  const headerButtonHandler = (): any => {
    switch (viewMode) {
      case ViewMode.ADD:
      case ViewMode.COPY:
        if (!hideDefaultButtons) {
          return [
            addExtraButton(),
            <SiriusButton.Save
              key={2}
              onClick={() => onClickButtonType(MainActionType.SAVE)}
            />,
            <SiriusButton.Close
              key={4}
              onClick={() => onClickButtonType(MainActionType.CLOSE)}
            />,
          ];
        } else {
          return addButton;
        }
        break;
      case ViewMode.LIST:
        if (!hideDefaultButtons) {
          return [
            listExtraButton(),
            <SiriusButton.Refresh
              key={2}
              onClick={() => onClickButtonType(MainActionType.REFRESH)}
            />,
            <SiriusButton.Add
              key={4}
              onClick={() => onClickButtonType(MainActionType.ADD)}
            />,
          ];
        } else {
          return listButton;
        }
      case ViewMode.VIEW:
        if (!hideDefaultButtons && !defaultInventoryViewButtons) {
          return [
            viewExtraButton(),
            showEditBtn && (
              <SiriusButton.Edit
                key={2}
                onClick={() => onClickButtonType(MainActionType.EDIT)}
              />
            ),
            showEditBtn && (
              <SiriusButton.Add
                key={3}
                onClick={() => onClickButtonType(MainActionType.ADD)}
              />
            ),
            showDeleteBtn && (
              <SiriusButton.Delete
                key={4}
                onClick={() => onClickButtonType(MainActionType.DELETE)}
              />
            ),
            <SiriusButton.Close
              key={6}
              onClick={() => onClickButtonType(MainActionType.CLOSE)}
            />,
          ];
        } else if (defaultInventoryViewButtons) {
          return [
            viewExtraButton(),
            <SiriusButton.Add
              key={3}
              hidden={hideAddButton}
              onClick={() => onClickButtonType(MainActionType.ADD)}
            />,
            <SiriusButton.Close
              key={6}
              onClick={() => onClickButtonType(MainActionType.CLOSE)}
            />,
          ];
        } else {
          return viewButton;
        }
      case ViewMode.EDIT:
        if (!hideDefaultButtons) {
          return [
            editExtraButton(),
            <SiriusButton.Save
              key={2}
              onClick={() => onClickButtonType(MainActionType.SAVE)}
            />,
            <SiriusButton.Close
              key={4}
              onClick={() => onClickButtonType(MainActionType.CLOSE)}
            />,
          ];
        } else {
          return editButton;
        }
      default:
        return [];
    }
  };

  if (!hideDefaultButtons) {
    const sortedButtons = headerButtonHandler()?.sort((a, b) => {
      // Compare buttons based on their keys
      if (a.key < b.key) return -1;
      if (a.key > b.key) return 1;
      return 0;
    });
    return sortedButtons;
  }
  return headerButtonHandler();
};

export default TotHeaderButtons;
