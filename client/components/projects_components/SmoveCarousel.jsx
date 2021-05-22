import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SmoveCarousel = () => (
    <Carousel >
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_getting_started.png"
                alt="First Smove project slide - Getting Start page"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_add_smove_modal.png"
                alt="Second Smove project slide - Add Smove modal"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_landing.png"
                alt="Third Smove project slide - Landing page"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_tasks.png"
                alt="Fourth Smove project slide - Tasks page"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_tasks_modal.png"
                alt="Fifth Smove project slide - Add Task modal"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_inventory.png"
                alt="Sixth Smove project slide - Inventory page"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_inventory_modal.png"
                alt="Seventh Smove project slide - Inventory modal"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="./photos/smove_screenshots/smove_map.png"
                alt="Eigth Smove project slide - Map feature"
            />
        </Carousel.Item>



    </Carousel>
);

export default SmoveCarousel;