import React from "react";
import "./contact.css";
import { useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1ancx62",
      "template_vh78s0r",
      form.current,
      "pGJ4pKE9AmaKw53bX"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gauravmadhavi07@gmail.com</h5>
            <a href="mailto:gauravmadhavi07@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>gauravmadhavi07@gmail.com</h5>
            <a href="mailto:gauravmadhavi07@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9769-664-297</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919769664297"
              target="_blank"
            >
              Whatsapp Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />

          <textarea name="message" cols="30" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
