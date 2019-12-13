import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// removed:
// state
// handleSubmit
// onChange
const UserForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    status && setUser(user => [...user, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <Field type="text" name="age" placeholder="age" />
        {touched.age && errors.age && <p className="errors">{errors.age}</p>}
        <Field type="text" name="height" placeholder="height" />
        {touched.height && errors.height && (
          <p className="errors">{errors.height}</p>
        )}
        <button type="submit">Add Smurf!</button>
      </Form>
    </div>
  );
};
const FormikUserForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);
export default FormikUserForm;
