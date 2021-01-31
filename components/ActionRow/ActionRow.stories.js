import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import ActionRow from '.'

storiesOf('Components API/Data Display/ActionRow', module).add('Default', () => {
  return (
    <Column style={{ width: 720 }}>
      <ActionRow title={'Участники проекта'} />

      <ActionRow title={'Файлы'} info={'Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'} />

      <ActionRow
        title={'Файлы'}
        info={'Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'}
        action
      />
    </Column>
  )
})
