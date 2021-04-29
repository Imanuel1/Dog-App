import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'
import CustomNavBar from '../../components/CustomNavBar/CustomNavBar';
import axios from 'axios';
import './SelectedBreedPage.css'
import Profile from '../../components/Profile/Profile';
function SelectedBreedPage({breeds}) {
    const {breed} = useParams();
    const [images, setImages] = useState(null);
    const [cardClicked, setCardClicked] = useState(null);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/"+breed+"/images").then( response => setImages(response.data.message))
    }, [])

    if(!breeds.includes(breed)){
        return <Redirect to='/'/>
    }

    let customStyle= {
            height: "50vw"
    }


    function handleCardClicked(index){
        console.log("clicked!")
        console.log(index)
        cardClicked?setCardClicked(null):setCardClicked(index);
    }

    return (
        <>
            <CustomNavBar/>
            <Container className="p-selected-breed-page">
                <p className="h1">{breed}</p>
                {
                images?
                    <Row>
                        {
                            cardClicked?
                            <div  className="p-lg-img-breed" onClick={(e) => handleCardClicked(e.target.alt)}>
                                <img className="profile-img" style={customStyle} src={images[cardClicked]} />
                            </div>
                            :
                             images.map( (img, index ) =>  <Col>
                                                            <div  className="p-img-breed" onClick={(e) => handleCardClicked(e.target.alt)}>
                                                            <img className="profile-img" src={img} alt={index}/>
                                                            </div>
                                                         </Col>)
                        }
                    </Row>
                    : 
                    <div className="loading">
                        <p className="h3">Images is loading...</p>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                }
            </Container>
        </>
    );
}

export default SelectedBreedPage;