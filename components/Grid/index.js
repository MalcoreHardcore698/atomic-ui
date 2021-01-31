import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  display: grid;
  grid-gap: var(--default-gap);

  ${({ length, percentage }) => css`
    grid-template-columns: repeat(${length}, ${percentage});
  `}

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill,minmax(285px, 1fr));
  }
`

export const Grid = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Grid.defaultProps = {
  length: 'auto-fill',
  percentage: 'minmax(445px, 1fr)'
}

export default Grid
