import { translate } from "../i18n";
import { ExceptionType } from "./enum";
export const errorHandler = (result, showMessage, setIsLoading) => {
    if (result) {
        switch (result?.exceptionType) {
            case ExceptionType.Multiple:
                throw result.errorCodes;
            case ExceptionType.Single:
                //check if expired token or invalid token
                if (!result.isSuccess && result.errorCodes[0] === "expiredSession") {
                    const errorCode = ("errorMessage." +
                        result.errorCodes[0]);
                    showMessage("error", translate(errorCode));
                    break;
                }
                if (!result.isSuccess && result.errorCodes) {
                    if (Array.isArray(result.errorCodes)) {
                        for (let index = 0; index < result.errorCodes.length; index++) {
                            const obj = messageParamHandler(result?.messageParams);
                            const errorCode = ("errorMessage." +
                                result.errorCodes[index]);
                            showMessage("error", translate(errorCode, obj));
                            setIsLoading && setIsLoading(false);
                            break;
                        }
                    }
                    else {
                        const errorCode = "errorMessage." + result.errorCodes?.errorCode;
                        const errorDetail = result.errorCodes?.errorDetails[0]?.idName;
                        showMessage("error", translate(errorCode, { idName: errorDetail }));
                        setIsLoading && setIsLoading(false);
                    }
                }
                else {
                    showMessage("error", "Server Error");
                }
                break;
        }
    }
    else {
        showMessage("error", "Server Error");
    }
};
export const messageParamHandler = (data) => {
    if (data) {
        let emptyObject = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const value = data[key];
                emptyObject = {
                    ...emptyObject,
                    [key]: value,
                };
            }
        }
        return emptyObject;
    }
    else {
        return undefined;
    }
};
