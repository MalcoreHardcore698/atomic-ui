import React, { memo } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import Arrower from '../Arrower'
import DateDay from '../DateDay'

const WEEK_DAYS = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 252px;
`

export const MonthLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`

export const Headers = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  margin-bottom: 10px;
  user-select: none;
  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));
`

export const Header = styled.div`
  align-self: center;
  font-size: var(--size-text-xs);
  font-weight: 500;
  color: var(--ghost-color-text);
  text-transform: uppercase;
  justify-self: center;
`

export const Days = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(35px, 35px));
`

export const Day = styled.div``

export const DateMonth = memo(
  ({
    month,
    value,
    filterDate,
    setFilterDate,
    withNavigate,
    withMarkers,
    withYearDisplay,
    onCompare,
    onChange
  }) => {
    return (
      <Wrap>
        {withNavigate ? (
          <Arrower
            label={
              <React.Fragment>
                <span>{month.label}</span>
                {withYearDisplay && <span>{filterDate.getFullYear()}</span>}
              </React.Fragment>
            }
            defaultValue={filterDate}
            onChange={(sign) =>
              setFilterDate(new Date(filterDate.getFullYear(), filterDate.getMonth() + sign))
            }
          />
        ) : (
          <MonthLabel>
            {month.label}
            {withYearDisplay && value && <span>{new Date(value).getFullYear()}</span>}
          </MonthLabel>
        )}

        <Headers>
          {WEEK_DAYS.map((weekDay) => (
            <Header key={v4()}>{weekDay}</Header>
          ))}
        </Headers>

        <Days>
          {month.days.map((dateDay) =>
            dateDay ? (
              <DateDay
                key={v4()}
                value={dateDay}
                selectedDate={value}
                withMarkers={withMarkers}
                onCompare={onCompare}
                onChange={() => onChange(dateDay)}
              />
            ) : (
              <Day key={v4()} />
            )
          )}
        </Days>
      </Wrap>
    )
  }
)

export default DateMonth
