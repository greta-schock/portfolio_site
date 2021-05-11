import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const TechSkills = () => {
    return (
        <>
            <h3>Languages</h3>
            {/* <figure><embed src="https://wakatime.com/share/@55a54f0e-e543-48bb-846e-b49420dbb3a4/5e8d85e2-c12e-46f1-b368-113a58f9c899.svg"></embed></figure> */}
            <ListGroup horizontal='xl' className="my-2">
                <ListGroup.Item>This ListGroup</ListGroup.Item>
                <ListGroup.Item>renders horizontally</ListGroup.Item>
                <ListGroup.Item>on </ListGroup.Item>
                <ListGroup.Item>and above!</ListGroup.Item>
            </ListGroup>

        </>
    )
}

export default TechSkills;