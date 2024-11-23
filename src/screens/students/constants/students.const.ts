import moment from "moment";
import { StudentData } from "../views";

export const DEF_STUDENT_DATA: StudentData = {
  firstName: "",
  lastName: "",
  middleName: "",
  address: "",
  gender: "",
  age: 0,
  birthDate: moment(),
  contactNum: "",
  mothersName: "",
  fathersName: "",
  idNumber: "",
  image: "",
  imageName: "",
  isUploaded: false,
};
