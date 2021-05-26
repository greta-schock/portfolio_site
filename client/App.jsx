import React from 'react';
//Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
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
            <Navbar fixed="top" id="navbar" bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="#landing" style={{fontSize: "25px", fontWeight:"bold"}}>Greta Schock</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about_me">About Me</Nav.Link>
                    <Nav.Link href="#tech_skills">Tech Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    {/* <Nav.Link href="#contact_me">Contact Me</Nav.Link> */}
                </Nav>
                <div >
                    <Button href="https://www.linkedin.com/in/greta-schock/" target="_blank" className="nav_button_link" size="sm" variant="light"><i className="fab fa-linkedin-in"></i></Button>
                    <Button href="https://github.com/greta-schock" target="_blank" className="nav_button_link" size="sm" variant="light"><i className="fab fa-github"></i></Button>
                    <Button href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=greta.schock@gmail.com" target="_blank" className="nav_button_link" size="sm" variant="light"><i className="fas fa-envelope"></i></Button>
                </div>
            </Navbar>
            <Landing />
            <div id="content">
                <AboutMe />
                <br></br>
                <TechSkills />
                <br></br>
                <Projects />
                <br></br>
                {/* <ContactMe /> */}
            </div>
        </>
    )
}

export default App;