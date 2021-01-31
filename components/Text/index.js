import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.p`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
  color: var(--default-color-text);

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size-${size});
    `}
`

export const Text = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Text.defaultProps = {
  size: 'm'
}

export default Text
