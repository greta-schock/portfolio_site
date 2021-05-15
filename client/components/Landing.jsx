import React from 'react';
import Card from 'react-bootstrap/Card';


const Landing = () => (
    // <div id="about_me"></div>
    <Card className="bg-dark text-white">
        <Card.Img src="./photos/gc2.jpeg" alt="Card image" />
        <Card.ImgOverlay >
            <h1>Greta Schock</h1>
            {/* <Card.Title>Card title</Card.Title> */}
            <div>Software Engineer</div>
        </Card.ImgOverlay>
    </Card>

)

export default Landing;