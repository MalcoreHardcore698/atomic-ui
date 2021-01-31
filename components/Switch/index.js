import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: min-content;
  min-width: 240px;
`

export const Track = styled.div`
  position: relative;
  display: flex;
  border-radius: var(--surface-border-radius);
  background: var(--ghost-color-background);
  padding: 3px;
  width: 100%;
  height: var(--input-height-m);

  ${({ unary }) =>
    unary &&
    css`
      width: 48px;
      height: 24px;
      border-radius: 25rem;
      cursor: pointer;
    `}

  ${({ stretch }) =>
    stretch &&
    css`
      flex-grow: 1;
      width: 100%;
    `}
  
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`

export const Label = styled.p`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-regular);
`

export const LabeledToggle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--surface-border);
  background: none;
  box-shadow: none;
  color: var(--ghost-color-text);
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  padding: 0 15px;
  cursor: pointer;
  flex-grow: 1;

  width: ${({ width }) => width};

  svg {
    path,
    circle {
      stroke: var(--ghost-color-text);
    }
  }

  ${({ active }) =>
    active &&
    css`
      border-radius: var(--surface-border-radius);
      background: var(--surface-background);
      box-shadow: var(--surface-box-shadow);
      color: var(--default-color-accent);

      svg {
        path,
        circle {
          stroke: var(--default-color-accent);
        }
      }
    `}

  @media only screen and (max-width: 480px) {
    height: var(--input-height-m);
  }
`

export const Toggle = styled.span`
  position: absolute;
  left: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  border-radius: 50%;
  background: var(--ghost-color-text);
  box-shadow: var(--surface-box-shadow);
  transition: left 150ms ease;

  ${({ active }) =>
    active &&
    css`
      left: 26px;
      background: var(--default-color-accent);
    `}
`

export const Switch = ({ label, options, ltr, rtl, defaultValue, className, style, onChange }) => {
  const list = options || [0, 1]
  const [selected, setSelected] = useState(defaultValue)

  const onClick = (item) => {
    setSelected(item)
    if (onChange) onChange(item)
  }

  const renderLabeledToggle = (item, key) => (
    <LabeledToggle
      key={key}
      width={item.width || 'auto'}
      active={selected && item.value === selected.value}
      onClick={() => onClick(item)}>
      {item.label}
    </LabeledToggle>
  )

  return options && options.length > 0 ? (
    <Track className={className} style={style}>
      {list.map((item, index) =>
        item.tooltip ? (
          <Tooltip key={index} style={{ flexGrow: 1 }} text={item.tooltip}>
            {renderLabeledToggle(item)}
          </Tooltip>
        ) : (
          renderLabeledToggle(item, index)
        )
      )}
    </Track>
  ) : (
    <Wrap className={className} style={style} onClick={() => onClick(!selected)}>
      {ltr && !rtl && <Label>{label}</Label>}
      <Track unary>
        <Toggle active={selected} />
      </Track>
      {rtl && <Label>{label}</Label>}
    </Wrap>
  )
}

Switch.defaultProps = {
  label: 'Enable good mood',
  ltr: true
}

export default Switch
