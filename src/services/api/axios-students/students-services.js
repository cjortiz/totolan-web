import { axiosInstance } from "../axios/axios-instance";
const fetchStudentList = (filterData) => {
    return axiosInstance
        .post(`/students/get-all`, filterData)
        .then((response) => {
        return response?.data;
    })
        .catch((error) => {
        throw error.response?.data;
    });
};
const addNewStudent = (value) => {
    console.log(value);
    return axiosInstance
        .post(`/students`, value)
        .then((response) => {
        return response.data;
    })
        .catch((err) => {
        throw err.response?.data;
    });
};
const fetchStudentById = (value) => {
    return axiosInstance
        .get(`/students/${value}`)
        .then((response) => {
        return response.data;
    })
        .catch((err) => {
        throw err.response?.data;
    });
};
export const StudentApi = {
    addNewStudent,
    fetchStudentById,
    fetchStudentList,
};
