import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom';

import UserCardMain from './usercard.js';


const ProfilePage = (props) =>{



  console.log('profile page!');

  return(

    <div>
      <UserCardMain
        {...props}

      />
    </div>

  );



}

export default ProfilePage;
