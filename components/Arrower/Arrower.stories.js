import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Arrower from '.'

storiesOf('Components API/Navigation/Arrower', module).add('Default', () => {
  const options = [
    'Продвижение автора и команды',
    'Government Relations – здесь можно «поговорить» с представителями государства',
    'Нетворкинг для бизнеса – полезные связи и знакомства',
    'Коммьюнити специалистов в сфере образования – только на Атомике можно увидеть уникальные решения',
    'Быть причастным к изменениям в образовательной среде'
  ]
  const [value, setValue] = useState(0)
  const [year, setYear] = useState(new Date())

  return (
    <Column>
      <Arrower
        appearance={'default'}
        arrowLeft={'arrowLeft2'}
        arrowRight={'arrowRight2'}
        label={options[value]}
        onChange={(sign) =>
          setValue(
            value + sign < 0
              ? options.length - 1
              : value + sign > options.length - 1
              ? 0
              : value + sign
          )
        }
      />

      <Arrower
        label={year.getFullYear()}
        defaultValue={year}
        onChange={(sign) => setYear(new Date(Number(year.getFullYear()) + sign, 1, 1))}
      />
    </Column>
  )
})
