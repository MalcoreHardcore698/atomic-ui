import React from 'react'
import { storiesOf } from '@storybook/react'

import Stepper from '.'

storiesOf('Components API/Navigation/Stepper', module).add('Default', () => {
  return <Stepper />
})
