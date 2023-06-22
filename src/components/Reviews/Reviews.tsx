import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewsList } from "../../commons/reviewsList";

const Reviews = () => {
  return (
    <section className="container py-5">
      {reviewsList.map((review) => (
        <ReviewCard
          key={review.name}
          image={review.image}
          name={review.name}
          designation={review.designation}
          body={review.body}
        />
      ))}
    </section>
  );
};

export default Reviews;
