import React from "react";

const Benefit = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <div>
        <i
          className={`bi bi-${icon} rounded-icon py-3 px-4 text-blue fs-3`}
        ></i>
      </div>
      <div className="details">
        <h6 className="fw-bold mb-2 text-hover-blue">{title}</h6>
        <p className="text-sm mb-0 text-secondary">{desc}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row align-items-center benefits-section g-5">
        <div className="col-12 col-lg-5 bg-blue benefits-img-container">
          <p></p>
        </div>
        <div className="col col-lg-7">
          <h3 className="text-dark-blue fw-bold">
            Enim quis est voluptatibus aliquid consequatur fugiat
          </h3>
          <p className="text-secondary ">
            Esse voluptas cumque vel exercitationem. Reiciendis est hic
            accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
            voluptate sed facere corporis dolores excepturi. Libero laboriosam
            sint et id nulla tenetur. Suscipit aut voluptate.
          </p>
          <div className="d-flex flex-column gap-5 mt-5">
            <Benefit
              title="Lorem Ipsum"
              desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
              icon="fingerprint"
            />
            <Benefit
              title="Nemo Enim"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
              icon="gift"
            />
            <Benefit
              title="Dine Pad"
              desc="Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis"
              icon="flower2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
