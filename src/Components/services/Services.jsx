import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>DevOps Trainee</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Linux Fundamentals</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Git & GitHub</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Jenkins, GitHub Actions, GitLab CI/CD</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Shell Scripting </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Collaboration & Communication</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>C++ Intern</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>C++ Fundamentals</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Object-Oriented Programming (OOPs)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Standard Template Library (STL)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Advanced C++ Features</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Active Listening</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p> Understanding & Comprehension</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>SQL(Basic)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Java(Basic)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>JavaScript(Basic)</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>C++</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Computer Networking</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
