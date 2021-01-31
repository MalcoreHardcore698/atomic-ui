import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Title from '../Title'
import Tooltip from '../Tooltip'
import Button from '../Button'
import Icon from '../Icon'

export const Wrap = styled(Row)`
  justify-content: space-between;
`

export const InfoIcon = styled(Icon)`
  opacity: 0.25;
  cursor: pointer;
  transition: opacity 450ms ease;

  &:hover {
    opacity: 0.65;
  }
`

export const AddTooltip = styled(Tooltip)`
  flex-grow: initial;
`

export const Name = styled(Row)`
  grid-gap: 5px;
`

export const ActionRow = ({ title, info, action, onAdd }) => (
  <Wrap>
    <Name>
      <Title tag={'h4'}>{title}</Title>
      {info && (
        <Tooltip text={info}>
          <InfoIcon size={'s'} icon={'infoCircle'} stroke={'black'} />
        </Tooltip>
      )}
    </Name>
    {action && (
      <AddTooltip place={'left'} text={'Добавить'}>
        <Button type={'button'} kind={'icon'} size={'xs'} onClick={onAdd}>
          <Icon size={'xs'} icon={'add'} stroke={'white'} />
        </Button>
      </AddTooltip>
    )}
  </Wrap>
)

export default ActionRow
