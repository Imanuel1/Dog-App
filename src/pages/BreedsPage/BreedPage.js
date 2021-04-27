import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row} from 'react-bootstrap';
import Profile from '../../components/Profile/Profile';
import './BreedPage.css'

function BreedPage({breeds}) {
    const [randomImg, setRandomImg] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        let Urls =[];
        breeds.map( breed => {
            axios.get("https://dog.ceo/api/breed/"+breed+"/images/random").then( response => 
            {
                console.log(response.data.message);
                Urls.push(response.data.message);
                if(Urls.length === breeds.length){
                    setRandomImg(Urls);
                }
            });
        });
    }, []);

    let filteredImg=[];
    const filteredBreeds = breeds.filter( (breed, index) => {
        if (breed.toLowerCase().includes(searchText.toLowerCase())){
            randomImg[index]?filteredImg.push(randomImg[index]):filteredImg.push("/");
            return true;
        } else {
            return false;
        }
    });

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
                    <Button variant="outline-secondary">
                        Secondary
                    </Button>
                </Form>
                <Row>
                    {filteredBreeds.map((breed, index) => <Col lg={3} md={6}><Profile name={breed} img={filteredImg[index]}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default BreedPage;