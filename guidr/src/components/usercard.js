import React, { useEffect, useState } from "react";
// import TripCard from "./addTrip";
import { connect } from "react-redux";
import { FetchTrips } from "../API/actions/fetching";
import {Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
 CardTitle, CardText} from 'reactstrap';

const UserCardMain = props => {

  // const [curProfile, setCurProfile] = useState([]);
  // const [curTrips, setCurTrips] = useState([]);
  const curProfile = [{
      proImage:"temp",
      title: "Michael Martin",
      tagline: "Making Mountains My Mole Hills!",
      guideSpecialty: "Climbing",
      age: 30,
      yearsExperience: 10

    }];

  const curTrips = [{
        title: "My Real Trip",
  			description: "This was my very REAL very cool trip that really happen, totally my real favorite!",
  			isPrivate: false, //true means no one else can see this because it is private
  			isProfessional: true, //means this was a business trip?
  			images: "yes",
  			duration: 21, //measured in days
  			distance: 42, // this value is in miles
  			date: "11/12/19",
  			tripType: "Climbing"

    }, {
      title: "My Real Trip",
      description: "This was my very REAL very cool trip that really happen, totally my real favorite!",
      isPrivate: false, //true means no one else can see this because it is private
      isProfessional: true, //means this was a business trip?
      images: "yes",
      duration: 21, //measured in days
      distance: 42, // this value is in miles
      date: "11/12/19",
      tripType: "Climbing"
    }];

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
            <img src={curProfile[0].proImage} alt={curProfile[0].title} />
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

function TripDetails(props){
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
            <p>Visited on: {props.end_date}</p>

            <p>Type of Trip: {props.type}</p>


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

const mapDispatchToProps = { FetchTrips };

export default connect(mapStateToProps, mapDispatchToProps)(UserCardMain);



// import React, { useEffect, useState } from "react";
//
// // import {Link} from 'react-router-dom';
// import {Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
//   CardTitle, CardText} from 'reactstrap';
//
// import temp from '../images/logo.png';
//
// import FetchTrips from '../API/actions/fetching.js';
//
// const UserCardMain = (props) => {
//   //define the current profile as contained in this component fill it with info for debug purposes
//   const [curProfile, setCurProfile] = useState([{
//     proImage:temp,
//     title: "Michael Martin",
//     tagline: "Making Mountains My Mole Hills!",
//     guideSpecialty: "Climbing",
//     age: 30,
//     yearsExperience: 10
//
//   }]);
//
//   const [curTrips, setCurTrips] = useState([{
//       title: "My Real Trip",
// 			description: "This was my very REAL very cool trip that really happen, totally my real favorite!",
// 			isPrivate: false, //true means no one else can see this because it is private
// 			isProfessional: true, //means this was a business trip?
// 			images: "yes",
// 			duration: 21, //measured in days
// 			distance: 42, // this value is in miles
// 			date: "11/12/19",
// 			tripType: "Climbing"
//
//   }, {
//     title: "My Real Trip",
//     description: "This was my very REAL very cool trip that really happen, totally my real favorite!",
//     isPrivate: false, //true means no one else can see this because it is private
//     isProfessional: true, //means this was a business trip?
//     images: "yes",
//     duration: 21, //measured in days
//     distance: 42, // this value is in miles
//     date: "11/12/19",
//     tripType: "Climbing"
//   }]);
//   // setCurProfile(props);
//
//   console.log('it works.. sorta!');
//
//   return(
//     <Container>
//       <Row>
//         <Col>
//           <img src={curProfile[0].proImage} alt={curProfile[0].title} />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h2>{curProfile[0].title}</h2>
//           <p>"{curProfile[0].tagline}"</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <p>Specialty: {curProfile[0].guideSpecialty}</p>
//           <p>Age: {curProfile[0].age}</p>
//           <p>Years Experience: {curProfile[0].yearsExperience}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h2>My Trips:</h2>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           {curTrips.map(trips =>(
//             <TripDetails key={trips.id} trips={trips} />
//           ))
//           }
//         </Col>
//       </Row>
//
//     </Container>
//   );
//
// };
//

//
//
//
// export default UserCardMain;
