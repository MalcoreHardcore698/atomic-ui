import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Text from '../Text'
import Image from '../Image'

export const Wrap = styled(Row)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 96px;
  align-items: center;
  padding: var(--default-gap);
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  overflow: hidden;
  transition: all 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    `}

  p {
    font-size: var(--font-h3);
    font-weight: 700;
    color: white;

    ${({ type, color }) =>
      (type !== 'solid' || !type) &&
      color &&
      css`
        padding-left: 15px;
        color: #232323;
      `}
  }

  ${({ type, color }) =>
    (type !== 'solid' || !type) &&
    color &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        left: 0;
        width: 3px;
        height: calc(100% - 20px);
        background: ${color.accent};
        border-radius: 0 var(--surface-border-radius) var(--surface-border-radius) 0;
      }
    `}

  ${({ type }) =>
    type === 'solid' &&
    css`
      height: 128px;
      align-items: flex-end;
      font-size: var(--font-h3);
      font-weight: 700;
      color: white;
    `}

  ${({ type, color }) =>
    type === 'solid' &&
    color &&
    css`
      background: ${color.accent};
      border: none;
    `}
`

export const Extras = styled.span`
  display: flex;
  justify-self: center;
  align-self: center;
  transform: rotate(15deg);

  ${({ type, color }) =>
    type === 'solid' &&
    color &&
    css`
      position: relative;
      top: 20px;
      align-items: flex-end;
      font-size: 170px;
      font-weight: 700;
      color: ${color.dim};
      line-height: 0;
      transform: rotate(0);

      svg {
        path,
        circle {
          stroke: ${color.dim};
        }
        transform: scale(6);
      }
    `}
`

export const getColor = (color) => {
  switch (color) {
    case 'blue':
      return { accent: '#009EE3', dim: '#3EC0F0' }
    case 'orange':
      return { accent: '#F07C00', dim: '#F39300' }
    case 'green':
      return { accent: '#93C11C', dim: '#B8CF21' }
    case 'purple':
      return { accent: '#4065AD', dim: '#697DBD' }
    case 'red':
      return { accent: '#E40039', dim: '#EA4C60' }
    case 'pink':
      return { accent: '#A71380', dim: '#B44996' }
    default:
      return { accent: 'white', dim: 'white' }
  }
}

export const Card = ({ text, color, extras, type, onClick, ...props }) => (
  <Wrap type={type} color={getColor(color)} {...props} onClick={onClick}>
    <Text>{text}</Text>
    <Extras type={type} color={getColor(color)}>
      {typeof extras === 'string' ? <Image src={extras} alt={'Icon'} /> : extras}
    </Extras>
  </Wrap>
)

export default Card
