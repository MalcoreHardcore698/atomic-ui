import React, { useState } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Button from '../Button'
import Text from '../Text'
import Transition from '.'

const AnimatedText = styled(Text)`
  margin: 0;

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

storiesOf('Components API/Data Display/Transition', module).add('Default', () => {
  const [content, setContent] = useState(false)

  return (
    <Column style={{ width: 320 }}>
      <Button onClick={() => setContent(!content)}>{content ? 'Hide' : 'Show'} Me</Button>
      <Transition in={content} animation={'fade'} timeout={300}>
        <AnimatedText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</AnimatedText>
      </Transition>
    </Column>
  )
})
