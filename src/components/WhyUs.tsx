import React from "react";
import WhyUsCard from "./WhyUsCard";
import { Container, Row, Col } from "react-bootstrap";

const WhyUs = () => {
  return (
    <section className="">
      <Container>
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4 d-flex align-items-stretch">
            <WhyUsCard
              title="Why Choose Medilab"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis."
              first={true}
              icon=""
            />
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row g-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <WhyUsCard
                    title="Corporis voluptates sit"
                    desc="Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip"
                    first={false}
                    icon="receipt"
                  />
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <WhyUsCard
                    title="Ullamco laboris ladore pan"
                    desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
                    first={false}
                    icon="box"
                  />
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <WhyUsCard
                    title="Labore consequatur"
                    desc="Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
                    first={false}
                    icon="images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
