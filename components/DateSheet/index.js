import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 } from 'uuid'

import { getDaysInMonth, isWeekDay, parseDate } from '../../assets/scripts/date'
import DateMonth from '../DateMonth'
import Divider from '../Divider'
import Input from '../Input'

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`

const defaultYear = new Date().getFullYear()

export const DateSheet = ({
  lang,
  value,
  style,
  sheets,
  className,
  canEditYear,
  withMarkers,
  withNavigate,
  withYearDisplay,
  onCompare,
  onChange
}) => {
  const date = parseDate(value)
  const [months, setMonths] = useState([])
  const [filterDate, setFilterDate] = useState(new Date())

  useEffect(() => {
    setMonths(
      new Array(sheets || 1).fill(null).map((_, index) => {
        const startDate = new Date(filterDate)
        const current = new Date(startDate.getFullYear(), startDate.getMonth() + index)
        const month = current.getMonth()
        const label = current.toLocaleString(lang, { month: 'long' })
        return { label, days: getDaysInMonth(current.getFullYear(), month) }
      })
    )
  }, [filterDate, sheets, lang])

  return (
    <Wrap className={className} style={style}>
      {canEditYear && (
        <Input
          type={'number'}
          name={'year'}
          defaultValue={(date && date.getFullYear()) || defaultYear}
          onChange={(e) =>
            setFilterDate(new Date(e.target.value, filterDate.getMonth(), filterDate.getDate()))
          }
          horizontalAlignment={'center'}
          placeholder={defaultYear}
          appearance={'ghost'}
          min={1920}
          max={2100}
          required
        />
      )}
      {canEditYear && <Divider clear />}
      {months.map((month) => (
        <DateMonth
          key={v4()}
          value={date}
          lang={lang}
          month={month}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          withNavigate={!!withNavigate}
          withMarkers={withMarkers ?? true}
          withYearDisplay={withYearDisplay ?? months.length === 1}
          onCompare={onCompare || isWeekDay}
          onChange={onChange}
        />
      ))}
    </Wrap>
  )
}

export default DateSheet
