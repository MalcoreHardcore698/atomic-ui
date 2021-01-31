import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  padding: 15px;
  border-radius: 5px;
  color: white;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px dashed var(--input-placeholder-color);
      background: none;
      color: var(--ghost-color-text);
    `}

  ${({ appearance }) =>
    appearance === 'error' &&
    css`
      border: 1px solid var(--default-color-red);
      background: var(--default-color-red-dim);
      color: var(--default-color-red);
    `}

  ${({ appearance }) =>
    appearance === 'warning' &&
    css`
      border: 1px solid var(--default-color-orange);
      background: var(--default-color-orange-dim);
      color: var(--default-color-orange);
    `}

  ${({ appearance }) =>
    appearance === 'success' &&
    css`
      border: 1px solid var(--default-color-accent);
      background: var(--default-color-accent-dim);
      color: var(--default-color-accent);
    `}
`

export const Alert = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Alert.defaultProps = {
  appearance: 'default',
  width: '240px'
}

export default Alert
