import React from 'react'
import { Field } from 'react-final-form'

const FormAmbience = () => {
  return (
    <div className="form-ambience">
      <div className="radio-group">
        <div className="form-subtitle">Is your practice space pleasant, relaxing, and clean (for example: nice decor, music, other touches)?</div>
        <label className="radio-label">
          <Field name="comfort_info" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="comfort_info" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">Does your space have private treatment spaces, so that customers cannot be seen by other customers during a service?</div>
        <label className="radio-label">
          <Field name="treatment_process" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="treatment_process" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>
    </div>
  )
}

export default FormAmbience
