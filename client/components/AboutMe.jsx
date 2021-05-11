import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

const AboutMe = () => {
    return (
        <>
        <Jumbotron>
            <Container>
                <Row>
                    <Col sm={5}>
                        <Image id="profile_pic" src="./photos/profile_pic.jpeg" />
                    </Col>
                    <Col sm={7}>
                        <h1>Hello, world!</h1>
                        <p>
                            Hey there! I'm Greta and I adore learning languages, both linguistic and code-based. "It's not that you don't know something, you don't know something yet."
                            </p>

                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </>
    )
}

export default AboutMe;