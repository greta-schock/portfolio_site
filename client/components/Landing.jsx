import React from 'react';
import Card from 'react-bootstrap/Card';


const Landing = () => (
    <div id="landing">
        <Card className="bg-dark text-white">
            <Card.Img id="background" src="./photos/gc2.jpeg" alt="Card image" />
            <Card.ImgOverlay id="landing_title">
                <h1 style={{fontSize: "5vw"}}>Greta Schock</h1>
                <div style={{fontSize: "2vw"}}>Full Stack Software Engineer</div>
                <div style={{fontSize: "2vw"}}>Seattle, WA</div>
            </Card.ImgOverlay>
        </Card>
    </div>
)

export default Landing;
