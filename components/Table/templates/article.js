import React from 'react'
import { Cell } from '..'

export const article = [
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
    header: 'Автор',
    content: (item) => <Cell img={item.author?.avatar?.path} text={item.author?.name || '-'} />
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

export default article
