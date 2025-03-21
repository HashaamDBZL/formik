import { Field, FieldArray, Form, Formik, FormikProps } from "formik";
import React from "react";

const DynamicForm = () => {
  interface IValue {
    summary: string;
    employees: Array<{ name: string; age: number; email: string }>;
  }
  const initialValues: IValue = {
    summary: "",
    employees: [
      { name: "John Doe", age: 30, email: "John@doe.com" },
      { name: "Jane Doe", age: 29, email: "Jane@doe.com" },
    ],
  };
  const onSubmit = (values: IValue) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ values }: FormikProps<IValue>) => (
        <Form className="bg-red-300/50 text-lg">
          <label htmlFor="summary">Summary</label>
          <Field name="summary" id="summary" className="border p-4" />
          <div className="p-4">
            <FieldArray
              name="employees"
              render={({ insert, remove }) => {
                return (
                  <div>
                    {values.employees.map((_, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col border rounded shadow"
                        >
                          <label htmlFor={`employees.${index}.name`}>
                            Name
                          </label>
                          <Field
                            id={`employees.${index}.name`}
                            name={`employees.${index}.name`}
                            className="border shadow rounded"
                          />

                          <label htmlFor={`employees.${index}.age`}>Age</label>
                          <Field
                            id={`employees.${index}.age`}
                            name={`employees.${index}.age`}
                            type="number"
                            className="border shadow rounded"
                          />

                          <label htmlFor={`employees.${index}.email`}>
                            Email
                          </label>
                          <Field
                            id={`employees.${index}.email`}
                            name={`employees.${index}.email`}
                            type="email"
                            className="border shadow rounded"
                          />
                        </div>
                      );
                    })}
                    <button
                      type="button"
                      className="shadow rounded border p-4"
                      onClick={() => {
                        insert(values.employees.length + 1, {
                          name: "",
                          age: 20,
                          email: "",
                        });
                      }}
                    >
                      Add Employee
                    </button>
                  </div>
                );
              }}
            />
          </div>
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
