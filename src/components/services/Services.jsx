import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
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
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing eli .</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Quisquam id ratione odio dolores dignissimos assumenda fuga.
              </p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Cum eos enim molestias quos, tenetur.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consect elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>consectetur doloremque laborum tenetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Quisquam dignisssda fuga. Cum eos a molestias quos.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Cum eos, consectetur doloreus odio pariatur tenetur.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipilit.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Quisquam id ratione obcaecati ssumenda fuga.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Cum eos assumenda enim molestias tenetur.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>consectetur doloremque alaborum tenetur.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. .</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Quisquam id ratione obcaecati odio quos.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p> Cum eos assumenda enim molestias quos, tenetur.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicin</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Quisquam id ratione obcgnissimos assumenda fuga.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
