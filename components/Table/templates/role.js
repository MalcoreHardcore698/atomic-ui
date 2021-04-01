import React from 'react'

import DateText from '../../DateText'
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
    width: '10%'
  }
]

export default role
