import React from "react";
import MyButton from "./MyButton";

const Header = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <h1 className="fw-bold">WELCOME TO MEDILAB</h1>
        <h2 className="fs-5 mb-3">
          We are team of talented designers making websites with Bootstrap
        </h2>
        <MyButton text="Get Started" variant="regular" />
      </div>
    </section>
  );
};

export default Header;
