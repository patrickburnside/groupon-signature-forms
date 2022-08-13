import React from 'react'
import { Field } from 'react-final-form'

const FormTreatmentProcess = () => {
    const Condition = ({ when, is, children }) => (
      <Field name={when} subscription={{ value: true }}>
        {({ input: { value } }) => (value === is ? children : null)}
      </Field>
    )
    return (
    <div className="form-treatment-process">
      <div className="radio-group">
        <div className="form-subtitle">Is there a board certified doctor involved in the treatments?</div>
        <label className="radio-label">
          <Field name="board_certified" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="board_certified" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="checkbox-group">
        <div className="form-subtitle">Who performs this procedure?</div>
        <label className="checkbox-label">
          <Field name="who_administers" value="Doctor" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Doctor
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Nurse Practioner" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Nurse Practioner
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Physician Assistant" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Physician Assistant
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Registered Nurse" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Registered Nurse
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Nurse - Other" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Nurse - Other
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Esthetician" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Esthetician
        </label>
        <label className="checkbox-label">
          <Field name="who_administers" value="Medical Technician" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Medical Technician
        </label>
        <label className="checkbox-label">
          <Field name="who_administers_other" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Other
        </label>
        <Condition when="who_administers_other" is={true} >
          <div>
            <Field className="text-input" name="who_administers_text" component="textarea" placeholder="Who performs this procedure?" />
          </div>
        </Condition>
      </div>

      <div className="checkbox-group">
        <div className="form-subtitle">Who performs the consultation?</div>
        <label className="checkbox-label">
          <Field name="who_consults" value="Doctor" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Doctor
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Nurse Practioner" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Nurse Practioner
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Physician Assistant" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Physician Assistant
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Registered Nurse" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Registered Nurse
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Nurse - Other" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Nurse - Other
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Esthetician" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Esthetician
        </label>
        <label className="checkbox-label">
          <Field name="who_consults" value="Medical Technician" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Medical Technician
        </label>
        <label className="checkbox-label">
          <Field name="who_consults_other" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Other
        </label>
        <Condition when="who_consults_other" is={true}>
          <div>
            <Field className="text-input" name="who_consults_text" component="textarea" placeholder="Who performs the consultation?" />
          </div>
        </Condition>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">How is the doctor involved in the treatments?</div>
        <label className="radio-label">
          <Field name="doctor_involvement" value="Doctor performs treatments" component="input" type="radio" />{' '}
          <span className="radio"></span>Doctor performs treatments
        </label>
        <label className="radio-label">
          <Field name="doctor_involvement" value="Doctor in consult but doesn't perform treatment" component="input" type="radio" />{' '}
          <span className="radio"></span>Doctor in consult but doesn't perform treatment
        </label>
        <label className="radio-label">
          <Field name="doctor_involvement" value="Nurse provides both consult and treatment" component="input" type="radio" />{' '}
          <span className="radio"></span>Nurse provides both consult and treatment
        </label>
        <label className="radio-label">
          <Field name="doctor_involvement" value="Doctor reviews all cases between consults and treatment" component="input" type="radio" />{' '}
          <span className="radio"></span>Doctor reviews all cases between consults and treatment
        </label>
        <label className="radio-label">
          <Field name="doctor_involvement" value="other" component="input" type="radio" />{' '}
          <span className="radio"></span>Other
        </label>
        <Condition when="doctor_involvement" is="other">
          <div>
            <Field className="text-input" name="doctor_involvement_text" component="textarea" placeholder="How is the doctor involved in the treatments?" />
          </div>
        </Condition>
      </div>

      <Field name="doctor_involvement_details">
        {({ input, meta }) => (
          <div className="input-group">
            <label><span>In your own words, please describe the doctor's role in the treatment.</span>
              {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <Field className="text-input" {...input} component="textarea" rows="5" placeholder="eg. Doctors overseas every case and involve in every treatment" />
          </div>
        )}
      </Field>

      <div className="radio-group">
        <div className="form-subtitle">How often is the doctor on site in an average week?</div>
        <label className="radio-label">
          <Field name="doctor_location" value="4-7 days per week" component="input" type="radio" />{' '}
          <span className="radio"></span>4-7 days per week
        </label>
        <label className="radio-label">
          <Field name="doctor_location" value="3 days per week" component="input" type="radio" />{' '}
          <span className="radio"></span>3 days per week
        </label>
        <label className="radio-label">
          <Field name="doctor_location" value="1-2 days per week" component="input" type="radio" />{' '}
          <span className="radio"></span>1-2 days per week
        </label>
        <label className="radio-label">
          <Field name="doctor_location" value="Less than one day per week" component="input" type="radio" />{' '}
          <span className="radio"></span>Less than one day per week
        </label>
        <label className="radio-label">
          <Field name="doctor_location" value="other" component="input" type="radio" />{' '}
          <span className="radio"></span>Other
        </label>
        <Condition when="doctor_location" is="other">
          <div>
            <Field className="text-input" name="doctor_location_text" component="textarea" placeholder="How often is the doctor on site in an average week?" />
          </div>
        </Condition>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">How are consultations typically handled?</div>
        <label className="radio-label">
          <Field name="consultation_process" value="Consultation is part of the first treatment visit" component="input" type="radio" />{' '}
          <span className="radio"></span>Consultation is part of the first treatment visit
        </label>
        <label className="radio-label">
          <Field name="consultation_process" value="Consultation is scheduled separately before the first treatment" component="input" type="radio" />{' '}
          <span className="radio"></span>Consultation is scheduled separately before the first treatment
        </label>
        <label className="radio-label">
          <Field name="consultation_process" value="We don't usually do a formal consultation" component="input" type="radio" />{' '}
          <span className="radio"></span>We don't usually do a formal consultation
        </label>
        <label className="radio-label">
          <Field name="consultation_process" value="Less than one day per week" component="input" type="radio" />{' '}
          <span className="radio"></span>Less than one day per week
        </label>
        <label className="radio-label">
          <Field name="consultation_process" value="other" component="input" type="radio" />{' '}
          <span className="radio"></span>Other
        </label>
        <Condition when="consultation_process" is="other">
          <div>
            <Field className="text-input" name="consultation_process_text" component="textarea" placeholder="How are consultations typically handled?" />
          </div>
        </Condition>
      </div>
    </div>
  )
}

export default FormTreatmentProcess
