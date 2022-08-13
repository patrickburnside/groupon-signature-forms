import React from 'react'
import { Field } from 'react-final-form'

const FormPledge = () => {
  return (
    <div className="form-pledge">
      Signature Pledge <br /><br />

      Please carefully read the Signature Pledge below and check the box to indicate that you agree on the content.

      Groupon Signature Provider Pledge
      Effective Date 07/19/2018

      As a Signature Provider enrolled in Groupon Signature program,

      I pledge to provide professional treatment to all Groupon customers with the following details:
      Doctor performs the procedure
      Doctor performs the consultation
      Doctor performs every treatments
      Doctor’s role: Doctor performs every treatments and involves in every case
      Doctor is on site 5 days a week
      Consultation is scheduled separately before the first treatment
      Diode is the device used for laser treatment
      Specific model used is XDGY-09
      Cooling device is always used for laser hair removal treatments
      Our standard treatment procedure is: We keep devices at the lowest setting throughout all sessions.

      I pledge to provide clean, inviting ambience to all Groupon customers with the following details:
      Doctor performs the procedure<br /><br />

      <Field name="form-complete-answer">
        {({ input, meta }) => (
          <div className="input-group">
            <label>By entering your name below, you are confirming (1) the information you have provided in this form is complete and accurate, and (2) you will promptly update Groupon if any of the information changes in the future.
      {meta.error && meta.touched && <div className="mx-alert-error">{meta.error}</div>}
            </label>
            <input className="text-input" {...input} type="text" />
          </div>
        )}
      </Field>
    </div>
  )
}

export default FormPledge