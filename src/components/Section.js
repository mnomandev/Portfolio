import React, { useState, useEffect } from 'react';

const Section = () => {
  const [texts] = useState([
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Enthusiast'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change text every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [texts]);

  return (
    <div className="sectionclass" id="section">
      <div className="content">
        <div className="text">
          <h1>
            Welcome to My Portfolio{" "}
            <span role="img" aria-label="waving-hand">
              👋
            </span>
          </h1> <br />
          <span className="dev-button">Full Stack Developer</span>
          <br />
          <br />
          <h1 className="firstname">  Muhammad</h1>
          <h1 className="secondname"> Noman</h1> <br /> 
          <div className="animated-name animated-text">
            <ul className="triangle-list ">
           <li>{texts[currentIndex]}</li></ul>
          </div>  
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/mnomandev" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/mnomandev" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://web.facebook.com/mnomandev" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/there_all_manii" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/mnomandev" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <img src="./images/myphoto.png" className="photo" alt="error" />
      </div>
    </div>
  );
};

export default Section;
