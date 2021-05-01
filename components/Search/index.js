import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Input from '../Input'
import Button from '../Button'
import Icon from '../Icon'

export const Wrap = styled(Row)`
  width: 100%;
`

export const Search = React.forwardRef(({ className, defaultValue, onSubmit, onClick, ...props }, ref) => {
  const [value, setValue] = useState(defaultValue || '')

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  return (
    <Wrap className={className}>
      <Input
        type={'text'}
        placeholder={'Поиск'}
        {...props}
        ref={ref}
        readOnly={!!onClick}
        defaultValue={defaultValue}
        onClick={onClick && (() => onClick())}
        onChange={(e) => !onClick && setValue(e.target.value)}
        onKeyDown={(e) => !onClick && e.key === 'Enter' && onSubmit(value)}
      />
      <Button kind={'icon'} onClick={() => (onClick ? onClick : onSubmit(value))}>
        <Icon icon={'search'} stroke={'white'} />
      </Button>
    </Wrap>
  )
})

export default Search
