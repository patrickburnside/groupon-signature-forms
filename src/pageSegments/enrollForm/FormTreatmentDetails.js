import React from 'react'
import { Field } from 'react-final-form'

const FormTreatmentDetails = () => {
    const Condition = ({ when, is, children }) => (
      <Field name={when} subscription={{ value: true }}>
        {({ input: { value } }) => (value === is ? children : null)}
      </Field>
    )
    return (
    <div className="form-treatment-details">
      <div className="checkbox-group">
        <div className="form-subtitle">What type(s) of lasers are used?</div>
        <label className="checkbox-label">
          <Field name="device_type" value="Diode" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Diode
        </label>
        <label className="checkbox-label">
          <Field name="device_type" value="Alexandrite" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Alexandrite
        </label>
        <label className="checkbox-label">
          <Field name="device_type" value="Nd:YAG" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Nd:YAG
        </label>
        <label className="checkbox-label">
          <Field name="device_type" value="Ruby" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Ruby
        </label>
        <label className="checkbox-label">
          <Field name="device_type" value="IPL" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>IPL
        </label>
        <label className="checkbox-label">
          <Field name="device_type_add" component="input" type="checkbox" />{' '}
          <span className="checkbox"></span>Other
        </label>
        <Condition when="device_type_add" is={true}>
          <div>
            <Field className="text-input" name="device_type_text" component="textarea" placeholder="What type(s) of lasers are used?" />
          </div>
        </Condition>
      </div>

      <Field name="device_model">
        {({ input, meta }) => (
          <div className="input-group">
            <label>What specific device models do you use?
      {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <input className="text-input" {...input} type="text" />
          </div>
        )}
      </Field>

      <div className="radio-group">
        <div className="form-subtitle">Is a cooling device used for laser hair removal treatments?</div>
        <label className="radio-label">
          <Field name="cooling_system" value="Always" component="input" type="radio" />{' '}
          <span className="radio"></span>Always
        </label>
        <label className="radio-label">
          <Field name="cooling_system" value="Sometimes" component="input" type="radio" />{' '}
          <span className="radio"></span>Sometimes
        </label>
        <label className="radio-label">
          <Field name="cooling_system" value="Never" component="input" type="radio" />{' '}
          <span className="radio"></span>Never
        </label>
      </div>

      <Field name="intensity_setting">
        {({ input, meta }) => (
          <div className="input-group">
            <label>What is your standard treatment procedure? For example, do you keep devices at the lowest setting throughout all sessions or increase it over time?
      {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <input className="text-input" {...input} type="text" />
          </div>
        )}
      </Field>
    </div>
  )
}

export default FormTreatmentDetails
