import React from "react";
import { Card } from "react-bootstrap";

const ReviewCard = ({
  image,
  name,
  designation,
  body,
}: {
  image: string;
  name: string;
  designation: string;
  body: string;
}) => {
  return (
    <div className="review-card card rounded-0 border-0 p-5">
      <div className="row">
        <div className="col-4 col-md-2">
          <img
            src={image}
            alt={`${name}'s picture`}
            className="img-fluid rounded-2"
          />
        </div>
        <div className="col-12 col-md-10 p-3 p-md-0">
          <div className="row">
            <div className="col-12">
              <h4 className="fw-bold m-0">{name}</h4>
              <p className="text-secondary text-sm mb-0">{designation}</p>
            </div>
            <div className="col">
              <i className="bi bi-quote text-blue  opacity-75 fs-1"></i>
              <p className="fw-medium text-muted px-2">
                <em>{body}</em>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-12"></div> */}
      </div>
    </div>
  );
};

export default ReviewCard;
