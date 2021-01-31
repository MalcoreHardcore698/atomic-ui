import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Row from '../Row'
import Grid from '../Grid'
import Text from '../Text'
import Icon, { library } from '.'

const IconBlock = styled(Row)`
  display: grid;
  grid-template-columns: 64px 1fr;
  justify-content: center;
  align-content: center;

  padding: var(--default-gap) 0;
  background: var(--surface-background);
  border: var(--surface-border);
  border-radius: var(--surface-border-radius);
  box-shadow: var(--surface-shadow);

  color: var(--default-color-text);
  cursor: pointer;
  transition: color 150ms ease;

  svg {
    path,
    circle {
      transition: stroke 150ms ease;
    }
  }

  &:hover {
    color: black;

    svg {
      path,
      circle {
        stroke: black;
      }
    }
  }
`

export const Name = styled(Text)`
  color: inherit;
`

storiesOf('Components API/Data Display/Icon', module).add('Default', () => {
  return (
    <Grid percentage={'minmax(196px, 1fr)'}>
      {Object.keys(library).map((key) => (
        <IconBlock key={key}>
          <Icon icon={key} size={'s'} stroke={'var(--default-color-text)'} />
          <Name>{key}</Name>
        </IconBlock>
      ))}
    </Grid>
  )
})
