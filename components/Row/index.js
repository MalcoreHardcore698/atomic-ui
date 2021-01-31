import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  grid-gap: 0 var(--default-gap);
`

export const Row = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default Row
