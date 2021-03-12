import React from 'react'
import styled, { css } from 'styled-components'
import { ResponsiveLine } from '@nivo/line'

import Column from '../Column'

export const Wrap = styled(Column)`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: var(--default-gap);
  flex-grow: 1;

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}
`

export const Tooltip = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--surface-border-radius);
  font-size: var(--font-size-s);
  line-height: 14px;
  color: white;

  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 6px);
    bottom: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.7);
  }
`

export const Chart = ({ data, ...props }) => {
  return (
    <Wrap {...props}>
      <ResponsiveLine
        data={data}
        tooltip={(value) => (
          <Tooltip>
            {value.point.data.x} | {value.point.data.y}
          </Tooltip>
        )}
        margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat={' >-.2f'}
        curve={'natural'}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 0,
          tickPadding: 15,
          tickRotation: 0
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 0,
          tickPadding: 15,
          tickRotation: 0
        }}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor', modifiers: [] }}
        pointLabelYOffset={-12}
        crosshairType={'cross'}
        motionConfig={'default'}
        enableCrosshair={false}
        theme={{
          axis: {
            fontSize: '10px',
            ticks: {
              text: {
                fill: '#999999'
              }
            }
          }
        }}
        useMesh
      />
    </Wrap>
  )
}

Chart.defaultProps = {
  appearance: 'default'
}

export default Chart
