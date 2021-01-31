import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Column from '../Column'
import Message from '.'

storiesOf('Components API/Data Display/Message', module).add('Default', () => {
  return (
    <Column>
      <Message
        avatar={AvatarIMG}
        side={'owner'}
        name={'Анна'}
        text={'Привет! Как дела?'}
        time={'18:45'}
      />
    </Column>
  )
})
