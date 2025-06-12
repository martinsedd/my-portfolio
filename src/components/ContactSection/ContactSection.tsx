// src/components/ContactSection/ContactSection.tsx
import { useState, type FormEvent } from "react";
import "./ContactSection.css";

// Define the possible states for our form
type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactSection = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default page reload
    setStatus("submitting");

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/xnnvddpj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json", // Important for Formspree to send back JSON
        },
      });

      if (response.ok) {
        setStatus("success");
      } else {
        // Handle server-side errors from Formspree
        setStatus("error");
      }
    } catch (error) {
      // Handle network errors
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  // If the form was submitted successfully, show a thank you message
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

  // Otherwise, show the form
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

// A simple spinner component for the loading state
const Spinner = () => <div className="spinner"></div>;

export default ContactSection;