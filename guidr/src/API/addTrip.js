import React from 'react';

const TripCard = (props) => {

    return (
        <div>
            <h3>{props.trip.title}</h3>
            <h4>{props.trip.description}</h4>
            <h4>{props.trip.private}</h4>
            <h4>{props.trip.type}</h4>
            <h4>{props.trip.start_date}</h4>
            <h4>{props.trip.end_date}</h4>
            <h4>{props.trip.duration_hours}</h4>
            <h4>{props.trip.duration_days}</h4>
        </div>
    )
}

export default TripCard;