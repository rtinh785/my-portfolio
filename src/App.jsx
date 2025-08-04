import About from "./components/aboutt/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Sidebar />
      <main className="ml-[110px]">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;
