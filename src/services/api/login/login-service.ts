import { TotError, TotResponse } from "../../../common";
import { LoginInputValue, LoginInterface } from "../../../screens";
import { axiosInstance } from "../axios/axios-instance";

const login = async (values: LoginInputValue) => {
  return await axiosInstance
    .post("/login", values)
    .then((result: TotResponse<LoginInterface>) => {
      console.log(result.data);
      return result.data;
    })
    .catch((error: TotError<TotResponse<LoginInterface>>) => {
      throw error;
    });
};

export const LoginServiceApi = {
  login,
};
