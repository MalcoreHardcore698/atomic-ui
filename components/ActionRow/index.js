import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Title from '../Title'
import Tooltip from '../Tooltip'
import Button from '../Button'
import Icon from '../Icon'
import Checkbox from '../Checkbox'

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

export const ActionRow = ({
  title,
  info,
  action,
  checkbox,
  labelChecked,
  disabledChecked,
  defaultChecked,
  rtlChecked,
  onChecked,
  onAdd
}) => (
  <Wrap>
    <Name>
      <Title tag={'h4'}>{title}</Title>
      {info && (
        <Tooltip text={info}>
          <InfoIcon size={'s'} icon={'infoCircle'} stroke={'black'} />
        </Tooltip>
      )}
    </Name>

    <Row style={{ gridGap: 5 }}>
      {checkbox && (
        <Checkbox
          label={labelChecked}
          disabled={disabledChecked}
          defaultChecked={defaultChecked}
          onChange={onChecked}
          rtl={rtlChecked}
        />
      )}
      {action && (
        <AddTooltip place={'left'} text={'Добавить'}>
          <Button type={'button'} kind={'icon'} size={'xs'} onClick={onAdd}>
            <Icon size={'xs'} icon={'add'} stroke={'white'} />
          </Button>
        </AddTooltip>
      )}
    </Row>
  </Wrap>
)

export default ActionRow
