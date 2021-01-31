import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  margin: 0;
  padding: 0;
`

export const Pagination = ({ children, ...props }) => {
  return <Wrap {...props}>{children}</Wrap>
}

export default Pagination
