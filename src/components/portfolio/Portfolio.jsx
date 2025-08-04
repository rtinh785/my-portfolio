import { useState } from "react";
import Menu from "./Menu";
import WorkItem from "./WorkItem";
const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (vategoryItem) => {
    if (vategoryItem === "Everything") {
      setItems(Menu);
      return;
    }

    const updateItems = Menu.filter((el) => {
      return el.category === vategoryItem;
    });
    setItems(updateItems);
  };

  return (
    <section className="work container section " id="portfolio">
      <h2 className="section__title mb-[2rem]">Recent Works</h2>

      <div className="flex items-center gap-x-[1.875rem] mb-[2.5rem]">
        <WorkItem onClick={filterItem}>Everything</WorkItem>
        <WorkItem onClick={filterItem}>Creative</WorkItem>
        <WorkItem onClick={filterItem}>Art</WorkItem>
        <WorkItem onClick={filterItem}>Design</WorkItem>
        <WorkItem onClick={filterItem}>Branding</WorkItem>
      </div>

      <div className=" grid grid-cols-3 gap-[1.875rem]">
        {items.map((el) => {
          const { id, image, title, category } = el;
          return (
            <div
              className="relative overflow-hidden rounded-[var(--radius-main)] shadow-[--shadow-main] group"
              key={id}
            >
              <div>
                <img src={image} alt="work" />
                <div className="bg-[#6c6ce5] absolute left-0 top-0 h-full w-full duration-[0.3s] opacity-0 group-hover:opacity-[0.9]"></div>
              </div>

              <span
                style={{ color: "#FFF" }}
                className=" group-hover:opacity-[1] group-hover:translate-y-0 translate-y-[-40px] inline-block transition duration-300 py-[0.19rem] px-[0.625rem] text-[var(--font-size-small)] bg-[var(--color-primary)] rounded-bl-[0.98rem] rounded-br-[0.98rem] absolute top-0 left-[1.5rem]"
              >
                {category}
              </span>
              <h3
                style={{ color: "#FFF" }}
                className="group-hover:opacity-[1] group-hover:translate-y-0 absolute top-[3.75rem] duration-[0.3s] opacity-0  text-[var( --font-size-h3)]  m-x-0 mt-0 mb-[0.98rem] py-0 px-[1.25rem] transform translate-y-[30px]"
              >
                {title}
              </h3>
              <a
                style={{ color: "#fff" }}
                href="#!"
                className="group-hover:opacity-[1] cursor-pointer rounded-[50%] text-center leading-[42px] duration-[0.3s] opacity-0 absolute bottom-[1.5rem] left-[1.5rem] text-[var( --font-size-h3)] block bg-[#ffd15c] h-[40px] w-[40px]"
              >
                <i className="icon-link work__button-icon group-hover:opacity-[1] group-hover:translate-y-0 "></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
