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
                <h1 style={{ fontSize: "50px" }}>About Me</h1>
                <br></br>

                <Row>
                    <Col >
                        <Image id="profile_pic" src="./photos/profile_pic.jpeg" />
                    </Col>
                    <Col >
                        <h1>Whale, hello world! 🐳 </h1>
                        <br></br>
                        <div>
                            My name is Greta Schock and I am a Full-Stack Software Engineer living in the PNW. When I'm not coding, you can find me playing in the outdoors!
                        </div>
                        <br></br>
                        <div>
                            After writing my thesis, <i>Technology and Education in sub-Saharan Africa</i> for my B.A. in International Affairs at the University of Colorado at Boulder, I was inspired dive into web development. I argued that better access to computers would create a diversified work force and stimulate local economies. Taking the initiative to learn how to code was an easy decision!
                        </div>
                        <br></br>
                        <div>
                            Please reach out if you have any questions or would like to connect!
                        </div>
                        <br></br>
                        <Button href="https://drive.google.com/file/d/1pwASS-xCtq579w-BGfuiId3-oQswQLsK/view?usp=sharing" target="_blank" size="lg" variant="outline-light"><i className="fas fa-file"></i> Resume</Button>{'   '}
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