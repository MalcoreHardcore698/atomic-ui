import React from 'react'
import { Cell } from '..'

export const category = [
  {
    header: 'Наименование',
    content: (item) => <Cell text={item.name || '-'} />,
    width: '15%'
  },
  {
    header: 'Описание',
    content: (item) => <Cell text={item.description || '-'} />,
    width: '70%'
  },
  {
    header: 'Дата создания',
    content: (item) => <Cell text={item.createdAt || '-'} />,
    width: '15%'
  }
]

export default category
