import React from 'react'
import { storiesOf } from '@storybook/react'

import ShareInSocial from '.'

storiesOf('Components API/Inputs/ShareInSocial', module).add('Default', () => {
  return (
    <div>
      <ShareInSocial
        title="Test quote"
        url="http://atomic.ru.com/?project=NjAxNDkzMjI4YjBiMzA5NDQ0ODNjNWFh"
      />
    </div>
  )
})
