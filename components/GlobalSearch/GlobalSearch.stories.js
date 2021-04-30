import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Search from '../Search'
import Modal from '../Modal'
import GlobalSearch from '.'

const entities = []

storiesOf('Components API/Inputs/GlobalSearch', module).add('Default', () => {
  const [modal, setModal] = useState(null)

  const onShow = (routes, size) => setModal({ routes, size })
  const onHide = () => setModal(null)

  return (
    <Column style={{ width: 325 }}>
      <Search
        onClick={() =>
          onShow(
            [
              {
                path: '/',
                title: 'Поиск',
                component: () => <GlobalSearch entities={entities} />
              }
            ],
            'l'
          )
        }
        disable
      />

      <Modal routes={modal?.routes || null} size={modal?.size || null} onHide={onHide} />
    </Column>
  )
})
