import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

const App = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Greta Schock</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about_me">About Me</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact_me">Contact Me</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default App;