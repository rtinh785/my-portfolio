import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-[2.5rem] left-0 w-full">
      <a href="#about">
        <span className="text-[var(--font-size-small)]">Scroll Down</span>
        <span className="border-[2px] border-solid border-[var(--text-color)] block h-[1.6rem] w-[1.25rem] m-auto mt-[0.75rem] rounded-[1rem] relative">
          <span  className="bg-[var(--color-title)] rounded-full w-1 h-1 absolute top-2 left-1/2 -translate-x-1/2 animate-[ani-mouse_2s_linear_infinite]"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
