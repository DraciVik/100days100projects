import React from "react";
import Social from "../Social";
import SocialLabels from "../SocialLabels";
import SocialHandlers from "../SocialHandlers";

const Contact = () => {
  return (
    <section className="contact-page">
      <section className="contact-intro">
        <h2>Contact me</h2>
        <p>I am looking forward to our future collaboration</p>
      </section>
      <section className="contact-social-links">
        <SocialLabels />
        <Social />
        {/* Make social handlers together with icons so on hover works the same as the example */}
        <SocialHandlers />
      </section>
    </section>
  );
};

export default Contact;
