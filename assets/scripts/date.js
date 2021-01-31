/**
 * @return {Date[]} List with date objects for each day of the month
 */
export const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1)
  const days = []

  const day = date.getDay()

  let spaces = 0

  if (day === 0) spaces = 6
  else spaces = day - 1

  while (spaces > 0) {
    days.push(null)
    spaces -= 1
  }

  while (date.getMonth() === month) {
    days.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return days
}

export const getDaysInMonthUTC = (year, month) => {
  const date = new Date(Date.UTC(year, month, 1))
  const days = []

  while (date.getUTCMonth() === month) {
    days.push(new Date(date))
    date.setUTCDate(date.getUTCDate() + 1)
  }

  return days
}

/**
 * @return {Date[]} List with date objects for each day of the week
 */
export const getDaysInWeek = (date) => {
  const week = []
  const day = date.getDay()
  const mondayCorrection = day === 0 ? -6 : 1
  date.setDate(date.getDate() - day + mondayCorrection)
  for (let i = 0; i < 7; i += 1) {
    week.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return week
}

/**
 * @return {string[]} List with internalization months
 */
export const getIntlMonths = (lang) => {
  return new Array(12)
    .fill(null)
    .map((_, index) => new Date(new Date().getFullYear(), index))
    .map((month) =>
      month.toLocaleDateString(lang, {
        month: 'short'
      })
    )
}

/**
 * @return {string[]} List with internalization weekdays
 */
export const getIntlWeekdays = (lang, repr) => {
  return new Array(7)
    .fill(null)
    .map((_, index) => new Date(new Date().getFullYear(), 0, index - 1))
    .map((weekDay) =>
      weekDay.toLocaleDateString(lang, {
        weekday: repr
      })
    )
}

export const isWeekDay = (date) => date.getDay() !== 0 && date.getDay() !== 6

export const isSame = (_date1, _date2) => {
  const date1 = new Date(_date1)
  date1.setHours(0, 0, 0, 0)
  const date2 = new Date(_date2)
  date2.setHours(0, 0, 0, 0)

  return new Date(date1).getTime() === new Date(date2).getTime()
}

export const parseDate = (date) => {
  if (!date) return null
  return new Date(date) || null
}

export const getDateLabel = (date) => {
  if (!date) return null
  return new Date(date)?.toLocaleDateString() || null
}
