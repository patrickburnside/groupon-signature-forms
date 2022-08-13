import React from 'react'
import { Field } from 'react-final-form'

const FormTransparency = () => {
  return (
    <div className="form-transparency">
      <div className="page-title">Transparent Info</div>
      <div className="page-subtitle">Please answer the following questions as they pertain to your practice.</div>

      <div className="radio-group">
        <div className="form-subtitle">Will you offer all patients honest recommendations about the best treatment for them?</div>
        <label className="radio-label">
          <Field name="honest_recommendations" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="honest_recommendations" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">Will you offer all patients upfront info about the total cost of treatment and possible followup treatments needed, including timeline and costs of possible followup?</div>
        <label className="radio-label">
          <Field name="total_cost" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="total_cost" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">Will you offer all patients a clear description of any risks involved in the treatment?</div>
        <label className="radio-label">
          <Field name="clear_description" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="clear_description" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">Will you offer friendly, helpful service to all Groupon visitors?</div>
        <label className="radio-label">
          <Field name="pledge_friendly" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="pledge_friendly" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <div className="radio-group">
        <div className="form-subtitle">If this deal is available at multiple locations, is all of the information about treatment processes, devices, etc (everything except for the staff members) consistent across all locations?</div>
        <label className="radio-label">
          <Field name="consistent_across_locations" value="Yes" component="input" type="radio" />{' '}
          <span className="radio"></span>Yes
        </label>
        <label className="radio-label">
          <Field name="consistent_across_locations" value="No" component="input" type="radio" />{' '}
          <span className="radio"></span>No
        </label>
      </div>

      <Field name="consistent_details">
        {({ input, meta }) => (
          <div className="input-group">
            <label>If no, please describe how locations are different.
        {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <input className="text-input" {...input} type="text" />
          </div>
        )}
      </Field>

      <Field name="extra_info">
        {({ input, meta }) => (
          <div className="input-group">
            <label>Is there anything else you'd like to tell us about your practice or wish to share with Groupon customers?
        {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <input className="text-input" {...input} type="text" />
          </div>
        )}
      </Field>
    </div>
  )
}

export default FormTransparency

