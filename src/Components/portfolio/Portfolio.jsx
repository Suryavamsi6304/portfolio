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
    title: "Portfolio",
    github: "https://github.com/Suryavamsi6304/portfolio",
    
  },
  {
    id: 2,
    image: IMG4,
    title: "E-Commerce",
    github: "https://github.com/Suryavamsi6304/mern-ecommerce-app",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "AI Rock Paper Scissor",
    github: "https://github.com/cleverprogrammer77/rockpaperAIML",
    demo: "",
  },
  {
    id: 4,
    image: IMG2,
    title: "Restauran Website",
    github: "https://github.com/Suryavamsi6304/mern-ecommerce-app",
    demo: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "Math Based Captcha",
    github: "https://github.com/Suryavamsi6304",
    demo: "",
  },
  {
    id: 6,
    image: IMG6,
    title: "Blood Donation",
    github: "https://github.com/Suryavamsi6304/Blood-donation",
    demo: "",
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
                {/* <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
