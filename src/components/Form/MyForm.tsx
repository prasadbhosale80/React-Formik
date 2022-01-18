import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function MyForm() {
  const initialValues = {
      fname:'',
  };
  const onSubmit = (values:object) => {
      console.log(values);
      
  };
  const validationSchema = Yup.object({
    fname:Yup.string().required("First Name Required"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
            <div>
                <label htmlFor="fname"></label>
                <Field id="fname" type="text" name="fname" />
                <ErrorMessage name="fname"/>
            </div>
            <input type="submit" />
        </Form>
      </Formik>
    </>
  );
}

export default MyForm;
