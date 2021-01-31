import React from 'react'
import styled, { css } from 'styled-components'

export const clearProperties = css`
  color: black;
  background: none;
  border: none;
  height: auto;
  padding: 0;

  &:hover {
    background: none;
    border: none;
    color: var(--default-color-accent);
  }
`

export const Wrap = styled.button`
  font-family: var(--default-font-family);
  font-size: 0.875rem;
  color: black;

  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  background: none;

  margin: 0;
  padding: var(--input-offset-${({ size }) => size});
  width: auto;
  height: var(--input-height-${({ size }) => size});

  transition: all 150ms ease;

  ${({ kind, size }) =>
    kind === 'icon' &&
    css`
      padding: 0;
      width: var(--input-height-${size});
      min-width: var(--input-height-${size});
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

      ${({ revert }) =>
        revert &&
        css`
          color: var(--default-color-accent);
          background: var(--default-color-accent-dim);
          border: 1px solid var(--default-color-accent-dim);

          &:hover {
            background: var(--default-color-accent-dim__hover);
            border: 1px solid var(--default-color-accent-dim__hover);
          }
        `}
    `}

  ${({ appearance }) =>
    appearance === 'green' &&
    css`
      color: white;
      background: var(--default-color-green);
      border: 1px solid var(--default-color-green)

      &:hover {
        background: var(--default-color-green__hover);
        border: 1px solid var(--default-color-green__hover);
      }

      ${({ revert }) =>
        revert &&
        css`
          color: var(--default-color-green);
          background: var(--default-color-green-dim);
          border: 1px solid var(--default-color-green-dim);

          &:hover {
            background: var(--default-color-green-dim__hover);
            border: 1px solid var(--default-color-green-dim__hover);
          }
        `}
    `}

  ${({ appearance }) =>
    appearance === 'red' &&
    css`
      color: white;
      background: var(--default-color-red);
      border: 1px solid var(--default-color-red)

      &:hover {
        background: var(--default-color-red__hover);
        border: 1px solid var(--default-color-red__hover);
      }

      ${({ revert }) =>
        revert &&
        css`
          color: var(--default-color-red);
          background: var(--default-color-red-dim);
          border: 1px solid var(--default-color-red-dim);

          &:hover {
            background: var(--default-color-red-dim__hover);
            border: 1px solid var(--default-color-red-dim__hover);
          }
        `}
    `}
    
  ${({ appearance }) =>
    appearance === 'ghost' &&
    css`
      color: var(--ghost-color-text);
      background: var(--ghost-color-background);
      border: 1px solid var(--ghost-color-background);

      &:hover {
        opacity: 0.75;
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

  ${({ appearance }) => appearance === 'clear' && clearProperties}

  ${({ appearance }) =>
    appearance === 'link' &&
    css`
      ${clearProperties}
      color: var(--default-color-accent);
      text-align: left;
      padding: 0;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--ghost-color-text);
      background: var(--ghost-color-background);
      border: 1px solid var(--ghost-color-background);
      cursor: default;

      &:hover {
        background: var(--ghost-color-background);
        border: 1px solid var(--ghost-color-background);
        opacity: 1;
      }
    `}
`

export const Button = ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>

Button.defaultProps = {
  appearance: 'default',
  kind: 'default',
  size: 'm'
}

export default Button
