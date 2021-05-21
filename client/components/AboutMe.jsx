import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <div id="about_me">
            <Container id="about_me_child">
                <h1>About Me</h1>
                <br></br>
                <br></br>
                <Row>
                    <Col >
                        <Image id="profile_pic" src="./photos/profile_pic.jpeg" />
                    </Col>
                    <Col >
                        <h1>Whale, hello world! 🐳 </h1>
                        <br></br>
                        <br></br>
                        <div>
                            My name is Greta Schock and I am a Full-Stack Software Engineer. I want to build projects that factor in the human element of web development. After receiving a Bachelor of Arts in both International Affairs - Latin America and Anthropolgy, I have shifted to software engineering to create accessible tools that will have a positive impact on the global community.
                        </div>
                        <br></br>
                        <div>
                            Please feel free to reach out if you have any questions or would like to connect!
                        </div>
                        <br></br>
                        <Button href="https://drive.google.com/file/d/1DowFaJe9AcpwBkowa8ifB_31yKTl7Sb8/view?usp=sharing" target="_blank" size="lg" variant="outline-light"><i className="fas fa-file"></i> Resume</Button>{'   '}
                        <Button href="https://www.linkedin.com/in/greta-schock/" target="_blank" size="lg" variant="outline-light"><i className="fab fa-linkedin-in"></i> LinkedIn</Button>{'   '}
                        <Button href="https://github.com/grsc0529" target="_blank" size="lg" variant="outline-light"><i className="fab fa-github"></i> GitHub</Button>{'   '}
                        <Button href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=greta.schock@gmail.com" target="_blank" size="lg" variant="outline-light"><i className="fas fa-envelope"></i> Gmail</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;