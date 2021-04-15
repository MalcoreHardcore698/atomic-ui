import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import CompanyIMG from '../../assets/images/avatar-company.png'
import Column from '../Column'
import Notice from '.'

storiesOf('Components API/Data Display/Notice', module).add('Default', () => {
  return (
    <Column style={{ width: 768 }}>
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

      <Notice
        img={CompanyIMG}
        title={'Вас пригласили в компанию'}
        message={'ПАО «Газпром» пригласила вас к себе'}
        onAccept={() => {}}
        onReject={() => {}}
        date={'12.12.2020'}
      />
    </Column>
  )
})
