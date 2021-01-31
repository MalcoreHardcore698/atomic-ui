import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Row from '../Row'
import Column from '../Column'
import Icon from '../Icon'
import Button from '../Button'
import Switch from '../Switch'
import Difinition from '../Difinition'
import Checkbox from '../Checkbox'
import Tooltip from '../Tooltip'
import Popper from '../Popper'

export const Wrap = styled(Column)``

export const Manage = styled(Row)``

export const Headers = styled(Switch)`
  ${({ width }) =>
    width &&
    css`
      span {
        width: ${width};
      }
    `}

  ${({ first, width }) =>
    first &&
    width &&
    css`
      span:first-child {
        width: calc(${width} + 45px);
      }
    `}
`

export const Track = styled(Row)``

export const Content = styled(Row)`
  padding: 5px 15px;
  width: calc(100% - 55px);

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
    `}

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(var(--input-height-m) - 15px);
    margin-left: 5px;

    & > span {
      margin: 0;
    }
  }
`

export const Container = styled(Row)`
  width: 100%;

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
`

export const Actions = styled(Column)`
  padding: 5px;
  width: var(--input-height-m);
  grid-gap: 5px;

  button {
    width: 100%;
    flex-grow: 1;
  }

  ${({ appearance }) =>
    appearance === 'default' &&
    css`
      border: 1px solid var(--surface-border);
      background: var(--surface-background);
      box-shadow: 1px solid var(--surface-shadow);
      border-radius: var(--surface-border-radius);
    `}

  ${({ appearance }) =>
    appearance === 'clear' &&
    css`
      border: none;
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    `}
`

export const Cell = styled(Difinition)`
  align-items: center;
  flex-grow: 1;

  width: ${({ width }) => width};
  overflow: hidden;

  & > div {
    width: 100%;
  }

  h4 {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const HeaderList = styled(Column)`
  border: 1px solid var(--surface-border);
  background: var(--surface-background);
  box-shadow: var(--surface-shadow);
  border-radius: var(--surface-border-radius);
  padding: 10px;
  grid-gap: 10px;
`

export const CheckboxTooltip = styled(Tooltip)`
  display: flex;
  align-items: center;
`

export const Table = ({
  data,
  template,
  className,
  style,
  appearance,
  onClick,
  onChecked,
  onDelete,
  onEdit
}) => {
  const defaultWidth = `${Math.floor(100 / template.length)}%`
  /* eslint-disable-next-line */
  const [headers, setHeaders] = useState(
    (template || []).map((item) => ({
      value: v4(),
      label: item.header,
      width: item.width || defaultWidth,
      tooltip: item.tooltip || `Сортировка по «${item.header}‎»`,
      visible: !item.hidden
    }))
  )
  /* eslint-disable-next-line */
  const [header, setHeader] = useState(headers[0] || null)

  return (
    <Wrap className={className} style={style}>
      <Manage>
        <Headers
          defaultValue={headers[0]}
          options={headers.filter((h) => h.visible)}
          onChange={(item) => setHeader(item)}
          first={onChecked}
          stretch
        />

        <Popper
          place={'left'}
          offset={{ bottom: 80 }}
          body={
            <HeaderList>
              {headers.map((header, index) => (
                <Checkbox key={index} size={'s'} label={header.label} checked={header.visible} />
              ))}
            </HeaderList>
          }
          appearance={'clear'}>
          <Tooltip text={'Отображение полей'} place={'left'}>
            <Button kind={'icon'}>
              <Icon icon={'show'} stroke={'white'} />
            </Button>
          </Tooltip>
        </Popper>
      </Manage>

      {data.map((item, index) => (
        <Track key={index}>
          <Content appearance={appearance}>
            <CheckboxTooltip text={'Отметить документ'} self>
              {onChecked && <Checkbox size={'s'} />}
            </CheckboxTooltip>
            <Container onClick={() => onClick(item)}>
              {template.map((cell, index) =>
                headers[index].visible
                  ? React.cloneElement(cell.content(item), {
                      key: index,
                      label: cell.header,
                      width: cell?.width || defaultWidth
                    })
                  : null
              )}
            </Container>
          </Content>

          {(onEdit || onDelete) && (
            <Actions appearance={appearance}>
              {onEdit && (
                <Tooltip text={'Редактирование'} place={'left'}>
                  <Button size={'xs'} kind={'icon'} onClick={() => onEdit(item)}>
                    <Icon icon={'edit'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
              )}
              {onDelete && (
                <Tooltip text={'Удаление'} place={'left'}>
                  <Button
                    size={'xs'}
                    kind={'icon'}
                    appearance={'red'}
                    onClick={() => onDelete(item)}>
                    <Icon icon={'delete'} size={'xs'} stroke={'white'} />
                  </Button>
                </Tooltip>
              )}
            </Actions>
          )}
        </Track>
      ))}
    </Wrap>
  )
}

Table.defaultProps = {
  appearance: 'default'
}

export default Table
