import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Text from '../Text'
import Icon from '../Icon'
import CountUp from 'react-countup'

export const Wrap = styled(Column)`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: var(--default-gap);
  flex-grow: 1;

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    `}
`

export const Label = styled(Text)`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
  color: var(--ghost-color-text);
`

export const Value = styled(Row)`
  grid-gap: 5px 10px;
  align-items: flex-end;

  p {
    font-size: 36px;
    font-weight: var(--font-weight-bold);
    line-height: 1;
    color: black;
  }
`

export const Movement = styled(Row)`
  grid-gap: 0 8px;

  i {
    transform: scale(1.85);
  }

  span {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  p {
    display: flex;
    align-items: flex-end;
    font-size: var(--font-size-l);
    line-height: 1.45;

    ${({ positive }) =>
      positive
        ? css`
            color: var(--default-color-green);
          `
        : css`
            color: var(--default-color-red);
          `}
  }
`

export const Indicator = ({ label, value, movement, positive, negative, appearance, ...props }) => (
  <Wrap {...props} appearance={appearance}>
    {label && <Label>{label}</Label>}
    {(value || movement) && (
      <Value>
        {value ? (
          <Text>
            <CountUp end={value} duration={2.75} />
          </Text>
        ) : null}
        {movement ? (
          <Movement positive={positive} negative={negative}>
            {positive && !negative && (
              <Icon icon={'arrowUpCarret'} fill={'var(--default-color-green)'} />
            )}
            {!positive && negative && (
              <Icon icon={'arrowDownCarret'} fill={'var(--default-color-red)'} />
            )}
            <Text>
              <CountUp end={movement} duration={3} />
            </Text>
          </Movement>
        ) : null}
      </Value>
    )}
  </Wrap>
)

Indicator.defaultProps = {
  appearance: 'default',
  label: 'Пользователи',
  value: 5621,
  movement: 12
}

export default Indicator
