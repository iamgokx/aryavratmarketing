import React, { useState } from "react";
import styles from "../styles/ContactUs/ContactUs.module.css";
import { IoMdCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { BsWhatsapp } from "react-icons/bs";

import PageHeading from "../Components/PageHeading";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    const { name, phone, email, message } = formData;

    const text = `*New Contact Message*\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

    const encodedMessage = encodeURIComponent(text);
    const phoneNumber = "919209016102";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <PageHeading
        title={"Contact Us"}
        contentOne={`Ready to go big with outdoor advertising in Goa?`}
        contentTwo={`Looking for the perfect hoarding spot, we’re just a message away`}
        contentThree={`Let’s get your brand the visibility it deserves!`}></PageHeading>
      <section className={styles.contactUsSection}>
        <div className={styles.contactUsContainer}>
          <div className={styles.form}>
            <h2>Contact Us</h2>
            <p>Get In Touch</p>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message / Site Selected"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <button onClick={handleWhatsAppSubmit}>Send</button>
          </div>

          <div className={styles.contactusContentContainer}>
            <h3>Ready to make your brand unmissable? Let’s talk visibility!</h3>
            <p>We're just a message away.</p>

            <div className={styles.linksContainer}>
              <div className={styles.linkItem}>
                <a href="tel:+919209016102">
                  <IoMdCall className={styles.icon} />
                </a>
                <span>Call Us</span>
                <a href="tel:+919209016102">+91 9209016102</a>
              </div>
              <div className={styles.linkItem}>
                <a href="mailto:hello@aryavratmarketing.com">
                  <CiMail className={styles.icon} />
                </a>
                <span>Email Us</span>
                <a href="mailto:hello@aryavratmarketing.com">
                  hello@aryavratmarketing.com
                </a>
              </div>
              <div className={styles.linkItem}>
                <a rel="noopener noreferrer">
                  <TiLocation className={styles.icon} />
                </a>
                <span>Office Location</span>
                <a rel="noopener noreferrer">Vasco</a>
              </div>
              <div className={styles.linkItem}>
                <a
                  href="https://wa.me/919209016102"
                  target="_blank"
                  rel="noopener noreferrer">
                  <BsWhatsapp className={styles.icon} />
                </a>

                <span>Whatsapp</span>
                <a
                  href="https://wa.me/919209016102"
                  target="_blank"
                  rel="noopener noreferrer">
                  +91 9209016102
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
