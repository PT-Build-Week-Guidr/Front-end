
import React, {useEffect, useState} from "react";
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import api from "../API/axiosHeader";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import logo from '../images/logo.png';
import SignUp from "../API/newUserForm"
import { connect } from 'react-redux';
import { FetchTrips } from "../API/actions/fetching";




const MyTripNew = props => {

   const {values, touched, errors} = props;
   // console.log(props, values, touched, errors);
   // const [updateTrip, setUpdateTrip] = useState({
   //    title: "",
   //    description: "",
   //    private: true,
   //    type: "",
   //    start_date: "",
   //    end_date: "",
   //    duration_hours: 0,
   //    duration_days: 0
   //  });




  const handleSubmit = event => {
     event.preventDefault();
     let newTrip = {
      title: values.title,
      description: values.description,
      private: values.isPrivate,
      type: values.type,
      start_date: values.start_date,
      end_date: values.end_date,
      duration_hours: values.duration_hours,
      duration_days: values.duration_days
    };

    // setUpdateTrip(updateTrip2)

    event.preventDefault();
    const id = localStorage.getItem("id");

    api()
      .post(`https://guidr-project.herokuapp.com/users/${id}/trips`, newTrip)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
      <section >
          <img className="img-align" src={logo} alt="Guidr Logo"></img>
          <br />
          <h1>New Trip</h1>
          <br />
          <Form onSubmit={handleSubmit} className="trip-edit-form">
            <label>
              Title:{' '}
              <Field
                type="text"
                name="title"
                value={values.title}
                placeholder="Title"
              />
             {touched.title && errors.title && <p color="danger">{errors.title}</p>}
            </label>
            <br />
            <br />
            <label>
              Type:{' '}
              <Field
                type="text"
                name="type"
                value={values.type}
                placeholder="Type"
              />
              {touched.type && errors.type && <p color="danger">{errors.type}</p>}
            </label>
            <br />
            <br />
            <label>
              Description:{' '}
              <Field
                type="textarea"
                name="description"
                value={values.description}
                placeholder="Description"
              />
              {touched.description && errors.description && <p color="danger">{errors.description}</p>}
            </label>
            <br />
            <br />
            <label>
              Start Date:{' '}
              <Field
                type="date"
                name="start_date"
                selected={values.start_date}

              />
              {touched.start_date && errors.start_date && <p color="danger">{errors.start_date}</p>}
            </label>
            <br />
            <br />
            <label>
              End Date:{' '}
              <Field
                type="date"
                name="end_date"
                selected={values.end_date}

              />
              {touched.end_date && errors.end_date && <p color="danger">{errors.end_date}</p>}
            </label>
            <br />
            <br />
            <label>
              How many Days:{' '}
              <Field
                type="number"
                name="duration_day"
                value={values.duration_day}

              />
              {touched.duration_day && errors.duration_day && <p color="danger">{errors.duration_day}</p>}
            </label>
            <br />
            <br />
            <label>
              How many Hours:{' '}
              <Field
                type="number"
                name="duration_hours"
                value={values.duration_hours}

              />
              {touched.duration_hours && errors.duration_hours && <p color="danger">{errors.duration_hours}</p>}
            </label>
            <br />
            <br />
            <label>
              Set to Private?{' '}
              <Field
                type="checkbox"
                name="isPrivate"
                checked={values.isPrivate}

              />
              {touched.isPrivate && errors.isPrivate && <p color="danger">{errors.isPrivate}</p>}
            </label>
            <br />
            <br />
            <Button className="guidr-green-button" type="submit" >Submit</Button>{' '}

          </Form>


        </section>
      );

}
const EnhancedForm = withFormik({
    mapPropsToValues: ({title, type, description, isPrivate, start_date, end_date, duration_day, duration_hours}) => ({
        title: title || "",
        type: type || "",
        description: description || "",
        isPrivate: isPrivate || false,
        duration_day: duration_day || "",
        duration_hours: duration_hours || ""

    }),

    validationSchema: Yup.object().shape({
        title: Yup.string()
            .max(20, 'Title must be shorter than 20 symbols')
            .required('Title is required!'),

        type: Yup.string()
            .min(1, 'Type must be at least 1 symbol')
            .max(10, 'Type must be shorter than 10 symbols')
            .required('Type is required!'),

        description: Yup.string()
            .min(1, 'Description must be at least 1 symbol')
            .max(100, 'Description must be shorter than 100 symbols')
            .required('Description is required!'),
    })

})(MyTripNew);



const TripNew = connect()(EnhancedForm);

export default TripNew;
