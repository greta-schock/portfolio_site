import React from 'react';
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
            <h1 id="projects_title" >Projects</h1>
            <br></br>
            <br></br>
            <Row>
                <Col >
                        <Card>
                            <SmoveCarousel />
                            <Card.Body>
                                <Card.Title>Smove</Card.Title>
                                <Card.Text>A web app to organize all aspects of a residential move.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">React | Bootstrap | Express | MongoDB Atlas | Google Authentication | Yelp API</small>
                            </Card.Footer>
                        </Card>
                        <br></br>
                        <br></br>
                        <Card >
                            <BootketListCarousel />
                            <Card.Body>
                                <Card.Title>Bootket List</Card.Title>
                                <Card.Text>A web app to explore and save various hikes in U.S. National Parks</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">React | Bootstrap | Express | PostgreSQL | National Parks Service API</small>
                            </Card.Footer>
                        </Card>
                        <br></br>
                        <br></br>
                        <Card >
                            <ProjectCatwalkCarousel />
                            <Card.Body>
                                <Card.Title>Project Catwalk</Card.Title>
                                <Card.Text>A e-commerce web app with a product overview, questions/answers, and ratings and review sections</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">React | CSS | Express | PostgreSQL | REST API | K6 | AWS | NGINX | Loader.io | Docker</small>
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