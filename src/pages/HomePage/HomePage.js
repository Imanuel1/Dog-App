import React from 'react';
import { Button } from 'react-bootstrap';
import './HomePage.css'

function HomePage() {
    return (
        <div className="p-home-page">
            <h1>Dog Book</h1>
            <h2>Man's Best Friend</h2>
            <Button variant="outline-info">woof!</Button>{' '}
        </div>
    );
}

export default HomePage;