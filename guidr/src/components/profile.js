import React from "react";

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
