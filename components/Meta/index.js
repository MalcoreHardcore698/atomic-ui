import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Icon from '../Icon'
import Chip from '../Chip'
import Rating from '../Rating'
import Tooltip from '../Tooltip'
import DateText from '../DateText'
import ShareInSocial from '../ShareInSocial'

export const Wrap = styled(Row)`
  grid-gap: var(--default-gap);
  flex-wrap: wrap;
`

export const DateRow = styled(Row)`
  position: relative;
  top: -2px;
  align-items: center;
  grid-gap: var(--gap-xs);
  color: var(--ghost-color-text);
`

export const DateIcon = styled(Icon)`
  margin-left: -4px;
`

export const Category = styled(Chip)`
  ${({ short }) =>
    short &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 1.75;
      width: auto;
    `}
`

export const Status = styled(Category)``

export const Assessment = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 100;
`

export const Meta = ({
  date,
  short,
  color,
  status,
  rating,
  category,
  shareUrl,
  shareTitle,
  onChangeRating,
  onClickByCategory
}) => (
  <Wrap>
    {date && (
      <DateRow>
        <DateIcon icon={'calendar'} size={'xs'} stroke={'var(--ghost-color-text)'} />
        <DateText
          text={date}
          options={{
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }}
        />
      </DateRow>
    )}

    {status && (
      <Tooltip place={'top'} text={status}>
        <Status
          short={short && status.length > 25}
          color={color || 'ghost'}
          appearance={'outlined'}
          size={'xs'}>
          {status}
        </Status>
      </Tooltip>
    )}

    {category && (
      <Tooltip place={'top'} text={category}>
        <Category
          size={'xs'}
          color={'ghost'}
          appearance={'outlined'}
          short={short && category.length > 25}
          onClick={onClickByCategory}>
          {category}
        </Category>
      </Tooltip>
    )}

    {shareTitle && (
      <ShareInSocial
        title={shareTitle}
        url={shareUrl}
      />
    )}

    {(rating || rating === 0) && (
      <Assessment>
        <Rating defaultValue={rating} onChange={onChangeRating} size={'xs'} readOnly />
      </Assessment>
    )}
  </Wrap>
)

export default Meta
