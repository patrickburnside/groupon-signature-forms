
import React from 'react';
import { Link } from 'react-router-dom';
import { ModalStyles } from '../styles'

const Modals = () => (
  <ModalStyles>
    <div className="sig-modal-container">
      <label htmlFor="modal3" className="button-primary button">
        Full Modal
      </label>
      <label htmlFor="modal1" className="button-primary button">
        Default Modal
      </label>
      <label htmlFor="modalSubmitChange" className="button-primary button">
        Submit Change
      </label>
      <label htmlFor="modalSaveChanges" className="button-primary button">
        Save Changes
      </label>
      <label htmlFor="modalDeleteProfile" className="button-primary button">
        Delete Profile
      </label>
      <label htmlFor="modalStaffSubmitted" className="button-primary button">
        Staff Submitted
      </label>
      <label htmlFor="modalInfoSubmitted" className="button-primary button">
        Info Submitted
      </label>
      <label htmlFor="modalChangeInfo" className="button-primary button">
        Change Info?
      </label>

      <div className="mx-modal-container mx-modal-full">
        <input type="checkbox" className="mx-modal-checkbox" id="modal3" readOnly />
        <label htmlFor="modal3" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-full-modal">
          <div className="mx-modal-header">
            <label htmlFor="modal3" className="mx-modal-close" />
            <h2 className="h2">Welcome to Groupon Signature</h2>
          </div>
          <div className="certified-banner">
            <div className="signature-logo-2-lines" />
            <div className="section-title">
              Board Certified Doctors, Committed to Exceptional Care
            </div>
          </div>
          <h3 className="h3">Show Your Expertise, Earn More Trust </h3>
          <p>
            Groupon Signature program is a way for top-quality businesses to
            share the highlights of professional expertise and expceptional
            service to attract high quality customers and build trust and
            loyalty.
          </p>
          <p>
            Enroll your pre-qualified campaigns to the program and launch
            Signature feature now.
          </p>
          <div className="mx-button-group">
            <button type="button" className="button-secondary button-rounded button">
              Learn More
            </button>
            <button type="button" className="button-primary button-rounded button">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modal1" readOnly />
        <label htmlFor="modal1" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modal1" className="mx-modal-close" />
          <h2 className="h2">What's Next</h2>
          <div className="icon-block">
            <div className="row">
              <div className="md-column--1of5">
                <div className="sig-icon">
                  <img
                    className="mx-icon-64"
                    // src="https://pages.github.groupondev.com/maparicio/groupon-merchant-experience/images/illustrative-icons/customers.svg"
                    alt="Add Staff Profile"
                  />
                </div>
              </div>
              <div className="md-column--4of5">
                <h5>Add Staff Profile</h5>
                Choose doctors and team members involved in the service offered
                in this campaign or create new staff profile.
              </div>
            </div>

            <div className="row">
              <div className="md-column--1of5">
                <div className="sig-icon">
                  <img
                    className="mx-icon-64"
                    // src="https://pages.github.groupondev.com/maparicio/groupon-merchant-experience/images/illustrative-icons/camera.svg"
                    alt="Shooting"
                  />
                </div>
              </div>
              <div className="md-column--4of5">
                <h5>Photo Shooting</h5>
                Groupon Signature team will visit your place in person with
                photographers to take professional interior photos.
              </div>
            </div>

            <div className="row">
              <div className="md-column--1of5">
                <div className="sig-icon">
                  <div className="sig-icon">
                    <img
                      className="mx-icon-64"
                      // src="https://pages.github.groupondev.com/maparicio/groupon-merchant-experience/images/illustrative-icons/website.svg"
                      alt="Prepare to Launch"
                    />
                  </div>
                </div>
              </div>
              <div className="md-column--4of5">
                <h5>Prepare to Launch</h5>
                Groupon Signature team will review all materials you’ve
                submitted and prepare to launch your Signautre Campaign.
              </div>
            </div>

            <div className="row">
              <div className="md-column--1of5">
                <div className="sig-icon">
                  <img
                    className="mx-icon-64"
                    // src="https://pages.github.groupondev.com/maparicio/groupon-merchant-experience/images/illustrative-icons/website.svg"
                    alt="Signature Feature Launched"
                  />
                </div>
              </div>
              <div className="md-column--4of5">
                <h5>Signature Feature Launched</h5>
                You’ll see your shinny new deal page with Signature feature live
                including all the professional information you provided.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalSubmitChange" readOnly />
        <label htmlFor="modalSubmitChange" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalSubmitChange" className="mx-modal-close" />
          <h2 className="h2">Are Sure You Want to Submit the Change?</h2>
          <p>
            Groupon Signature team will review these changes carefully and will notify you once your submission has been approved.
          </p>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                name="pledge_accurate"
                value="yes"
                type="checkbox"
                checked
                readOnly
              />
              <span className="checkbox" />
              By checking this box, I’m
              pledging:
              <br />
              (1) The information I have provided is complete and accurate
              <br />
              (2) I will promptly update Groupon if any of the information
              changes in the future.
            </label>
          </div>

          <div className="sig-modal-buttons">
            <Link to="groupon.com">Cancel</Link>
            <button type="button" className="button-primary button">Submit</button>
          </div>

        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalSaveChanges" readOnly />
        <label htmlFor="modalSaveChanges" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalSaveChanges" className="mx-modal-close" />
          <h2 className="h2">Save Changes?</h2>
          <p>
            Your edit will be saved and you can continue your edit later.
          </p>

          <div className="sig-modal-buttons">
            <Link to="groupon.com">Dismiss Changes</Link>
            <button type="button" className="button-primary button">Save</button>
          </div>

        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalDeleteProfile" readOnly />
        <label htmlFor="modalDeleteProfile" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalDeleteProfile" className="mx-modal-close" />
          <h2 className="h2">Delete This Profile?</h2>
          <p>
            All profile information will be deleted and this profile will be removed from relevent campaign.
          </p>

          <div className="sig-modal-buttons">
            <Link to="groupon.com">Keep Profile</Link>
            <button type="button" className="button-primary button">Delete Profile</button>
          </div>

        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalStaffSubmitted" readOnly />
        <label htmlFor="modalStaffSubmitted" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalStaffSubmitted" className="mx-modal-close" />
          <h2 className="h2">Your staff information is submitted</h2>
          <p>
            Groupon Signature team will review these information carefully. We’ll notify you once your submission has been approved.
          </p>

          <div className="sig-modal-buttons">
            <button type="button" className="button-primary button">Got it</button>
          </div>

        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalInfoSubmitted" readOnly />
        <label htmlFor="modalInfoSubmitted" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalInfoSubmitted" className="mx-modal-close" />
          <h2 className="h2">Your information is submitted</h2>
          <p>
            Groupon Signature team will review these information carefully and will notify you shortly about your status.
          </p>

          <div className="sig-modal-buttons">
            <Link to="groupon.com">Got it</Link>
            <button type="button" className="button-primary button">Continue</button>
          </div>

        </div>
      </div>

      <div className="mx-modal-container">
        <input type="checkbox" className="mx-modal-checkbox" id="modalChangeInfo" readOnly  />
        <label htmlFor="modalChangeInfo" className="mx-modal-overlay" />

        <div className="mx-modal-content signature-modal">
          <label htmlFor="modalChangeInfo" className="mx-modal-close" />
          <h2 className="h2">Want to Change Your Information?</h2>
          <p>
            Groupon Signature team will review any changes you made carefully and re-evaluate if this campagin is qualify for Signature.
            <br />
            <br />
            Signature feature will still be live on your campaign and your changes will be applied after we accept your submission.
          </p>

          <div className="sig-modal-buttons">
            <Link to="groupon.com">Cancel</Link>
            <button type="button" className="button-primary button">Yes, I want to make changes</button>
          </div>

        </div>
      </div>

    </div>
  </ModalStyles>
);

export default Modals;
