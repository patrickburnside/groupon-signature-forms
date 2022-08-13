import React from 'react'
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div class="pageNotFound404">
      <h1>404</h1>
      <h2>Ooops! :(</h2>
      <h4>This page does not exist, or is unavailable.</h4>
      <Link to="/">
          <button type="button" className="button-primary button-rounded button">
          Go Back to Home
          </button>
        </Link>
    </div>
  )
}

export default Notfound
