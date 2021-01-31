import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from '.'

storiesOf('Components API/Inputs/TextArea', module).add('Default', () => {
  return <TextArea>Medium text</TextArea>
})
