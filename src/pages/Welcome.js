import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../images/sig-banner.png';
import { WelcomeStyles } from '../styles'

const Welcome = () => {
  return (
  <WelcomeStyles>
    <section className="m-left-132">
      <h1>Welcome to Groupon Signature</h1>
      <div className="banner">
        <img src={bannerImage} alt="Groupon Signature" />
      </div>
      <h3>Show Your Expertise, Earn More Trust </h3>
      <p>
        Groupon Signature program is a way for top-quality businesses to share
        the highlights of professional expertise and expceptional service to
        attract high quality customers and build trust and loyalty.
      </p>
      <p>
        Enroll your pre-qualified campaigns to the program and launch Signature
        feature now.
      </p>
      <div className="mx-button-group">
        <Link to="/Opening">
          <button className="button-secondary button-rounded button" type="button">
            Learn More
          </button>
        </Link>
        <Link to="/Campaigns">
          <button className="button-primary button-rounded button">
            Get Started
        </button>
        </Link>
      </div>
    </section>
  </WelcomeStyles>
  )
}

export default Welcome;
