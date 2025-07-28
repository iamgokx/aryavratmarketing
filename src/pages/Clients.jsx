import React from "react";
import styles from "../styles/Clients/Clients.module.css";
import PageHeading from "../Components/PageHeading";
import logos from "../../siteData/clientsLogos.json";
import testimonials from "../../siteData/testimonials.json";
import campaigns from "../../siteData/campaigns.json";
import TestimonialCard from "../Components/TestimonialCard";
import CallToActionBannerTwo from "../Components/CallToActionBannerTwo.jsx";
import Campaign from "../Components/Clients/Campaign.jsx";
function Clients() {
  return (
    <>
      <PageHeading
        contentOne={`From standout campaigns to kind words from clients,  visible moves across Goa.`}
        contentTwo={`here’s a glimpse into how brands 
        have partnered with Aryavrat Marketing to make bold,`}
        contentThree={`Because when visibility matters—results follow.`}
        title={"Client Stories"}></PageHeading>
      <section className={styles.clientsSection}>
        <div className={styles.brandsThatTrustUsContainer}>
          <h2>
            Our Clients - Brands That <span>Trust</span> Us!
          </h2>
          <p>
            From global names to home grown brands, we’ve worked with companies
            that understand the power of being seen and these brands chose
            visibility that works.
          </p>
          <p>
          Our hoardings have launched campaigns, built trust, and created buzz across Goa. Here's a glimpse of who has been up there and a look forward to your brand joining the list.
          </p>

          <div className={styles.clientsContainer}>
            {logos.map((client, index) => (
              <img src={client} key={`${index} ${client}`} />
            ))}
          </div>
          <header className={styles.manyMoreHeading}>And many more...</header>
        </div>

        <div className={styles.campaignsContainer}>
          <h2>Discover our <span>successful advertising</span> campaigns</h2>

          <div className={styles.cardsContainer}>
            {campaigns.map((c, index) => (
              <Campaign
                client={c.client}
                descripton={c.description}
                imgSrc={c.img}
                location={c.location}
                size={c.size}

                key={`${index}${c.position}`}></Campaign>
            ))}
          </div>
        </div>

        <div className={styles.testimonialsContainer}>
          <h2>
            Testimonials - What <span>Our Clients </span> Say!
          </h2>
          <p>We don’t just rent spaces—we build relationships.</p>
          <p>
            Here’s what some of our clients have to say about working with
            Aryavrat Marketing, and the impact real visibility made on their
            brand in Goa.
          </p>

          <div className={styles.testimonials}>
            {testimonials.map((user, index) => (
              <TestimonialCard
                content={user.content}
                img={user.img}
                name={user.name}
                position={user.position}
                key={`${index}${user.position}`}></TestimonialCard>
            ))}
          </div>
        </div>
      </section>
      <CallToActionBannerTwo />
    </>
  );
}

export default Clients;
