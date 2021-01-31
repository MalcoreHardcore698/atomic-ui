import React from 'react'
import { storiesOf } from '@storybook/react'

import Tape from '.'

storiesOf('Components API/Data Display/Tape', module).add('Default', () => {
  return (
    <Tape
      text={
        'Для независимых авторов проектов в сфере образования, содержащих уникальные архитектурные или дизайнерские решения'
      }
    />
  )
})
