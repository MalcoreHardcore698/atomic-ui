import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Text from '../Text'

export const Wrap = styled(Row)`
  align-items: center;
  grid-gap: 25px;
`

export const QuestionMark = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: 50%;
  font-size: 75px;
  font-weight: 800;
  color: #1b2e50;
  width: 96px;
  height: 96px;
`

export const TapeText = styled(Text)`
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  font-size: var(--font-h3);
  font-weight: 700;
  color: #1b2e50;
  height: min-content;
`

export const Tape = ({ text, ...props }) => (
  <Wrap {...props}>
    <QuestionMark>?</QuestionMark>
    <TapeText>{text}</TapeText>
  </Wrap>
)

export default Tape
