import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpeg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpg";

function Carousell() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="First slide" />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />

          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousell;
