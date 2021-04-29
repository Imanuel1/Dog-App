import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css';

//process.env.PUBLIC_URL+"/dog.png"
function Profile({name, updateImg}) {

    const [urlImg, setUrlImg] = useState(process.env.PUBLIC_URL+"/dog.png");

    useEffect(() => {
        // setUrlImg(process.env.PUBLIC_URL+"/dog.png")
        axios.get("https://dog.ceo/api/breed/"+name+"/images/random").then( response => setUrlImg(response.data.message))
    }, [updateImg])

    return (
        <div className="c-profile">
            <p className="h5">{name}</p>
            <img className="profile-img" src={urlImg} alt="Dog URL"/>
        </div>
    );
}

export default Profile;