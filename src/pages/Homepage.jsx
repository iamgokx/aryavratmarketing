import React from "react";

import styles from "../styles/Home/HomePage.module.css";
import HomeLandingScreen from "../Components/Home/HomeLandingScreen";
import { FaLessThanEqual } from "react-icons/fa6";
import Slider from "react-slick";
import campaignsImgs from "../../siteData/campaigns.json";

import stat1 from "/assets/homepage/stat1.svg";
import stat2 from "/assets/homepage/stat2.svg";
import stat3 from "/assets/homepage/stat3.svg";
import { useEffect, useState, useRef } from "react";

import tickIcon from "/assets/homepage/tickIcon.svg";
import logos from "../../siteData/clientsLogos.json";
import { Link } from "react-router-dom";

import { IoArrowForward } from "react-icons/io5";
import CallToActionBanner from "../Components/CallToActionBanner";
import TestimonialCard from "../Components/TestimonialCard";

import testimonials from "../../siteData/testimonials.json";
import CallToActionBannerTwo from "../Components/CallToActionBannerTwo";
import SiteLoader from "../Components/SiteLoader";
function Homepage() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [clients, setClients] = useState([]);
  useEffect(() => {
    setClients([...logos, ...logos]);
  }, [logos]);

  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [people, setPeople] = useState(0);
  const [sites, setSites] = useState(0);
  const [ots, setOts] = useState(0);

  function countUp(start, end, duration, setValue) {
    const range = end - start;
    const steps = Math.ceil(duration / 30);
    const increment = range / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;

      if (current >= end || step >= steps) {
        clearInterval(timer);
        setValue(Math.round(end));
      } else {
        setValue(Math.round(current));
      }
    }, 30);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          countUp(9000000, 10000000, 2000, setPeople);
          countUp(0, 100, 2000, setSites);
          countUp(0, 1000, 2000, setOts);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasAnimated]);

  const features = [
    {
      title: "Standout Visibility",
      content: "Unmissable Billboard spots across Goa’s most prime locations.",
    },
    {
      title: "Brand Recognition",
      content: "We make sure your brand gets seen—and remembered.",
    },
    {
      title: "Local Market Expertise",
      content:
        "Deep Goan insights, smart placement, and regional audience understanding.",
    },
    {
      title: "End-to-End Service",
      content: "From discussion to execution, we handle it all seamlessly.",
    },
  ];

  const scrollWithOffset = (id) => {
    const el = document.getElementById(id);
    const yOffset = -200;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const [logoDone, setLogoDone] = useState(false);

  useEffect(() => {
    if (logoDone) {
      AOS.refresh();
    }
  }, [logoDone]);

  return (
    <>
      <HomeLandingScreen
        scrollWithOffset={scrollWithOffset}></HomeLandingScreen>

      <section className={styles.homeSection}>
        <div className={styles.homeAboutUsContainer}>
          <Slider {...settings} className={styles.slider}>
            {campaignsImgs.map((campaign, index) => (
              <div key={`${index} ${campaign.client}`}>
                <img src={campaign.img} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>

          <div id="getstarted" className={styles.homeAboutUsContentContainer}>
            <h3>
              Goa's No. 1 <b>Premium</b> Out-of-Home (OOH) Advertising Company
            </h3>

            <p>
              Aryavrat Marketing was born in 2008 from one simple truth:
              Visibility Matters.
            </p>
            <p>
              Since then we curate and manage Goa’s most high-impact outdoor
              advertising spaces so your brand gets seen, remembered, and talked
              about.
            </p>
            <p>
              Aryavrat Marketing pioneered lit advertising in Goa, with prime
              sites across North and South Goa — including Dabolim and Mopa
              Airports.
            </p>
            <p>
              We offer the widest range of Front-Lit Billboards, Backlit
              Lollipops, Bus Stops, and the highest number of Pole Kiosks to
              give your brand unmatched visibility.
            </p>
          </div>
        </div>

        <div className={styles.statsContainer} ref={containerRef}>
          <div className={styles.stat}>
            <header>{people.toLocaleString()}+</header>
            <span>People Reached</span>
            <img src={stat1} alt="" />
          </div>
          <div className={styles.stat}>
            <header>{sites}+</header>
            <span>Sites across Goa</span>
            <img src={stat2} alt="" />
          </div>
          <div className={styles.stat}>
            <header>{ots}+</header>
            <span>Opportunity to See</span>
            <img src={stat3} alt="" />
          </div>
        </div>

        <div className={styles.homeAboutUsSectionTwoContainer}>
          <h2 className={styles.siteTitles}>
            Why Aryavrat Marketing? Because <span>Visibility</span> Matters
          </h2>

          <p className={styles.aboutUsdesc}>
            We’re not just an outdoor advertising agency - we’re Goa’s most
            exclusive hoarding network. From airport exits to busy highways, our
            Billboard locations are chosen to get your brand noticed. With
            strong local presence and smart placement, we give you visibility
            that works.
          </p>

          <div className={styles.featuresContainer}>
            <div className={styles.featuresLeftContainer}>
              {features.map((feature, index) => (
                <div
                  className={styles.featuresContainerContent}
                  key={`${index} ${feature}`}>
                  <img src={tickIcon} alt="" />
                  <div className={styles.featureContentContainer}>
                    <h4>{feature.title}</h4>
                    <p>{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Slider {...settings} className={styles.slider}>
              {campaignsImgs.map((campaign, index) => (
                <div key={index}>
                  <img src={campaign.img} alt={`Slide ${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className={styles.clientsContainer}>
          <h2 className={styles.siteTitles}>
            Why Aryavrat Marketing? Because <span>Visibility</span> Matters
          </h2>

          <p>
            From global names to home grown brands, we’ve worked with companies
            that understand the power of being seen and these brands chose
            visibility that works.
          </p>

          <p>
            Our hoardings have launched campaigns, built trust, and created buzz
            across Goa. Here's a glimpse of who has been up there and a look
            forward to your brand joining the list.
          </p>

          <h2 className={styles.carouseHeading}>
            Our Clients - Brands That <span>Trust</span> Us!
          </h2>
        </div>
      </section>
      <div className={styles.carouselWrapper}>
        <div className={styles.track}>
          {clients.concat(clients).map((img, index) => (
            <img
              key={`${index}-${img}`}
              src={img}
              alt={`Client ${index + 1}`}
              className={styles.item}
            />
          ))}
        </div>
      </div>

      <section className={styles.homeSection}>
        <div className={styles.viewMoreContainer}>
          <Link className={styles.viewMoreButton} to={"/clients"}>
            View More
            <IoArrowForward className={styles.arrowIcon} />{" "}
          </Link>
        </div>
      </section>
      <CallToActionBanner></CallToActionBanner>
      <section className={styles.homeSection}>
        <div className={styles.testimonialsContainer}>
          <h2>
            Testimonials - What <span>Our Clients</span> Say!
          </h2>

          <p>We don’t just rent spaces—we build relationships.</p>
          <p>
            Here’s what some of our clients have to say about working with
            Aryavrat Marketing, and the impact real visibility made on their
            brand in Goa.
          </p>

          <Slider {...sliderSettings}>
            {testimonials.map((t, i) => (
              <div className={styles.testimonialSlide}>
                <TestimonialCard
                  key={i}
                  content={t.content}
                  img={t.img}
                  name={t.name}
                  position={t.position}
                />
              </div>
            ))}
          </Slider>

          <div className={styles.viewAllBtnContainer}>
            <Link className={styles.viewAllButton} to={"/clients"}>
              View All Client Stories{" "}
              <IoArrowForward className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>
      <CallToActionBannerTwo></CallToActionBannerTwo>
    </>
  );
}

export default Homepage;
