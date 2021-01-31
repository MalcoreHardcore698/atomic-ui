import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Icon from '../Icon'
import Switch from '.'

const defaultMultipleList = [
  { label: 'Лента', value: 'feed' },
  { label: 'Заказы', value: 'orders' },
  { label: 'Мои проекты', value: 'projects' },
  { label: 'Понравившиеся', value: 'liked' }
]

const customMultipleList = [
  { label: <Icon icon={'home'} />, value: 'feed' },
  { label: <Icon icon={'discovery'} />, value: 'orders' },
  { label: <Icon icon={'search'} />, value: 'projects' },
  { label: <Icon icon={'login'} />, value: 'liked' }
]

storiesOf('Components API/Inputs/Switch', module)
  .add('Default', () => {
    return (
      <Column>
        <Switch />
        <Switch rtl />
      </Column>
    )
  })
  .add('Multiple', () => {
    return (
      <Column>
        <Switch defaultValue={defaultMultipleList[0]} options={defaultMultipleList} />
        <Switch defaultValue={customMultipleList[0]} options={customMultipleList} />
      </Column>
    )
  })
