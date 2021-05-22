import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BootketListCarousel = () => (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_explore.png"
                    alt="First Bootket List slide - Explore page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_list.png"
                    alt="Second Bootket List slide - My Bootket List page"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_seeMoreInfo_modal.png"
                    alt="Third Bootket List slide - See More Information modal"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./photos/bootket_list_screenshots/bootket_list_lntmodal.png"
                    alt="Fourth Bootket List slide - Leave No Trace modal"
                />
            </Carousel.Item>
        </Carousel>
);

export default BootketListCarousel;