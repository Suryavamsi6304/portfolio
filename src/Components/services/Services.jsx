import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Conceptual Design</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Impact measuring test</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Creating urgency to act now</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Frontend using React</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Backend using MongoDB, Express and Node JS</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>API Integration</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>State Management using Redux</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>DB Integration and Deployment</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>API Design and Create</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Youtuber with 5k+ subscribers</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Coding Educator role</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Teaching programming videos</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Freelance Content Creator</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>Shooting value adding videos</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
