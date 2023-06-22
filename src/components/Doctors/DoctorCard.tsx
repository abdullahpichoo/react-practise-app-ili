import React from "react";

const DoctorCard = ({
  name,
  designation,
  desc,
  image,
}: {
  name: string;
  designation: string;
  desc: string;
  image: string;
}) => {
  return (
    <article className="container border card border-0 rounded-0 py-4 px-5">
      <div className="row">
        <div className="col-4 ">
          <div className="rounded-circle overflow-hidden">
            <img src={image} alt={name} className="img-fluid dr-card-image " />
          </div>
        </div>
        <div className="col-8">
          <h3 className="fw-bold text-dark-blue mb-1">{name}</h3>
          <p className="text-secondary mb-2">{designation}</p>
          <p className="dr-card-underline mb-2"></p>
          <p className="text-secondary text-sm mb-3">{desc}</p>
          <div className="icons d-flex gap-2">
            <i className="bi bi-facebook  rounded-circle"></i>
            <i className="bi bi-twitter   rounded-circle"></i>
            <i className="bi bi-instagram rounded-circle"></i>
            <i className="bi bi-linkedin  rounded-circle"></i>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DoctorCard;
