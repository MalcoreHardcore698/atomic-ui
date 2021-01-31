import React from 'react'
import { Cell } from '..'

const getLabelRole = (role) => {
  switch (role) {
    case 'ADMIN':
      return 'Админ'
    case 'MODERATOR':
      return 'Модератор'
    case 'OFICIAL':
      return 'Оф. лицо'
    case 'ENTITY':
      return 'Юр. лицо'
    default:
      return 'Физ. лицо'
  }
}

export const user = [
  {
    header: 'Наименование',
    content: (item) => <Cell img={item.avatar?.path} text={item.name || '-'} />
  },
  {
    header: 'Аккаунт',
    content: (item) => <Cell text={(item.account && getLabelRole(item.account)) || '-'} />
  },
  {
    header: 'О себе',
    content: (item) => <Cell text={item.about || '-'} />
  },
  {
    header: 'Проекты',
    content: (item) => <Cell text={item.projects?.length || '-'} />
  },
  {
    header: 'Дата регистрации',
    content: (item) => <Cell text={item.createdAt || '-'} />,
    hidden: true
  }
]

export default user
