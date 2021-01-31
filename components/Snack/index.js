import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Transition from '../Transition'
import Text, { Wrap as WrapText } from '../Text'
import Button from '../Button'
import Icon from '../Icon'

const getInfo = (type, tag) => {
  if (type === 'success') {
    if (tag === 'color') return 'green'
    if (tag === 'icon') return 'check'
    return 'var(--default-color-green)'
  }
  if (type === 'warning') {
    if (tag === 'color') return 'orange'
    if (tag === 'icon') return 'danger'
    return 'var(--default-color-orange)'
  }
  if (tag === 'color') return 'red'
  if (tag === 'icon') return 'danger'
  return 'var(--default-color-red)'
}

export const Wrap = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 320px;
  cursor: pointer;
  background: white;
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);
  padding: var(--default-gap) calc(var(--default-gap) + 5px);
  transition: opacity 150ms ease;

  ${({ type }) =>
    type &&
    css`
      background: ${getInfo(type)};
    `}

  &:hover {
    opacity: 0.85;
  }

  ${WrapText} {
    color: white;
  }

  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 100ms, blur 100ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 100ms, blur 100ms;
  }
`

export const MarkButton = styled(Button)`
  background: white;
  border-radius: 50%;
  border: none;

  &:hover {
    background: white;
    border: none;
  }
`

export const Snack = ({ type, message, style, className, onRemove }) => (
  <Transition in appear animation={'fade'}>
    <Wrap type={type} className={className} style={style} onClick={onRemove}>
      <Text>{message}</Text>
      <MarkButton kind={'icon'} size={'xs'}>
        <Icon icon={getInfo(type, 'icon')} stroke={getInfo(type)} size={'xs'} />
      </MarkButton>
    </Wrap>
  </Transition>
)

export default Snack
