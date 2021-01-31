import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Column from '../Column'
import Radio from '.'

storiesOf('Components API/Inputs/Radio', module).add('Default', () => {
  return (
    <Column>
      <Row>
        <Radio name={'defaultRadio'} label={'Default Option 1'} />
        <Radio name={'defaultRadio'} label={'Default Option 2'} />
        <Radio name={'defaultRadio'} label={'Default Option 3'} />
      </Row>

      <Row>
        <Radio name={'smallRadio'} label={'Small Option 1'} size={'s'} />
        <Radio name={'smallRadio'} label={'Small Option 2'} size={'s'} />
        <Radio name={'smallRadio'} label={'Small Option 3'} size={'s'} />
      </Row>

      <Row>
        <Radio name={'extraSmallRadio'} label={'ExtraSmall Option 1'} size={'xs'} />
        <Radio name={'extraSmallRadio'} label={'ExtraSmall Option 2'} size={'xs'} />
        <Radio name={'extraSmallRadio'} label={'ExtraSmall Option 3'} size={'xs'} />
      </Row>
    </Column>
  )
})
