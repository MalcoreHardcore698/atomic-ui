import React from 'react'
import { storiesOf } from '@storybook/react'

import Snacks from '.'

const snacks = [
  { id: 0, type: 'succsess', message: 'Категория успешно создана' },
  { id: 1, type: 'error', message: 'Не удалось создать проект' },
  { id: 2, type: 'warning', message: 'До конца пробного периода осталось 2 дня' }
]

storiesOf('Components API/Data Display/Snacks', module).add('Default', () => {
  return <Snacks snacks={snacks} />
})
