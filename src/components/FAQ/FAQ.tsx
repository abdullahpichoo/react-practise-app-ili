import React from "react";
import SectionHeading from "../SectionHeading";
import FAQAccordians from "./FAQAccordians";
const FAQ = () => {
  return (
    <section className="bg-blue-low-opacity py-5 w-100">
      <div className="container">
        <SectionHeading
          title="Frequently Asked Questions"
          desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
        <FAQAccordians />
      </div>
    </section>
  );
};

export default FAQ;
