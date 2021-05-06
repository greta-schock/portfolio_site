import React from 'react';
//Bootstrap Imports
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
//Component Imports
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';

const App = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Greta Schock</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#tech_skills">Tech Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact_me">Contact Me</Nav.Link>
                </Nav>
            </Navbar>
            <Projects />
            <ContactMe />
        </>
    )
}

export default App;