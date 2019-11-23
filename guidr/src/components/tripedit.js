import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Api from "../API/AxiosHeader";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import FetchTrips from "../API/actions/fetching";

const MyEditTrip = props => {
  const [editTrip, setEditTrip] = useState({
    title: "",
    description: "",
    private: true,
    type: "",
    start_date: "",
    end_date: "",
    duration_hours: 0,
    duration_days: 0
  });

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }

  const handleChange = event => {
    setEditTrip({
      ...editTrip,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const id = localStorage.getItem("id");
    Api()
      .put(`https://guidr-project.herokuapp.com/trips/${id}`, editTrip)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={editTrip.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          value={editTrip.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={editTrip.private}
          type="checkbox"
          name="private"
          placeholder="private"
        />
        <input
          onChange={handleChange}
          value={editTrip.type}
          type="text"
          name="type"
          placeholder="type"
        />
        <input
          onChange={handleChange}
          value={editTrip.start_date}
          type="date"
          name="start_date"
          placeholder="start_date"
        />
        <input
          onChange={handleChange}
          value={editTrip.end_date}
          type="date"
          name="end_date"
          placeholder="end_date"
        />
        <input
          onChange={handleChange}
          value={editTrip.duration_hours}
          type="number"
          name="duration_hours"
          placeholder="duration_hours"
        />
        <input
          onChange={handleChange}
          value={editTrip.duration_days}
          type="number"
          name="duration_days"
          placeholder="duration_days"
        />
        <button type="submit" tag={Link} to="/trips/">Submit</button>
      </form>
    </div>
  );
};

export default MyEditTrip;