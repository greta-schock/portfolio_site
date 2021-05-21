import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SmoveCarousel = () => (
    <Carousel >
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_getting_started.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_landing.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_tasks.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_inventory.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_inventory_modal.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_map.png"
                alt="First slide"
            />
        </Carousel.Item>



    </Carousel>
);

export default SmoveCarousel;