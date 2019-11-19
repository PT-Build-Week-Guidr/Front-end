import React, { useEffect, useState } from "react";

import axios from 'axios';


const APITest = props => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const getInfo = () => {
      axios
      .get('https://guidr-project.herokuapp.com/trips/')
      .then(response => {
        setInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Server Error:', error);
      });

    }

    getInfo();
  });

  return(
    <div>
      {info.map(trip => {
        return <div trip={trip} /> 
      })}
    </div>
  );


}

export default APITest;
