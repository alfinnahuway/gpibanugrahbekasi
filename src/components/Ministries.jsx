import { CardsMinistries } from "./card/Cards";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ministries = () => {
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

  const heading = [
    {
      head: "Gerakan Pemuda",
      image:
        "https://elementor.zozothemes.com/zegen/wp-content/uploads/sites/2/2019/10/global_ministry-1-1170x694.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, dolorem illum doloremque maxime excepturi aliquam mollitia sequi repudiandae repellendus iste unde, nobis quia culpa est optio et atque harum architecto praesentium dolores debitis natus. Officia ut sint iusto quas voluptatum! Odit, autem commodi asperiores nihil dolorum optio eos mollitia dolor et in neque voluptatum repudiandae odio magni quisquam ipsa laboriosam excepturi. Rem excepturi voluptatum autem eum natus quod eius iure tenetur est in, error repellendus voluptates quibusdam itaque cumque et quas cum culpa praesentium? Perferendis dolore accusamus, saepe corrupti perspiciatis repudiandae ab enim ullam vel vero quod, culpa debitis commodi.",
    },
    {
      head: "Gerakan Pemuda",
      image:
        "https://elementor.zozothemes.com/zegen/wp-content/uploads/sites/2/2019/10/global_ministry-1-1170x694.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, dolorem illum doloremque maxime excepturi aliquam mollitia sequi repudiandae repellendus iste unde, nobis quia culpa est optio et atque harum architecto praesentium dolores debitis natus. Officia ut sint iusto quas voluptatum! Odit, autem commodi asperiores nihil dolorum optio eos mollitia dolor et in neque voluptatum repudiandae odio magni quisquam ipsa laboriosam excepturi. Rem excepturi voluptatum autem eum natus quod eius iure tenetur est in, error repellendus voluptates quibusdam itaque cumque et quas cum culpa praesentium? Perferendis dolore accusamus, saepe corrupti perspiciatis repudiandae ab enim ullam vel vero quod, culpa debitis commodi.",
    },
    {
      head: "Gerakan Pemuda",
      image:
        "https://elementor.zozothemes.com/zegen/wp-content/uploads/sites/2/2019/10/global_ministry-1-1170x694.jpg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, dolorem illum doloremque maxime excepturi aliquam mollitia sequi repudiandae repellendus iste unde, nobis quia culpa est optio et atque harum architecto praesentium dolores debitis natus. Officia ut sint iusto quas voluptatum! Odit, autem commodi asperiores nihil dolorum optio eos mollitia dolor et in neque voluptatum repudiandae odio magni quisquam ipsa laboriosam excepturi. Rem excepturi voluptatum autem eum natus quod eius iure tenetur est in, error repellendus voluptates quibusdam itaque cumque et quas cum culpa praesentium? Perferendis dolore accusamus, saepe corrupti perspiciatis repudiandae ab enim ullam vel vero quod, culpa debitis commodi.",
    },
  ];
  return (
    <>
      <section className="w-full mb-16">
        <main className="w-[88%] mx-auto">
          <Slider {...settings}>
            {heading.map((heads) => (
              <CardsMinistries
                key={heads}
                head={heads.head}
                image={heads.image}
                desc={heads.desc}
              />
            ))}
          </Slider>
        </main>
      </section>
    </>
  );
};

export default Ministries;
