import React from 'react';
//Bootstrap Imports
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
//Component Imports
import Landing from './components/Landing.jsx';
import AboutMe from './components/AboutMe.jsx';
import TechSkills from './components/TechSkills.jsx';
import Projects from './components/Projects.jsx';
import ContactMe from './components/ContactMe.jsx';

const App = () => {
    return (
        <>
            <Navbar fixed="top" id="navbar" bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand id="landing" href="#landing">Greta Schock</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about_me">About Me</Nav.Link>
                    <Nav.Link href="#tech_skills">Tech Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact_me">Contact Me</Nav.Link>
                </Nav>
            </Navbar>
            <Landing />
            <div id="content">
                <AboutMe />
                <br></br>
                <TechSkills />
                <br></br>
                <Projects />
                <br></br>
                <ContactMe />
            </div>
        </>
    )
}

export default App;