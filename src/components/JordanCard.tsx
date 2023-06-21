import React from "react";
import { Card } from "react-bootstrap";
import BuyButton from "./BuyButton";
const JordanCard = ({
  bgColor,
  name,
  desc,
  image,
  price,
}: {
  bgColor: string;
  name: string;
  desc: string;
  image: string;
  price: number;
}) => {
  return (
    <Card className="rounded-5 my-card">
      <div
        className="shoe-bg text-center rounded-4 py-3"
        style={{
          backgroundColor: `${bgColor}`,
        }}
      >
        <Card.Img variant="top" src={image} className="hoverable w-75" />
      </div>
      <div className="card-details mb-2">
        <Card.Body>
          <Card.Title className="fs-3 fw-bold w-100 text-truncate">
            {name}
          </Card.Title>
          <Card.Text className="text-secondary description">{desc}</Card.Text>
          <div className="d-flex justify-content-between text-center align-items-center">
            <BuyButton bgColor={bgColor} />
            <Card.Text className="fw-bold fs-4 me-2 mb-0 text-truncate ">
              ${price}
            </Card.Text>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default JordanCard;
