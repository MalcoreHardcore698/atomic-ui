import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Container from '../Container'
import Column from '../Column'
import Title from '../Title'
import Text from '../Text'
import Divider from '../Divider'
import Button from '../Button'
import Modal from '.'

storiesOf('Components API/Utilities/Modal', module).add('Default', () => {
  const [routes, setModal] = useState(null)

  const onShow = (state) => setModal(state)
  const onHide = () => setModal(null)

  return (
    <React.Fragment>
      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Default Modal</Title>
        <Button
          onClick={() =>
            onShow([
              {
                path: '/',
                title: 'Форма обратной связи',
                component: () => (
                  <Container style={{ padding: '0 15px' }}>
                    <Text>Modal Content</Text>
                  </Container>
                )
              }
            ])
          }>
          Default Modal
        </Button>
      </Column>

      <Divider />

      <Column style={{ width: 240 }}>
        <Title tag={'h4'}>Modal with depths</Title>
        <Button
          onClick={() =>
            onShow([
              {
                path: '/',
                title: 'Добро пожаловать!',
                component: ({ jump }) => (
                  <Container style={{ padding: '0 15px' }}>
                    <Text>Modal Content</Text>
                    <Button onClick={() => jump('/forgot-email')}>Далее</Button>
                  </Container>
                )
              },
              {
                path: '/done',
                title: 'Информация',
                component: () => (
                  <Container style={{ padding: '0 15px' }}>
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio ipsa
                      tenetur, fugit eum a magnam totam maiores saepe distinctio laudantium. Nemo
                      reiciendis nam animi deleniti temporibus ipsum nihil voluptate, tempora, unde
                      praesentium, odio delectus.
                    </Text>
                  </Container>
                )
              }
            ])
          }>
          Modal with many depths
        </Button>
      </Column>

      <Modal routes={routes} onHide={onHide} />
    </React.Fragment>
  )
})
