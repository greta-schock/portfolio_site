import React from 'react';
import Card from 'react-bootstrap/Card';


const Landing = () => (
    <Card className="bg-dark text-white">
        <Card.Img src="./photos/gc2.jpeg" alt="Card image" width="100%"/>
        <Card.ImgOverlay id="about_me_text">
            <h1>Greta Schock</h1>
            {/* <Card.Title>Card title</Card.Title> */}
            <div>Software Engineer</div>
            <div>Seattle, WA</div>
        </Card.ImgOverlay>
    </Card>


)

export default Landing;