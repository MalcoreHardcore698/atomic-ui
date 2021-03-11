import React, { useMemo } from 'react'
import { storiesOf } from '@storybook/react'

import Chart from '.'

storiesOf('Components API/Data Display/Chart', module).add('Default', () => {
  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7]
        ]
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4]
        ]
      }
    ],
    []
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return <Chart data={data} axes={axes} style={{ height: 475 }} />
})
