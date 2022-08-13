import React from 'react'

const TabsDetails = () => {
  return (
    <div className="tabs-with-content">
      <ul className="mx-tab-text">
        <li className="mx-tab-item is-active">
          <span className="mx-tab-text-label">Treatment Process</span>
        </li>
        <li className="mx-tab-item">
          <span className="mx-tab-text-label">Treatment Details</span>
        </li>
        <li className="mx-tab-item">
          <span className="mx-tab-text-label">Ambience</span>
        </li>
        <li className="mx-tab-item">
          <span className="mx-tab-text-label">Transparency</span>
        </li>
        <li className="mx-tab-item">
          <span className="mx-tab-text-label disabled">Staff Involved</span>
        </li>
      </ul>
    </div>
  )
}

export default TabsDetails
