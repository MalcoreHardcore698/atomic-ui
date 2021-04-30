import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { v4 } from 'uuid'

import Row from '../Row'
import Column from '../Column'
import Button from '../Button'
import Tooltip from '../Tooltip'
import Divider from '../Divider'
import { Label } from '../Difinition'
import Input from '../Input'
import Alert from '../Alert'
import Text from '../Text'
import Icon from '../Icon'
import Title from '../Title'

const MAX_LIMIT_VALUE = 256
const MIN_LIMIT_VALUE = 0

export const Wrap = styled(Column)`
  grid-gap: 0;
`

export const Container = styled(Column)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  flex-grow: 1;
  grid-gap: 5px;
  margin-bottom: var(--default-gap);
`

export const List = styled(Column)`
  grid-gap: 5px 0;

  ${({ readOnly }) =>
    readOnly &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      padding: 2px;
      grid-gap: 15px;
    `}
`

export const InputLabel = styled(Text)`
  font-size: var(--font-size-s);
`

export const Item = styled(Row)`
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  grid-gap: 5px;
`

export const Header = styled(Row)`
  flex-grow: 1;
  grid-gap: 10px;

  label:first-child {
    flex-grow: 1;
  }

  label:last-child {
    flex-grow: 4;
  }

  ${({ readOnly }) =>
    readOnly &&
    css`
      flex-direction: column;
    `}
`

export const Actions = styled(Row)`
  align-items: center;
  grid-gap: 5px;

  button {
    width: 100%;
    flex-grow: 1;

    & > i {
      height: 100%;
      width: 100%;

      & > svg {
        transform: scale(0.35);
      }
    }
  }
`

export const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  span {
    white-space: nowrap;
  }

  @media only screen and (max-width: 996px) {
    width: 100%;
  }
`

export const Trunks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 5px;

  span {
    background: var(--default-color-accent);
    border-radius: var(--surface-border-radius);
    width: 4px;
    min-height: 16px;

    ${({ value }) =>
      value < 9 &&
      css`
        width: 12px;
        border-radius: 4px;
      `}
  }
`

export const Value = styled(Title)`
  font-weight: var(--font-weight-bold);
  line-height: 1;

  @media only screen and (max-width: 480px) {
    font-size: var(--font-size-l);
  }
`

const getValue = (val) => {
  const number = Number(val)
  if (number > MAX_LIMIT_VALUE) return MAX_LIMIT_VALUE
  if (number < MIN_LIMIT_VALUE) return MIN_LIMIT_VALUE
  return val
}

export const ListItem = ({ item, readOnly, divided, onEdit, onDelete }) => {
  return (
    <React.Fragment>
      <Item readOnly={readOnly}>
        <Header readOnly={readOnly}>
          {(readOnly && item.isVisualize && !isNaN(item.value)) ? (
            <Trunks value={item.value}>
              {new Array(Number(item.value)).fill(null).map((_, i) => <span key={i} />)}
            </Trunks>
          ) : null}

          {(readOnly && !item.isVisualize) ? (
            <Label>
              {item.name}
            </Label>
          ) : null}

          {readOnly ? (
            <Value tag={'h4'}>
              {item.value}
            </Value>
          ) : null}

          {!readOnly && (
            <Input
              type={'text'}
              defaultValue={item.value}
              appearance={'ghost'}
              placeholder={'Значение'}
              onChange={(e) =>
                onEdit && onEdit({
                  ...item,
                  value: getValue(e.target.value),
                  isVisualize: !isNaN(item.value)
                })
              }
            />
          )}
          {!readOnly && (
            <Input
              type={'text'}
              defaultValue={item.name}
              appearance={'ghost'}
              placeholder={'Введите название'}
              onChange={(e) => onEdit && onEdit({ ...item, name: e.target.value })}
            />
          )}
        </Header>

        {!readOnly && (
          <Actions>
            <Tooltip text={'Визуализировать (только цифры)'}>
              <Button
                size={'xs'}
                kind={'icon'}
                type={'button'}
                revert={!item.isVisualize}
                onClick={() =>
                  onEdit && onEdit({
                    ...item,
                    value: !isNaN(item.value) ? item.value : MIN_LIMIT_VALUE,
                    isVisualize: !item.isVisualize
                  })
                }>
                <Icon
                  size={'xs'}
                  icon={'graph'}
                  stroke={item.isVisualize ? 'white' : 'var(--default-color-accent)'}
                  fill={'var(--default-color-accent)'}
                />
              </Button>
            </Tooltip>
            {onDelete && (
              <Tooltip text={'Удалить'}>
                <Button
                  size={'xs'}
                  kind={'icon'}
                  type={'button'}
                  appearance={'ghost'}
                  stroke={'none'}
                  onClick={() => onDelete(item)}>
                  <Icon
                    icon={'delete'}
                    stroke={'none'}
                    fill={'var(--default-color-red)'}
                    size={'xs'}
                  />
                </Button>
              </Tooltip>
            )}
          </Actions>
        )}
      </Item>
      {!readOnly && divided && <Divider clear />}
    </React.Fragment>
  )
}

export const InteractiveList = ({ list, readOnly, onChange }) => {
  const onEdit = (edited) => {
    const mapped = (prev) => prev.map((item) => (item?.id === edited?.id ? edited : item))
    if (onChange) onChange(mapped)
  }

  const onDelete = (deleted) => {
    const filtered = (prev) => prev.filter((item) => item?.id !== deleted?.id)
    if (onChange) onChange(filtered)
  }

  return (
    <List readOnly={readOnly}>
      {(list || []).length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center', flexGrow: 1 }}>Пусто</Alert>
      )}
      {(list || []).map((item, index) => (
        <ListItem
          key={item?.id}
          item={item}
          readOnly={readOnly}
          divided={(list || []).length - 1 !== index}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </List>
  )
}

export const CharacteristicEditor = ({
  label,
  defaultValue,
  readOnly,
  onChange
}) => {
  const [characteristics, setCharacteristics] = useState(defaultValue || [])

  const onAdd = () => {
    const name = 'Новое учебное помещение'
    const item = { id: v4(), name, value: null, isVisualize: null }
    setCharacteristics((prev) => [...prev, item])
  }

  useEffect(() => {
    if (onChange) onChange(characteristics)
  }, [characteristics, onChange])

  useEffect(() => {
    setCharacteristics(defaultValue)
  }, [defaultValue])

  if (readOnly && characteristics.length === 0) {
    return null
  }

  return (
    <Wrap>
      <Container>
        {label && <InputLabel>{label}</InputLabel>}

        <InteractiveList
          list={characteristics}
          onChange={setCharacteristics}
          readOnly={readOnly}
        />

        {!readOnly && (
          <AddButton type={'button'} onClick={onAdd}>
            <span>Добавить</span>
            <Icon type={'button'} icon={'add'} stroke={'white'} />
          </AddButton>
        )}
      </Container>
    </Wrap>
  )
}

export default CharacteristicEditor
