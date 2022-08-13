
import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyles } from '../styles/globalStyles'

const Enroll = () => {
  return (
  <GlobalStyles>
    <div className="mx-layout-container">
      <main className="mx-main">
        <section className="mx-main-content m-left-132">
          <mc-breadcrumbs>
            <ul className="mx-breadcrumb-list">
              <li className="mx-breadcrumb-item">
                <Link to="/">Groupon Signature</Link>
              </li>
              <li className="mx-breadcrumb-item"> Enroll </li>
            </ul>
          </mc-breadcrumbs>
          <h1>Enroll in Groupon Signature</h1>
          <div className="page-subtitle">
            Tell us More About Your Business and Service
          </div>
          <div className="page-description">
            As a Signature provider, you’ll have to provide sufficient
            information for your customer to learn about your treatment process,
            detail experience as well as ambiance and cleanliness. Having full
            transparency would help you build trust with your customers.
            <br />
            <br />
            Please answer the following questions in this section as they
            pertain to your practice.
          </div>
          <div className="buttons centered">
            <Link className="active" to="/">Home</Link>
            <Link to="/enroll-form">
              <button className="button-primary button-rounded button" type="submit">
                Start
              </button>
            </Link>
          </div>
        </section>

        <aside className="mx-sidebar">
          <h2>Your Campaign</h2>
          <p>
            Three or Six Laser Hair-Removal Sessions on a Small, Medium, or
            Large Area (Up to 89% Off)
          </p>
          <h3>Redemption Location</h3>
          <p>905 West Division Street</p>
          <small>
            Last Update
            <br />
            Apr 18 2019, 12:00 PM
          </small>
          <hr />
          <small>
            Need Help?
            <br />
            <Link to="/">Contact Groupon Specialist</Link>
          </small>
        </aside>
      </main>
    </div>
  </GlobalStyles>
  )
}

export default Enroll;
