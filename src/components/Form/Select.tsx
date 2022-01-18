import { ErrorMessage, Field } from "formik";
import React from "react";

function Select(props: any) {
  const { name, options, label, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <Field as="select" className="form-select" name={name} id={name} {...rest}>
        {options.map((option: any) => {
          return (
            <option value={option.value} key={option.key}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} className="text-danger" component="p" />
    </div>
  );
}

export default Select;
