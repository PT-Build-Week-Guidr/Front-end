import React from 'react';

const TripCard = (props) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            <h4>{props.private}</h4>
            <h4>{props.type}</h4>
            <h4>{props.start_date}</h4>
            <h4>{props.end_date}</h4>
            <h4>{props.duration_hours}</h4>
            <h4>{props.duration_days}</h4>
        </div>
    )
}



export default TripCard;