import React from 'react'
import { storiesOf } from '@storybook/react'

import AvatarIMG from '../../assets/images/avatar.png'
import Column from '../Column'
import Comment from '.'

storiesOf('Components API/Data Display/Comment', module).add('Default', () => {
  return (
    <Column style={{ width: 480 }}>
      <Comment
        user={{
          avatar: {
            path: AvatarIMG
          },
          name: 'Анна'
        }}
        message={'Хорошая статья!'}
        likes={10}
        time={'14:15'}
      />
    </Column>
  )
})
