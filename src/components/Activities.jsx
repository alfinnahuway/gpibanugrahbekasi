import { CardsYoutube } from "./card/Cards";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Activities = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      url: "https://www.youtube.com/embed/8gaZD8KyJ4Y",
    },
    {
      url: "https://www.youtube.com/embed/Fq_JgB6L8Xg",
    },
    {
      url: "https://www.youtube.com/embed/9GkEGfBNplY",
    },
    {
      url: "https://www.youtube.com/embed/wBd5qsdbQZk",
    },
    {
      url: "https://www.youtube.com/embed/cKDut-VinJY",
    },
  ];

  return (
    <>
      <section className="w-full mb-16">
        <main className="w-[88%] mx-auto">
          <Slider {...settings}>
            {data.map((respone) => (
              <CardsYoutube key={respone} respone={respone.url} />
            ))}
          </Slider>
        </main>
      </section>
    </>
  );
};

export default Activities;
