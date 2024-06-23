import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Apply animations only once
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  return (
    <>
      <div className="App">
        <Navbar />
        <Section />
        <AboutMe />
        <Tech />
        <Projects />
      </div>
    </>
  );
};

export default App;
