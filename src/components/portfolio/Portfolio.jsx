import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 2,
    image: img2,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 3,
    image: img3,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 4,
    image: img4,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 5,
    image: img5,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: 6,
    image: img6,
    title: "Gpt3 AI app",
    description: "This App is about",
    github: "https://github.com/",
    demo: "#",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt="portfolio" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank
                "
                >
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  live Demo
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
