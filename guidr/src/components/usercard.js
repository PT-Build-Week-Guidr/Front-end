import React, { useEffect } from "react";
// import TripCard from "./addTrip";
import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";
import { Container, Row, Col, Card, Button, CardHeader, CardFooter,
  CardBody, CardTitle, CardText } from "reactstrap";
import {Link} from "react-router-dom";
import DeleteTrips from "../API/actions/delete";
import TripDetails from "../API/deleteTrips";

const UserCardMain = props => {

  // const [curProfile, setCurProfile] = useState([]);
  // const [curTrips, setCurTrips] = useState([]);
  const tripList = props.trips;

  let curProfile = tripList;

  useEffect(()=> {
    curProfile = tripList.filter(it => `${it.id}`===`${props.match.params.id}`);
    // setCurProfile(tripList.filter(it => `${it.id}`===`${props.match.params.id}`));
    console.log("here!", tripList.filter(it => `${it.id}`===`${props.match.params.id}`))

  }, [props.match.params.id])

  // console.log("props match id", props.match.params.id);


  // useEffect(() => {
  //   tripList.forEach(trip =>{
  //     console.log(trip.id);
  //     if (`${trip.id}` === `${props.match.params.id}`){
  //       setCurProfile(trip);
  //     }
  //   })
  //
  // }, [props.match.params.id]);

  useEffect(() => {
    props.FetchTrips();
  }, []);



  // console.log("usercardmain props match:", props);

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }

  // console.log("usercardmain2", props.trips);
  if(curProfile[0] !== undefined){
      return (
        <div>
          <Container>
            <Row>
              <Col>

              </Col>
            </Row>
            <Row>
              <Col>
                <h2>{curProfile[0].title}</h2>
                <h3>{curProfile[0].type}</h3>
                <h4>{curProfile[0].description}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Start Date: {curProfile[0].start_date}</p>
                <p>End Date: {curProfile[0].end_date}</p>
                <p>Set to Private: {`${curProfile[0].private}`}</p>
              </Col>
            </Row>
            <Row>
              <Col>

              </Col>
          </Row>
          <Row>
            <Col>
              <Button tag={Link} to="/trips/edit/">Edit</Button>
              <Button tag={Link} to="/trips/delete/">Delete</Button>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
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

const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(UserCardMain);
