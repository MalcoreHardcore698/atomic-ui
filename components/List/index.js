import React from 'react'
import styled from 'styled-components'

export const Item = styled.li`
  margin: 0;
  padding: 2px 0;
`

export const ListItem = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}

export const List = ({ tag = 'ul', marker, children, ...props }) => {
  const Tag = styled[tag]`
    margin: 0;
    padding: 0 0 0 15px;
    list-style: ${marker || 'disc'};
  `

  return <Tag {...props}>{children}</Tag>
}

export default List
