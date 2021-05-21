import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//Carousels
import BootketListCarousel from './projects_components/BootketListCarousel';
import ProjectCatwalkCarousel from './projects_components/ProjectCatwalkCarousel';
import SmoveCarousel from './projects_components/SmoveCarousel';

const Projects = () => (
    <div id="projects">
        <Container id="about_me_child">
            <h1 id="projects_title" style={{ fontSize: "50px" }}>Projects</h1>
            <br></br>
            <br></br>
            <Row>
                <Col >
                    <Card border="secondary">
                        <SmoveCarousel />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "50px" }}>Smove <Button href="https://github.com/BlueOcean-Smove/Smove" target="_blank" className="nav_button_link" size="lg" variant="outline-dark"><i className="fab fa-github"></i></Button></Card.Title>
                            <Card.Text>A web app to organize all aspects of a residential move.</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">React (v. 17) | Bootstrap | React.Router | CSS Stylized Components | Express.js | Axios | MongoDB Atlas | Mongoose | Google Authorization | Yelp API </small>
                        </Card.Footer>
                    </Card>
                    <br></br>
                    <br></br>
                    <Card border="secondary">
                        <BootketListCarousel />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "50px" }}>Bootket List <Button href="https://github.com/grsc0529/bootket_list" target="_blank" className="nav_button_link" size="lg" variant="outline-dark"><i className="fab fa-github"></i></Button></Card.Title>
                            <Card.Text>A web app to explore and save various hikes in U.S. National Parks</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">React (v. 17) | Bootstrap | Express.js | Node.js | PostgreSQL | National Parks Service API  | REST API  | Axios </small>
                        </Card.Footer>
                    </Card>
                    <br></br>
                    <br></br>
                    <Card border="secondary">
                        <ProjectCatwalkCarousel />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "50px" }}>Project Catwalk
                                <Button href="https://github.com/FEC-Brontosaurus/Catwalk" target="_blank" className="nav_button_link" size="lg" variant="outline-dark"><i className="fab fa-github"> Front End</i></Button>
                                <Button href="https://github.com/SDC-Miracle-Max/SDC_Overview_GS" target="_blank" className="nav_button_link" size="lg" variant="outline-dark"><i className="fab fa-github"> Back End</i></Button>
                                </Card.Title>
                            <Card.Text>A e-commerce web app with a product overview, questions/answers, and ratings and review sections</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">React | CSS | Express.js | PostgreSQL | REST APIs | Axios| K6 | AWS | NGINX | Loader.io | Docker</small>
                        </Card.Footer>
                    </Card>
                    <br></br>
                    <br></br>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Projects;