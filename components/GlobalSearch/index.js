import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Column from '../Column'
import Select from '../Select'
import Search from '../Search'
import Spinner from '../Spinner'

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
      <Search placeholder={'Поиск'} onSubmit={onSubmit} />

      {Array.isArray(result) &&
        result.map(
          (item) =>
            entity.render && (
              <React.Fragment key={item.id || item.email}>{entity.render(item)}</React.Fragment>
            )
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
