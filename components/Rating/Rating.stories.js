import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Column from '../Column'
import Text from '../Text'
import Rating from '.'

storiesOf('Components API/Inputs/Rating', module).add('Default', () => {
  const [value, setValue] = useState(4)

  return (
    <Column>
      <Row>
        <Column>
          <Text>Controlled</Text>
          <Rating defaultValue={value} onChange={(item) => setValue(item)} />
        </Column>

        <Column>
          <Text>Read Only</Text>
          <Rating defaultValue={2} readOnly />
        </Column>

        <Column>
          <Text>Disabled</Text>
          <Rating disabled />
        </Column>
      </Row>

      <Row>
        <Column>
          <Text>Custom Icon</Text>
          <Rating icon={'heart'} />
        </Column>

        <Column>
          <Text>Custom Icons</Text>
          <Rating max={5} icons={['graph', 'game', 'user', 'delete', 'lock']} />
        </Column>
      </Row>

      <Column>
        <Text>Custom Max</Text>
        <Rating defaultValue={2} max={10} />
      </Column>
    </Column>
  )
})
