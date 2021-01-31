import React from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import Search from '.'

storiesOf('Components API/Inputs/Search', module).add('Default', () => {
  return (
    <Column style={{ width: 320 }}>
      <Search />
    </Column>
  )
})
