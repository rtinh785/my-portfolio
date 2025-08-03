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
    </section>
  );
};

export default Services;
