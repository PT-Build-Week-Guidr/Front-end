import React from "react";
import { connect } from "react-redux";
import DeleteTrips from "../API/actions/delete";
import {Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText} from 'reactstrap';

function TripDetails(props){
 
  console.log(props.trip)
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
  
              <Button onclick={console.log("button was clicked")} >Delete</Button>
              {/* () => {DeleteTrips(props.trip)} */}
            <br />
            <br />
            <Button>Edit</Button>
            </CardText>
  </CardBody>
        </Card>
        </div>
  
    );
  }

  const mapStateToProps = state => {
    return {
      isFetching: state.DeleteTrips.isFetching,
      error: state.DeleteTrips.error
    };
  };

const mapDispatchToProps = { DeleteTrips };

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);

