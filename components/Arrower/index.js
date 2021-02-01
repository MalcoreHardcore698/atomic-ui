import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Icon from '../Icon'
import Button from '../Button'

export const Wrap = styled(Row)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  ${({ noMargin }) =>
    noMargin &&
    css`
      margin: 0;
    `}
`

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  flex-grow: 1;
  height: var(--input-height-s);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      background: none;
      border: none;
    `}

  span {
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const ArrowButton = styled(Button)``

const Arrower = ({ label, appearance, arrowLeft, arrowRight, noMargin, onChange }) => {
  const onChangeMonth = (sign) => {
    if (onChange) onChange(sign)
  }

  const onPrevMonth = () => onChangeMonth(-1)
  const onNextMonth = () => onChangeMonth(1)

  return (
    <Wrap noMargin={noMargin}>
      <ArrowButton
        type={'button'}
        size={'s'}
        kind={'icon'}
        appearance={appearance}
        aria-label={'Назад'}
        onMouseDown={onPrevMonth}>
        <Icon icon={arrowLeft || 'arrowLeft'} stroke={appearance !== 'clear' && 'white'} />
      </ArrowButton>

      <Label appearance={appearance}>{label}</Label>

      <ArrowButton
        type={'button'}
        size={'s'}
        kind={'icon'}
        appearance={appearance}
        aria-label={'Далее'}
        onMouseDown={onNextMonth}>
        <Icon icon={arrowRight || 'arrowRight'} stroke={appearance !== 'clear' && 'white'} />
      </ArrowButton>
    </Wrap>
  )
}

Arrower.defaultProps = {
  appearance: 'clear'
}

export default Arrower
