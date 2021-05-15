import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const ContactMe = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Contact Me</h1>
                <p><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=greta.schock@gmail.com" target="_blank">Email Me</a></p>
            </Container>
        </Jumbotron>
    )
}

export default ContactMe;