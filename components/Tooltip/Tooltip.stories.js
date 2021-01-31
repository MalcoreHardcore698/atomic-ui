import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Column from '../Column'
import Divider from '../Divider'
import Button from '../Button'
import Tooltip from '.'

storiesOf('Components API/Data Display/Tooltip', module).add('Default', () => {
  return (
    <Column>
      <Divider />

      <Row>
        <Tooltip text={'Default'}>
          <Button>Default</Button>
        </Tooltip>

        <Tooltip text={'Right placed'} place={'right'}>
          <Button>Right</Button>
        </Tooltip>

        <Tooltip text={'Left placed'} place={'left'}>
          <Button>Left</Button>
        </Tooltip>

        <Tooltip text={'Bottom placed'} place={'bottom'}>
          <Button>Bottom</Button>
        </Tooltip>
      </Row>
    </Column>
  )
})
