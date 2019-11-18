import React, { useState, useEffect } from "react";
import api from "./axiosHeader";
import Profile from "./profile";
import TripCard from "./addTrip";
const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [getTrips, setGetTrips] = useState([]);

  useEffect(() => {
    api()
        .post("https://guidr-project.herokuapp.com/users/:1/trips", {
            headers: {
                Authorization: localStorage.getItem('token'),
                userID: localStorage.getItem("id"),
            }
        })
        .then(res => {
            setTrips(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
}, [])

  api()
    .get("https://guidr-project.herokuapp.com/users/:1/trips", {
      headers: {
        Authorization: localStorage.getItem("token"),
      }
    })
    .then(res => {
      // console.log(res.data);
      setGetTrips(res.data)
    })

    .catch(err => {
      console.log(err.response);
    });


  return (
    <div>
            {trips.map(trip => {
                return <TripCard key={trip} trip={trip} />
            })}
    </div>
  );
};

export default Trips
