import React, { useState } from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Input from '../Input'
import Button from '../Button'
import Icon from '../Icon'

export const Wrap = styled(Row)`
  width: 100%;
`

export const Search = ({ className, onSubmit, onClick, ...props }) => {
  const [value, setValue] = useState('')

  return (
    <Wrap className={className}>
      <Input
        type={'text'}
        placeholder={'Поиск'}
        {...props}
        value={value}
        readOnly={!!onClick}
        onClick={onClick && (() => onClick())}
        onChange={(e) => !onClick && setValue(e.target.value)}
      />
      <Button kind={'icon'} onClick={() => (onClick ? onClick : onSubmit(value))}>
        <Icon icon={'search'} stroke={'white'} />
      </Button>
    </Wrap>
  )
}

export default Search
