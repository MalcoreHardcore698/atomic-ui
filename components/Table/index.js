import React, { useState, useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Row from '../Row'
import Column from '../Column'
import Icon from '../Icon'
import Button from '../Button'
import Switch from '../Switch'
import Difinition from '../Difinition'
import Checkbox from '../Checkbox'
import Tooltip, { Wrap as TooltipWrap } from '../Tooltip'
import Popper from '../Popper'

export const Wrap = styled(Column)``

export const Manage = styled(Row)`
  display: grid;
  grid-template-columns: 36px 1fr 70px;
`

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

export const Header = styled(Row)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  color: #959595;

  &:last-child {
    justify-content: flex-end;
  }
`

export const Track = styled(Row)`
  transition: opacity 150ms ease;

  ${({ checked }) =>
    checked &&
    css`
      opacity: 0.45;
    `}
`

export const Content = styled(Row)`
  padding: 5px 15px;
  width: calc(100% - 85px);

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
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 5px;
  grid-gap: 5px;

  button {
    width: 100%;
    flex-grow: 1;
  }

  ${TooltipWrap} {
    width: 100%;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      flex-direction: row;
    `}

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

export const FieldsPopper = styled(Popper)`
  display: flex;
  align-items: center;

  & > div {
    display: flex;
  }
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
  justify-content: flex-end;
  align-items: center;
`

export const getIsAdmin = (document) => document.name?.toUpperCase() === 'ADMIN'

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
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [documents, setDocuments] = useState(
    (data || []).map((item) => ({
      ...item,
      id: item.id || v4(),
      checked: false
    }))
  )
  const buttonDeleteDisabled = useMemo(() => !documents.find((item) => item.checked), [documents])
  const defaultWidth = `${Math.floor(100 / template.length)}%`

  const headers = useMemo(
    () =>
      (template || []).map((item) => ({
        value: v4(),
        label: item.header,
        tooltip: item.tooltip || `Сортировка по «${item.header}»`,
        visible: !item.hidden
      })),
    []
  )

  const handleChecked = (document) => {
    setDocuments((prev) => {
      const isExists = (item) => item.id === document.id
      const candidate = prev.find(isExists)
      if (candidate) {
        return prev.map((item) =>
          isExists(item)
            ? {
                ...document,
                checked: !item.checked
              }
            : {
                ...item,
                checked: isAllChecked || item.checked
              }
        )
      } else {
        return [...prev, { ...document, checked: true }]
      }
    })
    setIsAllChecked(false)
  }

  const handleAllChecked = () => {
    const value = !isAllChecked
    setDocuments((prev) =>
      prev.map((item) => ({
        ...item,
        checked: !getIsAdmin(item) ? value : false
      }))
    )
    setIsAllChecked(value)
  }

  useEffect(() => {
    const countChecked = documents.reduce((acc, curr) => acc + (curr.checked ? 1 : 0), 0)
    if (documents.length > 0 && countChecked === documents.length) {
      setIsAllChecked(true)
    }
  }, [documents])

  return (
    <Wrap className={className} style={style}>
      <Manage>
        <CheckboxTooltip text={'Отметить все'} self>
          {onChecked && <Checkbox size={'s'} checked={isAllChecked} onChange={handleAllChecked} />}
        </CheckboxTooltip>

        <Headers
          defaultValue={headers[0]}
          options={headers.filter((h) => h.visible)}
          first={onChecked}
          stretch
        />

        <Actions appearance={appearance} horizontal>
          <Tooltip text={'Удаление выделенного'} place={'left'}>
            <Button
              size={'xs'}
              kind={'icon'}
              appearance={buttonDeleteDisabled ? 'ghost' : 'red'}
              disabled={buttonDeleteDisabled}
              onClick={() => onDelete(documents.filter((document) => document.checked))}>
              <Icon
                icon={'delete'}
                size={'xs'}
                stroke={buttonDeleteDisabled ? 'var(--ghost-color-text)' : 'white'}
              />
            </Button>
          </Tooltip>

          <FieldsPopper
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
              <Button size={'xs'} kind={'icon'}>
                <Icon icon={'show'} size={'xs'} stroke={'white'} />
              </Button>
            </Tooltip>
          </FieldsPopper>
        </Actions>
      </Manage>

      {documents.map((document, index) => (
        <Track key={index} checked={document.checked}>
          <Content appearance={appearance}>
            <CheckboxTooltip text={'Отметить документ'} self>
              {onChecked && (
                <Checkbox
                  size={'s'}
                  checked={!getIsAdmin(document) && (isAllChecked || document.checked)}
                  onChange={!getIsAdmin(document) && (() => handleChecked(document))}
                />
              )}
            </CheckboxTooltip>

            <Container onClick={() => onClick(document)}>
              {template.map((cell, index) =>
                headers[index].visible
                  ? React.cloneElement(cell.content(document), {
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
                  <Button
                    size={'xs'}
                    kind={'icon'}
                    disabled={getIsAdmin(document) || document.checked}
                    onClick={() => onEdit(document)}>
                    <Icon
                      icon={'edit'}
                      size={'xs'}
                      stroke={'white'}
                      fill={
                        getIsAdmin(document) || document.checked
                          ? 'var(--ghost-color-text)'
                          : 'var(--default-color-accent)'
                      }
                    />
                  </Button>
                </Tooltip>
              )}
              {onDelete && (
                <Tooltip text={'Удаление'} place={'left'}>
                  <Button
                    size={'xs'}
                    kind={'icon'}
                    appearance={'red'}
                    disabled={getIsAdmin(document) || document.checked}
                    onClick={() => onDelete(document)}>
                    <Icon
                      icon={'delete'}
                      size={'xs'}
                      stroke={'white'}
                      fill={
                        getIsAdmin(document) || document.checked
                          ? 'var(--ghost-color-text)'
                          : 'var(--default-color-red)'
                      }
                    />
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
