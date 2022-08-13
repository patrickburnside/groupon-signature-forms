import styled from 'styled-components'

export const GarbageStyles = styled.div `


.certified-banner {
  width: 720px;
  background: url("/images/banner-image-med.png") no-repeat;
  background-size: contain;
}
.signature-logo-2-lines {
  width: 156px;
  height: 46px;
  background: url("/images/groupon-2lines.png") no-repeat;
  background-size: contain;
}


/* Utility classes */



.downshift-options {
  position: relative;
  top: 12px;
  font-size: 14px;
  color: #333;
  background: #fff;
  border: 2px solid #53a318;
  padding: 8px 24px;
  cursor: pointer;
  margin: 0 0 0 4px;
  z-index: 4;
  border-radius: 2px;
  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 20px;
    margin-left: -12px;
    width: 0;
    height: 0;
    border-bottom: 12px solid #53a318;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 20px;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-bottom: 8px solid #ffffff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
  }
}
`