import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './HomePage.css'
import {Redirect, Link} from 'react-router-dom'

function HomePage() {

function redirect(){
    return <Redirect to="/breeds"/>
}

    return (
        <Container className="p-home-page">
            <h1>Dog Book</h1>
            <h2>Man's Best Friend</h2>
            <Button variant="outline-info"><Link className="redirect-breed" to='/breeds'>woof!</Link></Button>
        </Container>
    );
}

export default HomePage;