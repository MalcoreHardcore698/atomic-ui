import React from 'react'
import { storiesOf } from '@storybook/react'

import Description from '.'

storiesOf('Components API/Data Display/Description', module).add('Default', () => {
  return (
    <Description>
      Если у вас есть вопросы о формате или вы не знаете что выбрать, оставьте свой номер: мы
      позвоним, чтобы ответить на все ваши вопросы.
    </Description>
  )
})
