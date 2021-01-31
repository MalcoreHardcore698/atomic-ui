import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.textarea`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  resize: none;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: var(--surface-background);

  margin: 0;
  padding: 10px;

  width: 100%;
  height: 180px;
  max-width: 100%;

  &::placeholder {
    font-family: var(--default-font-family);
    color: var(--input-placeholder-color);
  }

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
`

export const TextArea = React.forwardRef(({ defaultValue, ...props }, ref) => (
  <Wrap {...props} ref={ref} defaultValue={defaultValue} />
))

TextArea.defaultProps = {
  placeholder: 'Введите содержимое'
}

export default TextArea
