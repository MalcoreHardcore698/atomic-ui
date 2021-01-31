import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Column from '../Column'
import DatePicker from '.'

storiesOf('Components API/Inputs/DatePicker', module).add('Default', () => {
  const [value, onChange] = useState()

  return (
    <Column style={{ width: 320, height: 525 }}>
      <DatePicker value={value} placeholder={'Дата и время'} onChange={onChange} withNavigate />
    </Column>
  )
})
