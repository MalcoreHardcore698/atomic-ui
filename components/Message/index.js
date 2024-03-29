import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Avatar from '../Avatar'
import Title from '../Title'
import Text from '../Text'
import Icon from '../Icon'
import Button from '../Button'
import Tooltip from '../Tooltip'
import DateText from '../DateText'
import Checkbox from '../Checkbox'
import TextArea from '../TextArea'

export const dispatchDateStyles = css`
  position: absolute;
  left: 0;
  bottom: 5px;
  font-size: var(--font-size-xs);
`

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas: 'avatar opinion';
  margin: 0;
  transition: opacity 150ms ease;

  & > span {
    display: flex;
    grid-area: avatar;
    align-self: end;
    justify-self: start;
    cursor: pointer;
    transition: opacity 150ms ease;
  }

  ${({ onClick }) =>
    onClick &&
    css`
      & > span {
        cursor: pointer;

        &:hover {
          opacity: 0.65;
        }
      }
    `}

  ${({ side }) =>
    side === 'owner' &&
    css`
      grid-template-columns: 1fr 64px;
      grid-template-areas: 'opinion avatar';

      & > span {
        justify-self: end;
      }
    `}

  ${({ compact }) =>
    compact &&
    css`
      display: flex;
    `}
    
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

export const OpinionAvatar = styled(Avatar)`
  grid-area: avatar;
  align-self: end;
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
  min-width: 80px;
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

  ${({ compact }) =>
    compact &&
    css`
      padding: 0 0 25px 0;
      background: none;
      color: black;
      width: 100%;
    `}
`

export const OpinionName = styled(Title)`
  color: inherit;
  transition: opacity 150ms ease;

  ${({ compact }) =>
    compact &&
    css`
      display: flex;
      align-items: center;
      grid-gap: 10px;
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

export const OpinionTextArea = styled(TextArea)`
  margin-top: 10px;
  height: 128px;

  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
`

export const OpinionText = styled(Text)`
  color: inherit;

  ${({ compact }) =>
    compact &&
    css`
      margin-top: 10px;
    `}
`

export const OpinionTail = styled.span`
  position: absolute;
  bottom: -6px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 25px;
  height: 20px;

  ${({ side, tails }) =>
    side === 'observer' &&
    css`
      left: -12px;
      background-image: url('${tails.default}');
    `}

  ${({ side, tails }) =>
    side === 'owner' &&
    css`
      right: -12px;
      background-image: url('${tails.owner}');
      transform: scaleX(-1);
    `}
`

export const DispatchTime = styled(DateText)`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: var(--font-size-xs);

  ${({ compact }) =>
    compact &&
    css`
      right: 0;
      font-size: var(--font-size-s);
      color: var(--default-color-text);
    `}

  ${({ type, compact }) =>
    !compact && type &&
    css`
      right: 35px;
    `}
`

export const DispatchDate = styled(DateText)`
  ${dispatchDateStyles}
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`

export const DispatchUpdatedDate = styled.div`
  ${dispatchDateStyles}
  font-size: var(--font-size-s);
  color: var(--default-color-text);
`

export const Actions = styled(Row)`
  position: absolute;
  top: 0;
  right: 0;
  grid-gap: 10px;
`

export const DispatchType = styled(Icon)`
  position: absolute;
  right: 7px;
  bottom: 2px;

  ${({ type }) =>
    type === 'UNREADED' &&
    css`
      right: 10px;
      bottom: 8px;
    `}
`

export const Message = ({
  avatar,
  side,
  name,
  text,
  time,
  type,
  tails,
  style,
  compact,
  className,
  isUpdated,
  isChecked,
  onEdit,
  onChecked,
  onDelete,
  onLink
}) => {
  const [updatedAt, setUpdatedAt] = useState(isUpdated ? time : null)
  const [checked, setChecked] = useState(isChecked)
  const [isEdit, setEdit] = useState(false)
  const [message, setMessage] = useState(text)
  const textRef = useRef(null)

  const handleToggleEdit = () => setEdit((prev) => !prev)

  const handleChecked = (e) => {
    const value = e.target.checked
    if (onChecked) onChecked(value)
    setChecked(value)
  }

  const handleApplyChanges = () => {
    const value = textRef?.current?.value

    if (value) {
      if (onEdit) onEdit(value)
      setUpdatedAt(new Date())
      setMessage(value)
    }
    handleToggleEdit()
  }

  return (
    <Wrap side={side} compact={compact} checked={checked} style={style} className={className}>
      {!compact && <OpinionAvatar side={side} src={avatar} onClick={onLink} />}
      <Opinion side={side} compact={compact}>
        <OpinionName tag={'h5'} compact={compact} onClick={onLink}>
          {compact && <MiniAvatar side={side} src={avatar} onClick={onLink} />}
          {name}
        </OpinionName>
        {!compact && <OpinionTail side={side} tails={tails} />}

        {isEdit ? (
          <OpinionTextArea ref={textRef} defaultValue={message} appearance={'ghost'} />
        ) : (
          <OpinionText compact={compact}>{message}</OpinionText>
        )}

        <DispatchTime type={type} text={updatedAt || time} compact={compact} />
        {compact && updatedAt && (
          <DispatchUpdatedDate>
            Отредактировано{' '}
            {new Date(updatedAt).toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </DispatchUpdatedDate>
        )}
        {compact && !updatedAt && (
          <DispatchDate
            text={time}
            options={{
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }}
          />
        )}
        {!compact && type && (
          <DispatchType
            size={'xs'}
            type={type}
            icon={type === 'UNREADED' ? 'check' : 'doubleCheck'}
            stroke={side === 'observer' ? 'var(--ghost-color-text)' : 'white'}
            fill={side === 'observer' ? 'var(--ghost-color-text)' : 'white'}
          />
        )}

        {compact && onEdit && onDelete && (
          <Actions>
            {!isEdit ? (
              <React.Fragment>
                <Tooltip text={'Удалить сообщение'}>
                  <Button
                    kind={'icon'}
                    size={'xs'}
                    disabled={checked}
                    appearance={'red'}
                    onClick={onDelete}>
                    <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
                <Tooltip text={'Редактировать сообщение'}>
                  <Button kind={'icon'} size={'xs'} disabled={checked} onClick={handleToggleEdit}>
                    <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
                <Tooltip text={'Отметить сообщение'} self>
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
      </Opinion>
    </Wrap>
  )
}

Message.defaultProps = {
  side: 'observer',
  text: 'Some Message',
  time: '15:00'
}

export default Message
