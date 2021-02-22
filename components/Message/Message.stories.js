import React from 'react'
import { storiesOf } from '@storybook/react'

import BrandAvatarIMG from '../../assets/images/brand.png'
import CooperAvatarIMG from '../../assets/images/cooper.png'
import Column from '../Column'
import Message from '.'

const messages = [
  {
    avatar: BrandAvatarIMG,
    name: 'Брэнд',
    text:
      'Раз я говорю, что любовь — это не выдумка человечества, это осязаемая величина, это сила, это должно что-то значить',
    time: 1613195310903
  },
  {
    avatar: CooperAvatarIMG,
    name: 'Купер',
    side: 'owner',
    text: 'Любовь имеет значение, да. Общественная польза: социальные связи, воспитание детей...',
    time: 1613195350903
  },
  {
    avatar: BrandAvatarIMG,
    name: 'Брэнд',
    text: 'Мы любим людей, которые умерли. Какая в этом общественная польза?',
    time: 1613195350903
  },
  {
    avatar: CooperAvatarIMG,
    name: 'Купер',
    text: 'Никакой...',
    side: 'owner',
    time: 1613195350903
  },
  {
    avatar: BrandAvatarIMG,
    name: 'Брэнд',
    text:
      'Может быть, любовь — это нечто большее, что мы не в силах пока осознать. Может быть, это свидетельство чего-то... артефакт какого-то другого измерения, которое мы не в состоянии постичь. И меня тянет через всю Вселенную к человеку, которого я не видела 10 лет и который, возможно, уже мертв. <...> Может, нам стоит довериться ей [любви], хоть мы и не понимаем ее сути?',
    time: 1613195350903
  }
]

storiesOf('Components API/Data Display/Message', module)
  .add('Default', () => {
    return (
      <Column style={{ width: 420 }}>
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </Column>
    )
  })
  .add('Compact', () => {
    const onNoop = () => {}

    return (
      <Column style={{ width: 420 }}>
        {messages.map((message, index) => (
          <Message
            key={index}
            {...message}
            onEdit={onNoop}
            onDelete={onNoop}
            compact
          />
        ))}
      </Column>
    )
  })
