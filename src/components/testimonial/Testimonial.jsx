import React from "react";
import "./testimonials.css";
import IMG from "../../assets/changer.png";
import AV1 from "../../assets/avat1.JPG";
import AV2 from "../../assets/avat2.jpg";
import AV3 from "../../assets/avat3.JPG";
import AV4 from "../../assets/avat4.JPG";
import AV5 from "../../assets/avat5.JPG";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Working with Raymond Afoni, commonly known as El Ramon, was an incredible experience. Raymond's expertise as a software engineer is unmatched. His dedication, problem-solving skills, and attention to detail ensured the success of our project. Raymond's professionalism and ability to communicate effectively made him a valuable asset to our team. I would highly recommend Raymond for any software development work.",
      avatar: IMG,
      Cname: "Tatiana Nkeng",
    },
    {
      id: 2,
      testimonial:
        "I had the pleasure of collaborating with Raymond Afoni, also known as El Ramon, on a complex software development project. Raymond's technical knowledge and innovative ideas were instrumental in overcoming challenges and delivering exceptional results. His strong work ethic and commitment to excellence were evident throughout the entire process. I would gladly work with Raymond again and highly recommend his services.",
      avatar: AV1,
      Cname: "Moussa Tchinda",
    },
    {
      id: 3,
      testimonial:
        "Raymond Afoni, or El Ramon as he is commonly called, is an outstanding software engineer. His passion for his craft and ability to think outside the box were truly impressive. Raymond's contributions to our project were invaluable, and his professionalism and reliability made the collaboration seamless. I am grateful for the opportunity to work with Raymond and would highly recommend him for any software development endeavor.",
      avatar: AV2,
      Cname: "Nadia Fotsing",
    },
    {
      id: 4,
      testimonial:
        "Collaborating with Raymond Afoni, known as El Ramon, was a privilege. His technical expertise, attention to detail, and commitment to delivering exceptional results were remarkable. Raymond's ability to analyze complex problems and provide innovative solutions was invaluable to our project's success. I wholeheartedly endorse Raymond and would eagerly work with him again in the future.",
      avatar: AV3,
      Cname: "Malik Ngatchou",
    },
    {
      id: 5,
      testimonial:
        "Raymond Afoni, also known as El Ramon, is an exceptional software engineer. I had the pleasure of working with Raymond on a demanding project, and his skills and professionalism exceeded my expectations. Raymond's dedication to producing high-quality work and his ability to meet tight deadlines were impressive. I highly recommend Raymond for any software development needs.",
      avatar: AV5,
      Cname: "Aïssatou Fofana",
    },
    {
      id: 6,
      testimonial:
        "Working with Raymond Afoni, commonly referred to as El Ramon, was a delightful experience. His technical prowess, attention to detail, and commitment to excellence were evident in every aspect of our collaboration. Raymond's ability to grasp complex concepts and turn them into practical solutions was truly remarkable. I wholeheartedly endorse Raymond and look forward to future collaborations with him.",
      avatar: AV4,
      Cname: "Mohamed Njikam",
    },
  ];

  return (
    <section id="testimonial">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name">{testi.Cname}</h5>
              <small className="client__review">{testi.testimonial}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
