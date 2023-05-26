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
      "I am writing to recommend Raymond for his network troubleshooting services. I had the pleasure of working with Raymond when I was experiencing problems with my business network. Raymond was very knowledgeable about the latest network troubleshooting techniques, and he did a great job of identifying and resolving the problems that I was experiencing. Raymond was also very patient and understanding, and he was always willing to take the time to explain the problems to me in a way that I could understand. I would highly recommend Raymond to anyone who is looking for reliable and professional network troubleshooting services.",
      avatar: IMG,
      Cname: "--Vladimir Putin",
    },
    {
      id: 2,
      testimonial:
      "I am writing to recommend Raymond for his network training services. I had the pleasure of working with Raymond when I was looking to improve my knowledge of networking. Raymond was very knowledgeable about the latest networking technologies, and he did a great job of explaining the concepts to me in a way that I could understand. Raymond was also very patient and understanding, and he was always willing to answer my questions. I would highly recommend Raymond to anyone who is looking for reliable and professional network training services.",
      avatar: AV1,
      Cname: "--Audrey Mengueme",
    },
    {
      id: 3,
      testimonial:
      "I am writing to recommend Raymond for his network troubleshooting services. I had the pleasure of working with Raymond when I was experiencing problems with my business network. Raymond was very knowledgeable about the latest network troubleshooting techniques, and he did a great job of identifying and resolving the problems that I was experiencing. Raymond was also very patient and understanding, and he was always willing to take the time to explain the problems to me in a way that I could understand. I would highly recommend Raymond to anyone who is looking for reliable and professional network troubleshooting services.",
      avatar: AV2,
      Cname: "Denis Chatou",
    },
    {
      id: 4,
      testimonial:
      "I am writing to recommend Kongnyuy for any networking services that you may need. I had the pleasure of working with Kongnyuy when I was looking to have my home network installed and configured. Kongnyuy was very knowledgeable and professional, and they did a great job of explaining the different options to me and helping me choose the right solution for my needs. Kongnyuy was also very patient and understanding, and they were happy to answer all of my questions. I would highly recommend Kongnyuy to anyone who is looking for reliable and professional networking services.",
      avatar: AV3,
      Cname: "Francis Nganou",
    },
    {
      id: 5,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV5,
      Cname: "Client 5",
    },
    {
      id: 6,
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus est, consequatur illum ullam numquam voluptate necessitatibus sequi quidem obcaecati! Veritatis repellendus provident neque. Porro, id illum iure soluta vel alias, maiores tempora doloremque vitae neque maxime at, facilis ipsum molestiae dicta quasi harum optio atque deserunt quis amet consectetur perspiciatis.",
      avatar: AV4,
      Cname: "Client 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Client Feedback</h5>
      <h2>Feedback</h2>

      <Swiper className="container testimonials__container"
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
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
