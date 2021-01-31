import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import Column from '../Column'
import Image from '../Image'
import Button from '../Button'
import Text from '../Text'
import Icon from '../Icon'

export const Wrap = styled(Column)`
  position: relative;
  padding: var(--default-gap);
`

export const Content = styled(Image)`
  border-radius: var(--surface-border-radius);
  max-height: 650px;
  object-fit: cover;
`

export const Navigation = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

export const Screenshot = ({ index, screenshot, screenshots, className, style, onClick }) => {
  const previousId = screenshots[index - 1]?.id || ''
  const nextId = screenshots[index + 1]?.id || ''

  return (
    <Wrap className={className} style={style}>
      <Content src={screenshot.path} alt={screenshot.filename} />

      {screenshots.length > 1 && (
        <Navigation>
          <Button
            disabled={index === 0}
            onClick={() => onClick && onClick(`/${previousId}`)}
            revert>
            <Icon
              icon={'arrowLeft'}
              stroke={index === 0 ? 'var(--ghost-color-text)' : 'var(--default-color-accent)'}
            />
          </Button>

          <Text>
            {index + 1} / {screenshots.length}
          </Text>

          <Button
            disabled={screenshots.length - 1 === index}
            onClick={() => onClick && onClick(`/${nextId}`)}
            revert>
            <Icon
              icon={'arrowRight'}
              stroke={
                screenshots.length - 1 === index
                  ? 'var(--ghost-color-text)'
                  : 'var(--default-color-accent)'
              }
            />
          </Button>
        </Navigation>
      )}
    </Wrap>
  )
}

export default Screenshot
