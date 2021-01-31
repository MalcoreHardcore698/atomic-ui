import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Icon from '../Icon'

export const Wrap = styled.div`
  display: flex;
  grid-gap: 5px;
  background: var(--default-color-accent-dim);
  border-radius: 25rem;
  padding: var(--space-offset-xs);
  width: min-content;
  height: fit-content;

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--ghost-color-background);
    `}
`

export const Rate = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ size }) =>
    size === 'xs' &&
    css`
      width: 8px;
      height: 8px;
    `}

  ${({ size }) =>
    size === 's' &&
    css`
      width: 12px;
      height: 12px;
    `}

  ${({ readOnly, disabled }) =>
    (readOnly || disabled) &&
    css`
      cursor: default;
    `}

  svg {
    path {
      stroke: none;
      transition: fill 150ms linear;
    }
  }
`

export const Rating = ({
  max,
  icon,
  size,
  icons,
  readOnly,
  disabled,
  defaultValue,
  onChange,
  ...props
}) => {
  const list = new Array(max).fill(null).map((_, i) => i + 1)
  const [value, setValue] = useState(defaultValue)
  const [rate, setRate] = useState(null)

  const onMouseEnter = (item) => {
    if (!readOnly && !disabled) setRate(item)
  }

  const onMouseLeave = () => {
    if (!readOnly && !disabled) setRate(null)
  }

  const onClick = (item) => {
    if (!readOnly && !disabled) setValue(item)
    if (onChange && !readOnly && !disabled) onChange(item)
  }

  return (
    <Wrap {...props} size={size} disabled={disabled}>
      {list.map((item, index) => (
        <Rate
          key={item}
          size={size}
          onMouseEnter={() => onMouseEnter(item)}
          onMouseLeave={onMouseLeave}
          onClick={() => onClick(item)}
          readOnly={readOnly}
          disabled={disabled}>
          <Icon
            icon={icons && icons.length === max ? icons[index] : icon}
            fill={
              item <= value || item <= rate
                ? 'var(--default-color-accent)'
                : disabled
                ? 'var(--default-color-text)'
                : 'var(--default-color-accent-gray)'
            }
            style={size === 'xs' ? { transform: 'scale(.85)' } : {}}
            size={'xs'}
          />
        </Rate>
      ))}
    </Wrap>
  )
}

Rating.defaultProps = {
  icon: 'star',
  size: 's',
  defaultValue: 0,
  max: 5
}

export default Rating
