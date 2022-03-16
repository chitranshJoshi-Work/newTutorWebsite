import React from "react";

function CTA({ onClick, label }) {
  return (
    <div className="CTA" onClick={onClick}>
      {label}
    </div>
  );
}

export default CTA;
