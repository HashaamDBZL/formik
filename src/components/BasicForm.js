import { useFormik } from "formik";
import * as Yup from "yup";
import { basicSchema } from "../schemas/basicSchema.ts";

const onSubmit = () => {
  console.log("submitted");
};

const BasicForm = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && "bg-red-500"}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        onChange={handleChange}
        value={values.age}
        onBlur={handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Please confirm your password"
        onChange={handleChange}
        value={values.confirmPassword}
        onBlur={handleBlur}
      />
      <button type="submit"> Submit All</button>
    </form>
  );
};
export default BasicForm;
