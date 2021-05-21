import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BootketListCarousel = () => (
        <Carousel interval={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_explore.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_list.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_LNT.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_lntmodal.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
);

export default BootketListCarousel;