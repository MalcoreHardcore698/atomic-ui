import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Row from '../Row'
import Avatar from '.'

storiesOf('Components API/Data Display/Avatar', module).add('Default', () => {
  return (
    <Row>
      <Avatar src={AvatarIMG} size={'l'} />
      <Avatar src={AvatarIMG} size={'m'} />
      <Avatar src={AvatarIMG} size={'s'} />
      <Avatar src={AvatarIMG} size={'xs'} />
    </Row>
  )
})
