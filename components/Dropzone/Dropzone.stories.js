import React from 'react'
import { storiesOf } from '@storybook/react'

import Dropzone from '.'

storiesOf('Components API/Inputs/Dropzone', module).add('Default', () => {
  return <Dropzone avatar="true" accept={'image/*'} placeholder={'Перетащите сюда изображение для превью'} />
})
