import React from "react";

function CustomSection({ children, title, backgroundColor }) {
  return (
    <section className="section">
      <p className="title" style={{ backgroundColor }}>
        {title}
      </p>
      {children}
    </section>
  );
}

export default CustomSection;
