import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import CustomNavBar from '../../components/CustomNavBar/CustomNavBar';
import Profile from '../../components/Profile/Profile';
import './BreedsPage.css'

function BreedsPage({breeds}) {
    const [searchText, setSearchText] = useState("");
    const [updateImg, setUpdateImg] = useState(false);

    //filter every time searchText get new value
    const filteredBreeds = breeds === [] ?[]:breeds.filter( breed => breed.toLowerCase().includes(searchText.toLowerCase()));
    
    return (
        <div className="p-breed-page">
            <CustomNavBar/>
            <Container>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintext">
                        <Form.Label column sm="3">
                            Search
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" placeholder="Search Dog Breed..." value={searchText} onChange={ e => setSearchText(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Button variant="outline-secondary" onClick={() => setUpdateImg(!updateImg)}>
                        Update Images
                    </Button>
                </Form>
                <Row>
                    {filteredBreeds.map((breed, index) => <Col lg={3} md={6}><Profile key={index} name={breed} updateImg={updateImg}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default BreedsPage;