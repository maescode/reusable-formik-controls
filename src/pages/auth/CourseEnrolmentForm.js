import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/FormikControl";

const CourseEnrolmentForm = () => {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "React" },
    { key: "Angular", value: "Angular" },
    { key: "Vue", value: "Vue" },
  ];

  const checkBoxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "Javascript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: "",
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required(),
    bio: Yup.string().required("required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.string().required("required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl control='textarea' label='Bio' name='bio' />
              <FormikControl
                control='select'
                label='Course'
                name='course'
                options={dropdownOptions}
              />
              <FormikControl
                control='checkbox'
                label='Your Skill Set'
                name='skills'
                options={checkBoxOptions}
              />
              <FormikControl
                control='date'
                label='Course date'
                name='courseDate'
              />
              <button type='submit' disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseEnrolmentForm;
