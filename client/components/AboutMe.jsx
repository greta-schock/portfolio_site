import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <>
            {/* <div id="about_me">
                    <Image id="profile_pic" src="./photos/profile_pic.jpeg" roundedCircle/>
                <div id="about_me_text">
                    <h1 style={{fontSize: "50px"}}>Hey there, I'm Greta Schock</h1>
                    <h3>and I'm a Software Engineer</h3>
                </div>
            </div> */}

            <div id="about_me">
                <Jumbotron id="about_me_text">
                    <Container>
                        <Row>
                            <Col sm={5}>
                                small=4
                            </Col>
                            <Col sm={7}>
                                <h1>Hello, world!</h1>
                                <p>
                                    This is a simple hero unit, a simple jumbotron-style component for calling
                                    extra attention to featured content or information.
                                </p>

                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>

        </>
    )
}

export default AboutMe;