import React from 'react'
import { storiesOf } from '@storybook/react'

import TextEditor from '.'

storiesOf('Components API/Inputs/TextEditor', module).add('Default', () => {
  return <TextEditor />
})
