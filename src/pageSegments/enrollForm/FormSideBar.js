import React from 'react'
import { Link } from 'react-router-dom'

const FormSideBar = () => {
  return (
    <aside className="mx-sidebar m-top-95">
      <h2>Your Campaign</h2>
      <p>Three or Six Laser Hair-Removal Sessions on a Small, Medium, or Large Area (Up to 89% Off)</p>
      <h3>Redemption Location</h3>
      <p>905 West Division Street</p>
      <small>
        Last Update<br />
        Apr 18 2019, 12:00 PM
      </small>
      <hr />
      <small>
        Need Help?<br />
        <Link to="/">Contact Groupon Specialist</Link>
      </small>
    </aside>
  )
}

export default FormSideBar