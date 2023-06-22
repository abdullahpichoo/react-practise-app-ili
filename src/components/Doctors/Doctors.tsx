import React from "react";
import SectionHeading from "../SectionHeading";
import { doctorsList } from "../../commons/doctorsList";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
  return (
    <section className="container">
      <SectionHeading
        title="Doctors"
        desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="doctors mt-4">
        <div className="row row-cols-1 row-cols-lg-2 g-3">
          {Object.values(doctorsList).map((dr) => (
            <div className="col" key={dr.name}>
              <DoctorCard
                name={dr.name}
                desc={dr.desc}
                designation={dr.designation}
                image={dr.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
