import About from "./components/aboutt/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Sidebar from "./components/sidebar/Sidebar";
import Project from "./components/project/Project";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Sidebar />
      <main className="ml-0  lg:ml-[110px] ">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Project />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
