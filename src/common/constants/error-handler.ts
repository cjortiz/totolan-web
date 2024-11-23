import { translate, TxKeyPath } from "../i18n";
import { ApiResultModel, ShowMessageInterface } from "./common-props";
import { ExceptionType } from "./enum";

export const errorHandler = (
  result: ApiResultModel<any> | undefined,
  showMessage: ShowMessageInterface,
  setIsLoading?: (data: any) => void
) => {
  if (result) {
    switch (result?.exceptionType) {
      case ExceptionType.Multiple:
        throw result.errorCodes;
      case ExceptionType.Single:
        //check if expired token or invalid token
        if (!result.isSuccess && result.errorCodes[0] === "expiredSession") {
          const errorCode: TxKeyPath = ("errorMessage." +
            result.errorCodes[0]) as TxKeyPath;
          showMessage("error", translate(errorCode));
          break;
        }

        if (!result.isSuccess && result.errorCodes) {
          if (Array.isArray(result.errorCodes)) {
            for (let index = 0; index < result.errorCodes.length; index++) {
              const obj: object | undefined = messageParamHandler(
                result?.messageParams
              );
              const errorCode: TxKeyPath = ("errorMessage." +
                result.errorCodes[index]) as TxKeyPath;
              showMessage("error", translate(errorCode, obj));
              setIsLoading && setIsLoading(false);
              break;
            }
          } else {
            const errorCode: any =
              "errorMessage." + result.errorCodes?.errorCode;
            const errorDetail: any = result.errorCodes?.errorDetails[0]?.idName;

            showMessage("error", translate(errorCode, { idName: errorDetail }));
            setIsLoading && setIsLoading(false);
          }
        } else {
          showMessage("error", "Server Error");
        }
        break;
    }
  } else {
    showMessage("error", "Server Error");
  }
};

export const messageParamHandler = (
  data: [string, object]
): Object | undefined => {
  if (data) {
    let emptyObject: object = {};

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
  } else {
    return undefined;
  }
};
