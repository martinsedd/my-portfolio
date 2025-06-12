import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id={"contact"} className={"contact-section"}>
      <div className={"contact-content"}>
        <h2 className={"contact-heading"}>Get In Touch</h2>
        <p className={"contact-subheading"}>
          Have a question or want to work together? Feel free to reach out.
          I'm always open to discussing new projects and opportunities.
        </p>
        <form
          action="https://formspree.io/f/xnnvddpj"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;