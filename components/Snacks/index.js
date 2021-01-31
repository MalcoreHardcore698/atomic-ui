import React, { useState } from 'react'
import styled from 'styled-components'

import Column from '../Column'
import Snack from '../Snack'

export const Wrap = styled(Column)`
  position: fixed;
  left: calc(50% - 185px);
  bottom: 0;
  z-index: var(--z-override);
  padding: 25px;
  max-height: 768px;
  overflow-y: auto;
`

export const Snacks = ({ snacks, onRemove }) => {
  const [list, setList] = useState([])

  const onItemRemove = (item) => {
    if (onRemove) onRemove(item)
    setList((prev) => prev.filter((el) => el.id !== item.id))
  }

  return (
    <Wrap>
      {(snacks || list).map((item) => (
        <Snack
          key={item.id}
          type={item.type}
          message={item.message}
          onRemove={() => onItemRemove(item)}
        />
      ))}
    </Wrap>
  )
}

Snacks.defaultProps = {
  snacks: []
}

export default Snacks
