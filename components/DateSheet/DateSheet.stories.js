import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import DateSheet from '.'

storiesOf('Components API/Inputs/DateSheet', module).add('Default', () => {
  const [value, onChange] = useState()

  const [valueAnother, onChangeAnother] = useState()

  return (
    <Column>
      <p>Default DateSheet</p>
      <DateSheet value={value} onChange={onChange} withNavigate />

      <p>DateSheet with range and 8th date sheets</p>
      <DateSheet sheets={8} value={valueAnother} onChange={onChangeAnother} />
    </Column>
  )
})
