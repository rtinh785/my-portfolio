import Img1 from "../assets/img/service-1.svg";
import Img2 from "../assets/img/service-2.svg";
import Img3 from "../assets/img/service-3.svg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Img2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Img3,
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="grid grid-cols-3 gap-x-[1.875rem]">
        {data.map(({ id, image, title, description }, index) => {
          const textColor = index === 1 ? "text-black" : "text-[#FFF]";
          return (
            <article
              className={`${textColor} card transition-all duration-300 ease-in-out text-center flex flex-col justify-center items-center p-[1.875rem] rounded-[var(--radius-main)] bg-[var(--color-container)]`}
              key={id}
            >
              <img src={image} alt="card" className="mb-[1.25rem]" />
              <h3 className="text-[var(--font-size-h3)] mb-[1rem] ">{title}</h3>
              <p className="card__description">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
