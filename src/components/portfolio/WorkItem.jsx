import React from "react";

const WorkItem = ({ children, onClick }) => {
  return (
    <span
      onClick={() => onClick(children)}
      className="cursor-pointer font-[var(--font-weight-bold)] hover:text-[var(--color-primary)] transition duration-[0.3s]"
    >
      {children}
    </span>
  );
};

export default WorkItem;
