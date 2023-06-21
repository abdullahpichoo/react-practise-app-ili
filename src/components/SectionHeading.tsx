import React from "react";

const SectionHeading = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <h2 className="section-header fw-bold">
        {title}
        <p>
          <p></p>
        </p>
      </h2>

      <p className="text-secondary">{desc}</p>
    </div>
  );
};

export default SectionHeading;
