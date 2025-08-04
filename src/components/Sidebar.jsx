import React from "react";
import Logo from "../assets/img/logo.svg";
const Sidebar = () => {
  return (
    <aside
      style={{ backgroundColor: "var(--color-body)" }}
      className="fixed left-0 top-0  border-r border-[rgba(0,0,0,0.05)] p-[2.5rem] w-[110px] min-h-[100vh]
       flex flex-col justify-between z-[10]"
    >
      <a href="#home">
        <img src={Logo} alt="Logo" />
      </a>

      <nav className="nav">
        <div>
          <ul className=" nav__list ">
            <li>
              <a className="nav__link" href="#home">
                <i className="icon-home"></i>
              </a>
            </li>
            <li>
              <a className="nav__link" href="#about">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li>
              <a className="nav__link" href="#services">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li>
              <a className="nav__link" href="#resume">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li>
              <a className="nav__link" href="#portfolio">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li>
              <a className="nav__link" href="#testimonials">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <span
          className="  text-[#9b98b3]  -rotate-180 [writing-mode:vertical-rl]"
          style={{ fontSize: "var(--font-size-small)" }}
        >
          &copy; --- Tyuk2340.
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
