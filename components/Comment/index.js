import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Avatar from '../Avatar'
import Text from '../Text'
import DateText from '../DateText'
import Button from '../Button'
import Icon from '../Icon'
import Tooltip from '../Tooltip'

export const Wrap = styled(Row)`
  margin: 0;
  padding: 0;
`

export const Name = styled(Text)`
  font-weight: var(--font-weight-medium);
  color: var(--default-color-accent);
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

export const Message = styled(Text)`
  color: black;
`

export const Content = styled(Column)`
  grid-gap: 0;
  width: 100%;
`

export const Meta = styled(Row)`
  grid-gap: 5px;
`

export const Line = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const DispatchTime = styled(DateText)`
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`

export const ReplyButton = styled(Button)`
  color: var(--default-color-accent);
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-regular);
`

export const LikeButton = styled(Row)`
  align-items: center;
  grid-gap: 0;
  cursor: pointer;

  span {
    color: var(--default-color-text);
    transition: color 150ms ease;
  }

  &:hover {
    span {
      color: var(--default-color-accent);
    }

    svg {
      path,
      circle {
        stroke: var(--default-color-accent);
      }
    }
  }
`

export const Comment = ({
  user,
  message,
  likes,
  liked,
  time,
  className,
  style,
  onLink,
  onReply,
  onLike
}) => {
  const [isLiked, setLiked] = useState(false)
  const color = isLiked || liked ? 'var(--default-color-accent)' : 'var(--default-color-text)'

  const onClick = () => {
    setLiked(!isLiked)
    if (onLike) onLike()
  }

  return (
    <Wrap className={className} style={style}>
      <Avatar src={user?.avatar?.path ?? ''} />

      <Content>
        <Name onClick={onLink}>{user.name}</Name>
        <Message>{message}</Message>

        <Line>
          <Meta>
            <DispatchTime text={time} />
            <ReplyButton appearance={'clear'} onClick={onReply}>
              Ответить
            </ReplyButton>
          </Meta>

          {likes && likes > 0 && (
            <Tooltip text={'Мне нравится'}>
              <LikeButton type={'button'} onClick={onClick} appearance={'clear'} size={'xs'}>
                <span style={{ color }}>{likes}</span>
                <Icon
                  icon={'heart'}
                  size={'xs'}
                  stroke={color}
                  fill={isLiked || liked ? 'var(--default-color-accent)' : 'none'}
                />
              </LikeButton>
            </Tooltip>
          )}
        </Line>
      </Content>
    </Wrap>
  )
}

export default Comment
