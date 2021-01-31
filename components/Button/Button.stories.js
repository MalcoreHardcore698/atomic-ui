import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Icon from '../Icon'
import Button from '.'

storiesOf('Components API/Inputs/Button', module).add('Default', () => {
  return <Button appearance={'default'}>Default</Button>
})

storiesOf('Components API/Inputs/Button', module).add('Outlined', () => {
  return <Button appearance={'outlined'}>Outlined</Button>
})

storiesOf('Components API/Inputs/Button', module).add('Kind', () => {
  return (
    <Row>
      <Button appearance={'default'} kind={'icon'}>
        <Icon icon={'filter2'} stroke={'white'} />
      </Button>
      <Button appearance={'default'} kind={'icon'} revert>
        <Icon icon={'filter2'} stroke={'var(--default-color-accent)'} />
      </Button>
    </Row>
  )
})
