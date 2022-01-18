import { ErrorMessage, Field } from "formik";
import React from "react";

function Input(props: any) {
  const { label, name, type, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field
        type={type}
        className="form-control"
        id={name}
        placeholder={`Enter ${label}`}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} className="text-danger" component="p" />
    </div>
  );
}

export default Input;
