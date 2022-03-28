import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import personImg from "../Image/Sarah.jpeg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="h-100">
      <div data-aos="fade-right" className="about-container">
        <div className="title">About Me</div>
        <div className="about-main">
          <div className="person-info">
            <img src={personImg} alt="about-me" />
            <div className="perosn-name">Sarah</div>
            <div className="person-about">traveller and photographer</div>
          </div>
          <div className="about">
            Sarah is a traveller, photographer, an educator, and an
            adventure-seeker. I have an insatiable thirst for travel and
            experiences that involve taking risks and learning about new
            cultures. I’m basically a travel junkie who is always in the midst
            of planning my next trip!!
            <p className="about-header">
              “Travelling changed my life so much that I couldn’t imagine a life
              without it”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
