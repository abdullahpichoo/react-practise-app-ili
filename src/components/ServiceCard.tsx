import React from "react";

const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => {
  return (
    <div className="service-card w-100 border border-1 py-5 px-3 d-flex flex-column align-items-center gap-2 text-center">
      <div className="service-card-icon">
        <i
          className={`icon-backdrop bi bi-${icon} fs-2 rounded-2 position-relative`}
        >
          <i
            className={`main-icon w-100 h-100 bi bi-${icon} bg-blue fs-2 rounded-2 position-absolute`}
          ></i>
        </i>
      </div>
      <h3 className="fw-bold text-dark-blue mt-4">{title}</h3>
      <p className="text-secondary">{desc}</p>
    </div>
  );
};

export default ServiceCard;
