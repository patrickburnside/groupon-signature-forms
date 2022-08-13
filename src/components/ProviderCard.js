import React from 'react'
import { ProfileCardStyles } from '../styles'
import ProfileImage1 from '../images/profile-image-1.jpeg';

const ProviderCard = () => {
  return (
  <ProfileCardStyles>
    <div class="profile">
      <img src={ProfileImage1} alt="Profile 1" className="mx-avatar" />
      <div className="profile-text">
        <h4>Dr. George  Grillo, MD</h4>
        <h6>Board Certified Doctor in Emergency Medicine and Preventive Medicine</h6>
        <h6>35 Years of Experience</h6>
        <h6>1,000+ Procedures Performed</h6>
      </div>
      <button type="button" className="button-secondary button-rounded button">Manage Profile</button>
    </div>
  </ProfileCardStyles>
  )
}

export default ProviderCard


