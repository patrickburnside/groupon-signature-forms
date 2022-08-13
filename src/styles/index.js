
import styled from 'styled-components'
import IconCheckmark from '../images/icons/checkmark.svg';

export const ProfileCardStyles = styled.div `
  .profile {
    border: 1px solid #d5d8db;
    margin-bottom: 24px;
    padding: 16px 40px 16px 16px;
    display: flex;
    align-items: center;
    img {
      width: 96px; height: 96px; display: block;
    }
    .profile-text {
      padding-left: 24px;
      h4, h6 {text-transform: inherit; color: #333; letter-spacing: 0;}
      h4 {margin: 0 0 4px 0; font-size: 16px;}
      h6 {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        display: inline-block;
        padding-right: 16px;
        :nth-child(2) {margin: 0 0 16px 0; display: block;}
      }
    }
    .button {margin-left: auto;}      
  }
  @media (max-width: 768px)  {
    .profile {
      flex-direction: column;
      padding-right: 16px;
      h6 {padding-right: 0;}
      .profile-text {
        padding-top: 24px; 
        padding-left: 0;
        text-align: center;}
      .button {
        margin-left: initial;
        margin-top: 40px;
      }
    }
}
`
export const WelcomeStyles = styled.div `
  max-width: 704px;
  margin-top: 40px;
  .banner {
    margin-bottom: 25px;
  }
  h1 {
    font-size: 36px;
    line-height: 1.22;
    color: #333;
    border: none;
    margin: 0 0 40px 0;
  }
  h2 {
    font-size: 24px;
    color: #333;
  }
  h3 {margin: 40px 0 24px 0; line-height: 1;}
  p {
    font-size: 16px;
    line-height: 21px;
  }
  .button-rounded {
    margin: 0;
    &:first-child {margin-right: 16px;}
  }
  .mx-button-group {
    text-align: left;
  }
@media (max-width: 768px)  {
    width: 100%;
    margin-top: 0;
    h1 {font-size: 30px;}
}
`
export const CampaignsStyles = styled.div `
  width: 80%;
  padding: 40px 0 40px 20px;
  table {
    margin: 0;
    width: 100%;
    thead tr {
      border-bottom-width: 1px;
    }
    td, th {
      text-align: center;
      &:first-child {text-align: left;}
    }
    td:first-child {width: 403px;}
  }
  .status-enrolled,
  .status-edit,
  .status-preQualified,
  .status-rejected,
  .status-pending,
  .status-preLaunch {
    top: 2px;
  }
  @media (max-width: 768px)  {
  width: 100%;
  .deal-table {
    display: block;
    border-top: none;
    /* Force table to not be like tables anymore */
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border-top: 1px solid #ccc;
      border-bottom: 0;
      padding: 0.75rem 0;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      position: relative;
      padding: 12px 5px 12px 35%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 12px;
      left: 0;
      width: 30%;
      padding-right: 10px;
      white-space: nowrap;
    }
    .button-rounded {
      margin: 0;
    }
    .status-box {
      top: 5px;
    }
    td:nth-of-type(1):before {
      content: "Campaign";
    }
    td:nth-of-type(2):before {
      content: "Status";
    }
    td:nth-of-type(3):before {
      content: "Last Update";
    }
    td:nth-of-type(4):before {
      content: "Action";
    }
  }
}
`
export const FormStyles = styled.div `
  .form-title {
    font-size: 20px;
    line-height: 135%;
    font-weight: 400;
    color: #000;
    width: 100%;
    margin: 10px 0 5px 0;
  }
  .form-subtitle {
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
    color: #333;
    margin: 40px 0 15px 0;
  }
  .progress-steps {
    padding: 10px 0 20px 0;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 99;
  }
  .buttons {
    position: sticky;
    top: 71px;
    width: 100%;
    float: left;
    background: #fff;
    height: 70px;
    z-index: 99;
    &.centered {
      text-align: center;
    }
  }
  .checkbox,
  .radio {
    border: 2px solid #bbb;
  }
  .checkbox-label,
  .radio-label {
    display: block;
  }
  .checkbox-group,
  .radio-group,
  .input-group {
    margin: 0 0 40px 0;
  }
  .text-input,
  .select-input {
    margin-bottom: 0;
  }
  .input-group {
    overflow: inherit;
  }
  .text-input {
    margin-top: 15px;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    color: #333;
  }
  .text-input::placeholder {
    color: #707174;
    font-weight: normal;
    font-size: 14px;
  }
  fieldset,
  .input-group {
    padding: 0;
  }
  .input-group {
    span:first-child {
      font-size: 18px;
      line-height: 25px;
      font-weight: 600;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

.dropzone-spot {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: linear-gradient(47.15deg, #002b1f 37.94%, #398873 105.51%);
  margin: 0 auto 25px auto;
  cursor: pointer;
  display: block;
  a {
    display: block;
    float: left;
    position: relative;
    top: 129px;
    color: #0081e3;
    width: 130%;
    margin-left: -15%;
  }
}
.modal-img-upload {
  min-height: 600px;
}
.modal-img-upload .dropzone-spot {
  margin: 25px auto;
  width: 400px !important;
  height: 400px !important;
  border-color: #53a318 !important;
  text-align: center;
  background: transparent;
  cursor: pointer;
}
.staff-profile-image {
  text-align: center;
  .input-group {
    overflow: hidden;
  }
}
`
export const StandardsStyles = styled.div `
  width: 80%;
  padding: 40px 0 40px 20px;
  h2 {
    line-height: 1;
    margin-bottom: 40px;
  }
  h3 {margin-bottom: 16px; margin-top: 0;}
  p {color: #707174; margin-bottom: 16px; font-size: 14px;}
  section {margin-bottom: 40px;}
  .sig-benefit {
    .md-column {
      padding-right: 32px;
      &:last-child {padding-right: 0;}
    }
  }
  .checked-bullets {
    list-style: none;
    margin: 0;
    padding: 0 0 0 0;
    width: 100%;
    li {
      box-shadow: none;
      color: #333;
      font-size: 14px;
      margin: 0;
      padding: 0 24px 16px 24px;
      position: relative;
      &:before {
        content: '';
        background-color: #53a318;
        mask-repeat: no-repeat;
        -webkit-mask-image: url(${IconCheckmark});
        mask-image: url(${IconCheckmark});
        width: 18px;
        height: 14px;
        line-height: 20px;
        left: 0;
        top: 5px;
        position: absolute;
      }
      &:last-child {padding-bottom: 0;}
  }
}
`
export const ModalStyles = styled.div `
.sig-modal-container {
  margin: 2rem;
  width: 500px;
  .button {
    color: #fff;
    margin: 0 16px 16px 0;
  }
  .button-secondary {
    color: #707174;
  }
}
.sig-modal-buttons {
  float: right;
  margin-bottom: 24px;
  .button {margin-left: 24px;}
}
.signature-full-modal {
  .h2 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 37px;
  }
  .h3 {
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #333;
    padding-bottom: 10px;
  }
}
  .signature-modal {
    .h2 {
      font-size: 24px;
      line-height: 30px;
      text-align: left;
    }
    h5 {
      margin-bottom: 10px;
      text-transform: capitalize;
      font-weight: 400;
      font-size: 18px;
    }
    .row {
      margin-bottom: 24px;
    }
    .checkbox-group {margin-bottom: 0;}
    .checkbox-label {font-size: 14px; line-height: 1.43;}
  }
  .section-title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 2.86px;
    padding-top: 24px;
    max-width: 325px;
    margin: 0;
    color: #000;
    text-transform: uppercase;
  }
  .mx-modal-close:after {
    color: #75787b;
  }
`
export const AboutStyles = styled.div `
  width: 80%;
  padding: 40px 0 40px 20px;
  .banner {margin-bottom: 25px;}
  .mc-about {
    max-width: 928px;
    section {margin-top: 64px;}
    h2 {margin-bottom: 40px;}
    h6 {
      font-size: 16px;
      color: #333;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 1;
      margin-bottom: 16px;
      text-transform: initial;
    }
    .row {
      [class*="column"] {
        padding-left: 0;
        &:last-child {padding-right: 0;}
      }
    }
    .mc-about-intro {
      margin-bottom: 64px;
      .button {margin-left: 0; margin-right: 24px;}
    }
  }
  .icon-columns-table {
    .row {
      align-items: center;
      margin-bottom: 40px;
    }

    .md-column{
      &:nth-child(1) {max-width: 72px; margin-right: 40px;}
    }
  }
  .sig- {
    margin-bottom: 24px;
}
`
export const StaffProfileStyles = styled.div `
  .profile-container {
    margin-top: 64px;
  }
  .profile-add {
    max-width: 720px;
    text-align: center;
    margin: 10px auto 40px auto;
    h3 {margin: 40px 0 24px 0; line-height: 1;}
    p {font-size: 16px; line-height: 1.31;}
  }
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    h3 {
      font-size: 18px;
      font-weight: 600;
      display: inline-block;
      margin: 0;
      line-height: 1;
    }
  }
  .button-profile {
    margin-left: auto;
    border-color: #53a318;
    color: #53a318;
    margin-left: auto;
    span {
      color: #53a318;
      font-size: 28px;
      line-height: 16px;
      display: block;
      margin-left: 8px;
      float: right;
    }
  }
  .indented-input {
    margin-left: 48px;
  }
`
export const DetailsStyles = styled.div `
  width: 80%;
  padding: 40px 0 40px 20px;
  table {
    border-top: 1px solid #d5d8db;
  }
  td {
    padding: 2rem 1rem;
    &:nth-child(1) {
      font-weight: 600;
    }
  }
  .status-box {
    width: 60px;
    top: -3px;
  }
  .deal-performance-header__info-box {
    display: block;
  }
  .deal-performance-header__info-box-item {
    padding-bottom: 5px;
    padding-right: 8px;
    float: left;
    &:last-child {
      padding-bottom: 1.5rem;
    }
  }
  .deal-performance-header__info-box-item:not(:last-child):after {
    content: none;
  }
  .deal-performance-header {
    width: 100%;
    h2 {
      text-align: left;
      color: #333;
    }
    .mx-alert-notify {
      margin: 24px 0;
    }
  }
  .deal-performance-header__info-box-item:not(:last-child):after {
    border-radius: 50%;
    border: 2px solid #333;
    content: "";
    display: inline-block;
    margin: 0.1rem 0.5rem;
  }
@media (max-width: 768px)  {
  width: 100%;
  padding-left: 0;
  padding-top: 0;
    td {
      padding: 2rem .5rem;
      &:first-child {padding-left: 0;}
    }
  }
`
