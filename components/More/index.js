import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Text from '../Text'
import Button from '../Button'
import Icon from '../Icon'

export const Wrap = styled(Row)`
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const More = ({ text, withText, withButton, onClick }) => (
  <Wrap onClick={onClick}>
    {withText && <Text style={{ color: 'var(--default-color-accent)' }}>{text}</Text>}
    {withButton && (
      <Button kind={'icon'}>
        <Icon icon={'arrowRight'} stroke={'white'} />
      </Button>
    )}
  </Wrap>
)

More.defaultProps = {
  text: 'Подробнее',
  withText: true
}

export default More
