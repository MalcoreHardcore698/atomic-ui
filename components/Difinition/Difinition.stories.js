import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import CompanyIMG from '../../assets/images/avatar-company.png'
import Column from '../Column'
import Tooltip from '../Tooltip'
import Icon from '../Icon'
import Difinition, { MarkedText } from '.'

const actionsOne = [
  { text: 'Назначить ответственным', onClick: () => {} },
  { text: 'Исключить', color: 'red', onClick: () => {} }
]

const actionsTwo = [
  { text: 'Снять полномочия', onClick: () => {} },
  { text: 'Исключить', color: 'red', onClick: () => {} }
]

const responsible = (
  <Tooltip text={'Ответственный'}>
    <Icon icon={'shieldDone'} size={'xs'} stroke={'var(--ghost-color-text)'} />
  </Tooltip>
)

storiesOf('Components API/Data Display/Difinition', module).add('Default', () => {
  return (
    <Column style={{ width: 325 }}>
      <Difinition label={'Компания'} text={'ПАО «Газпром»'} />

      <Difinition img={CompanyIMG} label={'Компания'} text={'ПАО «Газпром»'} />

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

      <Difinition img={AvatarIMG} label={'Физ. лицо'} text={'Василий Теркин'} actions={actionsOne} />

      <Difinition
        img={AvatarIMG}
        label={(
          <MarkedText>
            <span>Физ. лицо</span> | {responsible}
          </MarkedText>
        )}
        text={'Василий Теркин'}
        actions={actionsTwo}
      />
    </Column>
  )
})
