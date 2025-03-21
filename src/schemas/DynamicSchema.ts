import * as Yup from "yup";

export const DynamicFormSchema = Yup.object().shape({
  summary: Yup.string().required(),
  employees: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is Required"),
      email: Yup.string()
        .required("Email is Required")
        .email("Put in a valid email which you use / can access"),
      age: Yup.number(),
    })
  ),
});
