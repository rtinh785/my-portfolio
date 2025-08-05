import Moive from "../../assets/img/movie.png";
import Image3 from "../../assets/img/blog-3.svg";
import Card from "./Card";
const Project = () => {
  return (
    <section className="container section" id="project">
      <h2 className="section__title">My projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          img={Moive}
          title="Moive Website"
          desc="My movie web using React Tailwind CSS and Sass."
          demo="https://moviee-iota.vercel.app/"
          source="https://github.com/rtinh785/Moviee"
        />
        <Card
          img={Image3}
          title="Updating...."
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          demo="#!"
          source="#!"
        />
        <Card
          img={Image3}
          title="Updating....."
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          demo="#!"
          source="#!"
        />
      </div>
    </section>
  );
};

export default Project;
