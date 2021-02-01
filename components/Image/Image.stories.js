import React from 'react'
import { storiesOf } from '@storybook/react'

import ImagePreview from '../../assets/images/preview-project.png'
import Row from '../Row'
import Column from '../Column'
import Divider from '../Divider'
import Image from '.'

storiesOf('Components API/Data Display/Image', module)
  .add('Default', () => {
    return <Image src={ImagePreview} width={480} />
  })
  .add('Magnify', () => {
    return <Image src={ImagePreview} width={480} magnify />
  })
  .add('Portal Magnify', () => {
    return (
      <Column>
        <Divider margin={96} />

        <Row>
          <Divider direction={'vertical'} margin={25} />

          <Image
            src={ImagePreview}
            width={96}
            height={96}
            portal
            magnify
          />

          <Divider direction={'vertical'} margin={25} />
        </Row>
      </Column>
    )
  })
