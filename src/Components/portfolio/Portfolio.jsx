import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tesla Clone",
    github: "https://github.com/cleverprogrammer77/tesla-clone",
    demo: "https://theteslaclone.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "YouTube Clone",
    github: "https://github.com/cleverprogrammer77/youtube-clone",
    demo: "https://theyoutubeclone.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "AI Rock Paper Scissor",
    github: "https://github.com/cleverprogrammer77/rockpaperAIML",
    demo: "https://github.com/cleverprogrammer77/rockpaperAIML",
  },
  {
    id: 4,
    image: IMG4,
    title: "MERN E-commerce",
    github: "https://github.com/cleverprogrammer77/mern-ecommerce",
    demo: "https://github.com/cleverprogrammer77/mern-ecommerce",
  },
  {
    id: 5,
    image: IMG5,
    title: "Quote Generator",
    github: "https://github.com/cleverprogrammer77/quote-generator",
    demo: "https://github.com/cleverprogrammer77/quote-generator",
  },
  {
    id: 6,
    image: IMG6,
    title: "Dice Game",
    github: "https://github.com/cleverprogrammer77/javascript-projects",
    demo: "https://github.com/cleverprogrammer77/javascript-projects",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Word</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
