import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Indicator from '.'

storiesOf('Components API/Data Display/Indicator', module).add('Default', () => {
  return (
    <Column style={{ width: 245 }}>
      <Indicator positive />
      <Indicator label={'Проекты'} value={76} movement={5} negative />
    </Column>
  )
})
