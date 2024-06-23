import { useEffect } from "react";
import TechDetails from "./TechDetails";
import AOS from "aos";
import "aos/dist/aos.css";
const Tech = () => {
  const techDetails = [
    {
      techName: "HTML",
      techImgPath: "./images/html.svg",
    },
    {
      techName: "CSS 3",
      techImgPath: "./images/css.svg",
    },
    {
      techName: "Bootstrap",
      techImgPath: "./images/bootstrap.svg",
    },
    {
      techName: "JavaScript",
      techImgPath: "./images/js.svg",
    },
    {
      techName: "REST Apis",
      techImgPath: "./images/api.svg",
    },
    {
      techName: "Express.js",
      techImgPath: "./images/express.svg",
    },
    {
      techName: "Node.js",
      techImgPath: "./images/node.svg",
    },
    {
      techName: "MongoDB",
      techImgPath: "./images/mongo.svg",
    },
    {
      techName: "Git & GitHub",
      techImgPath: "./images/github.svg",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="skills" name="skills">
      <div className="textstack">
        <h1>Tech Stack</h1>
        <p>
          Change is inevitable, so I keep on exploring new technology, learn it
          in a minimal possible way and then build something out of it to see
          how well I did :)
        </p>
      </div>
      <div className="techcontainer">
        {techDetails.map((tech, index) => (
          <TechDetails
            key={index}
            techName={tech.techName}
            techImgPath={tech.techImgPath}
            data-aos="fade-left"
            data-aos-delay={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Tech;
