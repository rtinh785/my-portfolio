import React from "react";

const Card = ({ icon, year, title, desc }) => {
  return (
    <div className="timeline__item relative pl-[3.125rem]  pb-[3.125rem]">
      <i
        style={{ color: "var(--color-primary)" }}
        className={`${icon} absolute left-[-0.4375rem] top-0 text-[1.5rem] bg-[var(--color-container)] py-[0.4375rem] px-0`}
      ></i>
      <span style={{ color: "#8b88b1" }} className="text-[--font-size-small]">
        {year}
      </span>
      <h3 className="text-[--font-size-h3] my-[0.5rem]">{title}</h3>
      <p className="timeline__text">{desc}</p>
    </div>
  );
};

export default Card;
