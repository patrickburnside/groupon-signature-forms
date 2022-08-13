
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import App from './App';
import Notfound from './pages/Notfound';
import Welcome from './pages/Welcome';
import Modals from './components/Modals';
import Opening from './pages/Opening';
import Campaigns from './pages/Campaigns';
import Profile from './pages/Profile';
import Enroll from './pages/Enroll';
import EnrollForm from './pages/Enroll-form';
import Details from './pages/Details';
import Standards from './pages/Standards';

//TODO remove these styles when the MX Input is in place, then remove input-tags
//import './styles/index.css';
import { GlobalStyles } from './styles/globalStyles'

const routing = (
  <GlobalStyles>
    <Router>
      <div className="signature-side-nav">
        <ul className="mx-vnav-list">
          <div className="side-logo">
            <Link to="/merchant/center/" className="Logo_logo__1zKeB">
              <svg
                width="64px"
                height="64px"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 197.5 140"
              >
                <title>groupon_merchant_logo_mpetus_rgb</title>
                <path
                  fill="#383"
                  d="M126.65 195h-40L53.45 95h40z"
                  transform="translate(-26.65 -55)"
                />
                <path
                  fill="#53a318"
                  d="M66.65 195h-40l26.8-100h40z"
                  transform="translate(-26.65 -55)"
                />
                <path
                  fill="#383"
                  d="M186.65 195h-40l-27.9-120h40z"
                  transform="translate(-26.65 -55)"
                />
                <path
                  fill="#53a318"
                  d="M126.65 195h-40l32.1-120h40zm60 0h-40l37.5-140h40z"
                  transform="translate(-26.65 -55)"
                />
              </svg>
            </Link>
          </div>
          <div className="side-header">Groupon Signature</div>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Welcome">
              Welcome
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Campaigns">
              Campaigns
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink exact activeClassName="active" to="/Details">
              Details
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink exact activeClassName="active" to="/Enroll">
              Enroll - Start
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink exact activeClassName="active" to="/Enroll-form">
              Enroll - Form
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Modals">
              Modals
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Opening">
              Opening
            </NavLink>
          </li>
          <li className="mx-vnav-subnav-item">
            <NavLink activeClassName="active" to="/Standards">
              Standards
            </NavLink>
          </li>
          <div className="side-nav-secondary">
            <div className="side-header">Orland Park Plastic Surgery</div>
            <li className="mx-vnav-subnav-item">
              <Link to="groupon.com">Admin</Link>
            </li>
            <li className="mx-vnav-subnav-item">
              <Link to="groupon.com">Sign Out</Link>
            </li>
          </div>
        </ul>
      </div>
      
      <div className="signature-main-content mx-main-content flex-column">
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Welcome" component={Welcome} />
          <Route path="/Modals" component={Modals} />
          <Route path="/Opening" component={Opening} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Campaigns" component={Campaigns} />
          <Route path="/Enroll" component={Enroll} />
          <Route path="/Enroll-form" component={EnrollForm} />
          <Route path="/Details" component={Details} />
          <Route path="/Standards" component={Standards} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </GlobalStyles>
);

ReactDOM.render(routing, document.getElementById('root'));
