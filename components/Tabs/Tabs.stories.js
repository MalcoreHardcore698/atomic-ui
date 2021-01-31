import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from '../Text'
import Tabs, { Tab } from '.'

storiesOf('Components API/Navigation/Tabs', module).add('Default', () => {
  return (
    <Tabs label={'Название таба'}>
      <Tab label={'Вкладка 1'}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odio ipsa tenetur, fugit
          eum a magnam totam maiores saepe distinctio laudantium. Nemo reiciendis nam animi deleniti
          temporibus ipsum nihil voluptate, tempora, unde praesentium, odio delectus
        </Text>
      </Tab>
      <Tab label={'Вкладка 2'}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus recusandae amet minus sit.
          Itaque, dicta soluta corporis deleniti minus, reiciendis quaerat, aspernatur iure eligendi
          quasi voluptate temporibus fugiat eaque quae enim omnis numquam. Rerum quasi modi animi
          nisi labore iusto dignissimos vel dolor architecto blanditiis.
        </Text>
      </Tab>
      <Tab label={'Вкладка 3'}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque fuga nobis sunt
          inventore. Voluptatibus.
        </Text>
      </Tab>
    </Tabs>
  )
})
