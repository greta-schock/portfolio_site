import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProjectCatwalkCarousel = () => (
    <Carousel >
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_product_overview.png"
                alt="First Project Catwalk slide - Product Overview"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_QandA.png"
                alt="Second Project Catwalk slide - Questions and Answers"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_RandR.png"
                alt="Third Project Catwalk slide - Ratins and Reviews"
            />
        </Carousel.Item>
    </Carousel>
);

export default ProjectCatwalkCarousel;