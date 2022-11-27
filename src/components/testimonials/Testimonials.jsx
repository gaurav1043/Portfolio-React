import React from "react";
import "./testimonials.css";
import { useRef, useState } from "react";
import img1 from "../../assets/me-about.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Swapnil Rasam",
    review:
      "lorem jopfgbj kloksfgvjiokj opjigdsfjopj gsfinkjopsfd ijgioajiojih agjiojhiogj",
  },
  {
    id: 2,
    name: "Swapnil Rasam",
    review:
      "lorem jopfgbj klsfgvjiokj opjigdsfjopj gsfinkjopsfd ijgioajiojih agjiojhiogj",
  },
  {
    id: 3,
    name: "Swapnil Rasam",
    review:
      "lorem jopfgbj klksfgvjiokj opjigdsfjopj finkjopsfd ijgioajiojih agjiojhiogj",
  },
  {
    id: 4,
    name: "Swapnil Rasam",
    review:
      "lorem jopfgbj klsfgvjiokj finkjopsfd  opsfjopj sfinkjo psfd ijgioajiojih agjiojhiogj",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container testimonials__container"
      >
        {data.map(({ id, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avtar">
                <img src={img1} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
