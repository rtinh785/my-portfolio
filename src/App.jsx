import About from "./components/aboutt/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/Pricing";
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
