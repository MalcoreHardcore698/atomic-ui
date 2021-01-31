import React from 'react'
import { Cell } from '..'

export const project = [
  {
    header: 'Наименование',
    content: (item) => <Cell img={item.preview?.path} text={item.title || '-'} />
  },
  {
    header: 'Описание',
    content: (item) => <Cell text={item.body || '-'} />
  },
  {
    header: 'Раздел',
    content: (item) => <Cell text={item.category?.name || '-'} />
  },
  {
    header: 'Компания',
    content: (item) => <Cell img={item.company?.avatar?.path} text={item.company?.name || '-'} />
  },
  {
    header: 'Дата публикации',
    content: (item) => <Cell text={item.publishedAt || '-'} />
  },
  {
    header: 'Дата создания',
    content: (item) => <Cell text={item.createdAt || '-'} />,
    hidden: true
  }
]

export default project
