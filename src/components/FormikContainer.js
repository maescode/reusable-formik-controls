import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    {
      key: "Select an option",
      value: "",
    },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
    { key: "Option 4", value: "Option 4" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "roption 1" },
    { key: "Option 2", value: "roption 2" },
    { key: "Option 3", value: "roption 3" },
    { key: "Option 4", value: "roption 4" },
  ];

  const checkBoxOptions = [
    { key: "Option 1", value: "coption 1" },
    { key: "Option 2", value: "coption 2" },
    { key: "Option 3", value: "coption 3" },
    { key: "Option 4", value: "coption 4" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkBoxOption: "",
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkBoxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("Form Values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl
            control='input'
            label='Email'
            name='email'
            type='email'
          />

          <FormikControl
            control='textarea'
            label='Description'
            name='description'
          />

          <FormikControl
            control='select'
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions}
          />
          <FormikControl
            control='radio'
            label='Radio Topic'
            name='radioOption'
            options={radioOptions}
          />
          <FormikControl
            control='checkbox'
            label='Checkbox Topics'
            name='checkBoxOption'
            options={checkBoxOptions}
          />
          <FormikControl control='date' label='Pick a date' name='birthDate' />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
