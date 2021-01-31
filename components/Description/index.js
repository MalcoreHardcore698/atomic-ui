import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  font-size: 14px;
  font-weight: 400;
`

export const Description = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default Description
