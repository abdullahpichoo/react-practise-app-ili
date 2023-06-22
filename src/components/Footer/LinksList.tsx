import React from "react";

const LinksList = ({ title, links }: { title: string; links: string[] }) => {
  return (
    <div className="useful-links">
      <h6 className="fw-bold">{title}</h6>
      <ul className="list-unstyled text-decoration-none">
        {links.map((link, i) => (
          <li key={i} className="mb-3">
            <i className="bi bi-caret-right text-blue me-1"></i>
            <a href="#!" className="text-secondary text-decoration-none">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksList;
