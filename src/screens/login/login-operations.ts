import { ApiResultModel, ShowMessageInterface } from "../../common";
import { LoginServiceApi } from "../../services/api/login/login-service";
import { LoginInputValue, LoginInterface } from "./login.props";

// Wil be invoked if all fields are valid and the user clicks the LOGIN button
export const login = async (
  values: LoginInputValue,
  showMessage: ShowMessageInterface,
  setIsLoading: (value: boolean) => void,
) => {
  setIsLoading(true);
  return await LoginServiceApi.login(values)
    .then((response: ApiResultModel<LoginInterface>) => {
      if (response.isSuccess) {
        return response.resultData;
      }
    })
    .catch((error: ApiResultModel<LoginInterface>) => {
      //   siriusErrorHandler(error, showMessage);
      //   getLockDetails(values, showMessage, setErrorCount);

      setIsLoading(false);
      return error?.resultData;
    })
    .finally(() => {
      setIsLoading(false);
    });
};
