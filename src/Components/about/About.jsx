import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpeg";
import { FaAward } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { BsFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year working</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Colaborated</h5>
              <small>5+</small>
            </article>

            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>6 completed</small>
            </article>
          </div>
          <p>
          At Capgemini, my role as a Software Analyst leverages my proficiency in Core Java, Jenkins, and Git, tools I've honed during my academic tenure at Lovely Professional University. Our team's focus on delivering robust solutions is a constant drive for my professional development.
          <br></br>
          My commitment to learning was echoed in my internship at CodeTantra, where I contributed to projects that reinforced my technical skills. Balancing education and real-world experience, I am propelling towards a future where I can innovate and excel in the evolving tech landscape.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
