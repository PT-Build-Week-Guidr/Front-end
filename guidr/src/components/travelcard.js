import React, { useEffect, useState } from "react";

// import {Link} from 'react-router-dom';
import {Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText} from 'reactstrap';



const TravelCardMain = (props) => {
  //define the current profile as contained in this component fill it with info for debug purposes
  const [curProfile, setCurProfile] = useState([{
    proImage:"./images/logo.png",
    title: "Michael Martin",
    tagline: "Making Mountains My Mole Hills!",
    guideSpecialty: "Climbing",
    age: 30,
    yearsExperience: 10

  }]);

  const [curTrips, setCurTrips] = useState([{
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
  }]);
  // setCurProfile(props);

  console.log('it works.. sorta!');

  return(
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
          {curTrips.map(trips =>(
            <TripDetails key={trips.id} trips={trips} />
          ))
          }
        </Col>
      </Row>

    </Container>
  );

};

function TripDetails({ trips }){
  const {title, description, isPrivate, isProfessional, images, duration, distance, date, tripType} = trips;
  // const ref = `/character/${trip.id}`;

  // function characterSelect(){
  //   // console.log(character.id);
  // }

  return (

      <div className="trip-card">
      <Card>
        <CardHeader tag="h3">{title}</CardHeader>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>
            <img src={images} alt={title} />
            <br />
            {description}
            <p>Visited on: {date}</p>
            <p>Was There For: {duration} days</p>
            <p>Traveled: {distance} miles</p>
            <p>Type of Trip: {tripType}</p>


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



export default TravelCardMain;
