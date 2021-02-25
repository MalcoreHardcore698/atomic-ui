import React, { useState, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Avatar from '../Avatar'
import Text from '../Text'
import DateText from '../DateText'
import Button from '../Button'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import Checkbox from '../Checkbox'
import TextArea from '../TextArea'

export const Wrap = styled(Row)`
  position: relative;
  margin: 0;
  padding: 0;

  ${({ checked }) =>
    checked &&
    css`
      opacity: 0.45;
    `}
`

export const MiniAvatar = styled(Avatar)`
  width: var(--input-height-xs);
  height: var(--input-height-xs);
  min-width: var(--input-height-xs);
  min-height: var(--input-height-xs);
  border-radius: var(--surface-border-radius);
`

export const Name = styled(Text)`
  font-weight: var(--font-weight-medium);
  color: var(--default-color-accent);
  transition: opacity 150ms ease;

  ${({ compact }) =>
    compact &&
    css`
      display: flex;
      align-items: center;
      grid-gap: 10px;
      margin-bottom: 5px;
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

export const MessageTextArea = styled(TextArea)`
  height: 128px;
`

export const MessageText = styled(Text)`
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

export const Actions = styled(Row)`
  position: absolute;
  top: 0;
  right: 0;
  grid-gap: 10px;
`

export const DispatchUpdatedDate = styled(DateText)`
  font-size: var(--font-size-s);
  color: var(--default-color-text);
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

export const Likes = styled(Row)`
  align-items: center;
  grid-gap: 0;
`

export const LikesButton = styled(Button)`
  span {
    color: var(--default-color-text);
    transition: color 150ms ease;
  }

  &:hover {
    span {
      color: var(--default-color-accent);
    }
  }
`

export const LikeButton = styled(Button)`
  &:hover {
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
  time,
  className,
  style,
  compact,
  isLiked: initialLiked,
  isUpdated,
  isChecked,
  onLink,
  onReply,
  onChecked,
  onShowLikes,
  onDelete,
  onEdit,
  onLike
}) => {
  const [updatedAt, setUpdatedAt] = useState(isUpdated ? time : null)
  const [checked, setChecked] = useState(isChecked)
  const [count, setCount] = useState(likes)
  const [isEdit, setEdit] = useState(false)
  const [isLiked, setLiked] = useState(initialLiked)
  const color = useMemo(
    () => (isLiked ? 'var(--default-color-accent)' : 'var(--default-color-text)'),
    [isLiked]
  )
  const textLikes = useMemo(() => (count === 1 ? 'человеку' : 'людям'), [count])
  const [comment, setComment] = useState(message)
  const commentRef = useRef(null)

  const onClick = () => {
    const value = !isLiked
    if (onLike) onLike(value)
    setCount((prev) => prev + (value ? 1 : -1))
    setLiked(value)
  }

  const handleToggleEdit = () => setEdit((prev) => !prev)

  const handleChecked = (e) => {
    const value = e.target.checked
    if (onChecked) onChecked(value)
    setChecked(value)
  }

  const handleApplyChanges = () => {
    const value = commentRef?.current?.value

    if (value) {
      if (onEdit) onEdit(value)
      setUpdatedAt(new Date())
      setComment(value)
    }
    handleToggleEdit()
  }

  return (
    <Wrap checked={checked} style={style} className={className}>
      {!compact && <Avatar src={user?.avatar?.path ?? ''} />}

      <Content>
        <Name compact={compact} onClick={onLink}>
          {compact && <MiniAvatar src={user?.avatar?.path ?? ''} />}
          {user.name}
        </Name>

        {isEdit ? (
          <MessageTextArea ref={commentRef} defaultValue={comment} appearance={'ghost'} />
        ) : (
          <MessageText>{comment}</MessageText>
        )}

        {compact && onEdit && onDelete && (
          <Actions>
            {!isEdit ? (
              <React.Fragment>
                <Tooltip text={'Удалить комментарий'}>
                  <Button
                    kind={'icon'}
                    size={'xs'}
                    disabled={checked}
                    appearance={'red'}
                    onClick={onDelete}>
                    <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
                <Tooltip text={'Редактировать комментарий'}>
                  <Button kind={'icon'} size={'xs'} disabled={checked} onClick={handleToggleEdit}>
                    <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
                <Tooltip text={'Отметить комментарий'} self>
                  <Checkbox checked={checked} onChange={handleChecked} />
                </Tooltip>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Tooltip text={'Применить изменения'} self>
                  <Button
                    kind={'icon'}
                    size={'xs'}
                    disabled={checked}
                    appearance={'green'}
                    onClick={handleApplyChanges}>
                    <Icon icon={'check'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
                <Tooltip text={'Отменить изменения'} self>
                  <Button
                    kind={'icon'}
                    size={'xs'}
                    disabled={checked}
                    appearance={'red'}
                    onClick={handleToggleEdit}>
                    <Icon icon={'closeSquare'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
              </React.Fragment>
            )}
          </Actions>
        )}

        <Line>
          <Meta>
            {updatedAt ? (
              <DispatchUpdatedDate>
                Отредактировано{' '}
                {new Date(updatedAt).toLocaleString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </DispatchUpdatedDate>
            ) : (
              <DispatchTime text={time} />
            )}

            {onReply && (
              <ReplyButton appearance={'clear'} onClick={onReply}>
                Ответить
              </ReplyButton>
            )}
          </Meta>

          <Likes>
            {count > 0 && (
              <Tooltip text={`${count} ${textLikes} это нравится`}>
                <LikesButton type={'button'} onClick={onShowLikes} appearance={'clear'} size={'xs'}>
                  <span style={{ color }}>{count}</span>
                </LikesButton>
              </Tooltip>
            )}
            <Tooltip text={'Мне нравится'}>
              <LikeButton type={'button'} onClick={onClick} appearance={'clear'} size={'xs'}>
                <Icon
                  icon={'heart'}
                  size={'xs'}
                  stroke={color}
                  fill={isLiked ? 'var(--default-color-accent)' : 'none'}
                />
              </LikeButton>
            </Tooltip>
          </Likes>
        </Line>
      </Content>
    </Wrap>
  )
}

export default Comment
