import React from 'react';
import './CustomNavBar.css'

function CustomNavBar(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Dog Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Breed</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default CustomNavBar;