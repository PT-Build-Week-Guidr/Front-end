import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom';

import TravelCardMain from './travelcard.js';


const TravelPage = (props) =>{



  console.log('Travel page!');

  return(

    <div>
      <TravelCardMain />
    </div>

  );



}

export default TravelPage;
