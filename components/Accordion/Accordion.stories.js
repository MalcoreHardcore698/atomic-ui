import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from '../Text'
import Divider from '../Divider'
import Accordion from '.'

storiesOf('Components API/Data Display/Accordion', module).add('Default', () => {
  return (
    <React.Fragment>
      <Accordion label={'Дополнительная информация'}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis rerum, ad
          reprehenderit eius enim alias quis magnam voluptas atque fugiat praesentium expedita aut
          eveniet vero mollitia corporis similique exercitationem consequuntur cumque assumenda sint
          sed sapiente. Quod corrupti labore cupiditate molestias provident repellat officia a
          mollitia expedita possimus, voluptatem vero quae commodi est odio, consequuntur
          voluptatibus dolor hic, esse sit dignissimos molestiae eaque? Eius.
        </Text>
      </Accordion>

      <Divider />

      <Accordion label={'Дополнительная информация'} appearance={'boxed'}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis rerum, ad
          reprehenderit eius enim alias quis magnam voluptas atque fugiat praesentium expedita aut
          eveniet vero mollitia corporis similique exercitationem consequuntur cumque assumenda sint
          sed sapiente. Quod corrupti labore cupiditate molestias provident repellat officia a
          mollitia expedita possimus, voluptatem vero quae commodi est odio, consequuntur
          voluptatibus dolor hic, esse sit dignissimos molestiae eaque? Eius.
        </Text>
      </Accordion>
    </React.Fragment>
  )
})
