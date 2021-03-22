import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar-company.png'
import Column from '../Column'
import Difinition from '.'

storiesOf('Components API/Data Display/Difinition', module).add('Default', () => {
  return (
    <Column>
      <Difinition img={AvatarIMG} label={'Компания'} text={'ПАО «Газпром»'} />

      <Difinition icon={'activity'} label={'Активность'} text={'478'} />

      <Difinition
        icon={'paper'}
        label={'12 проектов'}
        text={'Горные дела'}
        onLink={() => {}}
        revert
      />

      <Difinition icon={'paper'} label={'4 проекта'} text={'Неактивная папка'} revert disabled />

      <Difinition icon={'notification'} text={'Уведомления'} />

      <Difinition label={'Компания'} text={'ПАО «Газпром»'} />
    </Column>
  )
})
