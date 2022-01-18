import { ErrorMessage, Field } from "formik";
import React, { Fragment } from "react";

function Radio(props: any) {
  const { name, options, label, ...rest } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        { 
        ( props:any ) => {            
          return options.map((option: any) => {
            return (
              <Fragment key={option.key}>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name={name}
                    value={option.value}
                    id={option.value}
                    checked={props.field.value===option.value}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={option.value}
                  >
                    {option.key}
                  </label>
                </div>
              </Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} className="text-danger" component="p" />
    </>
  );
}

export default Radio;
