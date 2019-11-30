import React, { useEffect } from "react";
// import TripCard from "./addTrip";
import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";
import { Container, Row, Col, Card, Button, CardHeader, CardFooter,
  CardBody, CardTitle, CardText } from "reactstrap";
import {Link} from "react-router-dom";
import DeleteTrips from "../API/actions/delete";
import TripDetails from "../API/deleteTrips";

const TripPage = props => {


  const tripList = props.trips;
  //update when your browsing has dictated a different result
  let curTrip = tripList.filter(it => `${it.id}`===`${props.match.params.id}`);
  let id = props.match.params.id
  // useEffect(()=> {
  //   curTrip = tripList.filter(it => `${it.id}`===`${props.match.params.id}`);
  //
  //   console.log("here!", curTrip);
  //
  // }, props.match.params.id)


  console.log(curTrip);
  useEffect(() => {
    props.FetchTrips();
  }, []);


  //if the data doesnt load show something
  if (props.isFetching) {
    return <p>Loading trips</p>;
  }

  //the if prevents errors by making sure there is data that exists before outputting anything
  if(curTrip[0] !== undefined){
      return (
        <div>
          <Container>

            <Row>
              <Col>
                <h2>{curTrip[0].title}</h2>
                <h3>{curTrip[0].type}</h3>
                <h4>{curTrip[0].description}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Start Date: {curTrip[0].start_date}</p>
                <p>End Date: {curTrip[0].end_date}</p>
                <p>Set to Private: {`${curTrip[0].private}`}</p>
              </Col>
            </Row>
            <Row>
              <Col>

              </Col>
          </Row>
          <Row>
            <Col>
              <Button tag={Link} to="/trips/edit">Edit</Button>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <br />
              <Button tag={Link} to="/trips">Back</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    //if somehow someone got to the page without selecting something it should show nothing
    return(
      <div>
        You need to make a selection
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    trips: state.GetPublicTrips.trips,
    isFetching: state.GetPublicTrips.isFetching,
    error: state.GetPublicTrips.error
  };
};


const mapDispatchToProps = { FetchTrips, DeleteTrips };

export default connect(mapStateToProps, mapDispatchToProps)(TripPage);