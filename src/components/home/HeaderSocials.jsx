import React from "react";
import facebook from "../../assets/svg/facebook-brands-solid-full.svg";
import github from "../../assets/svg/github-brands-solid-full.svg";
import instagram from "../../assets/svg/instagram-brands-solid-full.svg";
const HeaderSocials = () => {
  return (
    <div className="flex items-center justify-center gap-x-[0.8rem] mt-[1rem] mb-[1rem] ">
      <a href="https://www.facebook.com/tyuk1788" target="_blank">
        <img className="icon" src={facebook} alt="facebook" />
      </a>
      <a href="https://github.com/rtinh785" target="_blank">
        <img className="icon" src={github} alt="github" />
      </a>
      <a href="https://www.instagram.com/tinn785/" target="_blank">
        <img className="icon" src={instagram} alt="instagram" />
      </a>
    </div>
  );
};

export default HeaderSocials;
