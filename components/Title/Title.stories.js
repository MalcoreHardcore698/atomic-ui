import React from 'react'
import { storiesOf } from '@storybook/react'

import Title from '.'

storiesOf('Components API/Data Display/Title', module).add('Default', () => {
  return (
    <React.Fragment>
      <Title>Headline 1</Title>
      <Title tag={'h2'}>Headline 1</Title>
      <Title tag={'h3'}>Headline 3</Title>
      <Title tag={'h4'}>Headline 4</Title>
      <Title tag={'h5'}>Headline 5</Title>
      <Title tag={'h6'}>Headline 6</Title>
    </React.Fragment>
  )
})
