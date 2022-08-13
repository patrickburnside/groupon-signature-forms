import styled from 'styled-components'

export const GlobalStyles = styled.div `
  font-family: "Open Sans", sans-serif;
  display: flex;
  .row {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
  .page-title {
    font-size: 34px;
    line-height: 135%;
    color: #000;
    margin: 0 0 10px 0;
  }
  .page-subtitle {
    font-size: 18px;
    line-height: 25px;
    color: #333;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: left;
  }
  .page-description {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 24px;
    color: #333;
  }
  .pageNotFound404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    h1 {font-size: 75px;}
  }
  .signature-side-nav {
    background-color: #fff;
    height: 100vh;
    left: 0;
    width: 232px;
    padding-top: 1rem;
    ul {
      padding: 0 2rem;
      margin-right: 0;
      height: 100vh;
    }
    .side-nav-secondary {
      margin-top: 2rem;
    }
    .side-header {
      font-size: 14px;
      padding-bottom: 12px;
    }
  }
  .signature-main-content {
    border-left: 1px solid #bbb;
    display: block;
    flex: 1;
    margin: 0;
    padding: 0;
    width: calc(100% - 232px);
  }
  .mx-sidebar {
    h2 {
      font-size: 18px;
      line-height: 25px;
      margin-bottom: 15px;
      text-align: left;
      color: #333;
    }
    h3 {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 0;
    }
    small {
      font-size: 12px;
      line-height: 16px;
      color: #707174;
    }
    hr {
      border-width: 0 0 2px 0;
      margin: 18px 0;
      border-color: $color-gray-100;
    }
  }
  .mx-tab-text {
    margin-bottom: 2.5rem;
  }
  .mx-tab-text-label {
    font-size: 18px;
    color: #333;
    font-weight: 500;
  }
  .sig-grid {
    .sm-column--1of2 {
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
  .no-border {
    border: none;
  }
  .float-right {
    float: right;
  }
  .disabled {
    opacity: 0.4;
  }
  .p-top-20 {
    padding-top: 20px;
  }
  .mb-0 {
    margin-bottom: 0 !important;
  }
  .m-top-95 {
    margin-top: 95px;
  }
  .m-left-132 {
    margin-left: 132px;
  }
  .no-spacing {
    margin: 0;
    padding: 0;
  }
  .display-flex {
    display: flex;
  }
  .status-box {
    padding: 3px 8px;
    position: relative;
    font-size: 12px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.enrolled,
    &.preLaunch {
      background-color: #e8f8ff;
    }
    &.edit,
    &.pending {
      background-color: #fff5db;
    }
    &.preQualified {
      background-color: #f6f7f8;
    }
    &.rejected {
      background-color: #fff1f4;
    }
  }
  .side-logo {
    padding-left: 20px;
  }
  .mx-alert-info {
    margin: 2rem 0;
  }
  .mx-dot-green {
    margin-top: 10px;
    float: left;
    display: block;
    width: 100%;
    font-size: 14px;
  }
  .mx-alert-info {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-1.2 18.3V8.4c0-.1 0-.4.1-.7.2-.3.5-.6 1.1-.6.7 0 1.2.6 1.2 1.3v10c0 .7-.5 1.3-1.2 1.3-.7.1-1.2-.4-1.2-1.4zm1.2 6.4c-.8 0-1.5-.7-1.5-1.5 0-.9.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' fill='%230076D6'/%3E%3C/svg%3E");
    box-shadow: 0 1px 4px #0076d6;
  }
  .mx-alert-close {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTM1LjcgMzJMNjMuMiA0LjVjMS4xLTEuMSAxLjEtMi43IDAtMy43cy0yLjctMS4xLTMuNyAwTDMyIDI4LjMgNC41LjhDMy40LS4zIDEuOC0uMy44LjhTLS4zIDMuNS44IDQuNUwyOC4zIDMyIC44IDU5LjVjLTEuMSAxLjEtMS4xIDIuNyAwIDMuNy41LjUgMS4xLjggMS45LjguOCAwIDEuMy0uMyAxLjktLjhMMzIgMzUuN2wyNy41IDI3LjVjLjUuNSAxLjEuOCAxLjkuOHMxLjMtLjMgMS45LS44YzEuMS0xLjEgMS4xLTIuNyAwLTMuN0wzNS43IDMyeiIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg==");
  }
  .mx-vnav-list {
    float: left;
    height: 100vh;
    margin-right: 2rem;
  }
  .side-header {
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
    padding: 0.25rem 1rem;
    margin-bottom: 16px;
  }
  .side-nav-secondary {
    margin-top: 1rem;
    border-top: 2px solid #e6e7e8;
    padding-top: 1rem;
  }
  .side-nav-secondary a {
    padding: 0.25rem 1rem;
  }
@media (max-width: 768px)  {
  html,
  body {
    width: 100%;
  }
  .tabs-with-content {
    display: none;
  }

  .signature-side-nav {
    display: none;
  }
  .mx-layout-container {
    width: 100%;
  }
  .signature-main-content {
    width: 100%;
    padding: 24px 16px;
    border-left: 0;
    > div {
      width: 100%;
      padding: 0;
    }
  }
  .mx-main-content {
    margin-right: 0;
    padding: 8px;
    width: 100%;
  }
  .md-column {
    width: 100%;
    padding: 0;
  }
  .mx-main {
    flex-direction: row;
  }
  .mx-sidebar {
    display: none;
  }
  .sm-column--2of3 {
    margin-top: 2rem;
  }
  .mx-toggle + .mx-toggle {margin-left: 0;}
  .mx-toggle {margin: 0 0.5rem 8px 0;}

  .input-group span:first-child {
    white-space: normal;
  }
  .campaigns {
    width: 100%;
    padding: 0;
    table {
      td:first-child {
        width: auto;
      }
      td:nth-child(2) {
        text-align: left;
      }
    }
  }
  .certified-banner {
    height: auto;
    width: 120%;
    margin-bottom: 1rem;
    margin-left: -10%;
  }
  .button-cta {
    min-width: auto;
    font-size: 1rem;
  }
   .mc-about, .mc-standards {
    width: 100%;
    padding-left: 0;
    padding-top: 0;
  }

  .sig-modal-container {
    margin: 0;
    width: 100%;
  }
  .m-left-132 {margin-left: 0;}
  .campaigns {
    table {
      border-bottom: 1px solid #d5d8db;
      td, th {text-align: left;}
    }
  }
}
@media screen and (max-width: 600px) {
    .mx-main-content {
      margin-right: 0;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 414px) {
    max-width: 100%;
    margin: 10px;
  }

`;