import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  /* Styles */
`

export const Stepper = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default Stepper
