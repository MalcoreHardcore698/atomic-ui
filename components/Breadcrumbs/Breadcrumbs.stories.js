import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import Breadcrumbs from '.'

storiesOf('Components API/Navigation/Breadcrumbs', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const defaultValue = [{ label: 'Главная', path: '/' }, { label: 'О ресурсе' }]
    const links = object('Links', defaultValue)
    return <Breadcrumbs links={links} />
  })
