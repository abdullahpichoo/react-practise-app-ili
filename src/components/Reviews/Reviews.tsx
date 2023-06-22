import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewsList } from "../../commons/reviewsList";

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <section className="container py-5">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewsList.map((review) => (
          <SwiperSlide>
            <ReviewCard
              key={review.name}
              image={review.image}
              name={review.name}
              designation={review.designation}
              body={review.body}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
