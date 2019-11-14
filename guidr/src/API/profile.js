import React, { useState, useEffect} from "react";
import api from "./login";

const Profile = props => {
const [profile, setProfile] = useState([]);


useEffect(() => {
    api()
        .get('https://guidr-project.herokuapp.com/users/:id/profile', {
            headers: {
                Authorization: localStorage.getItem('guidr')
            }
        
        })
        .then(res => {
            setProfile(res.data)
        })

        .catch(err => {
            console.log(err.response)
        })
}, [])
   
return (
    <>
        <div>
            <h2>My Profile</h2>
            {profile.map(profile => {
                return <div key={profile.id} profile={profile}  />
            })}
        </div>
    </>
)

}
export default Profile;

