import React from 'react'
import styled, { css } from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Avatar from '../Avatar'
import Button from '../Button'
import Title from '../Title'
import Icon from '../Icon'
import Text from '../Text'
import Meta from '../Meta'

export const Wrap = styled(Row)`
  align-items: center;
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

export const CircleIcon = styled(Icon)`
  width: var(--input-height-m);
  height: var(--input-height-m);
  min-width: var(--input-height-m);
  min-height: var(--input-height-m);
  background: var(--default-color-accent);
  border-radius: 50%;
`

export const Content = styled(Column)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  grid-gap: 0;
`

export const Header = styled(Row)`
  justify-content: space-between;
  width: 100%;

  h4 {
    font-size: var(--font-size-l);
  }
`

export const Body = styled(Row)`
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 480px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`

export const Actions = styled(Row)`
  grid-gap: 10px;
`

export const Notice = ({ img, icon, title, message, date, onClick, onAccept, onReject }) => (
  <Wrap onClick={onClick}>
    {img && !icon && <Avatar src={img} />}
    {!img && icon && <CircleIcon icon={icon} stroke={'white'} />}

    <Content>
      <Header>
        <Title tag={'h4'}>{title}</Title>
        <Meta date={date} />
      </Header>

      <Body>
        <Text>{message}</Text>
        {(onAccept || onReject) && (
          <Actions>
            {onAccept && (
              <Button type={'button'} size={'s'} onClick={onAccept}>
                Принять
              </Button>
            )}
            {onReject && (
              <Button type={'button'} appearance={'red'} size={'s'} onClick={onReject}>
                Отклонить
              </Button>
            )}
          </Actions>
        )}
      </Body>
    </Content>
  </Wrap>
)

export default Notice
