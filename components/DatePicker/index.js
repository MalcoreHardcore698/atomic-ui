import React, { useState } from 'react'
import styled from 'styled-components'

import { getDateLabel, parseDate } from '../../assets/scripts/date'
import useClickOutside from '../../hooks/useClickOutside'
import Transition from '../Transition'
import DateSheet from '../DateSheet'
import Input from '../Input'
import Icon from '../Icon'

const DURATION = 100

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`

export const TextField = styled.div`
  position: relative;
  flex-grow: 1;
`

export const Popout = styled(Transition)`
  position: absolute;
  top: calc(var(--input-height-m) + 10px);
  left: 0;
  z-index: 15;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--default-shadow);

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

export const DateIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const DatePicker = ({
  id,
  name,
  style,
  sheets,
  inputRef,
  placeholder,
  value = null,
  className,
  appearance,
  canEditYear,
  withNavigate,
  withMarkers,
  withYearDisplay,
  onChange,
  onCompare
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(parseDate(value))
  const [label] = useClickOutside(() => setIsOpen(false))

  const handleChange = (newVal) => {
    setSelected(newVal)
    if (onChange) onChange(newVal)
  }

  const handleInputClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrap ref={label} className={className} style={style}>
      <TextField onClick={handleInputClick} className={className} style={style}>
        <Input
          id={id}
          name={name}
          type={'text'}
          inputRef={inputRef ?? null}
          defaultValue={getDateLabel(selected)}
          placeholder={placeholder || 'Выберите дату'}
          appearance={appearance}
          readOnly
        />
        <DateIcon icon={'calendar'} stroke={'var(--ghost-color-text)'} />
      </TextField>

      <Popout in={isOpen} animation={'fade'} timeout={DURATION}>
        <DateSheet
          value={selected}
          sheets={sheets}
          style={{ width: 282 }}
          canEditYear={canEditYear}
          withNavigate={withNavigate}
          withMarkers={withMarkers}
          withYearDisplay={withYearDisplay}
          onChange={handleChange}
          onCompare={onCompare}
        />
      </Popout>
    </Wrap>
  )
}

export default DatePicker
