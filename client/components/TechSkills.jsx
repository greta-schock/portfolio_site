import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const TechSkills = () => {
    return (
        <div id="tech_skills">
            <Container>
                <h1 style={{ fontSize: "3em" }}>Tech Skills</h1>
                <br></br>
                <Row>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Development</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="fab fa-aws"></i> AWS - EC2</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/wired/20/000000/babel.png" alt="babel_icon" /> Babel</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/color/15/000000/circleci.png" alt="circleCI_icon" /> CircleCI</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-docker"></i> Docker</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-git"></i> Git</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-github"></i> GitHub</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-google"></i> Google Developer Tools</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-npm"></i> npm</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-user-astronaut"></i> Postman</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-file-code"></i> VS Code</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/wired/15/000000/webpack.png" alt="webpack_icon" /> Webpack</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Frontend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="fab fa-bootstrap"></i> Bootstrap</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-css3-alt"></i> CSS 3</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-css3-alt"></i> CSS Stylized Components</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-html5"></i> HTML 5</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-js-square"></i> JavaScript (ES5/ES6)</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/jquery.png" alt="jQuery_icon" /> jQuery</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-react"></i> React (v. 16.8+)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Backend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img width="15px" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="Express_icon" /> Express</td>
                                </tr>
                                <tr>
                                    <td><img width="15px" src="./photos/icons8-mongodb.png" alt="MongoDB_icon" /> MongoDB</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-circle"></i> Mongoose</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-node-js"></i> Node.js</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/mysql-logo.png" alt="MySQL_icon" /> MySQL</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/material/15/000000/postgreesql.png" alt="PostgreSQL_icon" /> PostgreSQL</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-server"></i> REST APIs</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/metro/15/000000/sql.png" alt="SQL_icon" /> SQL</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Testing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i className="fas fa-coffee"></i> Chai</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-react"></i> Enzyme</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coffee"></i> Mocha</td>
                                </tr>
                                <tr>
                                    <td><img width="20px" src="./photos/jesticon.png" alt="Jest icon" /> Jest</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-mountain"></i> K6</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-weight-hanging"></i> Loader.io</td>
                                </tr>
                                <tr>
                                    <td><i className="fab fa-react"></i> React Testing Library</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TechSkills;