import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cards } from "./card/Cards";

const NextButton = (props) => {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick}></div>;
};

const Events = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextButton />,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <section className="w-full mb-16">
        <main className="w-[88%] mx-auto">
          <Slider {...settings}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Slider>
        </main>
      </section>
    </>
  );
};

export default Events;
