export const getClassName = (type) => {
    if (type) {
        switch (type) {
            case "secondary":
                return "sirius-button-secondary";
            case "tertiary":
                return "sirius-button-tertiary";
            case "link":
                return "sirius-button-link";
            case "add":
                return "sirius-icon-primary";
            case "refresh":
            case "menu":
            case "edit":
            case "delete":
            case "close":
            case "options":
            case "batchselect":
                return "sirius-icon-secondary";
            default:
                return "sirius-button-primary";
        }
    }
};
