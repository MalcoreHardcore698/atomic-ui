import React, { forwardRef } from 'react'
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

export const Text = forwardRef(({ children, ...props }, ref) => (
  <Wrap ref={ref} {...props}>
    {children}
  </Wrap>
))

Text.defaultProps = {
  size: 'm'
}

export default Text
