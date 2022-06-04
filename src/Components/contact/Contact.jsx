import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();

    emailjs
      .sendForm(
        "service_v3nbzdn",
        "template_wb5zcfn",
        form.current,
        "XZfZYCndKBB0jiQA_"
      )
      .then(
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
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>priyanshujha14@gmail.com</h5>
            <a href="mailto:priyanshujha14@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Digitizer Media</h5>
            <a href="https://m.me/priyanshu.jha.777" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5></h5>
            <a
              href="https://api.whatsapp.com/send?phone=919113193790"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
