import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Avatar from '../Avatar'
import Title from '../Title'
import Text from '../Text'
import Rating from '../Rating'
import Badge from '../Badge'

export const Wrap = styled(Row)`
  align-items: center;
  width: 100%;
  transition: opacity 150ms ease;

  ${({ onClick }) => (onClick) && css`
    cursor: pointer;

    &:hover {
      opacity: .65;
    }
  `}
`

export const Content = styled(Column)`
  position: relative;
  grid-gap: 5px;
  width: 100%;
`

export const NameRow = styled(Row)`
  justify-content: space-between;
  transition: opacity 150ms ease;

  ${({ onClick }) => (onClick) && css`
    cursor: pointer;

    &:hover {
      opacity: .65;
    }
  `}
`

export const Name = styled(Title)`
  line-height: 1;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 15px;
`

export const Position = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 15px;
`

export const Counter = styled(Badge)`
  position: absolute;
  top: 10px;
  right: 0;
`

export const Member = ({
  name,
  avatar,
  budge,
  position,
  rating,
  className,
  style,
  onLink,
  onClick
}) => (
  <Wrap className={className} style={style} onClick={onClick}>
    {(avatar) && <Avatar src={avatar} alt={'Avatar'} />}

    <Content>
      <NameRow onClick={onLink}>
        <Name tag={'h5'}>{name}</Name>
        {(rating) && <Rating defaultValue={rating} size={'xs'} readOnly />}
      </NameRow>
      <Position>{position}</Position>
      {(budge) && <Counter count={budge} />}
    </Content>
  </Wrap>
)

export default Member
