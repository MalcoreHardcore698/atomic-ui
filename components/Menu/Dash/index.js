import React from 'react'
import styled from 'styled-components'

import Column from '../../Column'
import Divider from '../../Divider'
import BaseMenu, { List as WrapList } from '..'

export const Wrap = styled(Column)``

export const Menu = styled(BaseMenu)`
  ${WrapList} {
    padding: 0;

    button p {
      color: var(--admin-color-accent);
    }

    span {
      display: none;
    }
  }
`

export const Dash = ({ links }) => (
  <Wrap>
    <Divider clear />
  
    <Menu
      links={links}
      appearance={'clear'}
    />

    <Divider clear />
  </Wrap>
)

export default Dash
