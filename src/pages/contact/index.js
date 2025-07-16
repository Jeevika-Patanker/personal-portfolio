import React, { useRef } from "react";
import "./index.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = formRef.current.name.value;
    const email = formRef.current.email.value;
    const subject = formRef.current.subject.value;
    const message = formRef.current.message.value;

    const bodyMessage = `
      Name: ${name} <br/>
      Email: ${email} <br/>
      Subject: ${subject} <br/>
      Message: ${message}
    `;

    if (!window.Email) {
      Swal.fire("Error!", "SMTP service failed to load.", "error");
      return;
    }

    window.Email.send({
      SecureToken: process.env.REACT_APP_EMAIL_SECURE_TOKEN,
      To: process.env.REACT_APP_EMAIL_TO,
      From: process.env.REACT_APP_EMAIL_FROM,
      Subject: subject,
      Body: bodyMessage,
    }).then((response) => {
      if (response === "OK") {
        Swal.fire("Success!", "Your message has been sent.", "success");
        formRef.current.reset();
      } else {
        Swal.fire("Error!", "Failed to send message. Try again later.", "error");
      }
    });
    console.log(process.env.REACT_APP_EMAIL_SECURE_TOKEN);
    console.log(window.Email);

  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        <br />
        Send me a message and I'll get back to you as soon as possible.
      </p>

      <div className="contact-content">
        {/* Left Side - Info */}
        <div className="contact-left">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-text">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and development.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p>jeevikapatanker@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <div>
                <strong>Phone</strong>
                <p>+91 8305841551</p>
              </div>
            </div>

            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <div>
                <strong>Location</strong>
                <p>Indore, MP (India)</p>
              </div>
            </div>
          </div>

          <div className="response-time">
            <strong>Response Time</strong>
            <p>I typically respond within 24 hours during business days.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h3 className="form-heading">Send Message</h3>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <input id="name" name="name" type="text" placeholder="Your full name" required />
              <input id="email" name="email" type="email" placeholder="your.email@example.com" required />
            </div>

            <input id="subject" name="subject" type="text" placeholder="What's this about?" required />

            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or inquiry..." required />

            <button type="submit" className="send-button">✈ Send Message</button>

            <p className="form-disclaimer">
              By sending this message, you agree to be contacted regarding your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
