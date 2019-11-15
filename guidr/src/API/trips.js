import React, { useState, useEffect } from "react";
import api from "./axiosHeader";
import Profile from "./profile";
import TripCard from "./addTrip";
const Trips = () => {
  const [TripList, setTripList] = useState([]);

  const addTrip = () => {
    api()
      .post("https://guidr-project.herokuapp.com/users/:id/trips", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        // console.log(res.data);
        setTripList(res.data);
      })

      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    api()
        .get("https://guidr-project.herokuapp.com/users/:id/trips", {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            setTripList(res.data)
            console.log(res.data)
        })

        .catch(err => {
            console.log(err.response)
        })
}, [])



  return (
    <div>
            {TripList.map(trip => {
                return <TripCard key={trip} trip={trip} />
            })}
    </div>
  );
};

export default Trips;
