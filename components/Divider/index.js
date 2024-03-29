import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  background: #efefef;

  ${({ direction, thickness, margin }) =>
    direction === 'horizontal' &&
    css`
      width: 100%;
      height: ${thickness}px;
      margin: ${margin}px 0;
    `}

  ${({ direction, thickness, margin }) =>
    direction === 'vertical' &&
    css`
      height: 100%;
      width: ${thickness}px;
      margin: 0 ${margin}px;
    `}

  ${({ clear }) =>
    clear &&
    css`
      margin: 0;
    `}
`

export const Divider = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Divider.defaultProps = {
  direction: 'horizontal',
  thickness: 1,
  margin: 15
}

export default Divider
