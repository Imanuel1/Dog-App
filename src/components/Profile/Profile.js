import React from 'react';
import './Profile.css';

//process.env.PUBLIC_URL+"/dog.png"
function Profile({name, img}) {
    return (
        <div className="c-profile">
            <p className="h4">{name}</p>
            <img className="profile-img" src={img} alt={process.env.PUBLIC_URL+"/dog.png"}/>
        </div>
    );
}

export default Profile;