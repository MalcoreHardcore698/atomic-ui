import React from 'react'
import { storiesOf } from '@storybook/react'

import Divider from '../Divider'
import Alert from '.'

storiesOf('Components API/Data Display/Alert', module).add('Default', () => {
  return (
    <React.Fragment>
      <Alert>Default Alert</Alert>
      <Divider />
      <Alert appearance={'error'}>Error Alert</Alert>
      <Divider />
      <Alert appearance={'warning'}>Warning Alert</Alert>
      <Divider />
      <Alert appearance={'success'}>Success Alert</Alert>
    </React.Fragment>
  )
})
