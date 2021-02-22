import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Column from '../Column'
import Comment from '.'

storiesOf('Components API/Data Display/Comment', module)
  .add('Default', () => {
    return (
      <Column style={{ width: 420 }}>
        <Comment
          user={{
            avatar: {
              path: AvatarIMG
            },
            name: 'Анна'
          }}
          likes={10}
          liked={false}
          time={1613195350903}
          message={'Хорошая статья!'}
        />
      </Column>
    )
  })
  .add('Compact', () => {
    const onNoop = () => {}

    return (
      <Column style={{ width: 420 }}>
        <Comment
          user={{
            avatar: {
              path: AvatarIMG
            },
            name: 'Анна'
          }}
          likes={10}
          liked={false}
          time={1613195350903}
          message={'Хорошая статья!'}
          onEdit={onNoop}
          onDelete={onNoop}
          compact
        />
      </Column>
    )
  })
