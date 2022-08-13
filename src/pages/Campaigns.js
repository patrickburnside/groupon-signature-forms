
import React from 'react'
import StaffProfiles from '../pageSegments/StaffProfiles';
import CampaignList from '../pageSegments/CampaignList';
import { CampaignsStyles } from '../styles'

const Campaigns = () => {
  return (
  <CampaignsStyles>
    <div className="campaigns">
      <h2>Groupon Signature</h2>
      <h3 className="no-border">Your Signature Campaigns</h3>
      <div className="mx-alert-info">
        Some of Your Campaigns are Pre-qualified for Groupon Signature. Enroll them now.
        <span className="mx-alert-close" />
      </div>
      
      <CampaignList />
      <StaffProfiles />

    </div>
  </CampaignsStyles>
  )
}

export default Campaigns;
