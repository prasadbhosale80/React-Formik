import { ErrorMessage, Field } from "formik";
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

//npm install react-datepicker --save
//npm i --save-dev @types/react-datepicker
function Date(props: any) {
  const { name, label, ...rest } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <Field id={name}  name={name}>
        {(props: any) => {
          const { setFieldValue } = props.form;
          const { value } = props.field;
          return (
            <DateView
            className="form-control"
              id={name}
              {...rest}
              selected={value}
              onChange={(val:any) => {
                return setFieldValue(name, val);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} className="text-danger" component="p" />
    </div>
  );
}

export default Date;
