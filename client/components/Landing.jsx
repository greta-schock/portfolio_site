import React from 'react';
import Card from 'react-bootstrap/Card';


const Landing = () => (
    <Card className="bg-dark text-white">
        <Card.Img id="background" src="./photos/gc2.jpeg" alt="Card image"/>
        <Card.ImgOverlay id="about_me_text">
            <h1>Greta Schock</h1>
            <div>Software Engineer</div>
            <div>Seattle, WA</div>
        </Card.ImgOverlay>
    </Card>


)

export default Landing;