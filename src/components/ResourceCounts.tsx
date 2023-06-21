import React from "react";
import Resource from "./Resource";
import { Row, Col } from "react-bootstrap";

const ResourceCounts = () => {
  return (
    <section className="bg-blue-low-opacity w-100 py-5">
      <div className="container w-100">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="col">
            <Resource type="Doctors" number={85} icon="prescription2" />
          </div>
          <div className="col">
            <Resource type="Departments" number={18} icon="hospital" />
          </div>
          <div className="col">
            <Resource type="Research Labs" number={85} icon="funnel" />
          </div>
          <div className="col">
            <Resource type="Awards" number={85} icon="award" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCounts;
