import React from "react";
import LinksList from "./LinksList";
import MyButton from "../MyButton";

const Footer = () => {
  return (
    <>
      <footer className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="company-details">
              <h4>Medilab</h4>
              <p className="text-secondary fw-light">A108 Adam Street</p>
              <p className="text-secondary fw-light">New York, NY 535022</p>
              <p className="text-secondary fw-light">United States</p>

              <div className="contact mt-4">
                <p className="text-secondary fw-light">
                  <strong className="fw-bold">Phone: </strong>+1 5589 55488 55
                </p>
                <p className="text-secondary fw-light">
                  <strong className="fw-bold">Email: </strong>info@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <LinksList
              title="Useful Links"
              links={[
                "Home",
                "About us",
                "Services",
                "Terms of services",
                "Privacy Policy",
              ]}
            />
          </div>
          <div className="col">
            <LinksList
              title="Our Services"
              links={[
                "Web Design",
                "Web Development",
                "Product Management",
                "Marketing",
                "Graphic Design",
              ]}
            />
          </div>
          <div className="col">
            <h6>
              <strong className="fw-bold">Join our Newsletter</strong>
            </h6>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="input-group my-4">
              <input
                type="text"
                className="form-control form-control-lg rounded-pill fs-6"
                placeholder="Enter Email Address"
              />
              <MyButton text="Subscribe" variant="regular" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="mt-5 w-100 bg-blue-low-opacity">
        <div className="container text-center py-4">
          <h6>
            Copyright <strong className="fw-bold">Medilab</strong>. All Rights
            Reserved
          </h6>
          <p>Designed by Abdullah :{")"}</p>
          <div className="icons mt-3 d-flex justify-content-center gap-2">
            <i className="bi bi-facebook  rounded-circle"></i>
            <i className="bi bi-twitter   rounded-circle"></i>
            <i className="bi bi-instagram rounded-circle"></i>
            <i className="bi bi-linkedin  rounded-circle"></i>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
