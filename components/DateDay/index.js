import React from 'react'
import styled, { css } from 'styled-components'

import { isSame } from '../../assets/scripts/date'

export const Wrap = styled.div`
  --cell-size: 35px;
  --cell-offset: 2.5px;
  --cell-color: #fff;
  --badge-size: 5px;
  --badge-bottom-offset: 2px;
  --side-left-radius: 10rem 0 0 10rem;
  --side-right-radius: 0 10rem 10rem 0;
  --transition: all 150ms ease;

  display: flex;
  align-items: center;

  align-self: center;
  justify-content: center;

  width: var(--cell-size);
  height: var(--cell-size);

  margin: var(--cell-offset) 0;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
  transition: var(--transition);
  justify-self: center;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(--cell-size);
    height: var(--cell-size);

    font-size: var(--font-size-s);
    font-weight: 400;
    color: var(--default-color-text);
    border-radius: 50%;
    transition: var(--transition);

    i {
      position: absolute;
      bottom: var(--badge-bottom-offset);
      width: var(--badge-size);
      height: var(--badge-size);
      background: var(--default-color-text);
      border-radius: 50%;
    }

    ${({ current }) =>
      current &&
      css`
        color: var(--default-color-accent);
        background: transparent;
        border: 1px solid var(--default-color-accent);

        i {
          display: none;
        }
      `}

    ${({ selected }) =>
      selected &&
      css`
        color: var(--cell-color);
        background: var(--default-color-accent);

        i {
          background: var(--cell-color);
        }
      `}
  }
`

const DateDay = ({ value, selectedDate, withMarkers, onCompare, onChange }) => {
  const [date, month, year] = [value.getDate(), value.getMonth(), value.getFullYear()]
  const [cDate, cMonth, cYear] = [
    new Date().getDate(),
    new Date().getMonth(),
    new Date().getFullYear()
  ]

  const isSelectedDate = selectedDate && selectedDate && isSame(value, selectedDate)
  const isCurrent = cDate === date && cMonth === month && cYear === year

  return (
    <Wrap
      role={'button'}
      tabIndex={0}
      onMouseDown={onChange}
      selected={isSelectedDate}
      current={isCurrent}>
      <span>
        {value.getDate()}
        {withMarkers && onCompare(value) && <i />}
      </span>
    </Wrap>
  )
}

export default DateDay
