import React from "react";
import SectionHeading from "./SectionHeading";
import Form from "./Form";
import { contactInfo } from "../commons/contactInfo";

const ContactInfo = ({
  icon,
  contactType,
  info,
}: {
  icon: string;
  contactType: string;
  info: string;
}) => {
  return (
    <div className="contact-info d-flex align-items-center gap-4 mb-4">
      <div className="contact-icon">
        <i className={`bi bi-${icon}`}></i>
      </div>
      <div className="contact-info ">
        <h3 className="fw-semibold text-dark-blue">{contactType}</h3>
        <p className="text-secondary mb-0">{info}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="container">
      <SectionHeading
        title="Contact"
        desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
      />
      <div className="contact-section mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            {contactInfo.map((contact) => (
              <ContactInfo
                key={contact.contactType}
                info={contact.info}
                contactType={contact.contactType}
                icon={contact.icon}
              />
            ))}
          </div>
          <div className="col-12 col-md-8">
            <Form type="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
