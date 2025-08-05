import { useState } from "react";
import Logo from "../../assets/img/logo.svg";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* SIDEBAR */}
      <aside
        style={{ backgroundColor: "var(--color-body)" }}
        className={`fixed top-0 border-r border-[rgba(0,0,0,0.05)] p-[2.5rem] w-[110px] min-h-[100vh]
          flex flex-col justify-between z-[10] transition-all duration-300
          ${toggle ? "left-0" : "left-[-110px]"} lg:left-0`}
      >
        <a href="#home">
          <p
            style={{ color: "var(--color-title)" }}
            className="logo relative text-center text-[2.5rem] font-extrabold"
          >
            T
          </p>
        </a>

        <nav className="nav">
          <div>
            <ul className="nav__list">
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
                <a className="nav__link" href="#skills">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li>
                <a className="nav__link" href="#resume">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li>
                <a className="nav__link" href="#project">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li>
                <a className="nav__link" href="#portfolio">
                  <i className="icon-note"></i>
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
            className="text-[#9b98b3] -rotate-180 [writing-mode:vertical-rl]"
            style={{ fontSize: "var(--font-size-small)" }}
          >
            &copy; --- Tyuk2340.
          </span>
        </div>
      </aside>

      {/* TOGGLE BUTTON */}
      <div
        onClick={() => setToggle(!toggle)}
        className={`${
          toggle ? `left-[110px]` : ""
        } duration-[0.3s] ease-in-out lg:hidden fixed top-[1.25rem] left-[1.875rem] cursor-pointer h-[40px] w-[45px] bg-[var(--color-body)] border border-[#e8dfec] flex items-center justify-center z-50`}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
