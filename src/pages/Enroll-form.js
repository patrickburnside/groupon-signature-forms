import React from 'react'
import { Link } from 'react-router-dom'
import Wizard from '../helpers/Wizard'
import ProgressSteps from '../components/ProgressSteps'
import FormTreatmentProcess from '../pageSegments/enrollForm/FormTreatmentProcess'
import FormTreatmentDetails from '../pageSegments/enrollForm/FormTreatmentDetails'
import FormAmbience from '../pageSegments/enrollForm/FormAmbience'
import FormTransparency  from '../pageSegments/enrollForm/FormTransparency'
import FormPledge from '../pageSegments/enrollForm/FormPledge'
import FormSideBar from '../pageSegments/enrollForm/FormSideBar'
import { FormStyles } from '../styles'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

// const required = value => (value ? undefined : 'Required')
// const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

const EnrollForm = () => {
  return (
  <FormStyles>
    <main className="mx-main">
      <section className="mx-main-content">
        <mc-breadcrumbs>
          <ul className="mx-breadcrumb-list">
            <li className="mx-breadcrumb-item">
              <Link to="/">Groupon Signature</Link>
            </li>
            <li className="mx-breadcrumb-item"> Enroll </li>
          </ul>
        </mc-breadcrumbs>
        <h2>Enroll in Groupon Signature</h2>

        <ProgressSteps />

        <Wizard onSubmit={onSubmit}>
          <Wizard.Page>
            <FormTreatmentProcess />
          </Wizard.Page>

          <Wizard.Page>
            <FormTreatmentDetails />
          </Wizard.Page>

          <Wizard.Page>
            <FormAmbience />
          </Wizard.Page>

          <Wizard.Page>
            <FormTransparency />
          </Wizard.Page>

          <Wizard.Page>
            <FormPledge />
          </Wizard.Page>
        </Wizard>

      </section>
      <FormSideBar />
    </main>

  </FormStyles>
  )
}

export default EnrollForm;
