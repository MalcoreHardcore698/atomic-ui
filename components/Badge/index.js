import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25rem;
  font-weight: var(--font-weight-regular);

  ${({ size }) =>
    size === 'xs' &&
    css`
      width: 16px;
      height: 16px;
      font-size: var(--font-size-xs);
    `}

  ${({ size }) =>
    size === 's' &&
    css`
      width: 20px;
      height: 20px;
      font-size: var(--font-size-s);
    `}

  ${({ size }) =>
    size === 'm' &&
    css`
      width: 25px;
      height: 25px;
    `}

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      color: white;
      background: var(--default-color-accent);
      border: 1px solid var(--default-color-accent);

      &:hover {
        background: var(--default-color-accent__hover);
        border: 1px solid var(--default-color-accent__hover);
      }
    `}

  ${({ appearance }) =>
    appearance === 'outlined' &&
    css`
      color: gray;
      border: 1px solid rgba(0, 0, 0, 15%);

      &:hover {
        color: var(--default-color-accent);
        border: 1px solid var(--default-color-accent);
      }
    `}
`

export const Badge = ({ count, ...props }) => <Wrap {...props}>{count}</Wrap>

Badge.defaultProps = {
  count: 0,
  size: 's',
  appearance: 'default'
}

export default Badge
