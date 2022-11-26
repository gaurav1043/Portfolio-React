import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="portfolio" />
          </div>
          <h3>This is Title</h3>
          <a
            href="#"
            className="btn"
            target="_blank
            "
          >
            Github
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
