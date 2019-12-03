import React, { useState } from "react";
import Api from "./axiosHeader";

const Profile = props => {
  const [newTrip, setNewTrip] = useState({
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
    setNewTrip({
      ...newTrip,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = localStorage.getItem("id");
    Api()
      .post(`https://guidr-project.herokuapp.com/users/${id}/trips`, newTrip)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newTrip.title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          value={newTrip.description}
          type="text"
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={newTrip.private}
          type="checkbox"
          name="private"
          placeholder="private"
        />
        <input
          onChange={handleChange}
          value={newTrip.type}
          type="text"
          name="type"
          placeholder="type"
        />
        <input
          onChange={handleChange}
          value={newTrip.start_date}
          type="date"
          name="start_date"
          placeholder="start_date"
        />
        <input
          onChange={handleChange}
          value={newTrip.end_date}
          type="date"
          name="end_date"
          placeholder="end_date"
        />
        <input
          onChange={handleChange}
          value={newTrip.duration_hours}
          type="number"
          name="duration_hours"
          placeholder="duration_hours"
        />
        <input
          onChange={handleChange}
          value={newTrip.duration_days}
          type="number"
          name="duration_days"
          placeholder="duration_days"
        />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default Profile;
