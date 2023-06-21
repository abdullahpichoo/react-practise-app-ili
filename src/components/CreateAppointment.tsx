import React from "react";
import SectionHeading from "./SectionHeading";
import Form from "./Form";

const CreateAppointment = () => {
  return (
    <section className="bg-blue-low-opacity w-100 py-5">
      <div className="container w-100">
        <SectionHeading
          title="Make an Appointment"
          desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
        />
      </div>
      <Form type="Appointment" />
    </section>
  );
};

export default CreateAppointment;
