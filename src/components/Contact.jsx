import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div data-aos="fade-right" className="contact-container">
        <div className="title">Contact Me</div>
        <div className="contact">
          I'm seeking out for opportunities to collaborate with companies,
          industry or individuals, not just work for them. I want to bring my
          collective photographs to the table where we can work together to
          solve real bussiness-problems in a way that optimezes all our
          respective experience and knowledge.
          <form className="d-grid" method="POST" target="_blank">
            <div className="mt-3">
              <input type="text" placeholder="Your name" name="name" required />
            </div>
            <div className="mt-3">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="mt-3">
              <textarea placeholder="Your message" name="message" required />
            </div>
            <div className="btn-container">
              <button className="btn btn-primary" type="submit">
                Send a message
              </button>
            </div>
          </form>
          <div className="social-media">
            <div className="reach-me">
              Here are my social-media links to reach me
            </div>
            <a href="https://www.linkedin.com/in/nishant-rajpoot-779480193/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
              />
              <p>Linkedin</p>
            </a>
            <a href="https://www.instagram.com/nishant_26n/">
              <img
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                alt="instagram"
              />
              <p>instagram</p>
            </a>
            <a href="https://twitter.com/Nishant71934728">
              <img
                src="https://img.icons8.com/fluency/48/000000/twitter.png"
                alt="twitter"
              />
              <p>twitter</p>
            </a>
            <a href="mailto:rajpootnishant7@gmail.com">
              <img
                src="https://img.icons8.com/fluency/48/000000/email.png"
                alt="mail"
              />
              <p>mail me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
