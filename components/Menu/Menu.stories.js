import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Menu from '.'

storiesOf('Components API/Data Display/Menu', module).add('Default', () => {
  return (
    <Column style={{ width: 265 }}>
      <Menu />
    </Column>
  )
})
