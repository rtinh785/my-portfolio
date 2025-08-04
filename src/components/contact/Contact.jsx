import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="container section pb-[6.25rem]" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="grid grid-cols-[4fr_8fr] gap-x-[1.875rem]">
        <div className="contact__info">
          <h3 className="text-[var(--font-size-h3)] mb-[0.5rem]">
            Let's talk about everything!
          </h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
