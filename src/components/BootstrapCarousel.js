import React from "react";
import { Carousel } from "react-bootstrap";
import "./BootstrapCarousel.css";

export default function BootstrapCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            style={{height: 704, width: 1900}}
            src="https://www.ivemovedon.com/wp-content/uploads/2015/04/Depositphotos_3404904_original-1900x700_c.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="text-carousel">
            <h1>Concerts</h1>
            <p>Find tickets for your favorite event.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{height: 701, width: 1900}}
            src="https://www.venturashopping.com.br/wp-content/uploads/2021/10/Banner_Cinema.png"
            alt="Second slide"
          />

          <Carousel.Caption>
          <div className="text-carousel">
            <h1>Cinema</h1>
            <p>You're still on time, buy, change or resell your tickets.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            style={{height: 701, width: 1900}}
            src="https://www.bhomes.com/blog/wp-content/uploads/2021/02/Untitled-design.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className="text-carousel">
            <h1>Theater</h1>
            <p>
            Unexpected changes always arise, do not miss the show.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
