import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function SelectedBreedPage(props) {
    return (
        <Container className="p-selected-breed-page">
            <p className="h1"></p>
            <Row>
                {
                    <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                }
            </Row>
        </Container>
    );
}

export default SelectedBreedPage;