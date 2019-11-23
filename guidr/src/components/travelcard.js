import React, { useEffect } from "react";

import { connect } from "react-redux";


import FetchTrips from "../API/actions/fetching";
import {Link} from 'react-router-dom';

import {Media, Button} from 'reactstrap';

// import temp from '../images/icon.png';



const TravelCardMain = (props) => {
  //define the current profile as contained in this component fill it with info for debug purposes

  useEffect(() => {
    props.FetchTrips();
  }, []);
  const tripList = props.trips;

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }
  console.log("TravelCardMain", tripList[0]);
  console.log("travelcard", props);

  return (
    <div>

        {tripList.map(trip => {
          return (

            <TripDetails
              key={trip.id}
              trip={trip.id}
              title={trip.title}
              full_name={trip.full_name}
              description={trip.description}
              type={trip.type}
              start_date={trip.start_date}
              end_date={trip.end_date}
              duration_hours={trip.duration_hours}
              duration_days={trip.duration_days}
            />

          );
        })}
        <br />
        <br />
        <Button tag={Link} to='new/'> Add Trip </Button>


    </div>
  );
};

const mapStateToProps = state => {
  return {
    trips: state.GetPublicTrips.trips,
    isFetching: state.GetPublicTrips.isFetching,
    error: state.GetPublicTrips.error
  };
};

function TripDetails(props) {
  const ref = `/users/${props.trip}/trips/`;

  // function characterSelect(){
  //   // console.log(character.id);
  // }

  return (
    <Media className="travel-list" href={ref}>
      <Media left className="travel-name">
        <Media> Guidr: {props.full_name} </Media>
      </Media>
      <Media body>
        <Media heading>{props.title}</Media>
        {props.type}
        <p>{props.description}</p>

        <span>
          {props.start_date} - {props.end_date}
        </span>
      </Media>
    </Media>
  );
}

const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(TravelCardMain);
