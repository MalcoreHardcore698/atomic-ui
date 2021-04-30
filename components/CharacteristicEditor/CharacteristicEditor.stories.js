import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import CharacteristicEditor from '.'

const characteristics = [
  { id: 0, name: 'класса', value: 32, isVisualize: true },
  { id: 1, name: 'спортивных зала', value: 2, isVisualize: true }
]

storiesOf('Components API/Inputs/CharacteristicEditor', module).add('Default', () => {
  const [value, setValue] = useState(characteristics)

  return (
    <Column>
      <CharacteristicEditor defaultValue={value} readOnly />
      <CharacteristicEditor defaultValue={value} onChange={setValue} />
    </Column>
  )
})
