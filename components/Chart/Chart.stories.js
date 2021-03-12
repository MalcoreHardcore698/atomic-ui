import React from 'react'
import { storiesOf } from '@storybook/react'

import Chart from '.'
import data from './data'

storiesOf('Components API/Data Display/Chart', module).add('Default', () => (
  <Chart data={data} style={{ height: 475 }} />
))
