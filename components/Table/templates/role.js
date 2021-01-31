import React from 'react'
import { Cell } from '..'

export const role = [
  {
    header: 'Наименование',
    content: (item) => <Cell text={item.name || '-'} />,
    width: '15%'
  },
  {
    header: 'Привелегии',
    content: (item) => <Cell text={item.permissions?.length || '-'} />,
    width: '75%'
  },
  {
    header: 'Дата создания',
    content: (item) => <Cell text={item.createdAt || '-'} />,
    width: '10%'
  }
]

export default role
