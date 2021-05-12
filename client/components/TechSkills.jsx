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
                        <Table >
                            <thead>
                                <tr>
                                    <th>Frontend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CSS</td>
                                </tr>
                                <tr>
                                    <td>HTML</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Backend</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CSS</td>
                                </tr>
                                <tr>
                                    <td>HTML</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </>
    )
}

export default TechSkills;