import React from "react";

function CustomSection({ children, title, backgroundColor, reference = null }) {
  return (
    <section className="section" ref={reference}>
      <p className="title" style={{ backgroundColor }}>
        {title}
      </p>
      {children}
    </section>
  );
}

export default CustomSection;
