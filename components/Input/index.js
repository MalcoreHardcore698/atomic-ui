import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.input`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: var(--surface-background);

  margin: 0;
  padding: 10px;

  width: 100%;
  height: var(--input-height-m);
  max-width: 100%;

  &::placeholder {
    font-family: var(--default-font-family);
    color: var(--input-placeholder-color);

    ${({ horizontalAlignment }) =>
      horizontalAlignment === 'center' &&
      css`
        text-align: center;
      `}
  }

  ${({ horizontalAlignment }) =>
    horizontalAlignment === 'center' &&
    css`
      text-align: center;
    `}

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      color: var(--surface-color);
      background: var(--surface-background);
      box-shadow: var(--surface-shadow);
    `}

  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      color: var(--input-color);
      background: var(--input-background);
    `}

  ${({ hidden }) =>
    hidden &&
    css`
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      display: none;
    `}
`

export const Input = React.forwardRef((props, ref) => <Wrap {...props} ref={ref} />)

Input.defaultProps = {
  appearance: 'default'
}

export default Input
