import React from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Column from '../../Column'
import Text from '../../Text'

export const Wrap = styled(Column)`
  padding: var(--default-gap);
  grid-gap: var(--default-gap);
`

export const Action = styled(Text)`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  color: black;
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    opacity: .45;
  }

  ${({ color }) =>
    color === 'red' &&
    css`
      color: var(--default-color-red);

      &:hover {
        color: var(--default-color-red);
      }
    `}
`

export const Actions = ({ actions }) => (
  <Wrap>
    {actions.map((action) => (
      <Action key={v4()} color={action?.color} onClick={action?.onClick}>
        {action?.text}
      </Action>
    ))}
  </Wrap>
)

export default Actions
