import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import RoomsEditor from '.'

const rooms = [
  { id: 0, name: 'класса', value: 32 },
  { id: 1, name: 'спортивных зала', value: 2 }
]

storiesOf('Components API/Inputs/RoomsEditor', module).add('Default', () => {
  const [value, setValue] = useState(rooms)

  return (
    <Column>
      <RoomsEditor defaultValue={value} readOnly />
      <RoomsEditor defaultValue={value} onChange={setValue} />
    </Column>
  )
})
