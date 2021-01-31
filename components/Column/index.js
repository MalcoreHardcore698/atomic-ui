import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: var(--default-gap);
`

export const Column = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default Column
