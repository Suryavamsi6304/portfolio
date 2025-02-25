import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {Pagination, Scrollbar} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Swetha",
    review:
      "We have successfully worked together on multiple projects, Our teamwork, skills, and dedication have contributed to impactful solutions and effective collaboration.",
  },
  {
    avatar: AVTR2,
    name: "Pavan",
    review:
      "We have successfully worked together on multiple projects, Our teamwork, skills, and dedication have contributed to impactful solutions and effective collaboration.",
  },
  {
    avatar: AVTR3,
    name: "Varun kumar",
    review:
      "We have successfully worked together on multiple projects, Our teamwork, skills, and dedication have contributed to impactful solutions and effective collaboration.",
  },
  {
    avatar: AVTR4,
    name: "Priya",
    review:
      "We have successfully worked together on multiple projects, Our teamwork, skills, and dedication have contributed to impactful solutions and effective collaboration.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Collaborators</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      //install Swiper modules
      modules = {[Pagination]}
      spaceBetween = {40}
      slidesPerView = {1}
      pagination = {{clickable : true}}>
        {
            data.map(({avatar,name,review}, index) =>{
                return (
                  <SwiperSlide key = {index} className="testimonial">
                    <div className="client__avatar">
                      <img src={avatar} alt="Avatar One" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">
                      {review}
                    </small>
                  </SwiperSlide>
                );
            })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
