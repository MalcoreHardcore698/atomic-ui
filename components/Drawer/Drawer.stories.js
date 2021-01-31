import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Button from '../Button'
import Title from '../Title'
import Text from '../Text'
import Drawer from '.'

storiesOf('Components API/Utilities/Drawer', module).add('Default', () => {
  const [isOpen, setOpen] = useState(false)

  const onShow = () => setOpen(true)

  const onHide = () => setOpen(false)

  return (
    <React.Fragment>
      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Default Drawer</Title>
        <Button onClick={onShow}>Default Drawer</Button>
      </Column>

      <Drawer isOpen={isOpen} onBack={onHide}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio ipsa tenetur, fugit
          eum a magnam totam maiores saepe distinctio laudantium. Nemo reiciendis nam animi deleniti
          temporibus ipsum nihil voluptate, tempora, unde praesentium, odio delectus.
        </Text>
      </Drawer>
    </React.Fragment>
  )
})
