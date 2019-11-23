import React from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from "../API/axiosHeader";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from '../images/logo.png';

import { connect } from 'react-redux';

const MyInnerForm = props => {
   const {values, touched, errors} = props;

    const handleSubmit = event => {
        event.preventDefault();
        let auth = {username:values.username, password:values.password};
        api()
            .post("https://guidr-project.herokuapp.com/users/login", auth)
            .then(res => {
                console.log(res.data.token)
                console.log(res.data.id)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.id)

            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section >
            <img className="img-align" src={logo} alt="Guidr Logo"></img>
            <br />
            <br />
            <Form onSubmit={handleSubmit} className="login-form">
                <label>
                    Username:{' '}
                <Field
                        type="text"
                        name="username"
                        value={values.username}
                        placeholder="username"
                    />
                     {touched.username && errors.username && <p color="danger">{errors.username}</p>}
                </label>
                <br />
                <br />
                <label>
                    Password:{' '}
                   <Field
                        type="password"
                        name="password"
                        value={values.password}
                        placeholder="password"
                    />
                     {touched.password && errors.password && <p color="danger">{errors.password}</p>}
                </label>
                <br />
                <br />
                <Button className="guidr-green-button" tag={Link} to='/home'>Submit</Button>{' '}

            </Form>
            <br />
            <p>Don't have an account? Click here to create one:</p>
            <Button color="success" tag={Link} to='/signUp'>Sign Up</Button>{' '}

        </section>
    );
}
const EnchancedForm = withFormik({
    mapPropsToValues: ({username, password}) => ({
        username: username || "",
        password: password || "",
    }),

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .max(20, 'Username must be shorter than 20 symbools')
            .required('Username is required!'),

        password: Yup.string()
            .min(2, 'Invalid Password')
            .max(10, 'Password must be shorter than 10 symbols')
            .required('Password is required!'),
    })

})(MyInnerForm);

const WelcomePage = connect()(EnchancedForm);

export default WelcomePage;
