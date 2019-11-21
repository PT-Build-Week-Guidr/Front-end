import React, { useEffect, useState } from "react";
// import TripCard from "./addTrip";
import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import DeleteTrips from "../API/actions/delete";
import TripDetails from "../API/deleteTrips";

const UserCardMain = props => {
  console.log("usercardmain", props);
  useEffect(() => {
    props.FetchTrips();
  }, []);
  // const tripList = props.trips;

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }
  console.log("usercardmain2", props.trips);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {props.trips.map(trip => {
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
          </Col>
        </Row>
      </Container>
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

const mapDispatchToProps = { FetchTrips, DeleteTrips };

export default connect(mapStateToProps, mapDispatchToProps)(UserCardMain);
