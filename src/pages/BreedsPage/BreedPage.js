import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import './BreedPage.css'

function BreedPage({breeds}) {
    const [randomImg, setRandomImg] = useState([]);
    useEffect(() => {
        setRandomImg(breeds.map( breed => {
            axios.get("https://dog.ceo/api/breed/"+breed+"/images/random")
        }));
    }, [])

    return (
        <div className="p-breed-page">
            <Container>
                {/* nav bar */}
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Search
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="password" placeholder="Search Dog Breed..." />
                        </Col>
                    </Form.Group>
                    <Button variant="outline-secondary">
                        Secondary
                    </Button>
                </Form>
                <Row>
                    {  
                        <div>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                            <Col><img src={process.env.PUBLIC_URL+"/dog.png"}/></Col>
                        </div>
                        
                    }
                </Row>
            </Container>
        </div>
    );
}

export default BreedPage;