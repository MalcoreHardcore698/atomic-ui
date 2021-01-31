import React from 'react'
import { storiesOf } from '@storybook/react'

import Carousel from '.'

storiesOf('Components API/Utilities/Carousel', module).add('Default', () => {
  return <Carousel />
})
