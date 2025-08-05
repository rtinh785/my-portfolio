import React from "react";

const Box = ({ icon, title, subTitle }) => {
  return (
    <div className=" box  ">
      <i className={`box__icon ${icon}`}></i>

      <div>
        <h3 className="box__title">{title}</h3>
        <span className="box__subtitle">{subTitle}</span>
      </div>
    </div>
  );
};

export default Box;
