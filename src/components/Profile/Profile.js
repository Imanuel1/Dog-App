import React from 'react';
import './Profile.css';

//process.env.PUBLIC_URL+"/dog.png"
function Profile({name, img}) {
    console.log(img);
    console.log(name);
    return (
        <div className="c-profile">
            <p className="h5">{name}</p>
            <img className="profile-img" src={img==="/"?process.env.PUBLIC_URL+"/dog.png":img} alt="Dog URL"/>
        </div>
    );
}

export default Profile;