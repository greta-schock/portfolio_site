import React from 'react';
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
                        My name is Greta Schock and I am a Full-Stack Software Engineer. My interest in SWE stems from the human element of web development. After receiving my both Bachelor of Arts in International Affairs - Latin America concentration and Anthropolgy, but I have since shifted to software engineering to create accessible tools that will have a positive impact on the global community. Please feel free to reach out if you have any questions or would like to connect!
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutMe;