import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Column from '../Column'
import Select from '../Select'
import Search from '../Search'
import Spinner from '../Spinner'
import Alert from '../Alert'

export const Wrap = styled(Column)`
  padding: var(--default-gap);
`

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  flex-grow: 1;
`

/*
 * const entities: entity[]
 * type entity = {
 *  label: string;
 *  value: ObjectID | string;
 *  render: ReactNode | Element | string;
 * }
 */

export const GlobalSearch = ({
  result,
  search,
  loading,
  entities,
  initialEntity,
  appearance,
  style,
  className,
  onChange,
  onSubmit
}) => {
  const [entity, setEntity] = useState(initialEntity)

  const renderContent = () => (
    <React.Fragment>
      <Search
        appearance={'ghost'}
        placeholder={'Поиск'}
        defaultValue={search}
        onSubmit={onSubmit}
      />

      {result?.length > 0 ?
        result.map(
          (item) =>
            entity.render && (
              <React.Fragment key={item.id || item.email}>{entity.render(item)}</React.Fragment>
            )
        ) : (
          <Alert style={{ width: '100%', textAlign: 'center', flexGrow: 1 }}>
            Ничего не найдено
          </Alert>
        )}
    </React.Fragment>
  )

  useEffect(() => {
    if (onChange) onChange(entity)
  }, [entity, onChange])

  return (
    <Wrap style={style} className={className} appearance={appearance}>
      <Select
        appearance={'ghost'}
        defaultValue={entity}
        placeholder={'Где будем искать?'}
        label={'Зона поиска'}
        options={entities}
        onChange={setEntity}
        isLoading={loading}
        isSearchable
        isClearable
      />

      {!loading && entity && renderContent()}

      {loading && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </Wrap>
  )
}

GlobalSearch.defaultProps = {
  appearance: 'clear'
}

export default GlobalSearch
