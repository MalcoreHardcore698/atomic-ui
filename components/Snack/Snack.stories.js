import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Snack from '.'

const snacks = [
  { id: 0, type: 'succsess', message: 'Категория успешно создана' },
  { id: 1, type: 'error', message: 'Не удалось создать проект' },
  { id: 2, type: 'warning', message: 'До конца пробного периода осталось 2 дня' }
]

storiesOf('Components API/Data Display/Snack', module).add('Default', () => {
  return (
    <Column>
      {snacks.map((snack) => (
        <Snack key={snack.id} type={snack.type} message={snack.message} />
      ))}
    </Column>
  )
})
