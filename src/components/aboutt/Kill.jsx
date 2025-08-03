import React from "react";

const Kill = ({ name, number, percentage }) => {
  return (
    <div className="skill__data">
      <div className="skill__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skill__number ">{number}</span>
      </div>

      {/* skill bar */}
      <div className="skill__bar">
        <span className={`skill__percentage ${percentage}`}></span>
      </div>
    </div>
  );
};

export default Kill;
