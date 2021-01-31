import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import More from '.'

storiesOf('Components API/Data Display/More', module).add('Default', () => {
  return (
    <Column style={{ width: 256 }}>
      <More />

      <More withButton />

      <More withText={false} withButton />
    </Column>
  )
})
