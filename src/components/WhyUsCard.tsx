import React from "react";
import MyButton from "./MyButton";

const WhyUsCard = ({
  title,
  desc,
  first,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
  first: boolean;
}) => {
  return (
    <article
      className={`card border-0 w-100 gap-4 p-4 d-flex flex-column align-items-center justify-content-center text-center ${
        first && "text-white bg-blue first-card"
      }`}
    >
      {icon && <i className={`text-center icon bi bi-${icon}`}></i>}
      <h3 className={`fw-bold ${!first && "fs-5"}`}>{title}</h3>
      <p>{desc}</p>
      <div className="text-center">
        {first && <MyButton text="Learn More" variant="other" />}
      </div>
    </article>
  );
};

export default WhyUsCard;
