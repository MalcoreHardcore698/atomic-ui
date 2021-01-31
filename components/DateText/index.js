import React from 'react'
import styled from 'styled-components'

export const Wrap = styled.time`
  font-size: var(--font-size-s);
`

export const DateText = ({ text, locales, options, ...props }) => (
  <Wrap {...props}>
    {new Date(parseInt(text) || text).toLocaleString(locales, options) ?? 'Date Invalid'}
  </Wrap>
)

DateText.defaultProps = {
  text: new Date(),
  locales: 'ru-RU',
  options: {
    hour: 'numeric',
    minute: '2-digit'
  }
}

export default DateText
