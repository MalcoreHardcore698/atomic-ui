import React from 'react'
import styled, { css } from 'styled-components'

import Image from '../Image'

export const Wrap = styled(Image)`
  position: relative;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;

  ${({ size }) =>
    size &&
    css`
      width: var(--input-height-${size});
      height: var(--input-height-${size});
      min-width: var(--input-height-${size});
      min-height: var(--input-height-${size});
    `}
`

export const Avatar = ({ ...props }) => <Wrap {...props} />

Avatar.defaultProps = {
  size: 'm'
}

export default Avatar
