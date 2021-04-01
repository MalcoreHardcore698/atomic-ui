import React from 'react'

import DateText from '../../DateText'
import { Cell } from '..'

export const ticket = [
  {
    header: 'Номер',
    content: (item) => <Cell text={item.token || '-'} />
  },
  {
    header: 'Автор',
    content: (item) => <Cell img={item.author?.avatar} text={item.author?.name || '-'} />
  },
  {
    header: 'Наименование',
    content: (item) => <Cell img={item.avatar?.path} text={item.title || '-'} />
  },
  {
    header: 'Категория',
    content: (item) => <Cell text={item.category?.name || '-'} />
  },
  {
    header: 'Сообщения',
    content: (item) => <Cell text={item.messages?.length || '-'} />
  },
  {
    header: 'Дата регистрации',
    content: (item) => (
      <Cell
        text={
          (
            <DateText
              text={item.createdAt}
              options={{
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }}
            />
          ) || '-'
        }
      />
    ),
    hidden: true
  }
]

export default ticket
