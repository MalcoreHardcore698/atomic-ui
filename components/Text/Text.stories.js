import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from '.'

storiesOf('Components API/Data Display/Text', module).add('Default', () => {
  return (
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio ipsa tenetur, fugit eum
      a magnam totam maiores saepe distinctio laudantium. Nemo reiciendis nam animi deleniti
      temporibus ipsum nihil voluptate, tempora, unde praesentium, odio delectus.
    </Text>
  )
})
