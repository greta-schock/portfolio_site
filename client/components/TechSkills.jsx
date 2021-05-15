import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const TechSkills = () => {
    return (
        <>
            <h1>Tech Skills</h1>
            {/* <figure><embed src="https://wakatime.com/share/@55a54f0e-e543-48bb-846e-b49420dbb3a4/5e8d85e2-c12e-46f1-b368-113a58f9c899.svg"></embed></figure> */}
            <Container>
                <Row>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Frontend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="fab fa-bootstrap"></i> Bootstrap</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-css3-alt"></i> CSS 3</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-html5"></i> HTML 5</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-js-square"></i> JavaScript</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/jquery.png" alt="jQuery_icon"/> jQuery</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-react"></i> React (v. 16.8+)</td>
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
                                    <td><img width="15px" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="Express_icon"/> Express</td>
                                </tr>
                                <tr>
                                    <td><img width="15px"src="./photos/icons8-mongodb.png" alt="MongoDB_icon"/> MongoDB/Mongoose</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-node-js"></i> Node.js</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/mysql-logo.png" alt="MySQL_icon"/> MySQL</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/material/15/000000/postgreesql.png" alt="PostgreSQL_icon"/> PostgreSQL</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/metro/15/000000/sql.png" alt="SQL_icon"/> SQL</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table borderless={true}>
                            <thead>
                                <tr>
                                    <th>Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="fab fa-aws"></i> AWS - EC2</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/wired/20/000000/babel.png" alt="babel_icon"/> Babel</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/color/15/000000/circleci.png" alt="circleCI_icon"/> CircleCI</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-docker"></i> Docker</td>
                                </tr>
                                {/* <tr>
                                    <td> Git</td>
                                </tr> */}
                                <tr>
                                    <td><i class="fab fa-github"></i> Git/GitHub</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/wired/15/000000/webpack.png" alt="webpack_icon"/> Webpack</td>
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
                                    <td><i class="fas fa-coffee"></i> Mocha/Chai</td>
                                </tr>
                                <tr>
                                    <td><span class="iconify" data-icon="logos-jest" data-inline="false"></span> Jest/Enzyme</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-mountain"></i> K6</td>
                                </tr>
                                <tr>
                                    <td><i class="fas fa-weight-hanging"></i> Loader.io</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-react"></i> React Testing Library</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TechSkills;