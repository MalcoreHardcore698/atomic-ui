import React from 'react'

import DateText from '../../DateText'
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
    width: '15%'
  }
]

export default category
