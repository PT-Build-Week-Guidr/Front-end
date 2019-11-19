import React, { useEffect } from "react";
import TripCard from "./addTrip";
import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";

const Trips = props => {
  useEffect(() => {
    props.FetchTrips();
  }, []);
  const tripList = props.trips;

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }
  console.log(props.trips);

  return (
    <div>
      {tripList.map(trip => {
        return (
          <TripCard
            key={trip.id}
            trip={trip.id}
            title={trip.title}
            description={trip.description}
            type={trip.type}
            start_date={trip.start_date}
            end_date={trip.end_date}
            duration_hours={trip.duration_hours}
            duration_days={trip.duration_days}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.trips,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(Trips);
