import AboutImg from "../../assets/img/avatar-2.svg";
import AboutBox from "./AboutBoxs";
import Kill from "./Kill";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title mb-[4.25rem]">About me</h2>
      <div className="grid  lg:grid-cols-[3fr_9fr] gap-x-[1.875rem] justify-center gap-y-[1.87rem]">
        <img src={AboutImg} alt="About" className="mx-auto" />
        <div className="relative grid md:grid-cols-2 gap-x-[1.875rem] gap-y-[1.875rem] p-[1.875rem]  bg-[var(--color-container)] shadow-[var(--shadow-main)] rounded-[var(--radius-main)]  about__data">
          <div className="flex flex-col justify-center md:block">
            <p className="mb-[1rem] text-justify">
              I am Tran Tinh, a friendly web programmer from Tinh Bien, An
              Giang, graduated from An Giang University. Passionate about
              front-end design, love exploring, playing games and listening to
              music. Always learning to improve skills and creativity at work
            </p>
            <a href="#!" className="btn text-center mx-auto min-w-[240px]">
              Dowload CV
            </a>
          </div>

          <div className="skill grid gap-x-[1.25rem] gap-y-[1.25rem] md:gap-y-[1rem]">
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
