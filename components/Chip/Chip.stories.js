import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Chip from '.'

storiesOf('Components API/Data Display/Chip', module).add('Default', () => {
  return (
    <Row>
      <Chip size={'m'}>Filled Chip</Chip>

      <Chip size={'s'}>Filled Chip</Chip>

      <Chip size={'xs'}>Filled Chip</Chip>
    </Row>
  )
})

storiesOf('Components API/Data Display/Chip', module).add('Outlined', () => {
  return <Chip appearance={'outlined'}>Outlined Chip</Chip>
})

storiesOf('Components API/Data Display/Chip', module).add('Custom', () => {
  return (
    <Row>
      <Chip color={'default'}>Filled Default Chip</Chip>
      <Chip color={'orange'}>Filled Green Chip</Chip>
      <Chip color={'red'}>Filled Red Chip</Chip>

      <Chip color={'default'} appearance={'outlined'}>
        Outlined Red Chip
      </Chip>
      <Chip color={'orange'} appearance={'outlined'}>
        Outlined Red Chip
      </Chip>
      <Chip color={'red'} appearance={'outlined'}>
        Outlined Red Chip
      </Chip>
    </Row>
  )
})
