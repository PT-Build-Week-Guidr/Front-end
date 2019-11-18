import React, { useState } from "react";

const Profile = () => {
  const [newTrip, setNewTrip] = useState({
    id: 2,
    title: "",
    description: "",
    private: "",
    type: "",
    start_date: "",
    end_date: "",
    duration_hours: "",
    duration_days: ""
  });

  const handleChange = event => {
    setNewTrip({
      ...newTrip,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setNewTrip(newTrip)
    console.log(newTrip)
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
          type="text"
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
          name="Start_date"
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
          type="text"
          name="duration_hours"
          placeholder="duration_hours"
        />
        <input
          onChange={handleChange}
          value={newTrip.duration_days}
          type="text"
          name="duration_days"
          placeholder="duration_days"
        />
        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};
export default Profile;
