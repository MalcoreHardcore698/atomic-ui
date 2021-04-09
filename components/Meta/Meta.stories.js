import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Meta from '.'

storiesOf('Components API/Data Display/Meta', module).add('Default', () => {
  return (
    <Column style={{ width: 512 }}>
      <Meta category={'Строительство'} rating={3} />
      <Meta date={'12.12.2020'} category={'Строительство'} rating={3} />
      <Meta date={'12.12.2020'} category={'Строительство'} />
      <Meta category={'Строительство'} shareTitle={'Title'} shareUrl={'/'} />
    </Column>
  )
})
