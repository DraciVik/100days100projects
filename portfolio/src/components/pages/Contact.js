import React from "react";
import ContactSocial from "../ContactSocial";
import SocialLabels from "../SocialLabels";

const Contact = () => {
  return (
    <section className="contact-page">
      <section className="contact-intro">
        <h2>Contact me</h2>
        <p>I am looking forward to our future collaboration</p>
      </section>
      <section className="contact-social-links">
        <SocialLabels />
        <ContactSocial />
      </section>
    </section>
  );
};

export default Contact;
