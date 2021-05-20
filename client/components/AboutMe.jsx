import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <>
            <Container id="about_me">
                <h1>About Me</h1>
                <Row>
                    <Col >
                        <Image id="profile_pic" src="./photos/profile_pic.jpeg" />
                    </Col>
                    <Col >
                        <h1>Whale, hello world! 🐳 </h1>
                        <p>
                        My name is Greta Schock and I am a Full-Stack Software Engineer. My interest in SWE stems from the human element of web development. After receiving a Bachelor of Arts in both International Affairs - Latin America and Anthropolgy, but I have shifted to software engineering to create accessible tools that will have a positive impact on the global community. Please feel free to reach out if you have any questions or would like to connect!
                        </p>
                        <Button href="https://drive.google.com/file/d/1DowFaJe9AcpwBkowa8ifB_31yKTl7Sb8/view?usp=sharing" target="_blank"><i className="fas fa-file"></i> Resume</Button>{' '}
                        <Button href="https://www.linkedin.com/in/greta-schock/" target="_blank"><i className="fab fa-linkedin-in"></i> LinkedIn</Button>{' '}
                        <Button href="https://github.com/grsc0529" target="_blank"><i className="fab fa-github"></i> GitHub</Button>

                    </Col>
                
                </Row>
            </Container>
        </>
    )
}

export default AboutMe;