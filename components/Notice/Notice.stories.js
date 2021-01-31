import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Column from '../Column'
import Notice from '.'

storiesOf('Components API/Data Display/Notice', module).add('Default', () => {
  return (
    <Column style={{ width: 525 }}>
      <Notice
        img={AvatarIMG}
        title={'Владислав'}
        message={'Прокомментировал(а) ваш проект'}
        date={'12.12.2020'}
      />

      <Notice
        icon={'infoCircle'}
        title={'Система'}
        message={'Добро пожаловать!'}
        date={'12.12.2020'}
      />
    </Column>
  )
})
