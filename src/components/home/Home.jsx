import Me from "../../assets/img/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section
      className=" relative min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="w-max-[540px]  text-center">
        <img src={Me} alt="avatar" className="m-auto  mb-[1.5rem]" />
        <h1 className=" font-[var( --font-weight-bold)] mb-[0.6rem]">
          Tran Trung Tinh
        </h1>
        <span>I'm a Front-End developer!</span>
        <br />
        <span>Email: rtinh785@gmail.com || SĐT:0379051788</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Hire me
        </a>
        <ScrollDown />
        <Shapes />
      </div>
    </section>
  );
};

export default Home;
