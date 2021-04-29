import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import './BreedPage.css'

function BreedPage({breeds}) {
    const [searchText, setSearchText] = useState("");
    const [updateImg, setUpdateImg] = useState(false);

    //filter every time searchText get new value
    const filteredBreeds = breeds === [] ?[]:breeds.filter( breed => breed.toLowerCase().includes(searchText.toLowerCase()));
    
    return (
        <div className="p-breed-page">
            <Container>
                {/* nav bar */}
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
                        Secondary
                    </Button>
                </Form>
                <Row>
                    {filteredBreeds.map(breed => <Col lg={3} md={6}><Profile name={breed} updateImg={updateImg}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default BreedPage;