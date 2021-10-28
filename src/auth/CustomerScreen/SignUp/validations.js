import * as Yup from "yup";

export const initialValues = {
  firstName: "",
  surName: "",
  country: "---",
  mobileNumber: "",
  email: "",
  password: "",
  retypePassword: "",
};
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Your first name is Required"),
  surName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Your surname is Required"),
  country: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  mobileNumber: Yup.number()
    .min(11, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),

  email: Yup.string().email("Invalid email").required("Email is Required"),
  //   password: Yup.string()("Invalid Password").required("Required"),
  //   retypePassword: Yup.string()("Invalid Password").required("Required"),
  password: Yup.string().required("Password is required"),
  retypePassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
