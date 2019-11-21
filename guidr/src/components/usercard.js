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

  // const [curProfile, setCurProfile] = useState([]);
  // const [curTrips, setCurTrips] = useState([]);
  const tripList = props.trips;
  let hasRun = 0;
  let curProfile = tripList;

  useEffect(()=> {
    let curProfile = tripList.filter(it => `${it.id}`===`${props.match.params.id}`);
    // setCurProfile(tripList.filter(it => `${it.id}`===`${props.match.params.id}`));
    console.log("here!", tripList.filter(it => `${it.id}`===`${props.match.params.id}`))
    hasRun = 1;
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




  console.log("usercardmain", curProfile[0], hasRun);
  if (hasRun === 1){
    console.log("usercardmain", curProfile[0]);
  }

  useEffect(() => {
    props.FetchTrips();
  }, []);



  // console.log("usercardmain props match:", props);

  if (props.isFetching) {
    return <p>Loading trips</p>;
  }

  // console.log("usercardmain2", props.trips);
  if(curProfile[0]!=undefined){
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
                <p>"{curProfile[0].tagline}"</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Specialty: {curProfile[0].guideSpecialty}</p>
                <p>Age: {curProfile[0].age}</p>
                <p>Years Experience: {curProfile[0].yearsExperience}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>My Trips:</h2>
              </Col>
          </Row>
          <Row>
            <Col>

                <TripDetails2
                  key={curProfile[0].id}
                  trip={curProfile[0].id}
                  title={curProfile[0].title}
                  description={curProfile[0].description}
                  type={curProfile[0].type}
                  start_date={curProfile[0].start_date}
                  end_date={curProfile[0].end_date}
                  duration_hours={curProfile[0].duration_hours}
                  duration_days={curProfile[0].duration_days}
                />


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

function TripDetails2(props){
  // const {title, description, duration_day, duration_hours, end_date, type} = trips;
  // const ref = `/character/${trip.id}`;

  // function characterSelect(){
  //   // console.log(character.id);
  // }

  return (

      <div className="trip-card">
      <Card>
        <CardHeader tag="h3">{props.title}</CardHeader>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>

            <br />
              {props.description}
            <br />
              Visited on: {props.end_date}


            <br />
              Type of Trip: {props.type}


          </CardText>

        </CardBody>
        <CardFooter className="text-muted">
          <Button>View Details</Button>
          <br />
          <br />
          <Button>Edit</Button>
        </CardFooter>
      </Card>

          <br />
          <br />
      </div>


  );
}

const mapDispatchToProps = { FetchTrips, DeleteTrips };

export default connect(mapStateToProps, mapDispatchToProps)(UserCardMain);
