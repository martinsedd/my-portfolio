import { useState, type FormEvent } from "react";
import "./ContactSection.css";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactSection = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/xnnvddpj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="contact-section">
        <div className="success-message">
          <h3>Thank you!</h3>
          <p>Your message has been sent successfully. I'll be in touch soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-subheading">
          Have a question or want to work together? Feel free to reach out.
          I'm always open to discussing new projects and opportunities.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              disabled={status === "submitting"}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              disabled={status === "submitting"}
            />
          </div>
          <textarea
            name="message"
            id="message"
            rows={6}
            placeholder="Your Message"
            required
            disabled={status === "submitting"}
          ></textarea>
          {status === "error" && (
            <p className="error-message">
              Something went wrong. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="submit-button"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? <Spinner /> : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

const Spinner = () => <div className="spinner"></div>;

export default ContactSection;