import React from 'react'
import { storiesOf } from '@storybook/react'

import Column from '../Column'
import Button from '../Button'
import Text from '../Text'
import Menu from '../Menu'
import Popper from '.'

storiesOf('Components API/Data Display/Popper', module).add('Default', () => {
  return (
    <Column style={{ width: 320 }}>
      <Popper
        place={'bottom'}
        offset={{ right: 68 }}
        body={<Menu key={'menu'} />}
        appearance={'clear'}>
        <Button>Open Menu</Button>
      </Popper>

      <Popper place={'right'} body={<Text key={'text'}>Popper Text</Text>} appearance={'tooltip'}>
        <Button>Open Text</Button>
      </Popper>
    </Column>
  )
})
