import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import SiriusButton from "../tot-button";
import { MainActionType, ViewMode } from "../../../constants";
export const SiriusHeaderButtons = (props) => {
    const { viewMode, onClickButtonType, addButton, viewButton, listButton, editButton, hideAddButton, hideDefaultButtons, addButtonInsertArrangement, listButtonInsertArrangement, editButtonInsertArrangement, viewButtonInsertArrangement, defaultInventoryViewButtons, } = props;
    // const [currentResource, setCurrentResource] = useState<string>();
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);
    const [showEditBtn, setShowEditBtn] = useState(false);
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
    const addExtraButton = () => {
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
            return _jsx(React.Fragment, { children: addButton }, currentKey);
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
            return _jsx(React.Fragment, { children: listButton }, currentKey);
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
            return _jsx(React.Fragment, { children: viewButton }, currentKey);
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
            return _jsx(React.Fragment, { children: editButton }, currentKey);
        }
    };
    const headerButtonHandler = () => {
        switch (viewMode) {
            case ViewMode.ADD:
            case ViewMode.COPY:
                if (!hideDefaultButtons) {
                    return [
                        addExtraButton(),
                        _jsx(SiriusButton.Save, { onClick: () => onClickButtonType(MainActionType.SAVE) }, 2),
                        _jsx(SiriusButton.Close, { onClick: () => onClickButtonType(MainActionType.CLOSE) }, 4),
                    ];
                }
                else {
                    return addButton;
                }
                break;
            case ViewMode.LIST:
                if (!hideDefaultButtons) {
                    return [
                        listExtraButton(),
                        _jsx(SiriusButton.Refresh, { onClick: () => onClickButtonType(MainActionType.REFRESH) }, 2),
                        _jsx(SiriusButton.Add, { onClick: () => onClickButtonType(MainActionType.ADD) }, 4),
                    ];
                }
                else {
                    return listButton;
                }
            case ViewMode.VIEW:
                if (!hideDefaultButtons && !defaultInventoryViewButtons) {
                    return [
                        viewExtraButton(),
                        showEditBtn && (_jsx(SiriusButton.Edit, { onClick: () => onClickButtonType(MainActionType.EDIT) }, 2)),
                        showEditBtn && (_jsx(SiriusButton.Add, { onClick: () => onClickButtonType(MainActionType.ADD) }, 3)),
                        showDeleteBtn && (_jsx(SiriusButton.Delete, { onClick: () => onClickButtonType(MainActionType.DELETE) }, 4)),
                        _jsx(SiriusButton.Close, { onClick: () => onClickButtonType(MainActionType.CLOSE) }, 6),
                    ];
                }
                else if (defaultInventoryViewButtons) {
                    return [
                        viewExtraButton(),
                        _jsx(SiriusButton.Add, { hidden: hideAddButton, onClick: () => onClickButtonType(MainActionType.ADD) }, 3),
                        _jsx(SiriusButton.Close, { onClick: () => onClickButtonType(MainActionType.CLOSE) }, 6),
                    ];
                }
                else {
                    return viewButton;
                }
            case ViewMode.EDIT:
                if (!hideDefaultButtons) {
                    return [
                        editExtraButton(),
                        _jsx(SiriusButton.Save, { onClick: () => onClickButtonType(MainActionType.SAVE) }, 2),
                        _jsx(SiriusButton.Close, { onClick: () => onClickButtonType(MainActionType.CLOSE) }, 4),
                    ];
                }
                else {
                    return editButton;
                }
            default:
                return [];
        }
    };
    if (!hideDefaultButtons) {
        const sortedButtons = headerButtonHandler()?.sort((a, b) => {
            // Compare buttons based on their keys
            if (a.key < b.key)
                return -1;
            if (a.key > b.key)
                return 1;
            return 0;
        });
        return sortedButtons;
    }
    return headerButtonHandler();
};
export default SiriusHeaderButtons;
