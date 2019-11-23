import React from "react";
import api from "./AxiosHeader";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MySignUpForm = props => {

  const { values, touched, errors } = props;

  const handleSubmit = event => {
    event.preventDefault();
    let userAuth = { username: values.username, password: values.password, email: values.email, full_name: values.full_name }
    api()
      .post("https://guidr-project.herokuapp.com/users/signUp", userAuth)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section>
    <Form onSubmit={handleSubmit}>
      <Field
        type="text"
        name="username"
        placeholder="username"
        value={values.username}
      />
      {touched.username && errors.username && <p color="danger">{errors.username}</p>}
      <br />
      <br />
      <Field
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
      />
      {touched.password && errors.password && <p color="danger">{errors.password}</p>}
      <br />
      <br />
      <Field
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
      />
      {touched.email && errors.email && <p color="danger">{errors.email}</p>}
      <br />
      <br />
      <Field
        type="text"
        name="full_name"
        placeholder="full name"
        value={values.full_name}
      />
      {touched.full_name && errors.full_name && <p color="danger">{errors.full_name}</p>}
      <br />
      <br />
      <button className="guidr-green-button" tag={Link} to='/home'>Sign Up</button>{' '}
    </Form>
    </section>
  );
};

const EnchanedSignUpForm = withFormik({
  mapPropsToValues: ({ username, password, email, full_name }) => ({
    username: username || "",
    password: password || "",
    email: email || "",
    full_name: full_name || "",
  }),

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .max(20, 'Username must be shorter than 20 symbols!')
      .required('Username is requred'),

    password: Yup.string()
      .min(2, 'Invalid Password')
      .max(10, 'Password must be shorter than 10 symbols')
      .required('Password is required!'),

    email: Yup.string()
      .min(2, 'Invalid email')
      .max(20, 'Email must be shorter than 20 symbols')
      .required('Email is required!'),

    full_name: Yup.string()
      .min(2, 'Invalid Name')
      .max(20, 'Name must be shorter than 20 symbols')
      .required('Name is required!'),
  })
})(MySignUpForm);

const SignUp = connect()(EnchanedSignUpForm);

export default SignUp;
