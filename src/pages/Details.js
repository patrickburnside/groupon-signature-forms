
import React from 'react';
import { Link } from 'react-router-dom';
import TabsDetails from '../components/TabsDetails'
import Notifications from '../components/Notifications'
import TreatmentProcess from '../pageSegments/campaignDetails/TreatmentProcess';
import { DetailsStyles } from '../styles'

const Details = () => {
  return (
  <DetailsStyles>
    <div className="mc-details">
      <mc-breadcrumbs>
        <ul className="mx-breadcrumb-list">
          <li className="mx-breadcrumb-item">
            <Link to="/">Groupon Signature</Link>
          </li>
          <li className="mx-breadcrumb-item"> Signature Campaign Details </li>
        </ul>
      </mc-breadcrumbs>
      <div className="deal-performance-header">
        <div className="deal-performance-header__title">
          <h2 className="deal-performance-header__title-content">
            Three or Six Laser Hair-Removal Sessions on a Small, Medium, or
            Large Area at Orland Park Plastic Surgery (Up to 89% Off)
          </h2>
        </div>
        <div className="deal-performance-header__info-box text-medium display-flex">
          <div className="deal-performance-header__info-box-item">
            <mc-deal-status>
              <span className="mx-dot-green color-groupon-green">Deal is Live</span>
            </mc-deal-status>
          </div>
          <div className="deal-performance-header__info-box-item">
            <span> • Updated on Apr 18 2019, 12:00 PM  • </span>
          </div>
          <div className="status-box pending">
            Paused
          </div>
        </div>
        <Notifications />
        <TabsDetails />
        <TreatmentProcess />
      </div>
    </div>
  </DetailsStyles>
  )
}

export default Details;
