import React from 'react'
import { Link } from 'react-router-dom';

const CampaignList = () => {
  return (
    <div className="campaigns-list">
      <div className="mx-toggle-group">
        <label className="mx-toggle" htmlFor="toggle1">
          <input
            onChange={this.handleSubmit}
            type="checkbox"
            className="mx-toggle-checkbox"
            id="toggle1"
            checked
            readOnly
          />
          <span className="mx-toggle-button">All</span>
        </label>

        <label className="mx-toggle" htmlFor="toggle2">
          <input type="checkbox" className="mx-toggle-checkbox" id="toggle2" readOnly />
          <span className="mx-toggle-button">Pre-qualified</span>
        </label>
        <label className="mx-toggle" htmlFor="toggle3">
          <input type="checkbox" className="mx-toggle-checkbox" id="toggle3" readOnly />
          <span className="mx-toggle-button">Pending Review</span>
        </label>
        <label className="mx-toggle" htmlFor="toggle4">
          <input type="checkbox" className="mx-toggle-checkbox" id="toggle4" readOnly />
          <span className="mx-toggle-button">Enrolled</span>
        </label>
        <label className="mx-toggle" htmlFor="toggle5">
          <input type="checkbox" className="mx-toggle-checkbox" id="toggle5" readOnly />
          <span className="mx-toggle-button">Launched</span>
        </label>
        <label className="mx-toggle" htmlFor="toggle6">
          <input type="checkbox" className="mx-toggle-checkbox" id="toggle6" readOnly />
          <span className="mx-toggle-button mx-toggle-caret">Last Update</span>
        </label>
      </div>
      
      <table className="deal-table">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>
                Three or Six Laser Hair-Removal Sessions on a Small, Medium, or Large Area (Up to 89% Off)
              </strong>
              <span className="mx-dot-green">Deal is Live</span>
            </td>
            <td>
              <span className="status-box enrolled">Enrolled</span>
            </td>
            <td>Apr 18 2019, 12:00 PM</td>
            <td>
              <Link to="/enroll-form">
                <button type="button" className="button-primary button-rounded button">
                  Enroll
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Four or Six iLipo Laser Fat Reduction Treatments (Up to 88% Off)
              </strong>
              <span className="mx-dot-green">Deal is Live</span>
            </td>
            <td>
              <span className="status-box preQualified">Pre-qualified</span>
            </td>
            <td>Apr 18 2019, 12:00 PM</td>
            <td>
              <Link to="/enroll-form">
                <button type="button" className="button-primary button-rounded button">
                  Continue
                </button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                $161 for 20 Units of Botox ($400 Value)
              </strong>
              <span className="mx-dot-green">Deal is Live</span>
            </td>
            <td>
              <span className="status-box pending">Pending Review</span>
            </td>
            <td>Apr 18 2019, 12:00 PM</td>
            <td>
              <button type="button" className="button-primary button-rounded button">
                View Details
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                One or Two ThermaLift Skin-Tightening Facelifts (Up to 87% Off)
              </strong>
              <span className="mx-dot-green">Deal is Live</span>
            </td>
            <td>
              <span className="status-box rejected">Rejected</span>
            </td>
            <td>Apr 18 2019, 12:00 PM</td>
            <td>
              <button type="button" className="button-primary button-rounded button">
                View Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CampaignList