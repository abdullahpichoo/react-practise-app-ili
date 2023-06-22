import React from "react";
import { faqList } from "../../commons/faqList";
const FAQAccordian = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqList.map((faq, i) => (
        <div key={i} className="accordion-item mb-3">
          <h2 className="accordion-header d-flex  align-items-center">
            <i className="bi bi-info-circle ms-3 fs-5 text-blue"></i>
            <button
              className="accordion-button ps-2 collapsed border-0 text-hover-blue fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${i}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${i}`}
            >
              {faq.question}
            </button>
          </h2>
          <div
            id={`flush-collapse${i}`}
            className="accordion-collapse collapse text-secondary"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordian;
