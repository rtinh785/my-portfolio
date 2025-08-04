import AboutImg from "../../assets/img/avatar-2.svg";
import AboutBox from "./AboutBoxs";
import Kill from "./Kill";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title mb-[4.25rem]">About me</h2>
      <div className="grid grid-cols-[3fr_9fr] gap-x-[1.875rem] ">
        <img src={AboutImg} alt="About" />
        <div className="relative grid p-[1.875rem] bg-[var(--color-container)] shadow-[var(--shadow-main)] rounded-[var(--radius-main)] grid-cols-2 gap-x-[1.875rem] about__data">
          {/* info */}
          <div>
            <p className="mb-[1rem] text-justify">
              I am Tran Tinh, a nice cheerful web developer from Tinh Bien, An
              Giang. I have rich experience in web site design and building and
              customization.
            </p>
            <a href="" className="btn">
              Dowload CV
            </a>
          </div>
          {/* skill */}
          <div className="skill grid gap-x-[1.25rem]">
            <Kill
              name={"Development"}
              number={"90%"}
              percentage={"development"}
            />
            <Kill name={"UI/UX-design"} number={"80%"} percentage={"uiux"} />
            <Kill name={"SEO Optimization"} number={"60%"} percentage={"seo"} />
          </div>
        </div>
      </div>

      <AboutBox></AboutBox>
    </section>
  );
};

export default About;
