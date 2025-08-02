import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Testimonials from "./components/Testimonials";

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
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
