import React from "react";
import Navbar from "@/components/custom/Navbar";
import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

export default function App() {
  const [position, setPosition] = React.useState(false);
  const Homeref = React.useRef(null);
  const Aboutref = React.useRef(null);
  const Skillsref = React.useRef(null);
  const Projectref = React.useRef(null);
  const Contactref = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <main>
      <Navbar
        position={position}
        data={{
          home: Homeref,
          about: Aboutref,
          skills: Skillsref,
          project: Projectref,
          contact: Contactref,
        }}
      />
      <div className="relative" ref={Homeref}>
        <Home />
        <div className="absolute inset-0 w-full h-full -z-10"></div>
      </div>
      <div className="h-screen container" ref={Aboutref}>
        <About />
      </div>
      <div className="h-screen pt-12 container" ref={Skillsref}>
        <Skills />
      </div>
      <div className="h-screen container" ref={Projectref}>
        <Projects />
      </div>
      <div className="h-screen" ref={Contactref}>
        <Contact />
      </div>
    </main>
  );
}
