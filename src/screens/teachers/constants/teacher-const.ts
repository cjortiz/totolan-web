import moment from "moment";
import { TeacherData } from "../data";

export const DEF_TEACHER_DATA: TeacherData = {
  id: undefined,
  firstName: "",
  lastName: "",
  middleName: "",
  address: "",
  gender: "",
  email: "",
  birthDate: moment(),
  contactNum: "",
  mothersName: "",
  fathersName: "",
  idNumber: "",
  image: "",
  imageName: "",
  isUploaded: false,
};
