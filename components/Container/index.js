import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  margin: 15px 0;
  padding: 0;
`

export const Container = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

export default Container
