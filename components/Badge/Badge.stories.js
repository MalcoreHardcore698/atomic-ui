import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Column from '../Column'
import Badge from '.'

storiesOf('Components API/Data Display/Badge', module).add('Default', () => {
  return (
    <Column>
      <Row>
        <Badge size={'m'} />
        <Badge size={'s'} />
        <Badge size={'xs'} />
      </Row>

      <Row>
        <Badge size={'m'} appearance={'outlined'} />
        <Badge size={'s'} appearance={'outlined'} />
        <Badge size={'xs'} appearance={'outlined'} />
      </Row>
    </Column>
  )
})
