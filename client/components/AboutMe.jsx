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
                <h1 style={{ fontSize: "3em" }}>About Me</h1>
                <br></br>

                <Row>
                    <Col >
                        <Image id="profile_pic" src="./photos/profile_pic.jpeg" />
                    </Col>
                    <Col >
                        <h1 style={{ fontSize: "3em" }}>Whale, hello world! 🐳 </h1>
                        <br></br>
                        <div>
                            My name is Greta Schock and I am a Full-Stack Software Engineer living in the PNW. When I'm not coding, you can find me playing in the outdoors!
                        </div>
                        <br></br>
                        <div>
                            After writing my thesis for my Bachelor of Arts in International Affairs, <i>Technology and Education in sub-Saharan Africa</i> at the University of Colorado at Boulder, I aspired to become a software engineer. In my thesis, I argued that democratizing technological access through foreign aid would enable educational resources to develop a diversified workforce and stimulate local economies. Taking the initiative to learn how to code was an easy decision!
                        </div>
                        <br></br>
                        <div>
                            Please reach out if you have any questions or would like to connect!
                        </div>
                        <br></br>
                        <Button href="./GretaSchock_Resume.pdf" target="_blank" size="lg" variant="outline-light"><i className="fas fa-file"></i> Resume</Button>{'   '}
                        <Button href="https://www.linkedin.com/in/greta-schock/" target="_blank" size="lg" variant="outline-light"><i className="fab fa-linkedin-in"></i> LinkedIn</Button>{'   '}
                        <Button href="https://github.com/greta-schock" target="_blank" size="lg" variant="outline-light"><i className="fab fa-github"></i> GitHub</Button>{'   '}
                        <Button href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=greta.schock@gmail.com" target="_blank" size="lg" variant="outline-light"><i className="fas fa-envelope"></i> Gmail</Button>

                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;