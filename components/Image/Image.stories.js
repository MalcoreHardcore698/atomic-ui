import React from 'react'
import { storiesOf } from '@storybook/react'

import ImagePreview from '../../assets/images/preview-project.png'
import Image from '.'

storiesOf('Components API/Data Display/Image', module)
  .add('Default', () => {
    return <Image src={ImagePreview} width={480} />
  })
  .add('Magnify', () => {
    return <Image src={ImagePreview} width={480} magnify />
  })
