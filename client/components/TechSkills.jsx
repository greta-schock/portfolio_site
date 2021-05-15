import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const TechSkills = () => {
    return (
        <>
            <h3>Tech Skills</h3>
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
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/jquery.png"/> jQuery</td>
                                </tr>
                                <tr>
                                    <td> <i class="fab fa-react"></i> React (v. 16.8+)</td>
                                </tr>
                                <tr>
                                    <td>Underscore (REPLACE)</td>
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
                                    <td>Express.js</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/color/15/000000/mongodb.png"/> MongoDB</td>
                                </tr>
                                <tr>
                                    <td>Mongoose</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-node-js"></i> Node.js</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/ios-filled/15/000000/mysql-logo.png"/> MySQL</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/material/15/000000/postgreesql.png"/> PostgreSQL</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/metro/15/000000/sql.png"/> SQL</td>
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
                                    <td>Chai</td>
                                </tr>
                                <tr>
                                    <td>Enzyme</td>
                                </tr>
                                <tr>
                                    <td>Jest</td>
                                </tr>
                                <tr>
                                    <td>K6</td>
                                </tr>
                                <tr>
                                    <td>Loader.io</td>
                                </tr>
                                <tr>
                                    <td>Mocha</td>
                                </tr>
                                <tr>
                                    <td>React Testing Library</td>
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
                                    <td><img src="https://img.icons8.com/wired/20/000000/babel.png"/> Babel</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/color/15/000000/circleci.png"/> CircleCI</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-docker"></i> Docker</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-git"></i> Git</td>
                                </tr>
                                <tr>
                                    <td><i class="fab fa-github"></i> GitHub</td>
                                </tr>
                                <tr>
                                    <td><img src="https://img.icons8.com/wired/15/000000/webpack.png" /> Webpack</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <div>
                <a href="https://icons8.com/icon/c2zmJ2--GehY/webpack">Webpack icon by Icons8</a>
                <a href="https://icons8.com/icon/C4OYHif_29XE/circleci">Circleci icon by Icons8</a>
                <a href="https://icons8.com/icon/OOrZQ7xdvxjX/babel">Babel icon by Icons8</a>
                <a href="https://icons8.com/icon/40253/jquery">JQuery icon by Icons8</a>
                <a href="https://icons8.com/icon/3764/sql">SQL icon by Icons8</a>
                <a href="https://icons8.com/icon/38622/postgresql">PostgreSQL icon by Icons8</a>
                <a href="https://icons8.com/icon/39855/mysql-logo">MySQL Logo icon by Icons8</a>
                <a href="https://icons8.com/icon/74402/mongodb">MongoDB icon by Icons8</a>
            </div>
        </>
    )
}

export default TechSkills;