import React, { useState } from 'react'
import { array, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Select from '.'

storiesOf('Components API/Inputs/Select', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const options = array('List', [
      { value: 'ADMIN', label: 'ADMIN' },
      { value: 'USER', label: 'USER' },
      { value: 'MODERATOR', label: 'MODERATOR' },
      { value: 'MANAGER', label: 'MANAGER' }
    ])
    const [selected, setSelected] = useState(options[0])

    return (
      <Column style={{ height: 525 }}>
        <Select
          options={options}
          placeholder={'Выберите роль'}
          selected={selected}
          onChange={(item) => setSelected(item)}
        />
      </Column>
    )
  })
