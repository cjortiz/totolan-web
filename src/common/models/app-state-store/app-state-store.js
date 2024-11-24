import { types } from "mobx-state-tree";
export const AppStateStoreModel = types
    .model("AppState")
    .props({
    loading: types.optional(types.boolean, false),
    openDrawer: types.optional(types.boolean, false),
    isCollapsible: types.optional(types.boolean, false),
    isDarkMode: types.optional(types.boolean, false),
    currentChartOrder: types.optional(types.array(types.number), []),
    currentChart: types.optional(types.array(types.number), []),
    // ADD isPrevDarkMode TO DETERMINE THE PREV DAKMODE STATUS DUE (For fields purposes once Darmode)
    isPrevDarkMode: types.optional(types.boolean, false),
})
    .views(self => ({
    isLoading: () => self.loading,
}))
    .actions(self => ({
    setLoading: (loading) => {
        self.loading = loading;
    },
    setOpenDrawer: (open) => {
        self.openDrawer = open;
    },
    setIsCollapsible: (isCollapsible) => {
        self.isCollapsible = isCollapsible;
    },
    setIsDarkMode: (isDarkMode) => {
        self.isDarkMode = isDarkMode;
    },
    setCurrentChartOrder: (currentChartOrder) => {
        self.currentChartOrder.replace(currentChartOrder);
    },
    setCurrentChart: (currentChart) => {
        self.currentChart.replace(currentChart);
    },
    setIsPrevDark: (isPrevDarkMode) => {
        self.isPrevDarkMode = isPrevDarkMode;
    },
    reset: () => {
        Object.keys(DEFAULT_STATE).forEach(key => {
            const objKey = key;
            if (objKey === "currentChartOrder" ||
                objKey === "currentChart" ||
                objKey === "isPrevDarkMode") {
                // Skip resetting these currentChartOrder and currentChart
                return;
            }
            self[objKey] = DEFAULT_STATE[objKey];
        });
    },
}));
const DEFAULT_STATE = {
    loading: false,
    openDrawer: false,
    isCollapsible: false,
    isDarkMode: false,
    isPrevDarkMode: false,
    currentChartOrder: [1, 2, 3],
    currentChart: [1],
};
export const createAppStateDefaultModel = () => types.optional(AppStateStoreModel, DEFAULT_STATE);
export const getDefaultAppStateStoreModel = () => DEFAULT_STATE;
