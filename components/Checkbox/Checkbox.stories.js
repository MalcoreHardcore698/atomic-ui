import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Column from '../Column'
import Checkbox from '.'

storiesOf('Components API/Inputs/Checkbox', module).add('Default', () => {
  return (
    <Column>
      <Row>
        <Checkbox label={'Default Option 1'} />
        <Checkbox label={'Default Option 2'} />
        <Checkbox label={'Default Option 3'} />
      </Row>

      <Row>
        <Checkbox label={'Small Option 1'} size={'s'} />
        <Checkbox label={'Small Option 2'} size={'s'} />
        <Checkbox label={'Small Option 3'} size={'s'} />
      </Row>

      <Row>
        <Checkbox label={'ExtraSmall Option 1'} size={'xs'} />
        <Checkbox label={'ExtraSmall Option 2'} size={'xs'} />
        <Checkbox label={'ExtraSmall Option 3'} size={'xs'} />
      </Row>
    </Column>
  )
})
