import React from "react";

const BuyButton = ({ bgColor }: { bgColor: string }) => {
  return (
    <button
      className="me-2 buy-btn fw-normal border-2 px-3 py-2 rounded-4 fs-6 fw-bold text-white "
      style={{ backgroundColor: `${bgColor}`, borderColor: `${bgColor}` }}
    >
      Buy Now
    </button>
  );
};

export default BuyButton;
