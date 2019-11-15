import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom';

import UserCardMain from './usercard.js';


const ProfilePage = (props) =>{

  const [characterList, setCharacterList] = useState([]);

  console.log('profile page!');

  return(

    <div>
      <UserCardMain />
    </div>

  );



}

export default ProfilePage;
