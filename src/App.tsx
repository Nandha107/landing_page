import { NavBar } from "./components/NavBar/navBar";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { OurServicesAndTools } from "./components/ourServicesAndTools";
import WhoWeAre from "./components/whoWeAre";
import { OurClients } from "./components/ourClients";
import { Specialization } from "./components/specialization";

function App() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="h-[8%]">
        <NavBar buttonText={"Get Started"} />
      </div>
      <div className="h-[92%] overflow-y-scroll">
        <section id="home" className="h-[90%]">
          <Home />
        </section>
        <section id="ourServicesAndTools" className="h-[50%]">
          <OurServicesAndTools />
        </section>
        <section id="about" className="h-[80%]">
          <About />
        </section>
        <section id="weAre" className="h-[80%]">
          <WhoWeAre />
        </section>
        <section id="ourClients" className="h-[40%]">
          <OurClients/>
        </section>
        <section id="specialization" className="h-full border-4 border-red-900">
          <Specialization />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
