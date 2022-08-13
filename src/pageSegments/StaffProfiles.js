import React from 'react'
import ProviderCard from '../components/ProviderCard';
import ProviderAdd from '../components/ProviderAdd'
import { StaffProfileStyles } from '../styles'

const StaffProfiles = () => {
  return (
  <StaffProfileStyles>
    <div className="profile-container">
      <div className="profile-header">
        <h3>Staff Profile</h3>
        <button type="button" className="button-secondary button-rounded button button-profile">
          Create a New Profile
          <span>&#43;</span>
        </button>
      </div>

      {/* Map through all the Providers available, and display their card */}
      <ProviderCard />
      {/* If no providers are available, show the ProviderAdd component */}
      <ProviderAdd />

    </div>
  </StaffProfileStyles>
  )
}

export default StaffProfiles
