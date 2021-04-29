import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import {Redirect} from 'react-router-dom'

//process.env.PUBLIC_URL+"/dog.png"
function Profile({name ,updateImg}) {

    const [urlImg, setUrlImg] = useState(process.env.PUBLIC_URL+"/dog.png");
    const [cardClicked, setCardClicked] = useState(false)

    useEffect(() => {
        // setUrlImg(process.env.PUBLIC_URL+"/dog.png")
        axios.get("https://dog.ceo/api/breed/"+name+"/images/random").then( response => setUrlImg(response.data.message))
    }, [updateImg])

    if(cardClicked) {
        return <Redirect to={'/breeds/' + name}/>
    }

    return (
        <div className="c-profile" onClick={() => setCardClicked(!cardClicked)}>
            <p className="h5">{name}</p>
            <img className="profile-img" src={urlImg} alt="Dog URL"/>
        </div>
    );
}

export default Profile;