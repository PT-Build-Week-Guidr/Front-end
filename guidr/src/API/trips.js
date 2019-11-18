import React, { useEffect } from "react";
import TripCard from "./addTrip";
import { connect } from 'react-redux';
import { FetchTrips } from "../API/actions/fetching";

const Trips = (props) => {
  useEffect(() => {
    props.FetchTrips();
}, [])

if(props.isFetching){
  return <p>Loading trips</p>
}

  return (
  <>
            {props.trips.map(trip => {
                return <TripCard key={trip.id} trip={trip.id} />
            })}
  </>
  );
};

const mapStateToProps = state => {
  return {
      trips: state.trips,
      isFetching: state.isFetching,
      error: state.error
  }
}

const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Trips);

