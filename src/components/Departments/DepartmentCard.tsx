import React from "react";

const DepartmentCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <div className="department-card row justify-content-center w-100">
      <div className="order-2 order-lg-1 col-12 col-lg-8 justify-content-center ">
        <h3 className="fw-bold text-dark-blue">{title}</h3>
        <p className="text-secondary">{desc}</p>
      </div>
      <div className="order-1 col col-lg-4 mb-4 text-center">
        <img src={image} alt="department" className="img-fluid" />
      </div>
    </div>
  );
};

export default DepartmentCard;
