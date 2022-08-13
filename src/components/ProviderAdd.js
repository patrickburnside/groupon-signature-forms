import React from 'react'
import IconAddStaff from '../images/icons/add-profile.svg';

const ProviderAdd = () => {
  return (
    <div className="profile-add">
      <img src={IconAddStaff} alt="Add a staff member" />
      <h3>No Staff Profile Yet</h3>
      <p>
        As a Signature provider, you should also provide sufficient information about your staff members and their credentials to make your customers trust your business more.
        Please create a new profile for your staff.
      </p>
    </div>
  )
}

export default ProviderAdd