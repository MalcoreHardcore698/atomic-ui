import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Column from '../Column'
import Member from '.'

storiesOf('Components API/Data Display/Member', module).add('Default', () => {
  return (
    <Column style={{ width: 320 }}>
      <Member name={'Владислав'} avatar={AvatarIMG} position={'Инженер I разряда'} rating={3} />
    </Column>
  )
})
