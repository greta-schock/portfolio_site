import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const TechSkills = () => {
    return (
        <>
            <h3>Languages</h3>
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
                                    <td>Bootstrap</td>
                                </tr>
                                <tr>
                                    <td>CSS 3</td>
                                </tr>
                                <tr>
                                    <td>HTML 5</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>jQuery</td>
                                </tr>
                                <tr>
                                    <td>React (v. 16.8+)</td>
                                </tr>
                                <tr>
                                    <td>Underscore</td>
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
                                    <td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>Mongoose</td>
                                </tr>
                                <tr>
                                    <td>Node.js</td>
                                </tr>
                                <tr>
                                    <td>MySQL</td>
                                </tr>
                                <tr>
                                    <td>PostgreSQL</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
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
                                    <td>AWS - EC2</td>
                                </tr>
                                <tr>
                                    <td>Babel</td>
                                </tr>
                                <tr>
                                    <td>CircleCI</td>
                                </tr>
                                <tr>
                                    <td>Docker</td>
                                </tr>
                                <tr>
                                    <td>Git</td>
                                </tr>
                                <tr>
                                    <td>GitHub</td>
                                </tr>
                                <tr>
                                    <td>Webpack</td>
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