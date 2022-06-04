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
              <small>3 Years working</small>
            </article>

            <article className="about__card">
              <ImUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>10 completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            voluptatibus vero harum architecto dolorem quo quibusdam animi
            totam, consectetur, sit illo aut velit iusto porro et. Fuga neque
            aliquam pariatur.
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
