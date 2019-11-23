import React from "react";
import Profile from "../API/profile";
import UserCardMain from './usercard.js';


const ProfilePage = (props) =>{



  console.log('profile page!');

  return(

    <div>
      <UserCardMain
        {...props}

      />
      <Profile />
    </div>

  );



}

export default ProfilePage;
