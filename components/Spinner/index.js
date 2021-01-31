import styled from 'styled-components'

export const Spinner = styled.div`
  display: inline-block;
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border: 0.2em solid rgba(0, 0, 0, 0.2);
  border-left: 0.2em solid var(--default-color-accent);
  transform: translateZ(0);
  animation: load 450ms infinite linear;

  &,
  &::after {
    border-radius: 50%;
    width: 3em;
    height: 3em;
  }

  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
