import React from 'react'
import styled from 'styled-components'
import { Chart as ReactChart } from 'react-charts'

import Column from '../Column'

export const Wrap = styled(Column)`
  display: flex;
`

export const Chart = ({ data, axes, ...props }) => {
  return (
    <Wrap {...props}>
      <ReactChart data={data} axes={axes} />
    </Wrap>
  )
}

export default Chart
