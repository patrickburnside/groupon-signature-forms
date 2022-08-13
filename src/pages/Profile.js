import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form';
import InputTags from '../helpers/inputTags';
import ImgDropAndCrop from '../helpers/ImgDropAndCrop';
import { FormStyles } from '../styles'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined)

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const Profile = () => {
  return (
  <FormStyles>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <div className="mx-layout-container">
          <main className="mx-main">
            <section className="mx-main-content m-left-132">
              <mc-breadcrumbs>
                <ul className="mx-breadcrumb-list">
                  <li className="mx-breadcrumb-item">
                    <Link to="/">Groupon Signature</Link>
                  </li>
                  <li className="mx-breadcrumb-item"> Create New Profile </li>
                </ul>
              </mc-breadcrumbs>
              <h2>Create a New Profile</h2>

              <div className="staff-profile-image">
                <Field name="staff-photo">
                  {({ input, meta }) => (
                    <div className="input-group">
                      <label htmlFor="modal1">
                        <div className="dropzone-spot">
                          <Link to="#!">+Edit Profile Photo</Link>
                        </div>
                      </label>
                    </div>
                  )}
                </Field>
              </div>

              <div className="mx-modal-container">
                <input type="checkbox" className="mx-modal-checkbox" id="modal1" />
                <label htmlFor="modal1" className="mx-modal-overlay"></label>

                <div className="mx-modal-content modal-img-upload">
                  <label htmlFor="modal1" className="mx-modal-close"></label>
                  Drag the region below to crop the image
                  <ImgDropAndCrop />
                </div>
              </div>

              <div className="row sig-grid">
                <div className="md-column sm-column--1of2">
                  <Field name="first_name" validate={required}>
                    {({ input, meta }) => (
                      <div className="input-group">
                        <label>
                          <span>First Name</span>
                          {meta.error && meta.touched && (
                            <div className="mx-alert-error">{meta.error}</div>
                          )}
                        </label>
                        <input
                          className="text-input"
                          {...input}
                          type="text"
                          placeholder="Enter first name here"
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <div className="md-column sm-column--2of2">
                  <Field name="last_name" validate={required}>
                    {({ input, meta }) => (
                      <div className="input-group">
                        <label>
                          <span>Last Name</span>
                          {meta.error && meta.touched && (
                            <div className="mx-alert-error">{meta.error}</div>
                          )}
                        </label>
                        <input
                          className="text-input"
                          {...input}
                          type="text"
                          placeholder="Enter last name here"
                        />
                      </div>
                    )}
                  </Field>
                </div>
              </div>

              <Field name="years_experience" validate={mustBeNumber}>
                {({ input, meta }) => (
                  <div className="input-group">
                    <label>
                      <span>Years of Experience</span>
                      {meta.error && meta.touched && (
                        <div className="mx-alert-error">{meta.error}</div>
                      )}
                    </label>
                    <input
                      className="text-input"
                      {...input}
                      type="number"
                      typemismatch="Please enter a number"
                      placeholder="Enter a number here"
                    />
                  </div>
                )}
              </Field>

              <Field name="procedure_count" validate={mustBeNumber}>
                {({ input, meta }) => (
                  <div className="input-group">
                    <label>
                      <span>Total number of procedures performed by this staff member in their career</span>
                      {meta.error && meta.touched && (
                        <div className="mx-alert-error">{meta.error}</div>
                      )}
                    </label>
                    <input
                      className="text-input"
                      {...input}
                      type="number"
                      typemismatch="Please enter a number"
                      placeholder="Enter a number here"
                    />
                  </div>
                )}
              </Field>


              <div className="checkbox-group">
                <div className="form-subtitle">
                  Which location(s) is this staff working at?
                </div>
                <label className="checkbox-label">
                  <Field
                    name="location_staff"
                    value="905 West Division Street"
                    component="input"
                    type="checkbox"
                    checked
                  />{' '}
                  <span className="checkbox"></span>905 West Division Street
                </label>
              </div>

              <div className="checkbox-group">
                <div className="form-subtitle">Abbreviated Title/Post-Nominal Letters.</div>
                <p>
                  This will be displayed on the deal page after your name. For example: Dr. John Q Smith, MD
                </p>
                <label className="checkbox-label">
                  <Field
                    name="title_abrv"
                    value="MD"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>MD
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title_abrv"
                    value="NP"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>NP
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title_abrv"
                    value="PA"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>PA
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title_abrv"
                    value="RN"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>RN
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title_abrv_add"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Other
                </label>
                <Condition when="title_abrv_add" is={true}>
                  <div>
                    <Field
                      className="text-input indented-input"
                      name="title_abrv_text"
                      component="input"
                      placeholder="Abbreviated title"
                    />
                  </div>
                </Condition>
              </div>

              <div className="checkbox-group">
                <div className="form-subtitle">Full Title</div>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Doctor"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Doctor
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Nurse Practitioner"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Nurse Practitioner
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Physician Assistant"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Physician Assistant
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Registered Nurse"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Registered Nurse
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Esthetician"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Esthetician
                </label>
                <label className="checkbox-label">
                  <Field
                    name="title"
                    value="Medical Technician"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Medical Technician
                </label>
                <label className="checkbox-label">
                  <Field name="title_add" component="input" type="checkbox" />{' '}
                  <span className="checkbox"></span>Other
                </label>
                <Condition when="title_add" is={true}>
                  <div>
                    <Field
                      className="text-input indented-input"
                      name="specialty_text"
                      component="input"
                      placeholder="Please specify..."
                    />
                  </div>
                </Condition>
              </div>

              <div className="radio-group">
                <div className="form-subtitle">
                  Is this the lead doctor in the business?
                </div>
                <label className="radio-label">
                  <Field
                    name="lead_doctor"
                    component="input"
                    type="radio"
                    value="yes"
                  />{' '}
                  <span className="radio"></span>Yes
                </label>
                <label className="radio-label">
                  <Field
                    name="lead_doctor"
                    component="input"
                    type="radio"
                    value="no"
                  />{' '}
                  <span className="radio"></span>No
                </label>
              </div>

              <div className="radio-group">
                <div className="form-subtitle">
                  Is this staff member board certified?
                </div>
                <label className="radio-label">
                  <Field
                    name="board_certified"
                    value="Yes"
                    component="input"
                    type="radio"
                  />{' '}
                  <span className="radio"></span>Yes
                </label>
                <Condition when="board_certified" is="Yes">
                  <InputTags />
                </Condition>
                <label className="radio-label">
                  <Field
                    name="board_certified"
                    value="No"
                    component="input"
                    type="radio"
                  />{' '}
                  <span className="radio"></span>No
                </label>
              </div>

              <div className="checkbox-group">
                <div className="form-subtitle">
                  Does this staff member has certifications or credentials in
                  one or more of these following areas? ( eg. manufacturer
                  certifications )
                </div>
                <label className="checkbox-label">
                  <Field
                    name="staff_certs"
                    value="Injectables"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Injectables
                </label>
                <label className="checkbox-label">
                  <Field
                    name="staff_certs"
                    value="Laser Hair Removal"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Laser Hair Removal
                </label>
                <label className="checkbox-label">
                  <Field
                    name="staff_certs"
                    value="Fat Reduction"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Fat Reduction
                </label>
                <label className="checkbox-label">
                  <Field
                    name="staff_certs_add"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>Other
                </label>
                <Condition when="staff_certs_add" is={true}>
                  <div>
                    <Field
                      className="text-input"
                      name="staff_certs_text"
                      component="textarea"
                      placeholder="Staff member has certifications?"
                    />
                  </div>
                </Condition>
              </div>

              <Field name="education" validate={required}>
                {({ input, meta }) => (
                  <div className="input-group">
                    <label>
                      <span>Education</span>
                      {meta.error && meta.touched && (
                        <div className="mx-alert-error">{meta.error}</div>
                      )}
                    </label>
                    <textarea
                      className="text-input"
                      {...input}
                      type="textarea"
                      rows="5"
                      placeholder="Please list out relevant education or training background such as undergraduate, medical school, residency programs, fellowship, etc."
                    />
                  </div>
                )}
              </Field>

              <Field name="professional_memberships" validate={required}>
                {({ input, meta }) => (
                  <div className="input-group">
                    <label>
                      <span>Professional Memberships</span>
                      {meta.error && meta.touched && (
                        <div className="mx-alert-error">{meta.error}</div>
                      )}
                    </label>
                    <textarea
                      className="text-input"
                      {...input}
                      type="textarea"
                      rows="5"
                      placeholder="Please list out relevant professional memberships, eg. American Medical Association"
                    />
                  </div>
                )}
              </Field>

              <Field name="about_me" validate={required}>
                {({ input, meta }) => (
                  <div className="input-group">
                    <label>
                      <span>About Me</span>
                      {meta.error && meta.touched && (
                        <div className="mx-alert-error">{meta.error}</div>
                      )}
                    </label>
                    <textarea
                      className="text-input"
                      {...input}
                      type="textarea"
                      rows="5"
                      placeholder="Please provide any other additional information that you'd like to share with Groupon customers."
                    />
                  </div>
                )}
              </Field>

              <div className="checkbox-group disabled">
                <label className="checkbox-label">
                  <Field
                    name="pledge_accurate"
                    value="yes"
                    component="input"
                    type="checkbox"
                  />{' '}
                  <span className="checkbox"></span>By checking this box, I’m
                  pledging:
                  <br />
                  (1) The information I have provided is complete and accurate
                  <br />
                  (2) I will promptly update Groupon if any of the information
                  changes in the future.
                </label>
              </div>

              <div className="buttons centered">
                <button
                  className="button-primary button-rounded button"
                  type="submit"
                  disabled={submitting}
                >
                  Create Profile
                </button>
              </div>
            </section>
            <aside className="mx-sidebar">
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </aside>
          </main>
        </div>
      )}
    />
  </FormStyles>
  )
}

export default Profile;
