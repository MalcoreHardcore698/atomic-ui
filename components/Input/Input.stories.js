import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('Components API/Inputs/Input', module).add('Default', () => {
  return <Input placeholder={'Type a message...'} />
})
