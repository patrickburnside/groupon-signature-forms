
import React from 'react';
import { Link } from 'react-router-dom';

import BannerImage from '../images/sig-banner-big.png';
import IconSurvey from '../images/icons/survey.svg';
import IconReview from '../images/icons/review.svg';
import IconEnrolled from '../images/icons/enrolled.svg';
//Fix Path
//import IconAddProfile from "../images/icons/IconAddProfile.svg";
import IconPhoto from '../images/icons/photo.svg';
import IconPrepare from '../images/icons/prepare-to-launch.svg';
import IconWebsite from '../images/icons/signature-deal-page.svg';
import { AboutStyles } from '../styles'

const Opening = () => {
  return (
  <AboutStyles>
    <div className="mc-about">
      <mc-breadcrumbs>
        <ul className="mx-breadcrumb-list">
          <li className="mx-breadcrumb-item">
            <Link to="/">Groupon Signature</Link>
          </li>
          <li className="mx-breadcrumb-item"> About </li>
        </ul>
      </mc-breadcrumbs>
      <div className="mc-about-intro">
        <div className="banner">
          <img src={BannerImage} alt="Groupon Signature" />
        </div>
        <p>
          Signature takes the stress and confusion out of shopping for high-end
          health and beauty services. Every Signature business has a Board
          Certified doctor leading the practice. Signature businesses pledge that
          they meet more than 30 standards in 5 categories: expertise, service,
          reputation, transparency, and environment. Signature also features some
          extra perks: professional-quality photos of each providers’ space and
          their doctors, discounts on every visit for customers enrolled in our
          card link offer program—not just your first appointment, and specialized
          customer support.
        </p>
        <Link to="/Campaigns">
          <button type="button" className="button-primary button-rounded button">
            Get Started
          </button>
        </Link>
        <Link to="/standards">See Example</Link>
      </div>
      <h2>Signature Provider Benefits</h2>

      <div className="row sig-columns sig-benefit">
        <div className="md-column">
          <h6>Highlight Your Expertise</h6>
          You can highlight your professional expertise on your deal page with
          newly designed Signature feautures.
        </div>
        <div className="md-column">
          <h6>Earn More Trust</h6>
          Build more trust in your customer by sharing helpful information and
          providing best-in-class service.
        </div>
        <div className="md-column">
          <h6>Attract More Customer</h6>
          You’ll be featured to guests in search results, emails, and more.
          There’s even a search filter to find Signature Providers.
        </div>
      </div>

      <section>
        <h2>How to Become an Eligible Signature Provider</h2>
        <div className="icon-columns-table sig-columns">
          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconSurvey}
                  alt="Enrollment Form"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Fill Out Enrollment Form for Each Prequalified Campaign</h6>
              Groupon Signature team will pre-qualify some of your campaigns for Signature Program. Go step by step with our guided tool to fill out the enrollment form to provide detail information about your treatment process and experience..
            </div>
          </div>

          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconReview}
                  alt="Submit it For Review"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Submit it For Review</h6>
              Groupon Signature team will carefully review your submission and follow up with you if we need further clarification. Click here to see if you meet our quality standard.
            </div>
          </div>

          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconEnrolled}
                  alt="Enrolled"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Eligible for Signature</h6>
              Once your submission has been accepted, your campaign will be offcially eligible for Groupon Signature and you’ll be the Signature Provider for this deal.
            </div>
          </div>

        </div>

      </section>

      <section>
        <h2>How to Launch Signature Features on Your Deal Page</h2>
        <div className="icon-columns-table sig-columns">
          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                {/* <img
                  className="mx-icon-64"
                  src={IconAddProfile}
                  alt="Add Profile"
                /> */}
              </div>
            </div>
            <div className="md-column">
              <h6>Tell Us Who Will Provide the Service</h6>
              Choose doctors and team members involved in the service offered in this campaign. You can always create new staff profile.
            </div>
          </div>

          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconPhoto}
                  alt="Icon"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Photo Shooting</h6>
              Groupon Signature team will visit your place in person with photographers to take professional interior photos for your place.
            </div>
          </div>

          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconPrepare}
                  alt="Prepare"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Final Prep</h6>
              Groupon Signature team will have a final review on all materials you’ve submitted and prepare to launch your Signautre Campaign.
            </div>
          </div>

          <div className="row">
            <div className="md-column">
              <div className="sig-icon">
                <img
                  className="mx-icon-64"
                  src={IconWebsite}
                  alt="Signature Deal Page"
                />
              </div>
            </div>
            <div className="md-column">
              <h6>Signature Feature Launched</h6>
              You’ll see your shinny new deal page with Signature feature live including all the professional information you provided.
            </div>
          </div>

        </div>

      </section>

      <section>
        <h2>Edit Information After Signature Feature Launch</h2>
        <p>
          You can update informations about your campaign anytime after the feauture launch. All the changes submitted will be reviewed by Groupon Signature team again, and will be updated on deal page after approval.
          <br /><br />
          While waiting for the changes to be approved, Signature feature will still be live on your deal page. Howerver, if the changes you made disqualify the campaign for Signature, the feature will be paused.
        </p>
      </section>

    </div>
  </AboutStyles>
  )
}

export default Opening;
