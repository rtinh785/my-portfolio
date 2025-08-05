import Data from "./Data";
import Card from "./Card";
const Resume = () => {
  return (
    <section className="container section" id="resume">
      <h2 className="section__title">Experience</h2>

      {/* container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[1.875rem] gap-y-[1.875rem]">
        <div className=" grid bg-[var(--color-container)] p-[1.875rem] rounded-[var(--radius-main)] relative shadow-[var(--shadow-main)]">
          {Data.map((item, id) => {
            if (item.category === "education") {
              return (
                <Card
                  key={id}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              );
            }
          })}
        </div>

        <div className="grid bg-[var(--color-container)] p-[1.875rem] rounded-[var(--radius-main)] relative shadow-[var(--shadow-main)]">
          {Data.map((item, index) => {
            if (item.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  year={item.year}
                  desc={item.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
