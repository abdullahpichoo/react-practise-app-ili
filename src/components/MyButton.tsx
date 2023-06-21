import React from "react";

const Button = ({ text, variant }: { text: string; variant: string }) => {
  return (
    <button
      className={`border-0 my-btn btn btn-primary px-3 text-sm rounded-pill ${
        variant === "regular" ? " bg-blue btn-hoverable" : "btn-white-hoverable"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
