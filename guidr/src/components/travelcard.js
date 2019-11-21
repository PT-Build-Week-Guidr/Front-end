import React, { useEffect } from "react";

import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";

import {Media} from 'reactstrap';
import temp from '../images/icon.png';



const TravelCardMain = (props) => {
  //define the current profile as contained in this component fill it with info for debug purposes


  console.log('it works.. sorta!');

  useEffect(() => {
    props.FetchTrips();
  }, []);
  const tripList = props.trips;

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }

  console.log("travelcard", props.trips);






  return (
    <div>

        {tripList.map(trip => {
          return (

            <TripDetails
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
        <br />


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




function TripDetails(props){
  // const {title, description, isPrivate, isProfessional, images, duration, distance, date, tripType} = trips;
  // const ref = `/character/${trip.id}`;

  // function characterSelect(){
  //   // console.log(character.id);
  // }

  return (
    <Media className="travel-list" href="#">
        <Media left >
            <Media object data-src={temp} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            {props.title}
          </Media>
          {props.type}
          <p>{props.description}</p>

            <span>{props.start_date} - {props.end_date}</span>
        </Media>

    </Media>

  );
}



const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(TravelCardMain);
