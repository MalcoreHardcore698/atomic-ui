import React from 'react'
import styled, { css } from 'styled-components'

import Avatar from '../Avatar'
import Title from '../Title'
import Text from '../Text'
import DateText from '../DateText'

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: 'avatar opinion';
  margin: 0;

  ${({ side }) =>
    side === 'owner' &&
    css`
      grid-template-columns: 1fr 64px;
      grid-template-areas: 'opinion avatar';
    `}
`

export const OpinionAvatar = styled(Avatar)`
  grid-area: avatar;
  transition: opacity 150ms ease;

  ${({ side }) =>
    side === 'owner' &&
    css`
      justify-self: end;
    `}

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`

export const Opinion = styled.div`
  position: relative;
  padding: 10px var(--default-gap) 25px var(--default-gap);
  border-radius: var(--surface-border-radius);
  color: white;
  width: fit-content;
  grid-area: opinion;

  ${({ side }) =>
    side === 'observer' &&
    css`
      background: var(--ghost-color-background);
      color: var(--ghost-color-text);
    `}

  ${({ side }) =>
    side === 'owner' &&
    css`
      justify-self: end;
      background: var(--default-color-accent);
      color: white;
    `}
`

export const OpinionName = styled(Title)`
  color: inherit;
  transition: opacity 150ms ease;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;

      &:hover {
        opacity: 0.65;
      }
    `}
`

export const OpinionText = styled(Text)`
  color: inherit;
`

export const DispatchTime = styled(DateText)`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: var(--font-size-xs);
`

export const Message = ({ avatar, side, name, text, time, onLink }) => (
  <Wrap side={side}>
    <OpinionAvatar side={side} src={avatar} onClick={onLink} />
    <Opinion side={side}>
      <OpinionName tag={'h5'} onClick={onLink}>
        {name}
      </OpinionName>
      <OpinionText>{text}</OpinionText>
      <DispatchTime text={time} />
    </Opinion>
  </Wrap>
)

Message.defaultProps = {
  side: 'observer',
  text: 'Some Message',
  time: '15:00'
}

export default Message
