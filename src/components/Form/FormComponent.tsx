import React from "react";
import FormControl from "./FormControl";
import * as Yup from "yup";
import { Form, Formik } from "formik";
function FormComponent() {
  const initialValues = {
    Username: "",
    Comment: "",
    Language: "",
    Gender:'',
    Branch:'',
    DOB: ''
  };
  const onSubmit = (values: object) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    Username: Yup.string().required("Username Required"),
    Comment: Yup.string().required("Comment Required"),
    Language: Yup.string().required("Select Language"),
    Gender: Yup.string().required("Select Gender"),
    Branch: Yup.array().required("Select Branch"),
    DOB:Yup.date().required("Enter DOB"),
  });
  

  const selectLanguage = [
    { key: "Select Language", value: "" },
    { key: "Python", value: "python" },
    { key: "Java", value: "java" },
    { key: "React", value: "react" },
  ];

  const selectGender = [
    { key: "Male", value: "m" },
    { key: "Female", value: "f" },
  ];
  const selectBranch = [
    { key: "Electronics", value: "etc" },
    { key: "Mechanical", value: "mech" },
  ];
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FormControl
            control="input"
            name="Username"
            type="text"
            label="Username"
          />
          
          <FormControl
            control="date"
            name="DOB"
            label="Date of Birth"
          />

          <FormControl
            control="radio"
            name="Gender"
            label="Gender"
            options={selectGender}
          />

          <FormControl
            control="select"
            name="Language"
            label="Favourite Language"
            options={selectLanguage}
          />

          <FormControl
            control="checkbox"
            name="Branch"
            label="Branch"
            options={selectBranch}
          />

          <FormControl
            control="textarea"
            name="Comment"
            type="textarea"
            label="Comment"
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FormComponent;
