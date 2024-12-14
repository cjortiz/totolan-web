// import { decryptResponse } from "./../../../utils/common-utils";
import axios, { AxiosInstance } from "axios";
import { encryptPayload } from "../../../utils/common-utils";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:54870/api/web-totolan",
  timeout: 30000,
  headers: {
    "x-api-secret": "http://localhost:54870/api",
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": "frame-ancestors 'self'",
  },
});

// AXIOS INTERCEPTOR
axiosInstance.interceptors.request.use(
  async (request) => {
    // REQUEST HEADER

    // VALIDATE FORM DATA/REQUEST PARAM REQUEST
    const isFormData = request.data instanceof FormData;

    // VALIDATE IF THE REQUEST HAS DATA TO APPLY ENCRYPTION
    if (request.data && !isFormData) {
      try {
        // ENCRYPT PAYLOAD REQUEST
        request.data = {
          encodedEncryptedData: encryptPayload(JSON.stringify(request.data)),
        };
        console.log(request.data);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return request;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

// AXIOS RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    try {
      // VALIDATE IF RESPONSE IS A FILE TYPE
      if (typeof response.data === "string") {
        // DECRYPT RESPONSE
        response.data = response.data;
        response.data.resultData = response.data.resultData;
        return response;
      } else {
        return response;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async (error) => {
    // DECRYPT THE ERROR RESPONSE
    error.response.data = error.response.data;

    return Promise.reject(error);
  }
);
