import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProjectCatwalkCarousel = () => (
    <Carousel interval={null}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_product_overview.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_QandA.png"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/project_catwalk_screenshots/project_catwalk_RandR.png"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default ProjectCatwalkCarousel;