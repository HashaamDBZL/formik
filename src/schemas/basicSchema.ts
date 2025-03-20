import * as yup from "yup";
const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required(),
  age: yup.number().integer().positive().required(),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "Please create a stronger password")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Required"),
});
