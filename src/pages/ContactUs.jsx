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
            <h3>Have questions, feedback, or need support?</h3>
            <p>We're just a message away.</p>

            <div className={styles.linksContainer}>
              <div className={styles.linkItem}>
                <IoMdCall className={styles.icon} />
                <span>Call Us</span>
                <a href="">+91 9209016102</a>
              </div>
              <div className={styles.linkItem}>
                <CiMail className={styles.icon} />
                <span>Email Us</span>
                <a href="">hello@aryavratmarketing.com</a>
              </div>
              <div className={styles.linkItem}>
                <TiLocation className={styles.icon} />
                <span>Office Location</span>
                <a href="#">vasco</a>
              </div>
              <div className={styles.linkItem}>
                <BsWhatsapp className={styles.icon} />
                <span>Whatsapp</span>
                <a href="">+91 9209016102</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
