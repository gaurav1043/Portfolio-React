import React from "react";
import "./about.css";
import ME from "../../assets/png--1a.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderChartFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Abour Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <RiFolderChartFill className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            placeat dicta hic praesentium adipisci mollitia blanditiis suscipit
            rem officiis saepe maxime, veniam nemo est quos. Accusantium laborum
            quam at fugit.
          </p>
          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
