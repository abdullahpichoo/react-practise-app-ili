import React from "react";

const Resource = ({
  icon,
  number,
  type,
}: {
  icon: string;
  number: number;
  type: string;
}) => {
  return (
    <div className="bg-white position-relative d-flex flex-column align-items-center pt-5 pb-4 w-100">
      <div className="text-center text-white rounded-circle px-2 py-1 bg-blue fs-4 position-absolute top-0 start-50 translate-middle">
        <i className={`bi bi-${icon}`}></i>
      </div>

      <h3 className="fw-bolder">{number}</h3>
      <p className="text-secondary">{type}</p>
    </div>
  );
};

export default Resource;
