import React, { useState } from "react";
import api from "./AxiosHeader";
import { Link } from 'react-router-dom';


const UpdateTrips = props => {

  const [updateTrip, setUpdateTrip] = useState({
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
    setUpdateTrip({
      ...updateTrip,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = props.match.params.id
    // console.log(props.match.params.id)
    api()
      .put(`https://guidr-project.herokuapp.com/trips/${id}`, updateTrip)
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
          value={updateTrip.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          value={updateTrip.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={updateTrip.private}
          type="checkbox"
          name="private"
          placeholder="private"
        />
        <input
          onChange={handleChange}
          value={updateTrip.type}
          type="text"
          name="type"
          placeholder="type"
        />
        <input
          onChange={handleChange}
          value={updateTrip.start_date}
          type="date"
          name="start_date"
          placeholder="start_date"
        />
        <input
          onChange={handleChange}
          value={updateTrip.end_date}
          type="date"
          name="end_date"
          placeholder="end_date"
        />
        <input
          onChange={handleChange}
          value={updateTrip.duration_hours}
          type="number"
          name="duration_hours"
          placeholder="duration_hours"
        />
        <input
          onChange={handleChange}
          value={updateTrip.duration_days}
          type="number"
          name="duration_days"
          placeholder="duration_days"
        />
        <button tag={Link} to="users/:id/edit/trips" type="submit">Update Trip</button>
      </form>
    </div>
  );
};

export default UpdateTrips;
