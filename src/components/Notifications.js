import React from 'react'
import { Link } from 'react-router-dom';

function Notifications() {
  return (
    <div className="mx-alert-notify mx-alert-dismissible">
      Please edit the information highlighed in red and we’ll re-evaluate
      your submission.&nbsp;
      <Link to="/">Learn More</Link>
      <span className="mx-alert-close" />
    </div>
  )
}

export default Notifications
