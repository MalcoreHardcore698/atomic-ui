import React from 'react'
import { storiesOf } from '@storybook/react'

import Spinner from '.'

storiesOf('Components API/Data Display/Spinner', module).add('Default', () => {
  return <Spinner />
})
