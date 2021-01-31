import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  background: #efefef;

  ${({ direction, thickness }) =>
    direction === 'horizontal' &&
    css`
      width: 100%;
      height: ${thickness}px;
      margin: 15px 0;
    `}

  ${({ direction, thickness }) =>
    direction === 'vertical' &&
    css`
      height: 100%;
      width: ${thickness}px;
      margin: 0 15px;
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
  thickness: 1
}

export default Divider
