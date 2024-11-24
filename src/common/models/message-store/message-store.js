import { types } from "mobx-state-tree";
import { color } from "../../../theme";
export const MessageStoreModel = types
    .model("Message")
    .props({
    open: types.boolean,
    type: types.optional(types.string, ""),
    content: types.optional(types.string, ""),
})
    .actions((self) => ({
    showMessage: (type, message) => {
        self.type = type;
        self.content = message;
        self.open = true;
    },
}))
    .actions((self) => ({
    success: (message) => {
        self.showMessage("success", message);
    },
    error: (message) => {
        self.showMessage("error", message);
    },
    info: (message) => {
        self.showMessage("info", message);
    },
    warning: (message) => {
        self.showMessage("warning", message);
    },
    close: () => {
        self.open = false;
    },
    reset: () => {
        Object.keys(DEFAULT_STATE).forEach(key => {
            self[key] = DEFAULT_STATE[key];
        });
    },
}))
    .views((self) => ({
    getContent: () => {
        const { type, content } = self;
        return {
            type: type,
            message: type.toUpperCase(),
            description: content,
            placement: "bottomRight",
            onClose: () => {
                self.close();
            },
            duration: 5,
            style: {
                backgroundColor: color[type],
                color: color.white,
            },
        };
    },
}));
export const DEFAULT_STATE = {
    type: "",
    content: "",
    open: false,
};
export const createMessageDefaultModel = () => types.optional(MessageStoreModel, DEFAULT_STATE);
export const getDefaultMessageStoreModel = () => DEFAULT_STATE;
