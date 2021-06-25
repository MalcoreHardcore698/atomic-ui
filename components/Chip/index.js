import React from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.span`
  display: flex;
  align-items: center;

  font-weight: 400;
  color: white;
  line-height: 1;
  padding: 0 8px;

  border: 1px solid transparent;
  border-radius: 25rem;
  width: fit-content;

  cursor: pointer;
  transition: all 150ms ease;

  ${({ size }) =>
    size &&
    css`
      font-size: var(--font-size-${size});
      height: var(--chip-height-${size});
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      font-size: var(--font-size-${size});
      height: 18px;
    `}

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      color: white;
      ${({ color }) =>
        color === 'default' &&
        css`
          background: var(--default-color-accent);
          border-color: var(--default-color-accent);
          &:hover {
            background: var(--default-color-accent__hover);
            border-color: var(--default-color-accent__hover);
          }
        `}
      ${({ color }) =>
        color === 'orange' &&
        css`
          background: var(--default-color-orange);
          border-color: var(--default-color-orange);
          &:hover {
            background: var(--default-color-orange);
            border-color: var(--default-color-orange);
          }
        `}
            ${({ color }) =>
        color === 'red' &&
        css`
          background: var(--default-color-red);
          border-color: var(--default-color-red);
          &:hover {
            background: var(--default-color-red);
            border-color: var(--default-color-red);
          }
        `}
            ${({ color }) =>
        color === 'green' &&
        css`
          background: var(--default-color-green);
          border-color: var(--default-color-green);
          &:hover {
            background: var(--default-color-green);
            border-color: var(--default-color-green);
          }
        `}
    `}
  ${({ appearance }) =>
    appearance === 'outlined' &&
    css`
      background: transparent;
      ${({ color }) =>
        color === 'default' &&
        css`
          border-color: var(--default-color-accent);
          color: var(--default-color-accent);
          &:hover {
            border-color: var(--default-color-accent__hover);
            color: var(--default-color-accent__hover);
          }
        `}
      ${({ color }) =>
        color === 'ghost' &&
        css`
          border-color: var(--default-color-text);
          color: var(--default-color-text);
          &:hover {
            border-color: var(--ghost-color-accent__hover);
            color: var(--ghost-color-accent__hover);
          }
        `}
            ${({ color }) =>
        color === 'orange' &&
        css`
          border-color: var(--default-color-orange);
          color: var(--default-color-orange);
          &:hover {
            border-color: var(--default-color-orange);
            color: var(--default-color-orange);
          }
        `}
            ${({ color }) =>
        color === 'red' &&
        css`
          border-color: var(--default-color-red);
          color: var(--default-color-red);
          &:hover {
            border-color: var(--default-color-red);
            color: var(--default-color-red);
          }
        `}

            ${({ color }) =>
        color === 'green' &&
        css`
          border-color: var(--default-color-green);
          color: var(--default-color-green);
          &:hover {
            border-color: var(--default-color-green);
            color: var(--default-color-green);
          }
        `}
    `}
`

export const Chip = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Chip.defaultProps = {
  size: 's',
  color: 'default',
  appearance: 'default'
}

export default Chip
