import React from "react";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./SectionHeading";

const Services = () => {
  return (
    <section className="container w-100">
      <SectionHeading
        title="Services"
        desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="container w-100">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <ServiceCard
              title="Lorem Ipsum"
              desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
              icon="heart-pulse-fill"
            />
          </div>
          <div className="col">
            <ServiceCard
              title="Sed ut perspiciatis"
              desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
              icon="capsule-pill"
            />
          </div>
          <div className="col">
            <ServiceCard
              title="Magni Dolores"
              desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
              icon="person-lines-fill"
            />
          </div>
          <div className="col">
            <ServiceCard
              title="Nemo Enim"
              desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
              icon="hourglass-split"
            />
          </div>
          <div className="col">
            <ServiceCard
              title="Dele cardo"
              desc="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
              icon="person-x-fill"
            />
          </div>
          <div className="col">
            <ServiceCard
              title="Divera don"
              desc="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
              icon="file-earmark-plus-fill"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
