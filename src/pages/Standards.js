import React from 'react';
import { Link } from 'react-router-dom';
import { StandardsStyles } from '../styles'

const Standards = () => {
  return (
  <StandardsStyles>
    <div>
      <mc-breadcrumbs>
        <ul className="mx-breadcrumb-list">
          <li className="mx-breadcrumb-item">
            <Link to="/">Groupon Signature</Link>
          </li>
          <li className="mx-breadcrumb-item">
            <Link to="/Opening">About</Link>
          </li>
          <li className="mx-breadcrumb-item"> Signature Quality Standards </li>
        </ul>
      </mc-breadcrumbs>
      <h2>Signature Quality Standards</h2>

      <section>
        <h3>Professional Expertise</h3>
        <p>A Board Certified doctor leads an experienced team of top-notch professionals.</p>
        <ul className="checked-bullets">
          <li>Doctor is certified by an American Board of Medical Specialties member board</li>
          <li>For highly specialized treatments, the doctor is certified by a relevant board</li>
          <li>Doctor oversees your care and is involved in designing a treatment plan</li>
          <li>A doctor, nurse, or other qualified professional performs the procedure</li>
          <li>Support team is experienced based on the number of procedures performed</li>
        </ul>
      </section>

      <section>
        <h3>Top Quality Service</h3>
        <p>Providers offer consistent, top-quality customer service.</p>
        <ul className="checked-bullets">
          <li>Friendly, helpful staff</li>
          <li>Free consultation with a doctor, nurse, or other qualified professional</li>
          <li>Refund given if you’re ineligible for the procedure</li>
        </ul>
      </section>

      <section>
        <h3>Strong Reputation</h3>
        <p>Providers are highly regarded and maintain top customer service scores from Groupon customers and across the web.</p>
        <ul className="checked-bullets">
          <li>Great ratings and reviews across the web</li>
          <li>Highly regarded on social media</li>
        </ul>
      </section>

      <section>
        <h3>Complete Transparency</h3>
        <p>Providers go out of their way to share details with their customers about the treatment, costs, and aftercare.</p>
        <ul className="checked-bullets">
          <li>Honest assessment about the best treatment for you</li>
          <li>Upfront review about total cost, possible follow-up sessions, and timeline to complete the treatment</li>
          <li>Details on aftercare and recovery, including medications or special items you might need to buy beforehand</li>
        </ul>
      </section>

      <section>
        <h3>Clean, Inviting Ambience</h3>
        <p>Providers feature pleasant, professional workspaces, ranging from classic doctor offices to luxurious medical spas.</p>
        <ul className="checked-bullets">
          <li>Clean, professional space</li>
          <li>Pleasant ambience</li>
          <li>Private treatment area</li>
        </ul>
      </section>

    </div>
  </StandardsStyles>
  )
}

export default Standards;
